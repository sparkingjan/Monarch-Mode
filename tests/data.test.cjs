const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const source = name => fs.readFileSync(path.join(__dirname, '../frontend', name), 'utf8');
function createApp() {
  const context = vm.createContext({setTimeout, clearTimeout, setInterval, clearInterval});
  vm.runInContext(source('app.js'), context);
  return context.soloLevelingApp();
}

test('ranks use the same level/XP thresholds and reset level progress at each boundary', () => {
  const app = createApp();
  for (const tier of app.rankTiers()) {
    app.profile.xp = tier.xp;
    app.recomputeProgressFromCurrentXp();
    assert.equal(app.profile.level, tier.level);
    assert.equal(app.profile.rank, tier.name);
    assert.equal(app.xpPercent(), 0);
    if (tier.xp) {
      app.profile.xp = tier.xp - 1;
      app.recomputeProgressFromCurrentXp();
      assert.equal(app.profile.level, tier.level - 1);
    }
  }
});

test('history records only observed days and preserves actual quest completion counts', () => {
  const app = createApp();
  app.todayDateKey = () => '2026-10-08';
  app.profile.xp = 731;
  app.quests = [{done: true}, {done: false}, {done: true}];
  app.recordProgressSnapshot();
  assert.deepEqual(JSON.parse(JSON.stringify(app.meta.progressHistory)), {
    '2026-10-08': {xp: 731, completed: 2, total: 3}
  });
  app.profile.xp = 231;
  app.recordProgressSnapshot();
  assert.equal(app.meta.progressHistory['2026-10-08'].xp, 231);
  assert.equal(Object.keys(app.meta.progressHistory).length, 1);
});

test('local pending flag never becomes shared account data; failed saves reject', async () => {
  const app = createApp();
  app.meta.progressSyncPending = true;
  assert.equal('progressSyncPending' in app.localGameStatePayload().meta, false);
  app.backendRequest = async () => null;
  await assert.rejects(app.syncProgressToBackend(), /not synced/);
});

test('notices describe an existing condition, never a fabricated trend or rank-up', () => {
  const app = createApp();
  app.dataStatus = 'synced';
  app.isDailyModeSelected = () => false;
  app.rollSystemNotification(true);
  assert.equal(app.activeSystemNotification, null);
  app.hiddenQuest.active = true;
  app.hiddenQuest.objective = 'Recorded hidden objective';
  app.rollSystemNotification(true);
  assert.equal(app.activeSystemNotification.message, 'Recorded hidden objective');
});

test('search preserves global positions and podium; failures clear misleading totals', async () => {
  let failure = false;
  const context = vm.createContext({
    soloLevelingApp: () => ({ensureFirebaseIdToken: async () => null, backendBaseUrl: () => 'https://test.invalid'}),
    fetch: async () => ({ok: !failure, json: async () => ({
      total: 150, entries: [{uid:'a', name:'Alpha', position:1, xp:20}, {uid:'b', name:'Beta', position:2, xp:10}],
      current_user: {uid:'me',position:125}, hunters_with_streak:17, s_rank_holders:2
    })})
  });
  vm.runInContext(source('leaderboard.js'), context);
  const board = context.leaderboardPage();
  await board.refresh();
  board.searchQuery = 'Beta';
  assert.equal(board.sortedUsers()[0].position, 2);
  assert.equal(board.topUsers()[0].name, 'Alpha');
  assert.equal(board.currentUserLeaderboard.position, 125);
  assert.equal(board.totalHunters, 150);
  failure = true;
  await board.refresh();
  assert.equal(board.apiEntries.length, 0);
  assert.equal(board.totalHunters, null);
  assert.ok(board.loadError);
});
