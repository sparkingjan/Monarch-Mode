const {test}=require('node:test');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
const path=require('node:path');
const code=fs.readFileSync(path.join(__dirname,'../frontend/app.js'),'utf8');
function fixture(date='2026-10-08') {
  const storage=new Map();
  const context=vm.createContext({setTimeout,clearTimeout,setInterval,clearInterval,
    localStorage:{getItem:key=>storage.get(key)||null,setItem:(key,val)=>storage.set(key,val),removeItem:key=>storage.delete(key)}});
  vm.runInContext(code,context);
  const app=context.soloLevelingApp();
  let day=date;
  app.todayDateKey=()=>day;
  app.accountReady=true;
  app.save=()=>{};
  app.log=()=>{};
  app.triggerStatGainFx=()=>{};
  app.syncNativeQuestReminder=async()=>{};
  app.ensureProfileStats();app.ensureMetaDefaults();app.applyDailyResets();
  return {app,advance:value=>{day=value;app.applyDailyResets();}};
}
function finish(app) { [...app.quests].forEach(quest=>app.completeQuest(quest.id)); }

test('account age does not select a later session or change workload',()=>{
  const {app}=fixture();
  app.setAccountQuestAnchor('2020-01-01');app.syncDailyQuestRotation();
  assert.equal(app.meta.protocolDay,1);
  assert.equal(app.quests.length,3);
  assert.equal(app.meta.trainingExperience,'beginner');
  const notes=app.quests.map(q=>app.questNoteForDisplay(q));
  app.evaluateBiweeklyLoadProgress('2030-10-08');
  assert.deepEqual(app.quests.map(q=>app.questNoteForDisplay(q)),notes);
});
test('completion advances exactly once, on a later date, including after a long absence',()=>{
  const {app,advance}=fixture();finish(app);
  const xp=app.profile.xp;finish(app);app.applyDailyResets();
  assert.equal(app.profile.xp,xp);assert.equal(app.meta.protocolDay,1);
  advance('2026-10-09');assert.equal(app.meta.protocolDay,2);
  app.applyDailyResets();assert.equal(app.meta.protocolDay,2);
  finish(app);advance('2026-11-09');assert.equal(app.meta.protocolDay,3);
  assert.equal(app.meta.survivalStreak,0);
});
test('missed and partial sessions keep earned XP and resume the same routine slot',()=>{
  const {app,advance}=fixture();app.completeQuest(app.quests[0].id);
  const xp=app.profile.xp;advance('2026-10-18');
  assert.equal(app.profile.xp,xp);assert.equal(app.meta.protocolDay,1);
  assert.equal(app.quests.filter(q=>q.done).length,0);
  assert.equal(app.meta.fatigueDebuffActive,false);
  assert.equal(app.hiddenQuest.active,false);
});
test('planned rest preserves completed work and streak, blocks extra same-day claims',()=>{
  const {app,advance}=fixture();finish(app);advance('2026-10-09');
  app.completeQuest(app.quests[0].id);const xp=app.profile.xp;
  app.confirmAbandonMission();finish(app);
  assert.equal(app.profile.xp,xp);advance('2026-10-10');
  assert.equal(app.meta.protocolDay,2);assert.equal(app.meta.survivalStreak,1);
  assert.ok(!app.quests.some(q=>q.done));
});
test('personal settings are bounded, persist in game state, and lock after first task',()=>{
  const {app}=fixture();
  app.updateTrainingSetting('trainingExperience','regular');
  app.updateTrainingSetting('sessionMinutes','25');
  assert.match(app.questNoteForDisplay(app.quests[0]),/1 × 8–12 reps/);
  app.selectDailyMode('extreme');assert.equal(app.quests.length,4);
  app.completeQuest(app.quests[0].id);
  app.updateTrainingSetting('sessionMinutes','40');app.selectDailyMode('normal');
  assert.equal(app.meta.sessionMinutes,25);assert.equal(app.meta.dailyMode,'extreme');
  assert.equal(app.localGameStatePayload().meta.trainingExperience,'regular');
  assert.equal(app.quests.length,4);
});

test('location changes exercises immediately and cannot change a started workout',()=>{
  const {app}=fixture();
  app.updateTrainingSetting('trainingLocation','gym');
  assert.deepEqual(Array.from(app.quests,q=>q.title),['Leg press','Machine chest press','Seated cable row']);
  app.updateTrainingSetting('trainingLocation','home');
  assert.match(app.quests[0].title,/Dumbbell/);
  assert.equal(app.quests[2].prescription.perSide,true);
  app.updateTrainingSetting('trainingLocation','bodyweight');
  assert.ok(app.quests.every(q=>! /dumbbell|machine|cable|barbell/i.test(q.title)));
  const before=JSON.stringify(app.quests);
  app.updateTrainingSetting('trainingLocation','invalid');
  app.updateTrainingSetting('sessionMinutes',999);
  assert.equal(JSON.stringify(app.quests),before);
  app.completeQuest(app.quests[0].id);
  const started=JSON.stringify(app.quests), xp=app.profile.xp;
  app.updateTrainingSetting('trainingLocation','gym');app.selectDailyMode('extreme');
  assert.equal(JSON.stringify(app.quests),started);assert.equal(app.profile.xp,xp);
});

test('mode changes volume and conditioning while recovery stays unchanged',()=>{
  const {app}=fixture();
  app.updateTrainingSetting('trainingLocation','gym');app.updateTrainingSetting('sessionMinutes',30);
  const totalSets=()=>app.quests.reduce((sum,q)=>sum+q.prescription.sets,0);
  app.selectDailyMode('normal');const easy=totalSets();
  app.selectDailyMode('extreme');assert.ok(totalSets()>easy);
  assert.equal(app.quests[0].prescription.reserve,3); // Beginners retain more margin.
  app.meta.protocolDay=2;app.selectDailyMode('normal');
  const cardio=app.quests[0].note;
  app.selectDailyMode('extreme');assert.notEqual(app.quests[0].note,cardio);
  assert.match(app.quests[0].note,/30s brisk with 60s easy/);
  app.meta.protocolDay=4;app.selectDailyMode('normal');const rest=JSON.stringify(app.quests);
  app.selectDailyMode('extreme');assert.equal(JSON.stringify(app.quests),rest);
});

test('all equipment, experience, time and mode combinations fit the strength time budget',()=>{
  const {app}=fixture();
  for(const location of ['gym','home','bodyweight']) for(const experience of ['beginner','regular','experienced']) {
    for(const minutes of [15,20,25,30,40]) for(const day of [1,3,5]) {
      Object.assign(app.meta,{trainingLocation:location,trainingExperience:experience,sessionMinutes:minutes});
      let previousSets=0;
      for(const mode of ['normal','hard','extreme']) {
        app.meta.dailyMode=mode;
        const quests=app.buildProtocolQuests(day);
        const seconds=240+quests.reduce((sum,q)=>sum+q.prescription.sets*q.prescription.workSeconds+(q.prescription.sets-1)*q.prescription.restSeconds+45,0);
        const sets=quests.reduce((sum,q)=>sum+q.prescription.sets,0);
        assert.ok(seconds<=minutes*60,`${location}/${experience}/${minutes}/${day}/${mode}`);
        assert.ok(sets>=previousSets);previousSets=sets;
        assert.equal(quests.reduce((sum,q)=>sum+q.xp,0),540);
        assert.ok(quests.every(q=>q.prescription.sets>=1 && q.prescription.sets<=4));
        assert.equal(new Set(quests.map(q=>q.id)).size,quests.length);
      }
    }
  }
});

test('workout upgrade preserves partial legacy work and earned XP until the next day',()=>{
  const {app,advance}=fixture();
  app.quests=app.weeklyProtocols[0].tasks.map((q,i)=>({...q,id:101+i,done:i===0,earnedXp:i===0?180:undefined}));
  app.profile.xp=1234;const saved=JSON.stringify(app.quests);
  app.ensureTrainingSettings();assert.equal(JSON.stringify(app.quests),saved);assert.equal(app.profile.xp,1234);
  advance('2026-10-09');assert.ok(app.quests.every(q=>q.trainingVersion===3 && !q.done));
  assert.equal(app.profile.xp,1234);assert.equal(app.meta.protocolDay,1);
});

test('equipment, effort and prescription survive saved-state round trip and day rollover',async()=>{
  const {app,advance}=fixture();
  app.updateTrainingSetting('trainingLocation','gym');app.updateTrainingSetting('sessionMinutes',30);app.selectDailyMode('extreme');
  const saved=JSON.parse(JSON.stringify(app.localGameStatePayload()));
  const {app:restored}=fixture();restored.accountReady=false;restored.scheduleBackendSync=()=>{};
  restored.backendRequest=async()=>({json:async()=>({xp:0,game_state:saved,game_state_updated_at:'2026-10-08T00:00:00Z'})});
  await restored.syncFromBackend();
  assert.equal(restored.meta.trainingLocation,'gym');assert.equal(restored.meta.dailyMode,'extreme');
  assert.equal(JSON.stringify(restored.quests),JSON.stringify(app.quests));
  finish(app);advance('2026-10-09');
  assert.equal(app.meta.trainingLocation,'gym');assert.equal(app.meta.dailyMode,'extreme');
  assert.match(app.quests[0].title,/intervals/);
});
test('calendar arithmetic handles DST, leap days, and Monday weeks over New Year',()=>{
  const {app}=fixture();
  assert.equal(app.daysBetweenDateKeys('2026-03-08','2026-03-09'),1);
  assert.equal(app.daysBetweenDateKeys('2028-02-28','2028-03-01'),2);
  assert.equal(app.currentWeekKey('2027-01-01'),'2026-12-28');
  assert.equal(app.currentWeekKey('2027-01-04'),'2027-01-04');
});
test('weekly bonus derives completion from recorded sessions, resets on Monday and cannot double claim',()=>{
  const {app}=fixture('2026-10-11');
  app.meta.trainingSessions={'2026-10-06':{completed:true,type:'strength'},'2026-10-08':{completed:true,type:'movement'},'2026-10-10':{completed:true,type:'recovery'}};
  app.syncRaidTasksWithDungeon();assert.equal(app.canEnterDungeonRaid(),true);
  assert.equal(app.raidTasks[0].done,true);assert.equal(app.raidTasks[1].done,true);
  const xp=app.profile.xp;app.claimRaidBonus();assert.equal(app.profile.xp,xp);
  app.toggleRaid(3);app.claimRaidBonus();assert.equal(app.profile.xp,xp+300);
  app.claimRaidBonus();assert.equal(app.profile.xp,xp+300);
  app.todayDateKey=()=> '2026-10-12';app.applyDailyResets();
  assert.equal(app.canEnterDungeonRaid(),false);assert.equal(app.raidTasks[0].done,false);assert.equal(app.raidTasks[2].done,false);
});
test('legacy migration preserves XP and does not allow a second reward for an already-cleared day',()=>{
  const {app}=fixture();app.profile.xp=12345;app.meta.questRulesVersion=1;
  app.meta.protocolDay=6;app.meta.lastFullClearBonusDate=app.todayDateKey();
  app.ensureTrainingSettings();finish(app);
  assert.equal(app.profile.xp,12345);assert.equal(app.meta.protocolDay,1);
  assert.equal(app.allDailyQuestsComplete(),true);
});

test('moving the clock backwards cannot replay quests or weekly rewards',()=>{
  const {app,advance}=fixture();finish(app);advance('2026-10-09');
  const xp=app.profile.xp;
  advance('2026-10-08');finish(app);app.confirmAbandonMission();app.claimRaidBonus();
  assert.equal(app.profile.xp,xp);
  assert.equal(app.meta.lastDailyResetDate,'2026-10-09');
  assert.equal(app.meta.sessionRestDay,null);
});

test('rest days silence incomplete-session reminders',()=>{
  const {app}=fixture();app.isNativeApp=()=>true;app.timeUntilDailyResetMs=()=>1000;
  assert.equal(app.shouldSendIncompleteQuestReminder(),true);
  app.confirmAbandonMission();
  assert.equal(app.shouldSendIncompleteQuestReminder(),false);
  assert.equal(app.shouldMaintainNativeQuestReminder(),false);
  app.rollSystemNotification();assert.equal(app.activeSystemNotification,null);
});

test('a fresh account recovering from a failed fetch accepts server progress over default timestamps',async()=>{
  const {app}=fixture();app.accountReady=false;app.meta.gameStateUpdatedAt='2030-01-01T00:00:00Z';
  app.scheduleBackendSync=()=>{};
  app.backendRequest=async()=>null;
  await app.syncFromBackend();assert.equal(app.accountReady,false);
  const state=JSON.parse(JSON.stringify(app.localGameStatePayload()));
  state.meta.protocolDay=3;state.quests=app.buildProtocolQuests(3);
  app.backendRequest=async()=>({json:async()=>({xp:1234,game_state:state,game_state_updated_at:'2026-10-08T00:00:00Z'})});
  await app.syncFromBackend();
  assert.equal(app.accountReady,true);assert.equal(app.profile.xp,1234);assert.equal(app.meta.protocolDay,3);
});

test('legacy server quests still migrate after an offline boot initialized new defaults',async()=>{
  const {app}=fixture();app.accountReady=false;app.scheduleBackendSync=()=>{};
  app.backendRequest=async()=>({json:async()=>({xp:8765,game_state_updated_at:'2026-10-08T00:00:00Z',game_state:{
    meta:{protocolDay:6,lastDailyResetDate:app.todayDateKey(),questRotationDate:app.todayDateKey()},
    quests:[{id:601,key:'boss_pushups',title:'Old boss challenge',xp:900,done:false}]
  }})});
  await app.syncFromBackend();
  assert.equal(app.meta.protocolDay,1);assert.equal(app.quests.length,3);
  assert.equal(app.profile.xp,8765);assert.ok(!app.quests.some(q=>q.key==='boss_pushups'));
});

test('nutrition history retains daily records when migrating old week buckets to Mondays',()=>{
  const {app}=fixture();
  app.meta.weeklyNutritionHistory={'2026-W40':{days:{'2026-10-05':{proteinPercent:70}}},'2026-W41':{days:{'2026-10-07':{proteinPercent:90}}}};
  app.ensureMetaDefaults();
  assert.equal(app.weekKeyFromDateKey('2026-10-08'),'2026-10-05');
  assert.equal(app.meta.weeklyNutritionHistory['2026-10-05'].days['2026-10-07'].proteinPercent,90);
  assert.equal(app.weeklyNutritionSummary().trackedDays,3);
  app.ensureMetaDefaults();assert.equal(app.weeklyNutritionSummary().trackedDays,3);
});

test('startup preserves unsynced local completions when the server has no saved game yet',async()=>{
  const {app}=fixture();finish(app);const xp=app.profile.xp;
  app.meta.progressSyncPending=true;let scheduled=false;
  app.scheduleBackendSync=()=>{scheduled=true;};
  app.backendRequest=async()=>({json:async()=>({xp:0,stats:{strength:0},game_state:null})});
  await app.syncFromBackend({initial:true});
  assert.equal(app.profile.xp,xp);assert.equal(app.allDailyQuestsComplete(),true);
  assert.equal(scheduled,true);assert.equal(app.meta.progressSyncPending,true);
});
