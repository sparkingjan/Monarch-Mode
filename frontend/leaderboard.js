function leaderboardPage() {
  return {
    apiEntries: [], totalHunters: null, huntersWithStreak: null, sRankHolders: null,
    loadError: '', loading: true, currentUserLeaderboard: null, searchQuery: '', timer: null,
    init() { this.refresh(); this.timer = setInterval(() => this.refresh(), 60000); },
    destroy() { clearInterval(this.timer); },
    async refresh() {
      const app = soloLevelingApp();
      try {
        const token = await app.ensureFirebaseIdToken(false);
        const response = await fetch(`${app.backendBaseUrl()}/leaderboard?limit=100`, {
          headers: token ? {Authorization: `Bearer ${token}`} : {}
        });
        if (!response.ok) throw new Error('Rankings are unavailable. Please retry shortly.');
        const data = await response.json();
        if (!Array.isArray(data.entries) || !Number.isInteger(data.total)) throw new Error('Invalid leaderboard data.');
        this.apiEntries = data.entries.map(entry => ({...entry, id: entry.uid,
          streak: entry.survival_streak, isAdmin: entry.is_admin}));
        this.totalHunters = data.total;
        this.huntersWithStreak = data.hunters_with_streak ?? null;
        this.sRankHolders = data.s_rank_holders ?? null;
        this.currentUserLeaderboard = data.current_user || null;
        this.loadError = '';
      } catch (error) {
        this.loadError = error.message || 'Rankings are unavailable.';
        this.apiEntries = [];
        this.currentUserLeaderboard = null;
        this.totalHunters = this.huntersWithStreak = this.sRankHolders = null;
      } finally { this.loading = false; }
    },
    sortedUsers() {
      const query = this.searchQuery.trim().toLowerCase();
      return this.apiEntries.filter(entry => entry.name.toLowerCase().includes(query));
    },
    topUsers() { return this.apiEntries.slice(0, 3); },
    allUsers() { return this.sortedUsers(); },
    formatXp(value) { return Number(value).toLocaleString(); },
    profileHref(entry) { return `hunter.html?uid=${encodeURIComponent(entry.uid)}`; },
    isYou(entry) { return entry.uid === this.currentUserLeaderboard?.uid; }
  };
}
