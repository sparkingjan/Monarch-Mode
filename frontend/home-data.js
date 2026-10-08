(async function () {
  const app = soloLevelingApp(); // Read-only: do not boot gameplay on the public landing page.
  const set = (id, value) => { document.getElementById(id).textContent = value; };
  const tiers = app.rankTiers();
  set('rank-tier-count', tiers.length);
  set('max-rank', tiers.at(-1).name.replace(' Rank', ''));
  const ranks = document.querySelector('.ranks-container');
  ranks.replaceChildren();
  tiers.forEach((tier, index) => {
    const row = document.createElement('div');
    row.className = `rank-row-home ${['re','rd','rc','rb','ra','rs','rn'][index]}`;
    const letter = document.createElement('div'); letter.className = 'rank-letter';
    letter.textContent = tier.name.replace(/[- ]Rank/, '');
    const info = document.createElement('div'); info.className = 'rank-info';
    const title = document.createElement('h3'); title.textContent = tier.name.toUpperCase();
    const detail = document.createElement('p');
    detail.textContent = `Level ${tier.level} · ${tier.xp.toLocaleString()} total XP required`;
    info.append(title, detail); row.append(letter, info); ranks.append(row);
  });
  const base = app.backendBaseUrl();
  async function refreshCommunity() {
    try {
      const response = await fetch(`${base}/leaderboard?limit=1`);
      if (!response.ok) throw new Error();
      const data = await response.json();
      if (!Number.isInteger(data.total)) throw new Error();
      set('hunter-count', data.total.toLocaleString());
      set('community-top-xp', data.entries.length ? data.entries[0].xp.toLocaleString() : '0');
      set('community-status', 'Registered accounts · refreshed every minute');
    } catch (_) {
      set('hunter-count', '—'); set('community-top-xp', '—');
      set('community-status', 'Community data unavailable');
    }
  }
  async function refreshAccount() {
    const token = await app.ensureFirebaseIdToken(false);
    if (!token) {
      set('account-status', 'SIGN IN TO VIEW YOUR PROGRESS');
      set('account-level', 'Sign in to view your level');
      document.querySelector('.level-fill').style.width = '0%';
      return;
    }
    try {
      const response = await app.backendRequest('/users/me');
      if (!response) throw new Error();
      const user = await response.json();
      app.profile.xp = user.xp; app.recomputeProgressFromCurrentXp();
      set('account-status', `${user.name} · ${app.profile.rank}`);
      set('account-level', `LV. ${app.profile.level} — ${app.profile.rank}`);
      document.querySelector('.level-fill').style.width = `${app.xpPercent()}%`;
      document.querySelectorAll('.nav-shell .profile-link').forEach(link => {
        link.href = 'profile.html'; link.setAttribute('aria-label', 'Open profile');
      });
    } catch (_) {
      set('account-status', 'ACCOUNT DATA UNAVAILABLE'); set('account-level', '—');
      document.querySelector('.level-fill').style.width = '0%';
    }
  }
  await Promise.all([refreshCommunity(), refreshAccount()]);
  setInterval(() => { refreshCommunity(); refreshAccount(); }, 60000);
})();
