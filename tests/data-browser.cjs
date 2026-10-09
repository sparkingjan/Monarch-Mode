const fs=require('fs'), vm=require('vm'), assert=require('assert/strict');
process.chdir(require('path').resolve(__dirname, '..'));
const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const scope={};vm.createContext(scope);vm.runInContext(fs.readFileSync('frontend/app.js','utf8'),scope);
const app=scope.soloLevelingApp();
for(const tier of app.rankTiers()) {app.profile.xp=tier.xp;app.recomputeProgressFromCurrentXp();assert.equal(app.profile.rank,tier.name);assert.equal(app.xpPercent(),0);}
app.profile.xp=10500;app.recomputeProgressFromCurrentXp();assert.ok(app.xpPercent()<5);
app.meta.progressSyncPending=true;assert.ok(!('progressSyncPending' in app.localGameStatePayload().meta));
console.log('Frontend rank boundaries and local sync metadata passed');
(async()=>{
 const browser=await chromium.launch({channel:process.env.BROWSER_CHANNEL || 'msedge',headless:true});
 const page=await browser.newPage({viewport:{width:1280,height:900}});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const today=new Date().toISOString().slice(0,10);
 const user={uid:'me',name:'Recorded Hunter',xp:15000,level:2,rank:'E-Rank',stats:{strength:4,endurance:3,agility:2,discipline:1,aura:0,recovery:0},survival_streak:0,created_at:new Date().toISOString(),game_state_updated_at:new Date().toISOString(),game_state:{meta:{progressHistory:{'2026-10-01':{xp:10000,completed:2,total:5}}},quests:[]}};
 const entries=[{uid:'a',name:'Alpha',xp:90000,level:8,rank:'D-Rank',position:1,survival_streak:4},{uid:'b',name:'Beta',xp:80000,level:7,rank:'D-Rank',position:2,survival_streak:0},{uid:'c',name:'Gamma',xp:70000,level:6,rank:'E-Rank',position:3,survival_streak:1}];
 let failure=false;
 await page.addInitScript(()=>localStorage.setItem('firebase-id-token','test-token'));
 await page.route('**/*',async route=>{
   const url=new URL(route.request().url());
   if(url.hostname==='layout.test') {
     const name=url.pathname.slice(1);
     if(name.startsWith('api/v1/')) {
       if(failure) return route.fulfill({status:503,body:'unavailable'});
       if(name.endsWith('users/me/progress') && route.request().method()==='PUT') Object.assign(user,JSON.parse(route.request().postData()));
       return route.fulfill({json:name.includes('leaderboard')?{total:150,entries,current_user:{...user,position:125},hunters_with_streak:17,s_rank_holders:2}:user});
     }
     if(name==='web-config.js') return route.fulfill({contentType:'text/javascript',body:"window.MONARCH_CONFIG={backendBaseUrl:'http://layout.test/api/v1'}"});
     if(name==='auth-guard.js') return route.fulfill({contentType:'text/javascript',body:''});
     const file=`frontend/${name}`;
     if(!fs.existsSync(file)) return route.fulfill({status:404,body:''});
     return route.fulfill({body:fs.readFileSync(file),contentType:name.endsWith('.html')?'text/html':name.endsWith('.css')?'text/css':'text/javascript'});
   }
   if(['cdn.jsdelivr.net','cdn.tailwindcss.com','fonts.googleapis.com','fonts.gstatic.com'].includes(url.hostname)) return route.continue();
   return route.abort(); // No production API calls or writes during verification.
 });
 await page.goto('http://layout.test/index.html');
 await page.waitForFunction(()=>document.querySelector('#hunter-count')?.textContent==='150');
 assert.equal(await page.locator('#rank-tier-count').textContent(),'7');
 assert.equal(await page.locator('#account-level').textContent(),'LV. 2 — E-Rank');
 assert.equal(await page.locator('.ranks-container .rank-row-home').count(),7);
 await page.goto('http://layout.test/leaderboard.html');
 await page.waitForFunction(()=>document.querySelectorAll('.lb-row').length===3);
 assert.equal((await page.locator('.yrb-pos').textContent()).trim(),'#125');
 await page.locator('.search-input').fill('Beta');
 await page.waitForFunction(()=>document.querySelectorAll('.lb-row').length===1);
 assert.equal((await page.locator('.lb-pos').textContent()).trim(),'#2');
 assert.equal((await page.locator('.podium-name').first().textContent()).trim(),'Alpha');
 await page.goto('http://layout.test/progress.html');
 await page.waitForFunction(()=>window.__soloLevelingApp?.dataStatus==='synced');
 assert.ok((await page.locator('#xLabels').textContent()).includes('10-01'));
 assert.ok((await page.locator('#timeline').textContent()).includes('S++ RANK'));
 const before=await page.locator('#calGrid').innerHTML();
 await page.evaluate(()=>buildCal(window.__soloLevelingApp.meta.progressHistory));
 assert.equal(await page.locator('#calGrid').innerHTML(),before);
 await page.evaluate(()=>{buildLine({});buildDonut(0,0);});
 assert.equal(await page.locator('#xLabels').textContent(),'');
 assert.ok((await page.locator('#lineChart').textContent()).includes('No recorded XP history'));
 assert.ok((await page.locator('#donutSvg').textContent()).includes('No quests assigned'));
 await page.evaluate(()=>buildDonut(5,5));
 assert.ok((await page.locator('#donutLegend').textContent()).includes('100%'));
 await page.goto('http://layout.test/hunter.html?uid=me');
 await page.waitForFunction(()=>document.querySelector('.xp-fill')?.getAttribute('style')?.includes('--w:'));
 assert.ok(!(await page.locator('.xp-fill').getAttribute('style')).includes('--w:0%'));
 await page.goto('http://layout.test/quests.html');
 await page.waitForFunction(()=>window.__soloLevelingApp?.accountReady && window.__soloLevelingApp?.dataStatus==='synced');
 assert.equal(await page.locator('button.quest-item').count(),3);
 for (const width of [375,768,1280]) {
   await page.setViewportSize({width,height:900});
   const overflow=await page.locator('.training-settings, button.quest-item, .raid-label').evaluateAll(nodes=>nodes.filter(node=>node.getBoundingClientRect().right>innerWidth || node.scrollWidth>node.clientWidth+2).map(node=>node.className));
   assert.deepEqual(overflow,[],`Quest controls overflow at ${width}px`);
 }
 await page.setViewportSize({width:375,height:900});
 if(process.env.QUEST_SCREENSHOT) {
   await page.locator('.training-settings').scrollIntoViewIfNeeded();
   await page.waitForFunction(()=>getComputedStyle(document.querySelector('.bottom-grid')).opacity==='1');
   await page.screenshot({path:process.env.QUEST_SCREENSHOT});
 }
 await page.setViewportSize({width:1280,height:900});
 await page.locator('.training-settings select').nth(0).selectOption('regular');
 await page.locator('.training-settings select').nth(1).selectOption('25');
 await page.waitForFunction(()=>document.querySelector('.quest-note')?.textContent.includes('2 × 8'));
 await page.locator('button.quest-item').first().click();
 assert.equal(await page.locator('.training-settings select').first().isDisabled(),true);
 await page.getByRole('button',{name:'REST TODAY'}).click();
 await page.getByRole('button',{name:'Log rest day'}).click();
 await page.waitForFunction(()=>window.__soloLevelingApp?.dataStatus==='synced');
 const restXp=await page.evaluate(()=>window.__soloLevelingApp.profile.xp);
 await page.reload();
 await page.waitForFunction(()=>window.__soloLevelingApp?.accountReady);
 assert.equal(await page.locator('button.quest-item:disabled').count(),3);
 assert.equal(await page.evaluate(()=>window.__soloLevelingApp.profile.xp),restXp);
 await page.evaluate(()=>{const app=window.__soloLevelingApp;const date=new Date(app.todayDateKey()+'T12:00:00');date.setDate(date.getDate()+1);const day=[date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join('-');app.todayDateKey=()=>day;app.updateResetCountdown();});
 assert.equal(await page.evaluate(()=>window.__soloLevelingApp.meta.protocolDay),1);
 for(let i=0;i<3;i++) await page.locator('button.quest-item').nth(i).click();
 assert.equal(await page.evaluate(()=>window.__soloLevelingApp.allDailyQuestsComplete()),true);
 assert.equal(await page.evaluate(()=>window.__soloLevelingApp.meta.protocolDay),1);
 failure=true;
 await page.goto('http://layout.test/index.html');
 await page.waitForFunction(()=>document.querySelector('#community-status')?.textContent==='Community data unavailable');
 assert.equal(await page.locator('#hunter-count').textContent(),'—');
 await page.goto('http://layout.test/leaderboard.html');
 await page.waitForFunction(()=>document.querySelector('.error-box')?.textContent.includes('unavailable'));
 assert.equal(await page.locator('.lb-row').count(),0);
 assert.deepEqual(errors,[]);
 await browser.close();console.log('Browser: account data, charts, quest settings, completion, rest/reload and service failures passed');
})().catch(e=>{console.error(e);process.exit(1)});
