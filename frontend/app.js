function soloLevelingApp() {
  return {
    progression: {
      level2Requirement: 10000,
      perLevelGrowth: 1.061
    },
    dailyFailurePenaltyXp: 500,
    extremeModeFailurePenaltyXp: 500,
    premiumMembershipMonthlyPrice: 99,
    nameChangePriceInr: 100,
    dietStatPointThresholdXp: 1000,
    waterGoalLiters: 3,
    galleryMaxImages: 9,
    mediaUploadMaxFileBytes: 30 * 1024 * 1024,
    mediaOutputMaxDataUrlChars: 16 * 1024 * 1024,
    fatigueDebuffMultiplier: 0.8,
    profile: {
      name: 'Player Hunter',
      rank: 'E-Rank',
      level: 1,
      xp: 0,
      nextLevelXp: 10000,
      isAdmin: false,
      stats: {
        strength: 0,
        endurance: 0,
        agility: 0,
        discipline: 0,
        aura: 0,
        recovery: 0
      }
    },
    hunterProfile: {
      name: 'Player Hunter',
      galleryUrls: [],
      pfpUrl: '',
      bannerUrl: '',
      heightCm: null,
      weightKg: null,
      dob: '',
      goal: 'maintain'
    },
    profileNameDraft: '',
    editorHeightCm: '',
    editorWeightKg: '',
    editorGoal: 'maintain',
    nameChangeInfo: '',
    nameChangeError: '',
    nameChangeBusy: false,
    showNameChangeModal: false,
    editorInfo: '',
    editorError: '',
    editorBusy: false,
    meta: {
      lastDailyResetDate: null,
      lastRaidResetWeek: null,
      lastRaidClaimWeek: null,
      weeklyDirectiveWeek: null,
      weeklyDirectiveTaskCompletions: 0,
      dungeonArcWeek: 1,
      survivalStreak: 0,
      dailyStreak: 0,
      fatigueDebuffActive: false,
      extremeModeStreak: 0,
      lastExtremeRiskAlertDayKey: null,
      dailyMode: null,
      dailyModeDayKey: null,
      focusBuild: null,
      focusBuildDayKey: null,
      lastFullClearBonusDate: null,
      lastDailyStreakCreditDate: null,
      lastIncompleteQuestReminderDayKey: null,
      lastIncompleteQuestReminderAt: null,
      accountCreatedDateKey: null,
      questRotationDate: null,
      rotationAnchorDate: null,
      protocolDay: 1,
      dailyStartXp: 0,
      dailyStartStats: null,
      pushupConsistencyDays: 0,
      pushupTier: 0,
      loadTier: 0,
      loadCycleAnchorDate: null,
      loadCycleFullClears: 0,
      reassignmentDayKey: null,
      reassignmentProtocolDay: null,
      dietTrackingDayKey: null,
      dietMealStatus: null,
      dietStatXp: null,
      dailyStartDietStatXp: null,
      dietWaterLiters: 0,
      dailyStartDietWaterLiters: 0,
      weeklyNutritionHistory: null,
      aiDietPlanMeals: null,
      aiDietPlanNutrition: null,
      aiDietPlanNote: null,
      aiDietPlanDayKey: null,
      aiDietPlanProfileKey: null,
      premiumMembershipActive: false,
      premiumMembershipSince: null,
      premiumMembershipUntil: null,
      premiumLastPaymentId: null,
      nameChangeFreeUsed: false,
      nameChangePaidCredits: 0,
      nameChangeLastPaymentId: null,
      gameStateUpdatedAt: null
    },
    quests: [],
    weeklyProtocols: [
      {
        day: 1,
        banner: '🟥 Day 1 - Chest & Triceps Protocol',
        tasks: [
          { key: 'pushups_main', title: 'Push-ups (standard / decline)', note: 'Controlled tempo. Full range.', xp: 320 },
          { key: 'dips', title: 'Dips', note: 'Use chair/bench support if needed.', xp: 280 },
          { key: 'diamond_pushups', title: 'Diamond push-ups', note: 'Short sets with strict form.', xp: 300 },
          { key: 'plank_hold', title: 'Plank hold', note: 'Core braced throughout hold.', xp: 220 }
        ]
      },
      {
        day: 2,
        banner: '🟦 Day 2 - Back & Biceps Protocol',
        tasks: [
          { key: 'pullups', title: 'Pull-ups / Assisted pull-ups', note: 'Use assistance band if required.', xp: 340 },
          { key: 'rows', title: 'Inverted rows', note: 'Pause at top for control.', xp: 280 },
          { key: 'band_curls', title: 'Resistance band curls', note: 'Slow negative reps.', xp: 240 },
          { key: 'dead_hangs', title: 'Dead hangs', note: 'Grip endurance focus.', xp: 210 }
        ]
      },
      {
        day: 3,
        banner: '🟩 Day 3 - Legs & Glutes Protocol',
        tasks: [
          { key: 'squats', title: 'Squats', note: 'Depth and posture over speed.', xp: 340 },
          { key: 'lunges', title: 'Lunges', note: 'Alternating legs with balance.', xp: 300 },
          { key: 'wall_sit', title: 'Wall sit', note: 'Steady breathing under tension.', xp: 240 },
          { key: 'calf_raises', title: 'Calf raises', note: 'Controlled full stretch each rep.', xp: 200 }
        ]
      },
      {
        day: 4,
        banner: '🟨 Day 4 - Shoulders & Core Protocol',
        tasks: [
          { key: 'pike_pushups', title: 'Pike push-ups', note: 'Shoulder-dominant pressing pattern.', xp: 320 },
          { key: 'lateral_raises', title: 'Lateral raises (bands)', note: 'Do not swing the torso.', xp: 240 },
          { key: 'plank_variations', title: 'Plank variations', note: 'Front/side transitions.', xp: 250 },
          { key: 'leg_raises', title: 'Leg raises', note: 'Core control, no momentum.', xp: 260 }
        ]
      },
      {
        day: 5,
        banner: '🟪 Day 5 - Conditioning Trial',
        tasks: [
          { key: 'burpees', title: 'Burpees', note: 'Maintain sustainable pace.', xp: 360 },
          { key: 'jump_squats', title: 'Jump squats', note: 'Soft landings and posture.', xp: 280 },
          { key: 'mountain_climbers', title: 'Mountain climbers', note: 'Drive knees with rhythm.', xp: 270 },
          { key: 'sprint_intervals', title: 'Sprint intervals', note: 'Short bursts, full recovery.', xp: 360 }
        ]
      },
      {
        day: 6,
        banner: '🟫 Day 6 - Active Recovery Directive',
        tasks: [
          { key: 'mobility_work', title: 'Mobility work', note: 'Focus hips, thoracic spine, ankles.', xp: 180 },
          { key: 'stretching', title: 'Stretching', note: 'At least 20 minutes.', xp: 170 },
          { key: 'light_cardio', title: 'Light cardio', note: 'Keep intensity low and steady.', xp: 180 },
          { key: 'sleep_requirement', title: '8h sleep requirement', note: 'Protect full recovery window.', xp: 200 }
        ]
      },
      {
        day: 7,
        banner: '🩸 Day 7 - Dungeon Boss (Full Body Test)',
        tasks: [
          { key: 'boss_pushups', title: 'Timed Circuit: Push-ups', note: 'Part of full-body timed test.', xp: 340 },
          { key: 'boss_squats', title: 'Timed Circuit: Squats', note: 'Part of full-body timed test.', xp: 340 },
          { key: 'boss_pullups', title: 'Timed Circuit: Pull-ups', note: 'Part of full-body timed test.', xp: 360 },
          { key: 'boss_burpees', title: 'Timed Circuit: Burpees', note: 'Part of full-body timed test.', xp: 380 }
        ]
      }
    ],
    mindDisciplineQuestTemplates: [
      { id: 21, title: '📵 Mind Discipline: Social Silence', xp: 170 },
      { id: 22, title: '📖 Mind Discipline: Focus Reading', xp: 150 },
      { id: 23, title: '🧘 Mind Discipline: Meditation Protocol', xp: 130 }
    ],
    focusBuildProfiles: {
      aesthetic: {
        label: 'Aesthetic Build',
        summary: 'Physique-focused directives',
        xpMultiplier: 1.05,
        categoryModifiers: { strength: 1.05, endurance: 0.95, recovery: 1, discipline: 1.05, special: 1 }
      },
      strength: {
        label: 'Strength Build',
        summary: 'Power-focused directives',
        xpMultiplier: 1.1,
        categoryModifiers: { strength: 1.15, endurance: 0.9, recovery: 0.95, discipline: 1, special: 1.05 }
      },
      athletic: {
        label: 'Athletic Build',
        summary: 'Conditioning-focused directives',
        xpMultiplier: 1.1,
        categoryModifiers: { strength: 0.95, endurance: 1.15, recovery: 1.05, discipline: 1, special: 1.05 }
      },
      monarch: {
        label: 'Monarch Mode',
        summary: 'Balanced elite directives',
        xpMultiplier: 1.2,
        categoryModifiers: { strength: 1.08, endurance: 1.08, recovery: 1.08, discipline: 1.08, special: 1.08 }
      }
    },
    raidTasks: [],
    raidBonusXp: 600,
    dietMealTemplates: {
      default: [
        { key: 'breakfast', time: 'Breakfast', food: '4 eggs + oats + banana', stat: 'recovery', xp: 10, protein: 30, carbs: 55, calories: 520 },
        { key: 'lunch', time: 'Lunch', food: 'Rice + chicken/soy + salad', stat: 'strength', xp: 15, protein: 35, carbs: 70, calories: 680 },
        { key: 'hydration', time: 'Hydration', food: '3L+ water target', stat: 'endurance', xp: 5, protein: 0, carbs: 0, calories: 0 },
        { key: 'dinner', time: 'Dinner', food: 'Roti + paneer/fish + veggies', stat: 'recovery', xp: 10, protein: 30, carbs: 45, calories: 560 },
        { key: 'before_bed', time: 'Before Bed', food: 'Milk or curd', stat: 'recovery', xp: 5, protein: 12, carbs: 10, calories: 150 }
      ],
      aesthetic: [
        { key: 'breakfast', time: 'Breakfast', food: 'Egg-white omelet + oats + berries', stat: 'recovery', xp: 10, protein: 34, carbs: 35, calories: 470 },
        { key: 'lunch', time: 'Lunch', food: 'Grilled chicken/soy + quinoa + salad', stat: 'strength', xp: 15, protein: 40, carbs: 45, calories: 620 },
        { key: 'hydration', time: 'Hydration', food: '3.5L water + electrolytes', stat: 'endurance', xp: 5, protein: 0, carbs: 0, calories: 0 },
        { key: 'dinner', time: 'Dinner', food: 'Fish/paneer + veggies + 1 roti', stat: 'recovery', xp: 10, protein: 38, carbs: 30, calories: 560 },
        { key: 'before_bed', time: 'Before Bed', food: 'Greek yogurt or low-fat curd', stat: 'recovery', xp: 5, protein: 22, carbs: 8, calories: 220 }
      ],
      strength: [
        { key: 'breakfast', time: 'Breakfast', food: 'Whole eggs + peanut-butter oats + banana', stat: 'recovery', xp: 10, protein: 36, carbs: 75, calories: 700 },
        { key: 'lunch', time: 'Lunch', food: 'Rice + chicken/soy + potatoes + yogurt', stat: 'strength', xp: 15, protein: 42, carbs: 95, calories: 900 },
        { key: 'hydration', time: 'Hydration', food: '4L water + electrolytes', stat: 'endurance', xp: 5, protein: 0, carbs: 0, calories: 0 },
        { key: 'dinner', time: 'Dinner', food: 'Roti + paneer/fish + rice + veggies', stat: 'recovery', xp: 10, protein: 40, carbs: 85, calories: 820 },
        { key: 'before_bed', time: 'Before Bed', food: 'Milk + whey/curd + nuts', stat: 'recovery', xp: 5, protein: 28, carbs: 25, calories: 360 }
      ],
      athletic: [
        { key: 'breakfast', time: 'Breakfast', food: 'Eggs + oats + fruit', stat: 'recovery', xp: 10, protein: 34, carbs: 55, calories: 560 },
        { key: 'lunch', time: 'Lunch', food: 'Rice + lean protein + salad + curd', stat: 'strength', xp: 15, protein: 38, carbs: 75, calories: 760 },
        { key: 'hydration', time: 'Hydration', food: '3L water + lemon + pinch of salt', stat: 'endurance', xp: 5, protein: 0, carbs: 0, calories: 0 },
        { key: 'dinner', time: 'Dinner', food: 'Roti + fish/paneer + veggies + dal', stat: 'recovery', xp: 10, protein: 36, carbs: 60, calories: 680 },
        { key: 'before_bed', time: 'Before Bed', food: 'Milk or curd + seeds', stat: 'recovery', xp: 5, protein: 20, carbs: 15, calories: 230 }
      ],
      monarch: [
        { key: 'breakfast', time: 'Breakfast', food: '6 egg whites + 1 whole egg + oats', stat: 'recovery', xp: 10, protein: 45, carbs: 35, calories: 500 },
        { key: 'lunch', time: 'Lunch', food: 'Chicken/soy bowl + veggies + controlled rice', stat: 'strength', xp: 15, protein: 50, carbs: 45, calories: 650 },
        { key: 'hydration', time: 'Hydration', food: '3.5L water + electrolytes', stat: 'endurance', xp: 5, protein: 0, carbs: 0, calories: 0 },
        { key: 'dinner', time: 'Dinner', food: 'Fish/paneer + lentils + greens', stat: 'recovery', xp: 10, protein: 48, carbs: 30, calories: 560 },
        { key: 'before_bed', time: 'Before Bed', food: 'Casein shake or thick curd', stat: 'recovery', xp: 5, protein: 30, carbs: 10, calories: 200 }
      ]
    },
    dietPlan: [],
    fitnessPlan: [
      { name: 'Monday', workout: 'Upper body strength + 20 min walk' },
      { name: 'Tuesday', workout: 'HIIT cardio 25 min + core' },
      { name: 'Wednesday', workout: 'Lower body strength + mobility' },
      { name: 'Thursday', workout: 'Active recovery: 8k steps + stretching' },
      { name: 'Friday', workout: 'Full-body circuit (home or gym)' },
      { name: 'Saturday', workout: 'Long walk/run + light calisthenics' },
      { name: 'Sunday', workout: 'Rest + meal prep + progress review' }
    ],
    systemNotifications: [
      { title: '🟦 System Alert', message: 'You are falling behind your potential.' },
      { title: '🟦 System Notice', message: 'Hidden Quest Available.' },
      { title: '🟦 System Alert', message: 'Your discipline curve is dropping.' },
      { title: '🟦 System Notice', message: 'A rank-up opportunity has been detected.' }
    ],
    hiddenQuest: {
      active: false,
      completed: false,
      dayKey: null,
      title: '🟦 System Alert: Hidden Quest Detected',
      objective: 'Complete 50 push-ups today instead of 25.',
      rewardXp: 900,
      penaltyXp: 700
    },
    activeSystemNotification: null,
    systemNotificationTimer: null,
    resetCountdownTimer: null,
    resetCountdownText: '00:00:00',
    statGainFxTimer: null,
    statGainFx: {
      visible: false,
      text: ''
    },
    showAbandonModal: false,
    showResetProgressModal: false,
    logs: [],
    backendSyncTimer: null,
    backendRefreshTimer: null,
    backendSyncPending: false,
    aiDietGenerationBusy: false,
    voiceAnnouncerEnabled: true,
    speechVoiceName: '',
    speechPrimed: false,
    questReminderWindowMs: 60 * 60 * 1000,

    init() {
      if (typeof window !== 'undefined') {
        window.__soloLevelingApp = this;
      }
      this.initializeVoiceAnnouncer();
      this.initializeQuestReminderNotifications();
      const stateKey = this.stateStorageKey();
      let saved = localStorage.getItem(stateKey);
      if (!saved && stateKey !== 'monarch-mode-state') {
        const legacyState = localStorage.getItem('monarch-mode-state');
        if (legacyState) {
          saved = legacyState;
          localStorage.setItem(stateKey, legacyState);
        }
      }
      if (saved) {
        try {
          const state = JSON.parse(saved);
          this.profile = state.profile && typeof state.profile === 'object' ? state.profile : this.profile;
          this.hunterProfile = state.hunterProfile && typeof state.hunterProfile === 'object'
            ? { ...this.hunterProfile, ...state.hunterProfile }
            : this.hunterProfile;
          this.meta = state.meta && typeof state.meta === 'object' ? { ...this.meta, ...state.meta } : this.meta;
          this.quests = Array.isArray(state.quests) ? state.quests : this.quests;
          this.raidTasks = Array.isArray(state.raidTasks) ? state.raidTasks : this.raidTasks;
          this.hiddenQuest = state.hiddenQuest && typeof state.hiddenQuest === 'object' ? { ...this.hiddenQuest, ...state.hiddenQuest } : this.hiddenQuest;
          this.logs = Array.isArray(state.logs) ? state.logs : this.logs;
        } catch (error) {
          localStorage.removeItem(stateKey);
          this.log('Corrupted save detected. State reset.');
        }
      }
      this.loadHunterProfileFromRegistration();
      this.normalizeQuestAndRaidXp();
      this.ensureProfileStats();
      this.ensureHiddenQuestState();
      this.ensureMetaDefaults();
      this.applyDailyResets();
      this.syncDailyQuestRotation();
      this.syncModeSpecificQuests();
      this.syncStatUnlockQuests();
      this.syncRaidTasksWithDungeon();
      this.recomputeProgressFromCurrentXp();
      if (!saved) {
        this.log('System booted. New hunter detected.');
      }
      this.rollSystemNotification(true);
      this.startSystemNotificationLoop();
      this.startResetCountdownLoop();
      this.recordDailyNutritionSnapshot();
      this.profileNameDraft = this.profile.name || this.hunterProfile.name || 'Player Hunter';
      this.initializeEditorFields();
      this.save({ skipBackendSync: true, preserveGameStateUpdatedAt: true });
      this.syncFromBackend().catch(() => {
        // Keep local-mode behavior if backend is unavailable.
      });
      this.startBackendRefreshLoop();
    },

    activeUidFromStoredProfile() {
      const stored = localStorage.getItem('hunter-account-profile');
      if (!stored) return null;
      try {
        const parsed = JSON.parse(stored);
        if (typeof parsed?.uid === 'string' && parsed.uid.trim()) {
          return parsed.uid.trim();
        }
      } catch (_) {
        return null;
      }
      return null;
    },

    activeUid() {
      return this.activeUidFromToken() || this.activeUidFromStoredProfile();
    },

    stateStorageKey(uid = null) {
      const resolvedUid = typeof uid === 'string' && uid.trim()
        ? uid.trim()
        : this.activeUid();
      return resolvedUid ? `monarch-mode-state:${resolvedUid}` : 'monarch-mode-state';
    },

    normalizeIsoTimestamp(value) {
      if (typeof value !== 'string' || !value.trim()) return null;
      const parsed = new Date(value);
      return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString();
    },

    timestampMs(value) {
      const normalized = this.normalizeIsoTimestamp(value);
      if (!normalized) return null;
      const ms = Date.parse(normalized);
      return Number.isFinite(ms) ? ms : null;
    },

    localGameStatePayload() {
      return {
        meta: { ...this.meta },
        quests: Array.isArray(this.quests) ? this.quests : [],
        raidTasks: Array.isArray(this.raidTasks) ? this.raidTasks : [],
        hiddenQuest: this.hiddenQuest && typeof this.hiddenQuest === 'object'
          ? { ...this.hiddenQuest }
          : null
      };
    },

    applyBackendGameState(gameState, updatedAt = null) {
      if (!gameState || typeof gameState !== 'object') return;
      if (gameState.meta && typeof gameState.meta === 'object') {
        this.meta = { ...this.meta, ...gameState.meta };
      }
      if (Array.isArray(gameState.quests)) {
        this.quests = gameState.quests;
      }
      if (Array.isArray(gameState.raidTasks)) {
        this.raidTasks = gameState.raidTasks;
      }
      if (gameState.hiddenQuest && typeof gameState.hiddenQuest === 'object') {
        this.hiddenQuest = { ...this.hiddenQuest, ...gameState.hiddenQuest };
      }
      const normalizedUpdatedAt = this.normalizeIsoTimestamp(updatedAt);
      this.meta.gameStateUpdatedAt = normalizedUpdatedAt || this.meta.gameStateUpdatedAt || new Date().toISOString();
      this.ensureProfileStats();
      this.ensureHiddenQuestState();
      this.ensureMetaDefaults();
      this.applyDailyResets();
      this.syncDailyQuestRotation();
      this.syncModeSpecificQuests();
      this.syncStatUnlockQuests();
      this.syncRaidTasksWithDungeon();
      this.recomputeProgressFromCurrentXp();
    },

    save(options = {}) {
      const skipBackendSync = Boolean(options.skipBackendSync);
      const preserveGameStateUpdatedAt = Boolean(options.preserveGameStateUpdatedAt);
      if (!preserveGameStateUpdatedAt) {
        this.meta.gameStateUpdatedAt = new Date().toISOString();
      }
      const stateKey = this.stateStorageKey();
      const fullState = {
        profile: this.profile,
        hunterProfile: this.hunterProfile,
        meta: this.meta,
        quests: this.quests,
        raidTasks: this.raidTasks,
        hiddenQuest: this.hiddenQuest,
        logs: this.logs
      };
      try {
        localStorage.setItem(stateKey, JSON.stringify(fullState));
      } catch (_) {
        // If payloads are too large for localStorage, keep gameplay state and skip gallery blobs.
        const slimState = {
          ...fullState,
          hunterProfile: {
            ...this.hunterProfile,
            galleryUrls: []
          }
        };
        localStorage.setItem(stateKey, JSON.stringify(slimState));
      }
      if (!skipBackendSync) {
        this.scheduleBackendSync();
      }
    },

    backendBaseUrl() {
      return window.MONARCH_CONFIG?.backendBaseUrl || 'https://monarch-mode.vercel.app/api/v1';
    },

    activeUidFromToken() {
      const token = this.firebaseIdToken();
      if (!token) return null;
      try {
        const segments = token.split('.');
        if (segments.length < 2) return null;
        const base64 = segments[1].replace(/-/g, '+').replace(/_/g, '/');
        const normalized = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), '=');
        const payload = JSON.parse(atob(normalized));
        return typeof payload.user_id === 'string'
          ? payload.user_id
          : (typeof payload.uid === 'string' ? payload.uid : (typeof payload.sub === 'string' ? payload.sub : null));
      } catch (_) {
        return null;
      }
    },

    firebaseIdToken() {
      const token = localStorage.getItem('firebase-id-token');
      return typeof token === 'string' && token.trim() ? token.trim() : null;
    },

    async ensureFirebaseIdToken(forceRefresh = false) {
      const stored = this.firebaseIdToken();
      if (typeof window === 'undefined' || typeof window.firebase === 'undefined' || !firebase.auth) {
        return stored;
      }
      try {
        const app = this.firebaseClientApp();
        if (!app) return stored;
        const auth = firebase.auth();
        const user = auth.currentUser;
        if (!user || typeof user.getIdToken !== 'function') {
          return stored;
        }
        const freshToken = await user.getIdToken(forceRefresh);
        if (typeof freshToken === 'string' && freshToken.trim()) {
          localStorage.setItem('firebase-id-token', freshToken.trim());
          return freshToken.trim();
        }
      } catch (_) {
        // Fallback to the last known token when refresh is unavailable.
      }
      return stored;
    },

    firebaseClientApp() {
      if (typeof window === 'undefined' || typeof window.firebase === 'undefined') return null;
      const cfg = window.MONARCH_CONFIG?.firebase || {};
      if (!cfg.apiKey || !cfg.authDomain || !cfg.projectId) return null;
      try {
        if (!firebase.apps.length) {
          firebase.initializeApp(cfg);
        }
        return firebase.app();
      } catch (_) {
        return firebase.apps && firebase.apps.length ? firebase.app() : null;
      }
    },

    async waitForFirebaseAuthUser(timeoutMs = 4500) {
      if (typeof window === 'undefined' || typeof window.firebase === 'undefined' || !firebase.auth) {
        return null;
      }
      const auth = firebase.auth();
      if (auth.currentUser) return auth.currentUser;

      const timeout = Number.isFinite(timeoutMs) ? Math.max(300, timeoutMs) : 4500;
      return new Promise((resolve) => {
        let settled = false;
        let unsubscribe = () => {};
        const finish = (user) => {
          if (settled) return;
          settled = true;
          clearTimeout(timer);
          try {
            unsubscribe();
          } catch (_) {
            // Ignore unsubscribe failures.
          }
          resolve(user || null);
        };
        const timer = setTimeout(() => finish(auth.currentUser || null), timeout);
        unsubscribe = auth.onAuthStateChanged(
          (user) => {
            if (user) {
              finish(user);
            }
          },
          () => finish(auth.currentUser || null)
        );
      });
    },

    isInlineDataUrl(value) {
      return typeof value === 'string' && value.startsWith('data:image/');
    },

    async uploadDataUrlToImageStore(dataUrl, category) {
      if (!this.isInlineDataUrl(dataUrl)) {
        return dataUrl;
      }
      const safeCategory = typeof category === 'string' && category.trim() ? category.trim() : 'media';
      try {
        const response = await this.backendRequest('/images/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            data_url: dataUrl,
            category: safeCategory
          })
        });
        if (!response) {
          throw new Error('Backend image store unavailable.');
        }
        const payload = await response.json();
        const url = typeof payload?.url === 'string' ? payload.url.trim() : '';
        if (!/^https?:\/\//i.test(url)) {
          throw new Error('Backend image store did not return a valid URL.');
        }
        return url;
      } catch (error) {
        throw new Error(error?.message || 'Failed to upload media to backend image store.');
      }
    },

    handleBackendAuthFailure() {
      if (typeof window === 'undefined') return;
      localStorage.removeItem('firebase-id-token');
      localStorage.removeItem('monarch-session-id');
      localStorage.setItem('monarch-auth-expired', '1');
      const path = (window.location.pathname || '').split('/').pop() || '';
      if (!['login.html', 'signup.html'].includes(path)) {
        window.location.replace('login.html');
      }
    },

    activeSessionId() {
      if (typeof window === 'undefined') return '';
      const raw = localStorage.getItem('monarch-session-id');
      return typeof raw === 'string' && raw.trim() ? raw.trim() : '';
    },

    async backendRequest(path, options = {}) {
      const execute = async (token) => {
        if (!token) return null;
        const sessionId = this.activeSessionId();
        const headers = {
          ...(options.headers || {}),
          Authorization: `Bearer ${token}`
        };
        if (sessionId) {
          headers['X-Monarch-Session'] = sessionId;
        }
        return fetch(`${this.backendBaseUrl()}${path}`, {
          ...options,
          headers
        });
      };

      let token = await this.ensureFirebaseIdToken(false);
      let response = await execute(token);
      if (!response) return null;

      if ((response.status === 401 || response.status === 403) && typeof window !== 'undefined') {
        token = await this.ensureFirebaseIdToken(true);
        response = await execute(token);
        if (!response) return null;
        if (response.status === 401 || response.status === 403) {
          this.handleBackendAuthFailure();
          return null;
        }
      }

      if (!response.ok) {
        return null;
      }
      return response;
    },

    async backendRequestWithStatus(path, options = {}) {
      const execute = async (token) => {
        if (!token) return null;
        const sessionId = this.activeSessionId();
        const headers = {
          ...(options.headers || {}),
          Authorization: `Bearer ${token}`
        };
        if (sessionId) {
          headers['X-Monarch-Session'] = sessionId;
        }
        return fetch(`${this.backendBaseUrl()}${path}`, {
          ...options,
          headers
        });
      };

      let token = await this.ensureFirebaseIdToken(false);
      let response = await execute(token);
      if (!response) return null;

      if ((response.status === 401 || response.status === 403) && typeof window !== 'undefined') {
        token = await this.ensureFirebaseIdToken(true);
        response = await execute(token);
        if (response && (response.status === 401 || response.status === 403)) {
          this.handleBackendAuthFailure();
        }
      }
      return response;
    },

    sanitizeGalleryUrls(value) {
      if (!Array.isArray(value)) return [];
      return value
        .filter((item) => typeof item === 'string' && item.trim())
        .map((item) => item.trim())
        .slice(0, this.galleryMaxImages);
    },

    sanitizeImageUrl(value) {
      if (typeof value !== 'string') return '';
      const normalized = value.trim();
      if (!normalized) return '';
      if (this.isInlineDataUrl(normalized) || /^https?:\/\//i.test(normalized)) {
        return normalized;
      }
      return '';
    },

    normalizeDobValue(value) {
      if (typeof value !== 'string') return '';
      const normalized = value.trim();
      if (!/^\d{4}-\d{2}-\d{2}$/.test(normalized)) return '';
      const date = new Date(`${normalized}T00:00:00`);
      if (Number.isNaN(date.getTime())) return '';
      return normalized;
    },

    dateKeyFromIsoTimestamp(value) {
      const normalized = this.normalizeIsoTimestamp(value);
      if (!normalized) return null;
      const date = new Date(normalized);
      if (Number.isNaN(date.getTime())) return null;
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },

    setAccountQuestAnchor(dateKey) {
      if (typeof dateKey !== 'string' || !dateKey.trim()) return false;
      const normalized = dateKey.trim();
      const changed = this.meta.accountCreatedDateKey !== normalized || this.meta.rotationAnchorDate !== normalized;
      this.meta.accountCreatedDateKey = normalized;
      this.meta.rotationAnchorDate = normalized;
      if (changed) {
        this.meta.questRotationDate = null;
      }
      return changed;
    },

    calculateAgeFromDob(dobValue) {
      const normalizedDob = this.normalizeDobValue(dobValue);
      if (!normalizedDob) return null;
      const dobDate = new Date(`${normalizedDob}T00:00:00`);
      if (Number.isNaN(dobDate.getTime())) return null;
      const today = new Date();
      let age = today.getFullYear() - dobDate.getFullYear();
      const monthDelta = today.getMonth() - dobDate.getMonth();
      if (monthDelta < 0 || (monthDelta === 0 && today.getDate() < dobDate.getDate())) {
        age -= 1;
      }
      if (!Number.isFinite(age) || age < 0 || age > 130) return null;
      return age;
    },

    applyBackendUser(user, options = {}) {
      if (!user || typeof user !== 'object') return;
      const applyProgressFields = options.applyProgressFields !== false;
      const accountCreatedDateKey = this.dateKeyFromIsoTimestamp(user.created_at || user.createdAt);
      const accountAnchorChanged = this.setAccountQuestAnchor(accountCreatedDateKey);
      const hasGalleryField = Object.prototype.hasOwnProperty.call(user, 'gallery_urls') || Object.prototype.hasOwnProperty.call(user, 'galleryUrls');
      const incomingGallery = this.sanitizeGalleryUrls(
        Array.isArray(user.gallery_urls)
          ? user.gallery_urls
          : (Array.isArray(user.galleryUrls) ? user.galleryUrls : [])
      );
      this.profile = {
        ...this.profile,
        name: user.name || this.profile.name,
        rank: user.rank || this.profile.rank,
        level: Number.isFinite(user.level) ? user.level : this.profile.level,
        xp: Number.isFinite(user.xp) ? user.xp : this.profile.xp,
        isAdmin: Boolean(user.is_admin || user.isAdmin),
        stats: {
          ...this.profile.stats,
          ...(user.stats || {})
        }
      };
      this.hunterProfile = {
        ...this.hunterProfile,
        name: user.name || this.hunterProfile.name,
        galleryUrls: hasGalleryField ? incomingGallery : this.sanitizeGalleryUrls(this.hunterProfile.galleryUrls),
        heightCm: Number.isFinite(user.height_cm) ? user.height_cm : this.hunterProfile.heightCm,
        weightKg: Number.isFinite(user.weight_kg) ? user.weight_kg : this.hunterProfile.weightKg,
        dob: this.normalizeDobValue(user.dob) || this.hunterProfile.dob,
        goal: ['cut', 'maintain', 'bulk'].includes(user.goal) ? user.goal : this.hunterProfile.goal
      };
      this.profileNameDraft = this.profile.name || this.hunterProfile.name || this.profileNameDraft;
      this.initializeEditorFields();
      if (accountAnchorChanged) {
        this.syncDailyQuestRotation();
        this.syncModeSpecificQuests();
        this.syncStatUnlockQuests();
      }
      localStorage.setItem(
        'hunter-account-profile',
        JSON.stringify({
          uid: user.uid || this.activeUidFromToken(),
          name: this.hunterProfile.name,
          email: user.email || null,
          galleryUrls: this.sanitizeGalleryUrls(this.hunterProfile.galleryUrls),
          pfpUrl: this.sanitizeImageUrl(this.hunterProfile.pfpUrl),
          bannerUrl: this.sanitizeImageUrl(this.hunterProfile.bannerUrl),
          heightCm: this.hunterProfile.heightCm,
          weightKg: this.hunterProfile.weightKg,
          dob: this.hunterProfile.dob || null,
          goal: this.hunterProfile.goal,
          isAdmin: this.profile.isAdmin,
          createdAt: user.created_at || user.createdAt || null,
          syncedAt: new Date().toISOString()
        })
      );
      if (applyProgressFields && Number.isFinite(user.survival_streak)) {
        this.meta.survivalStreak = user.survival_streak;
      }
      this.meta.premiumMembershipActive = Boolean(user.premium_membership_active ?? this.meta.premiumMembershipActive);
      this.meta.premiumMembershipSince = typeof user.premium_membership_since === 'string'
        ? user.premium_membership_since
        : (this.meta.premiumMembershipSince || null);
      this.meta.premiumMembershipUntil = typeof user.premium_membership_until === 'string'
        ? user.premium_membership_until
        : (this.meta.premiumMembershipUntil || null);
      this.meta.premiumLastPaymentId = typeof user.premium_last_payment_id === 'string'
        ? user.premium_last_payment_id
        : (this.meta.premiumLastPaymentId || null);
      this.meta.nameChangeFreeUsed = Boolean(user.name_change_free_used ?? this.meta.nameChangeFreeUsed);
      this.meta.nameChangePaidCredits = Number.isFinite(user.name_change_paid_credits)
        ? Math.max(0, user.name_change_paid_credits)
        : Math.max(0, this.meta.nameChangePaidCredits || 0);
      this.meta.nameChangeLastPaymentId = typeof user.name_change_last_payment_id === 'string'
        ? user.name_change_last_payment_id
        : (this.meta.nameChangeLastPaymentId || null);
      this.recomputeProgressFromCurrentXp();
    },

    async syncFromBackend() {
      const response = await this.backendRequest('/users/me', { method: 'GET' });
      if (!response) return;
      const user = await response.json();
      const localGameStateTimestamp = this.timestampMs(this.meta?.gameStateUpdatedAt);
      const backendGameStateTimestamp = this.timestampMs(user?.game_state_updated_at);
      const hasBackendGameState = user?.game_state && typeof user.game_state === 'object';
      const shouldApplyBackendGameState = (
        hasBackendGameState
        && (
          localGameStateTimestamp === null
          || backendGameStateTimestamp === null
          || backendGameStateTimestamp >= localGameStateTimestamp
        )
      );
      this.applyBackendUser(user, { applyProgressFields: !hasBackendGameState || shouldApplyBackendGameState });
      if (shouldApplyBackendGameState) {
        this.applyBackendGameState(user.game_state, user.game_state_updated_at || null);
      }
      this.save({ skipBackendSync: true, preserveGameStateUpdatedAt: true });
    },

    async syncProgressToBackend() {
      const gameStateUpdatedAt = this.normalizeIsoTimestamp(this.meta?.gameStateUpdatedAt) || new Date().toISOString();
      this.meta.gameStateUpdatedAt = gameStateUpdatedAt;
      const payload = {
        xp: this.profile.xp,
        level: this.profile.level,
        rank: this.profile.rank,
        survival_streak: this.meta.survivalStreak || 0,
        stats: this.profile.stats,
        game_state: this.localGameStatePayload(),
        game_state_updated_at: gameStateUpdatedAt
      };
      await this.backendRequest('/users/me/progress', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    },

    async syncProfileToBackend() {
      const normalizedDob = this.normalizeDobValue(this.hunterProfile.dob);
      const payload = {
        gallery_urls: this.sanitizeGalleryUrls(this.hunterProfile.galleryUrls),
        height_cm: Number.isFinite(this.hunterProfile.heightCm) ? this.hunterProfile.heightCm : null,
        weight_kg: Number.isFinite(this.hunterProfile.weightKg) ? this.hunterProfile.weightKg : null,
        goal: this.hunterProfile.goal
      };
      if (normalizedDob) {
        payload.dob = normalizedDob;
      }
      const response = await this.backendRequest('/users/me/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response) {
        throw new Error('Failed to save profile to Firebase.');
      }
    },

    scheduleBackendSync() {
      if (!this.firebaseIdToken()) return;
      if (this.backendSyncTimer) {
        clearTimeout(this.backendSyncTimer);
      }
      this.backendSyncTimer = setTimeout(() => {
        if (this.backendSyncPending) return;
        this.backendSyncPending = true;
        Promise.all([this.syncProfileToBackend(), this.syncProgressToBackend()])
          .catch(() => {})
          .finally(() => {
            this.backendSyncPending = false;
          });
      }, 900);
    },

    startBackendRefreshLoop() {
      if (this.backendRefreshTimer) {
        clearInterval(this.backendRefreshTimer);
      }
      this.backendRefreshTimer = setInterval(() => {
        this.syncFromBackend().catch(() => {});
      }, 30000);
    },

    async readImageAsDataUrl(file, maxWidth, maxHeight, quality) {
      if (!file) throw new Error('No image file selected.');
      if (typeof file.size === 'number' && file.size > this.mediaUploadMaxFileBytes) {
        throw new Error('Image file exceeds 30 MB limit. Please choose a smaller file.');
      }
      const dataUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : '');
        reader.onerror = () => reject(new Error('Unable to read image file.'));
        reader.readAsDataURL(file);
      });
      if (!dataUrl) throw new Error('Invalid image data.');

      const image = await new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error('Unsupported image format.'));
        img.src = dataUrl;
      });

      const sourceWidth = image.naturalWidth || image.width;
      const sourceHeight = image.naturalHeight || image.height;
      const ratio = Math.min(maxWidth / sourceWidth, maxHeight / sourceHeight, 1);
      const width = Math.max(1, Math.round(sourceWidth * ratio));
      const height = Math.max(1, Math.round(sourceHeight * ratio));

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext('2d');
      if (!context) throw new Error('Image processing not available.');
      context.drawImage(image, 0, 0, width, height);

      const output = canvas.toDataURL('image/jpeg', quality);
      if (!output || output.length > this.mediaOutputMaxDataUrlChars) {
        throw new Error('Processed image is too large. Try lowering crop zoom or using a lower resolution image.');
      }
      return output;
    },

    persistMediaFields() {
      const stored = localStorage.getItem('hunter-account-profile');
      let parsed = {};
      if (stored) {
        try {
          parsed = JSON.parse(stored) || {};
        } catch (_) {
          parsed = {};
        }
      }
      parsed.uid = parsed.uid || this.activeUidFromToken() || null;
      parsed.galleryUrls = this.sanitizeGalleryUrls(this.hunterProfile.galleryUrls);
      parsed.pfpUrl = this.sanitizeImageUrl(this.hunterProfile.pfpUrl);
      parsed.bannerUrl = this.sanitizeImageUrl(this.hunterProfile.bannerUrl);
      parsed.name = this.hunterProfile.name || parsed.name || this.profile.name;
      parsed.dob = this.normalizeDobValue(this.hunterProfile.dob) || null;
      try {
        localStorage.setItem('hunter-account-profile', JSON.stringify(parsed));
      } catch (_) {
        const slimParsed = {
          ...parsed,
          galleryUrls: []
        };
        localStorage.setItem('hunter-account-profile', JSON.stringify(slimParsed));
      }
    },

    async addGalleryImagesFromFiles(fileList) {
      const files = Array.from(fileList || []);
      if (!files.length) return 0;
      const current = this.sanitizeGalleryUrls(this.hunterProfile.galleryUrls);
      const remaining = Math.max(0, this.galleryMaxImages - current.length);
      if (remaining <= 0) {
        throw new Error(`Gallery limit reached (${this.galleryMaxImages} images). Remove one before uploading.`);
      }
      const selected = files.slice(0, remaining);
      const processed = [];
      for (const file of selected) {
        const dataUrl = await this.readImageAsDataUrl(file, 1080, 1080, 0.8);
        const storedUrl = await this.uploadDataUrlToImageStore(dataUrl, 'gallery');
        processed.push(storedUrl);
      }
      this.hunterProfile.galleryUrls = this.sanitizeGalleryUrls([...current, ...processed]);
      this.persistMediaFields();
      this.save();
      await this.syncProfileToBackend();
      this.scheduleBackendSync();
      return processed.length;
    },

    async removeGalleryImage(index) {
      const gallery = this.sanitizeGalleryUrls(this.hunterProfile.galleryUrls);
      if (!Number.isInteger(index) || index < 0 || index >= gallery.length) return;
      gallery.splice(index, 1);
      this.hunterProfile.galleryUrls = gallery;
      this.persistMediaFields();
      this.save();
      await this.syncProfileToBackend();
      this.scheduleBackendSync();
    },

    xpPercent() {
      const xp = Number(this.profile?.xp);
      const next = Number(this.profile?.nextLevelXp);
      if (!Number.isFinite(xp) || !Number.isFinite(next) || next <= 0) return 0;
      return Math.min(100, (xp / next) * 100);
    },

    loadHunterProfileFromRegistration() {
      const savedProfile = localStorage.getItem('hunter-account-profile');
      if (!savedProfile) return;
      try {
        const parsed = JSON.parse(savedProfile);
        const tokenUid = this.activeUidFromToken();
        if (tokenUid && parsed?.uid && parsed.uid !== tokenUid) {
          return;
        }
        const parsedHeight = Number(parsed.heightCm ?? parsed.height_cm);
        const parsedWeight = Number(parsed.weightKg ?? parsed.weight_kg);
        const parsedDob = this.normalizeDobValue(parsed.dob || parsed.dateOfBirth || parsed.date_of_birth);
        const parsedCreatedDateKey = this.dateKeyFromIsoTimestamp(parsed.createdAt || parsed.created_at);
        this.setAccountQuestAnchor(parsedCreatedDateKey);
        this.hunterProfile = {
          name: typeof parsed.name === 'string' && parsed.name.trim() ? parsed.name.trim() : this.hunterProfile.name,
          galleryUrls: this.sanitizeGalleryUrls(Array.isArray(parsed.galleryUrls) ? parsed.galleryUrls : parsed.gallery_urls),
          pfpUrl: this.sanitizeImageUrl(parsed.pfpUrl || parsed.pfp_url),
          bannerUrl: this.sanitizeImageUrl(parsed.bannerUrl || parsed.banner_url),
          heightCm: Number.isFinite(parsedHeight) ? Math.max(120, Math.min(230, Math.round(parsedHeight))) : this.hunterProfile.heightCm,
          weightKg: Number.isFinite(parsedWeight) ? Math.max(35, Math.min(250, Math.round(parsedWeight))) : this.hunterProfile.weightKg,
          dob: parsedDob || this.hunterProfile.dob,
          goal: ['cut', 'maintain', 'bulk'].includes(parsed.goal) ? parsed.goal : this.hunterProfile.goal
        };
        if (this.profile?.name === 'Player Hunter' && this.hunterProfile.name) {
          this.profile.name = this.hunterProfile.name;
        }
        this.initializeEditorFields();
      } catch (error) {
        // Ignore malformed profile data and keep defaults.
      }
    },

    initializeEditorFields() {
      this.editorHeightCm = Number.isFinite(this.hunterProfile.heightCm) ? String(this.hunterProfile.heightCm) : '';
      this.editorWeightKg = Number.isFinite(this.hunterProfile.weightKg) ? String(this.hunterProfile.weightKg) : '';
      this.editorGoal = ['cut', 'maintain', 'bulk'].includes(this.hunterProfile.goal) ? this.hunterProfile.goal : 'maintain';
    },

    async saveEditorBodyProfile() {
      this.editorInfo = '';
      this.editorError = '';
      if (this.editorBusy) return;
      const height = Number(this.editorHeightCm);
      const weight = Number(this.editorWeightKg);
      const goal = this.editorGoal;
      if (!Number.isFinite(height) || height < 120 || height > 230) {
        this.editorError = 'Height must be between 120 and 230 cm.';
        return;
      }
      if (!Number.isFinite(weight) || weight < 35 || weight > 250) {
        this.editorError = 'Weight must be between 35 and 250 kg.';
        return;
      }
      if (!['cut', 'maintain', 'bulk'].includes(goal)) {
        this.editorError = 'Invalid goal value.';
        return;
      }
      this.editorBusy = true;
      try {
        this.hunterProfile.heightCm = Math.round(height);
        this.hunterProfile.weightKg = Math.round(weight);
        this.hunterProfile.goal = goal;
        this.meta.aiDietPlanMeals = null;
        this.meta.aiDietPlanDayKey = null;
        this.meta.aiDietPlanProfileKey = null;
        this.meta.aiDietPlanNutrition = null;
        this.meta.aiDietPlanNote = null;
        this.persistMediaFields();
        this.save();
        await this.syncProfileToBackend();
        this.scheduleBackendSync();
        this.applyDietMealTemplate();
        this.recordDailyNutritionSnapshot();
        this.editorInfo = 'Profile updated. Click Generate Diet Plan to create today\'s AI plan.';
      } catch (error) {
        this.editorError = error?.message || 'Failed to save profile changes.';
      } finally {
        this.editorBusy = false;
      }
    },

    async updatePfpFromEditorFile(event) {
      const input = event?.target;
      const file = input?.files && input.files[0] ? input.files[0] : null;
      if (!file) return;
      this.editorInfo = '';
      this.editorError = '';
      try {
        const dataUrl = await this.readImageAsDataUrl(file, 720, 720, 0.82);
        this.hunterProfile.pfpUrl = dataUrl;
        this.persistMediaFields();
        this.save();
        this.editorInfo = 'PFP updated.';
      } catch (error) {
        this.editorError = error?.message || 'Failed to update PFP.';
      } finally {
        if (input) input.value = '';
      }
    },

    async updateBannerFromEditorFile(event) {
      const input = event?.target;
      const file = input?.files && input.files[0] ? input.files[0] : null;
      if (!file) return;
      this.editorInfo = '';
      this.editorError = '';
      try {
        const dataUrl = await this.readImageAsDataUrl(file, 1600, 500, 0.82);
        this.hunterProfile.bannerUrl = dataUrl;
        this.persistMediaFields();
        this.save();
        this.editorInfo = 'Banner updated.';
      } catch (error) {
        this.editorError = error?.message || 'Failed to update banner.';
      } finally {
        if (input) input.value = '';
      }
    },

    isDietUnlocked() {
      return this.isFocusBuildSelected();
    },

    buildActivityFactor(build = null) {
      const activeBuild = build || this.meta.focusBuild;
      if (activeBuild === 'strength') return 1.72;
      if (activeBuild === 'athletic') return 1.62;
      if (activeBuild === 'monarch') return 1.58;
      if (activeBuild === 'aesthetic') return 1.48;
      return 1.55;
    },

    goalCalorieShift() {
      const goal = this.hunterProfile?.goal || 'maintain';
      if (goal === 'cut') return -450;
      if (goal === 'bulk') return 300;
      return 0;
    },

    nutritionStrategyProfile(overrideBuild) {
      const build = typeof overrideBuild === 'undefined'
        ? (this.isFocusBuildSelected() ? this.meta.focusBuild : null)
        : overrideBuild;
      if (build === 'aesthetic') {
        return {
          source: 'build',
          driver: this.focusBuildLabel(build),
          label: 'Slight Calorie Deficit',
          note: 'Aesthetic build active: BMR/TDEE calories with a mild deficit and lean-preserving protein.',
          calorieShift: -180,
          proteinPerKg: 2.0,
          carbsPerKg: 2.6,
          fatPerKg: 0.8
        };
      }
      if (build === 'strength') {
        return {
          source: 'build',
          driver: this.focusBuildLabel(build),
          label: 'Calorie Surplus',
          note: 'Strength build active: BMR/TDEE calories with a performance surplus for progressive overload.',
          calorieShift: 280,
          proteinPerKg: 1.9,
          carbsPerKg: 3.5,
          fatPerKg: 0.9
        };
      }
      if (build === 'athletic') {
        return {
          source: 'build',
          driver: this.focusBuildLabel(build),
          label: 'Balanced Macros',
          note: 'Athletic build active: BMR/TDEE calories balanced for speed, endurance, and recovery.',
          calorieShift: 0,
          proteinPerKg: 1.85,
          carbsPerKg: 3.0,
          fatPerKg: 0.85
        };
      }
      if (build === 'monarch') {
        return {
          source: 'build',
          driver: this.focusBuildLabel(build),
          label: 'Strict High-Protein',
          note: 'Monarch build active: BMR/TDEE calories with strict adherence and higher protein density.',
          calorieShift: -80,
          proteinPerKg: 2.25,
          carbsPerKg: 2.4,
          fatPerKg: 0.8
        };
      }

      const goal = this.hunterProfile?.goal || 'maintain';
      if (goal === 'cut') {
        return {
          source: 'profile',
          driver: 'Profile Goal',
          label: 'Fat Loss',
          note: 'Profile goal active: deficit target for body-fat reduction.',
          calorieShift: -250,
          proteinPerKg: 2.0,
          carbsPerKg: 2.5,
          fatPerKg: 0.8
        };
      }
      if (goal === 'bulk') {
        return {
          source: 'profile',
          driver: 'Profile Goal',
          label: 'Lean Bulk',
          note: 'Profile goal active: surplus target for size and strength gain.',
          calorieShift: 250,
          proteinPerKg: 1.8,
          carbsPerKg: 3.4,
          fatPerKg: 0.9
        };
      }
      return {
        source: 'profile',
        driver: 'Profile Goal',
        label: 'Body Recomposition',
        note: 'Profile goal active: maintenance calories with balanced macro split.',
        calorieShift: 0,
        proteinPerKg: 1.8,
        carbsPerKg: 3.0,
        fatPerKg: 0.85
      };
    },

    nutritionTargets(overrideBuild) {
      if (!this.isDietUnlocked() && typeof overrideBuild === 'undefined') {
        return { protein: 0, carbs: 0, calories: 0 };
      }
      if (!this.hasFreshAiDietPlan()) {
        return { protein: 0, carbs: 0, calories: 0 };
      }
      const ai = this.aiDietNutritionPlan();
      return {
        protein: ai.protein,
        carbs: ai.carbs,
        calories: ai.calories
      };
    },

    nutritionConsumed() {
      return this.dietPlan.reduce((sum, meal) => {
        if (!meal.done) return sum;
        return {
          protein: sum.protein + (meal.protein || 0),
          carbs: sum.carbs + (meal.carbs || 0),
          calories: sum.calories + (meal.calories || 0)
        };
      }, { protein: 0, carbs: 0, calories: 0 });
    },

    nutritionPlanTotals() {
      return this.dietPlan.reduce((sum, meal) => ({
        protein: sum.protein + (meal.protein || 0),
        carbs: sum.carbs + (meal.carbs || 0),
        calories: sum.calories + (meal.calories || 0)
      }), { protein: 0, carbs: 0, calories: 0 });
    },

    nutritionPercent(nutrient) {
      const consumed = this.nutritionConsumed()[nutrient] || 0;
      const target = this.nutritionPlanTotals()[nutrient] || 1;
      if (target <= 0) return 0;
      return Math.max(0, Math.min(100, Math.round((consumed / target) * 100)));
    },

    nutritionGoalLabel() {
      if (!this.isDietUnlocked()) return 'Locked';
      return this.nutritionStrategyProfile().label;
    },

    nutritionDriverLabel() {
      if (!this.isDietUnlocked()) return 'Build Required';
      return this.nutritionStrategyProfile().driver;
    },

    nutritionStrategyNote() {
      if (!this.isDietUnlocked()) return 'Select a Build Focus in Quests to unlock your adaptive diet protocol.';
      return this.nutritionStrategyProfile().note;
    },

    weekKeyFromDateKey(dateKey) {
      const date = new Date(`${dateKey}T00:00:00`);
      if (Number.isNaN(date.getTime())) return this.currentWeekKey();
      const jan1 = new Date(date.getFullYear(), 0, 1);
      const dayMs = 24 * 60 * 60 * 1000;
      const dayOfYear = Math.floor((date - jan1) / dayMs) + 1;
      const week = Math.ceil(dayOfYear / 7);
      return `${date.getFullYear()}-W${String(week).padStart(2, '0')}`;
    },

    activeBuildForDate(dateKey) {
      return this.meta.focusBuildDayKey === dateKey ? this.meta.focusBuild : null;
    },

    mealConsistencyPercent() {
      const trackedMeals = this.dietPlan.filter((meal) => meal.key !== 'hydration');
      if (trackedMeals.length === 0) return 0;
      const done = trackedMeals.filter((meal) => meal.done).length;
      return Math.max(0, Math.min(100, Math.round((done / trackedMeals.length) * 100)));
    },

    recordDailyNutritionSnapshot(dateKey = this.todayDateKey()) {
      if (!this.meta || typeof this.meta !== 'object') return;
      if (!this.meta.weeklyNutritionHistory || typeof this.meta.weeklyNutritionHistory !== 'object') {
        this.meta.weeklyNutritionHistory = {};
      }

      const buildForDate = this.activeBuildForDate(dateKey);
      const targets = this.nutritionTargets(buildForDate);
      const consumed = this.nutritionConsumed();
      const proteinPercent = targets.protein > 0
        ? Math.max(0, Math.min(100, Math.round((consumed.protein / targets.protein) * 100)))
        : 0;
      const hydrationPercent = Math.max(0, Math.min(100, Math.round((this.meta.dietWaterLiters / this.waterGoalLiters) * 100)));
      const consistencyPercent = this.mealConsistencyPercent();
      const weekKey = this.weekKeyFromDateKey(dateKey);

      if (!this.meta.weeklyNutritionHistory[weekKey] || typeof this.meta.weeklyNutritionHistory[weekKey] !== 'object') {
        this.meta.weeklyNutritionHistory[weekKey] = { days: {} };
      }
      if (!this.meta.weeklyNutritionHistory[weekKey].days || typeof this.meta.weeklyNutritionHistory[weekKey].days !== 'object') {
        this.meta.weeklyNutritionHistory[weekKey].days = {};
      }

      this.meta.weeklyNutritionHistory[weekKey].days[dateKey] = {
        proteinPercent,
        hydrationPercent,
        consistencyPercent
      };

      const allWeeks = Object.keys(this.meta.weeklyNutritionHistory).sort();
      const maxWeeks = 12;
      if (allWeeks.length > maxWeeks) {
        allWeeks.slice(0, allWeeks.length - maxWeeks).forEach((oldWeek) => {
          delete this.meta.weeklyNutritionHistory[oldWeek];
        });
      }
    },

    weeklyConsistencyLabel(percent) {
      if (percent >= 85) return 'Excellent';
      if (percent >= 70) return 'Good';
      if (percent >= 50) return 'Needs Work';
      return 'Poor';
    },

    weeklySystemRecommendation(summary) {
      if (!summary || summary.trackedDays === 0) {
        return 'Collect more nutrition data this week.';
      }
      if (summary.proteinPercent < 75) {
        return 'Increase recovery intake.';
      }
      if (summary.hydrationPercent < 75) {
        return 'Increase hydration consistency.';
      }
      if (summary.consistencyPercent < 70) {
        return 'Improve meal completion consistency.';
      }
      return 'Maintain current nutrition protocol.';
    },

    weeklyNutritionSummary() {
      const weekKey = this.currentWeekKey();
      const history = this.meta.weeklyNutritionHistory && this.meta.weeklyNutritionHistory[weekKey];
      const dayMap = history && history.days && typeof history.days === 'object'
        ? { ...history.days }
        : {};
      const today = this.todayDateKey();
      const todayTargets = this.nutritionTargets(this.activeBuildForDate(today));
      const todayConsumed = this.nutritionConsumed();
      dayMap[today] = {
        proteinPercent: todayTargets.protein > 0
          ? Math.max(0, Math.min(100, Math.round((todayConsumed.protein / todayTargets.protein) * 100)))
          : 0,
        hydrationPercent: Math.max(0, Math.min(100, Math.round((this.meta.dietWaterLiters / this.waterGoalLiters) * 100))),
        consistencyPercent: this.mealConsistencyPercent()
      };

      const entries = Object.values(dayMap);
      const trackedDays = entries.length;
      if (trackedDays === 0) {
        const emptySummary = {
          weekKey,
          trackedDays: 0,
          proteinPercent: 0,
          hydrationPercent: 0,
          consistencyPercent: 0,
          consistencyLabel: 'No Data',
          recommendation: 'Collect more nutrition data this week.'
        };
        return emptySummary;
      }

      const average = (field) => Math.round(entries.reduce((sum, item) => sum + (item[field] || 0), 0) / trackedDays);
      const proteinPercent = average('proteinPercent');
      const hydrationPercent = average('hydrationPercent');
      const consistencyPercent = average('consistencyPercent');
      const summary = {
        weekKey,
        trackedDays,
        proteinPercent,
        hydrationPercent,
        consistencyPercent,
        consistencyLabel: this.weeklyConsistencyLabel(consistencyPercent)
      };
      summary.recommendation = this.weeklySystemRecommendation(summary);
      return summary;
    },

    activeDietTemplateKey() {
      return this.isFocusBuildSelected() ? this.meta.focusBuild : 'default';
    },

    dietProfileSignature() {
      const height = Number(this.hunterProfile?.heightCm);
      const weight = Number(this.hunterProfile?.weightKg);
      const goal = this.hunterProfile?.goal || 'maintain';
      if (!Number.isFinite(height) || !Number.isFinite(weight) || !['cut', 'maintain', 'bulk'].includes(goal)) {
        return null;
      }
      return `${Math.round(height)}|${Math.round(weight)}|${goal}`;
    },

    normalizeAiDietMeals(rawMeals) {
      const order = ['breakfast', 'lunch', 'hydration', 'dinner', 'before_bed'];
      const byKey = {};
      if (Array.isArray(rawMeals)) {
        rawMeals.forEach((meal) => {
          const key = typeof meal?.key === 'string' ? meal.key.trim().toLowerCase() : '';
          if (!order.includes(key)) return;
          byKey[key] = meal;
        });
      }
      const defaults = {
        breakfast: { time: 'Breakfast', stat: 'recovery', xp: 10, protein: 30, carbs: 55, calories: 520, food: 'Balanced breakfast plate' },
        lunch: { time: 'Lunch', stat: 'strength', xp: 15, protein: 35, carbs: 70, calories: 680, food: 'Balanced lunch plate' },
        hydration: { time: 'Hydration', stat: 'endurance', xp: 5, protein: 0, carbs: 0, calories: 0, food: '3L+ water target' },
        dinner: { time: 'Dinner', stat: 'recovery', xp: 10, protein: 30, carbs: 45, calories: 560, food: 'Balanced dinner plate' },
        before_bed: { time: 'Before Bed', stat: 'recovery', xp: 5, protein: 12, carbs: 10, calories: 150, food: 'Light pre-sleep meal' }
      };
      return order.map((key) => {
        const source = byKey[key] || {};
        const base = defaults[key];
        const protein = key === 'hydration' ? 0 : Math.max(0, Math.round(Number(source.protein ?? base.protein) || 0));
        const carbs = key === 'hydration' ? 0 : Math.max(0, Math.round(Number(source.carbs ?? base.carbs) || 0));
        const calories = key === 'hydration' ? 0 : Math.max(0, Math.round(Number(source.calories ?? base.calories) || 0));
        return {
          key,
          time: base.time,
          food: typeof source.food === 'string' && source.food.trim() ? source.food.trim() : base.food,
          stat: base.stat,
          xp: base.xp,
          protein,
          carbs,
          calories,
          done: false
        };
      });
    },

    normalizeAiDietNutrition(rawNutrition) {
      const source = rawNutrition && typeof rawNutrition === 'object' ? rawNutrition : {};
      return {
        calories: Math.max(1200, Math.round(Number(source.calories) || 2200)),
        protein: Math.max(60, Math.round(Number(source.protein) || 130)),
        carbs: Math.max(50, Math.round(Number(source.carbs) || 240)),
        fat: Math.max(20, Math.round(Number(source.fat) || 60)),
        water_liters: Math.max(1, Math.min(8, Math.round((Number(source.water_liters) || 3) * 10) / 10))
      };
    },

    aiDietMealPlan() {
      const source = Array.isArray(this.meta?.aiDietPlanMeals) ? this.meta.aiDietPlanMeals : [];
      const doneByKey = this.meta?.dietMealStatus && typeof this.meta.dietMealStatus === 'object'
        ? this.meta.dietMealStatus
        : {};
      return source.map((meal) => ({
        ...meal,
        done: Boolean(doneByKey[meal.key])
      }));
    },

    hasAiDietPlan() {
      return this.aiDietMealPlan().length > 0;
    },

    hasFreshAiDietPlan() {
      const signature = this.dietProfileSignature();
      const meals = Array.isArray(this.meta?.aiDietPlanMeals) ? this.meta.aiDietPlanMeals : [];
      return Boolean(
        signature
        && this.meta?.aiDietPlanProfileKey === signature
        && this.meta?.aiDietPlanDayKey === this.todayDateKey()
        && meals.length > 0
      );
    },

    canGenerateDietPlanToday() {
      return this.meta?.aiDietPlanDayKey !== this.todayDateKey();
    },

    aiDietNutritionPlan() {
      return this.normalizeAiDietNutrition(this.meta?.aiDietPlanNutrition);
    },

    async fetchAiDietPlan() {
      const signature = this.dietProfileSignature();
      if (!signature) {
        throw new Error('Height, weight, and goal are required for AI diet planning.');
      }
      const response = await this.backendRequestWithStatus('/ai/diet-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          height_cm: Math.round(Number(this.hunterProfile.heightCm)),
          weight_kg: Math.round(Number(this.hunterProfile.weightKg)),
          goal: this.hunterProfile.goal
        })
      });
      if (!response) {
        throw new Error('AI diet planner is unavailable right now.');
      }
      if (!response.ok) {
        let detail = '';
        try {
          const payload = await response.json();
          detail = typeof payload?.detail === 'string' ? payload.detail : '';
        } catch (_) {
          try {
            detail = (await response.text()) || '';
          } catch (_) {
            detail = '';
          }
        }
        const baseMessage = `AI diet planner failed (${response.status})`;
        throw new Error(detail ? `${baseMessage}: ${detail}` : baseMessage);
      }
      const payload = await response.json();
      const meals = this.normalizeAiDietMeals(payload?.meals);
      if (!Array.isArray(meals) || meals.length === 0) {
        throw new Error('AI planner returned an invalid meal plan.');
      }
      const nutrition = this.normalizeAiDietNutrition(payload?.nutrition);
      const note = typeof payload?.note === 'string' && payload.note.trim() ? payload.note.trim() : null;
      this.meta.aiDietPlanMeals = meals;
      this.meta.aiDietPlanNutrition = nutrition;
      this.meta.aiDietPlanNote = note;
      this.meta.aiDietPlanDayKey = this.todayDateKey();
      this.meta.aiDietPlanProfileKey = signature;
      return meals;
    },

    async refreshAiDietPlan(force = false) {
      const signature = this.dietProfileSignature();
      if (!signature) return false;
      const today = this.todayDateKey();
      const alreadyFresh = !force
        && this.meta.aiDietPlanDayKey === today
        && this.meta.aiDietPlanProfileKey === signature
        && Array.isArray(this.meta.aiDietPlanMeals)
        && this.meta.aiDietPlanMeals.length > 0;
      if (alreadyFresh) return true;
      try {
        await this.fetchAiDietPlan();
        this.applyDietMealTemplate();
        this.save();
        return true;
      } catch (_) {
        return false;
      }
    },

    async generateDietPlan() {
      this.applyDailyResets();
      if (!this.isDietUnlocked()) {
        this.log('Diet is locked. Select a build first.');
        return;
      }
      if (!this.canGenerateDietPlanToday()) {
        this.log('Diet plan generation already used for today.');
        return;
      }
      if (this.aiDietGenerationBusy) return;
      this.aiDietGenerationBusy = true;
      try {
        const ok = await this.refreshAiDietPlan(true);
        if (!ok) {
          this.meta.aiDietPlanMeals = null;
          this.meta.aiDietPlanNutrition = null;
          this.meta.aiDietPlanNote = null;
          this.meta.aiDietPlanDayKey = null;
          this.meta.aiDietPlanProfileKey = null;
          this.applyDietMealTemplate();
          this.save();
          this.log('AI diet generation failed.');
          return;
        }
        this.applyDietMealTemplate();
        this.recordDailyNutritionSnapshot();
        this.save();
        this.log('AI diet plan generated successfully.');
      } catch (error) {
        this.log(error?.message || 'AI diet generation failed.');
      } finally {
        this.aiDietGenerationBusy = false;
      }
    },

    applyDietMealTemplate() {
      const aiTemplate = this.hasFreshAiDietPlan()
        ? (Array.isArray(this.meta?.aiDietPlanMeals) ? this.meta.aiDietPlanMeals : null)
        : null;
      const template = aiTemplate && aiTemplate.length ? aiTemplate : [];
      const doneByKey = {};

      if (this.meta?.dietMealStatus && typeof this.meta.dietMealStatus === 'object') {
        Object.assign(doneByKey, this.meta.dietMealStatus);
      }

      this.dietPlan.forEach((meal) => {
        if (!(meal.key in doneByKey)) {
          doneByKey[meal.key] = Boolean(meal.done);
        }
      });

      this.dietPlan = template.map((meal) => ({
        ...meal,
        done: Boolean(doneByKey[meal.key])
      }));

      if (this.meta && typeof this.meta === 'object') {
        this.meta.dietMealStatus = {};
        this.dietPlan.forEach((meal) => {
          this.meta.dietMealStatus[meal.key] = Boolean(doneByKey[meal.key]);
        });
      }
    },

    waterIntakePercent() {
      return Math.max(0, Math.min(100, Math.round((this.meta.dietWaterLiters / this.waterGoalLiters) * 100)));
    },

    addWaterLiter() {
      this.applyDailyResets();
      if (!this.isDietUnlocked()) {
        this.log('Diet is locked. Select a build first.');
        return;
      }
      if (this.meta.dietWaterLiters >= this.waterGoalLiters) {
        this.log('Water Intake already maxed for today.');
        return;
      }
      this.meta.dietWaterLiters += 1;
      this.applyDietStatXp('recovery', 1);
      this.recordDailyNutritionSnapshot();
      this.log('Water Intake updated: +1L (+1 Recovery XP).');
      this.save();
    },

    allDailyQuestsComplete() {
      return this.quests.length > 0 && this.quests.every((quest) => quest.done);
    },

    modeMultiplier(mode = null) {
      const activeMode = mode || this.meta.dailyMode;
      if (activeMode === 'hard') return 2;
      if (activeMode === 'extreme') return 3;
      return 1;
    },

    modeDifficultyMultiplier(mode = null) {
      const activeMode = mode || this.meta.dailyMode;
      if (activeMode === 'hard') return 1.2;
      if (activeMode === 'extreme') return 1.4;
      return 1;
    },

    modeLabel(mode = null) {
      const activeMode = mode || this.meta.dailyMode;
      if (activeMode === 'hard') return 'Hard Mode';
      if (activeMode === 'extreme') return 'Extreme Mode';
      return 'Normal Mode';
    },

    isFocusBuildSelected() {
      return this.meta.focusBuildDayKey === this.todayDateKey() && !!this.meta.focusBuild;
    },

    focusBuildLabel(build = null) {
      const activeBuild = build || this.meta.focusBuild;
      return this.focusBuildProfiles[activeBuild]?.label || 'No Build Selected';
    },

    focusBuildSummary(build = null) {
      const activeBuild = build || this.meta.focusBuild;
      return this.focusBuildProfiles[activeBuild]?.summary || 'Pick a build to adapt directives.';
    },

    selectFocusBuild(build) {
      this.applyDailyResets();
      const allowed = ['aesthetic', 'strength', 'athletic', 'monarch'];
      if (!allowed.includes(build)) return;
      if (this.meta.focusBuildDayKey === this.todayDateKey() && this.meta.focusBuild && this.meta.focusBuild !== build) {
        this.log(`Build already locked: ${this.focusBuildLabel(this.meta.focusBuild)}.`);
        return;
      }
      this.meta.focusBuild = build;
      this.meta.focusBuildDayKey = this.todayDateKey();
      this.applyDietMealTemplate();
      this.recordDailyNutritionSnapshot();
      this.log(`Build selected: ${this.focusBuildLabel(build)}.`);
      this.log(`Nutrition planner updated: ${this.nutritionGoalLabel()}.`);
      this.save();
    },

    aiBuildRecommendation() {
      const stats = this.profile?.stats || {};
      const strength = Number(stats.strength || 0);
      const endurance = Number(stats.endurance || 0);
      const discipline = Number(stats.discipline || 0);

      if (strength >= endurance + 6) {
        return {
          build: 'athletic',
          reason: 'AI: Strength lead detected. Athletic focus balances endurance and speed.'
        };
      }
      if (endurance >= strength + 6) {
        return {
          build: 'strength',
          reason: 'AI: Endurance lead detected. Strength focus closes power gap.'
        };
      }
      if (discipline < 8) {
        return {
          build: 'aesthetic',
          reason: 'AI: Discipline is low. Aesthetic rhythm improves consistency.'
        };
      }
      return {
        build: 'monarch',
        reason: 'AI: Stats are stable. Balanced elite progression is optimal.'
      };
    },

    activeFocusProfile() {
      if (!this.isFocusBuildSelected()) return null;
      return this.focusBuildProfiles[this.meta.focusBuild] || null;
    },

    questCategory(quest) {
      const key = quest?.key || '';
      const id = quest?.id;
      if (id === 21 || id === 22 || id === 23) return 'discipline';
      if (['pushups_main', 'dips', 'diamond_pushups', 'pullups', 'rows', 'band_curls', 'pike_pushups', 'lateral_raises', 'boss_pushups', 'boss_pullups'].includes(key)) return 'strength';
      if (['burpees', 'jump_squats', 'mountain_climbers', 'sprint_intervals', 'light_cardio', 'dead_hangs', 'boss_burpees'].includes(key)) return 'endurance';
      if (['stretching', 'mobility_work', 'sleep_requirement', 'plank_hold', 'plank_variations', 'wall_sit'].includes(key)) return 'recovery';
      return 'special';
    },

    buildCategoryMultiplier(quest, build = null) {
      const activeBuild = build || this.meta.focusBuild;
      const profile = this.focusBuildProfiles[activeBuild];
      if (!profile) return 1;
      const category = this.questCategory(quest);
      return profile.categoryModifiers[category] || 1;
    },

    buildXpMultiplier(quest) {
      const profile = this.activeFocusProfile();
      if (!profile) return 1;
      return profile.xpMultiplier * this.buildCategoryMultiplier(quest);
    },

    selectDailyMode(mode) {
      this.applyDailyResets();
      if (!this.isFocusBuildSelected()) {
        this.log('Select a build before locking daily mode.');
        return;
      }
      const allowed = ['normal', 'hard', 'extreme'];
      if (!allowed.includes(mode)) return;
      if (this.meta.dailyModeDayKey === this.todayDateKey() && this.meta.dailyMode && this.meta.dailyMode !== mode) {
        this.log(`Daily mode already locked: ${this.modeLabel(this.meta.dailyMode)}.`);
        return;
      }
      this.meta.dailyMode = mode;
      this.meta.dailyModeDayKey = this.todayDateKey();
      if (mode === 'extreme') {
        const projectedExtremeStreak = (this.meta.extremeModeStreak || 0) + 1;
        if (projectedExtremeStreak >= 3 && this.meta.lastExtremeRiskAlertDayKey !== this.todayDateKey()) {
          this.activeSystemNotification = {
            id: Date.now(),
            title: '⚠ System Alert',
            message: 'Recovery risk detected. Performance penalty possible.'
          };
          this.log('System Alert: Recovery risk detected. Performance penalty possible.');
          this.meta.lastExtremeRiskAlertDayKey = this.todayDateKey();
          if (!this.meta.fatigueDebuffActive && Math.random() < 0.35) {
            this.meta.fatigueDebuffActive = true;
            this.log('Performance penalty applied: Fatigue Debuff activated.');
          }
        }
      }
      this.syncModeSpecificQuests();
      this.log(`Daily mode selected: ${this.modeLabel(mode)} (${this.modeMultiplier(mode)}x XP).`);
      this.save();
    },

    isDailyModeSelected() {
      return this.meta.dailyModeDayKey === this.todayDateKey() && !!this.meta.dailyMode;
    },

    timeUntilDailyResetMs() {
      const now = new Date();
      const nextReset = new Date(now);
      nextReset.setHours(24, 0, 0, 0);
      return Math.max(0, nextReset.getTime() - now.getTime());
    },

    formatDuration(ms) {
      const totalSeconds = Math.floor(ms / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    },

    isFinalHourBeforeReset() {
      return this.timeUntilDailyResetMs() <= 60 * 60 * 1000;
    },

    updateResetCountdown() {
      this.resetCountdownText = this.formatDuration(this.timeUntilDailyResetMs());
      const previousResetDate = this.meta.lastDailyResetDate;
      this.applyDailyResets();
      this.maybeSendIncompleteQuestReminder();
      if (this.meta.lastDailyResetDate !== previousResetDate) {
        this.save();
      }
    },

    startResetCountdownLoop() {
      this.updateResetCountdown();
      if (this.resetCountdownTimer) {
        clearInterval(this.resetCountdownTimer);
      }
      this.resetCountdownTimer = setInterval(() => {
        this.updateResetCountdown();
      }, 1000);
    },

    questReward(quest) {
      if (!quest) return 0;
      let reward = quest.xp * this.modeMultiplier() * this.streakMultiplier() * this.buildXpMultiplier(quest);
      reward = Math.round(reward);
      if (this.meta.fatigueDebuffActive) {
        reward = Math.round(reward * this.fatigueDebuffMultiplier);
      }
      return Math.max(1, reward);
    },

    questPreviewXp(quest) {
      return this.questReward(quest);
    },

    scaledInteger(base) {
      return Math.ceil(base * this.modeDifficultyMultiplier());
    },

    modeIndex(mode = null) {
      const activeMode = mode || this.meta.dailyMode;
      if (activeMode === 'hard') return 1;
      if (activeMode === 'extreme') return 2;
      return 0;
    },

    questNoteForDisplay(quest) {
      if (!quest) return '';
      const idx = this.modeIndex();
      const buildScale = this.buildCategoryMultiplier(quest, this.isFocusBuildSelected() ? this.meta.focusBuild : 'monarch');
      const scaleCount = (value) => Math.max(1, Math.round(value * buildScale));
      if (quest.key === 'pushups_main') {
        const reps = scaleCount(this.pushupTargetReps() + (idx * 10));
        const sets = [4, 5, 6][idx];
        return `Objective: ${reps} push-ups | Requirement: minimum ${sets} sets | Stat Gain: +2 Strength`;
      }
      if (quest.key === 'dips') {
        const reps = scaleCount([24, 30, 36][idx]);
        return `Objective: ${reps} total reps | Controlled form`;
      }
      if (quest.key === 'diamond_pushups') {
        const reps = scaleCount([16, 20, 24][idx]);
        return `Objective: ${reps} total reps | Strict lockout`;
      }
      if (quest.key === 'plank_hold') {
        const seconds = scaleCount([120, 180, 240][idx]);
        return `Objective: ${seconds}s total plank hold`;
      }
      if (quest.key === 'pullups') {
        const reps = scaleCount(this.trainingLoadTargets().pullups);
        return `Objective: ${reps} total pull-up reps (assisted allowed)`;
      }
      if (quest.key === 'rows') {
        const reps = scaleCount([30, 40, 50][idx]);
        return `Objective: ${reps} inverted row reps`;
      }
      if (quest.key === 'band_curls') {
        const reps = scaleCount([36, 48, 60][idx]);
        return `Objective: ${reps} curl reps`;
      }
      if (quest.key === 'dead_hangs') {
        const seconds = scaleCount([90, 120, 150][idx]);
        return `Objective: ${seconds}s total hang time`;
      }
      if (quest.key === 'squats') {
        const reps = scaleCount(this.trainingLoadTargets().squats);
        return `Objective: ${reps} squats`;
      }
      if (quest.key === 'lunges') {
        const reps = scaleCount([40, 50, 60][idx]);
        return `Objective: ${reps} lunges total`;
      }
      if (quest.key === 'wall_sit') {
        const seconds = scaleCount([120, 180, 240][idx]);
        return `Objective: ${seconds}s wall sit`;
      }
      if (quest.key === 'calf_raises') {
        const reps = scaleCount([60, 80, 100][idx]);
        return `Objective: ${reps} calf raises`;
      }
      if (quest.key === 'pike_pushups') {
        const reps = scaleCount([20, 28, 36][idx]);
        return `Objective: ${reps} pike push-ups`;
      }
      if (quest.key === 'lateral_raises') {
        const reps = scaleCount([36, 48, 60][idx]);
        return `Objective: ${reps} band lateral raise reps`;
      }
      if (quest.key === 'plank_variations') {
        const seconds = scaleCount([150, 210, 270][idx]);
        return `Objective: ${seconds}s mixed plank variations`;
      }
      if (quest.key === 'leg_raises') {
        const reps = scaleCount([24, 32, 40][idx]);
        return `Objective: ${reps} leg raises`;
      }
      if (quest.key === 'burpees') {
        const reps = scaleCount([30, 40, 50][idx]);
        return `Objective: ${reps} burpees`;
      }
      if (quest.key === 'jump_squats') {
        const reps = scaleCount([30, 40, 50][idx]);
        return `Objective: ${reps} jump squats`;
      }
      if (quest.key === 'mountain_climbers') {
        const reps = scaleCount([80, 100, 120][idx]);
        return `Objective: ${reps} total climber reps`;
      }
      if (quest.key === 'sprint_intervals') {
        const rounds = scaleCount([6, 8, 10][idx]);
        return `Objective: ${rounds} sprint rounds (20s on / 70s off) | Stat Gain: +1 Endurance`;
      }
      if (quest.key === 'mobility_work') {
        const minutes = scaleCount([20, 25, 30][idx]);
        return `Objective: ${minutes} min mobility`;
      }
      if (quest.key === 'stretching') {
        const minutes = scaleCount([20, 25, 30][idx]);
        return `Objective: ${minutes} min stretching`;
      }
      if (quest.key === 'light_cardio') {
        const minutes = scaleCount([25, 35, 45][idx]);
        return `Objective: ${minutes} min light cardio | Stat Gain: +1 Endurance`;
      }
      if (quest.key === 'sleep_requirement') {
        const sleepHours = [8.0, 8.5, 9.0][idx] * buildScale;
        return `Objective: ${sleepHours.toFixed(1)}h sleep minimum | Stat Gain: +1 Recovery`;
      }
      if (quest.key === 'boss_pushups') {
        const reps = scaleCount(this.pushupTargetReps() + (idx * 10));
        return `Timed Circuit Objective: ${reps} push-ups`;
      }
      if (quest.key === 'boss_squats') {
        const reps = scaleCount(this.trainingLoadTargets().squats);
        return `Timed Circuit Objective: ${reps} squats`;
      }
      if (quest.key === 'boss_pullups') {
        const reps = scaleCount(this.trainingLoadTargets().pullups);
        return `Timed Circuit Objective: ${reps} pull-ups`;
      }
      if (quest.key === 'boss_burpees') {
        const reps = scaleCount([24, 30, 36][idx]);
        return `Timed Circuit Objective: ${reps} burpees`;
      }
      if (quest.id === 21) {
        const hours = scaleCount([6, 7, 8][idx]);
        return `No social media for ${hours} hours`;
      }
      if (quest.id === 22) {
        const minutes = scaleCount([30, 40, 50][idx]);
        return `${minutes} min reading`;
      }
      if (quest.id === 23) {
        const minutes = scaleCount([10, 15, 20][idx]);
        return `${minutes} min meditation`;
      }
      return quest.note || '';
    },

    syncModeSpecificQuests() {
      if (!Array.isArray(this.quests)) this.quests = [];
      const hasMindMode = this.meta.dailyMode === 'hard' || this.meta.dailyMode === 'extreme';

      if (!hasMindMode) {
        this.quests = this.quests.filter((quest) => !this.mindDisciplineQuestTemplates.some((tpl) => tpl.id === quest.id));
        return;
      }

      this.mindDisciplineQuestTemplates.forEach((template) => {
        const exists = this.quests.some((quest) => quest.id === template.id);
        if (!exists) {
          this.quests.push({
            id: template.id,
            title: template.title,
            note: this.questNoteForDisplay(template),
            xp: template.xp,
            done: false
          });
        }
      });
    },

    streakMultiplier() {
      const streak = this.meta.dailyStreak || 0;
      if (streak >= 7) return 1.5;
      if (streak >= 3) return 1.2;
      return 1;
    },

    ensureProfileStats() {
      if (!this.profile || typeof this.profile !== 'object') return;
      const currentStats = this.profile.stats && typeof this.profile.stats === 'object' ? this.profile.stats : {};
      this.profile.stats = {
        strength: Number.isFinite(currentStats.strength) ? currentStats.strength : 0,
        endurance: Number.isFinite(currentStats.endurance) ? currentStats.endurance : 0,
        agility: Number.isFinite(currentStats.agility) ? currentStats.agility : 0,
        discipline: Number.isFinite(currentStats.discipline) ? currentStats.discipline : 0,
        aura: Number.isFinite(currentStats.aura) ? currentStats.aura : 0,
        recovery: Number.isFinite(currentStats.recovery) ? currentStats.recovery : 0
      };
    },

    ensureHiddenQuestState() {
      if (!this.hiddenQuest || typeof this.hiddenQuest !== 'object') return;
      this.hiddenQuest.active = Boolean(this.hiddenQuest.active);
      this.hiddenQuest.completed = Boolean(this.hiddenQuest.completed);
      this.hiddenQuest.dayKey = typeof this.hiddenQuest.dayKey === 'string' ? this.hiddenQuest.dayKey : null;
      this.hiddenQuest.title = this.hiddenQuest.title || '🟦 System Alert: Hidden Quest Detected';
      this.hiddenQuest.objective = this.hiddenQuest.objective || 'Complete 50 push-ups today instead of 25.';
      this.hiddenQuest.rewardXp = Number.isFinite(this.hiddenQuest.rewardXp) ? this.hiddenQuest.rewardXp : 900;
      this.hiddenQuest.penaltyXp = Number.isFinite(this.hiddenQuest.penaltyXp) ? this.hiddenQuest.penaltyXp : 700;
    },

    ensureMetaDefaults() {
      this.meta.pushupConsistencyDays = Number.isFinite(this.meta.pushupConsistencyDays) ? this.meta.pushupConsistencyDays : 0;
      this.meta.pushupTier = Number.isFinite(this.meta.pushupTier) ? this.meta.pushupTier : 0;
      this.meta.gameStateUpdatedAt = this.normalizeIsoTimestamp(this.meta.gameStateUpdatedAt);
      this.meta.loadTier = Number.isFinite(this.meta.loadTier) ? Math.max(0, this.meta.loadTier) : 0;
      this.meta.loadCycleAnchorDate = typeof this.meta.loadCycleAnchorDate === 'string' ? this.meta.loadCycleAnchorDate : null;
      this.meta.loadCycleFullClears = Number.isFinite(this.meta.loadCycleFullClears) ? Math.max(0, this.meta.loadCycleFullClears) : 0;
      this.meta.dungeonArcWeek = Number.isFinite(this.meta.dungeonArcWeek) ? Math.max(1, this.meta.dungeonArcWeek) : 1;
      this.meta.extremeModeStreak = Number.isFinite(this.meta.extremeModeStreak) ? Math.max(0, this.meta.extremeModeStreak) : 0;
      this.meta.lastExtremeRiskAlertDayKey = typeof this.meta.lastExtremeRiskAlertDayKey === 'string' ? this.meta.lastExtremeRiskAlertDayKey : null;
      this.meta.lastDailyStreakCreditDate = typeof this.meta.lastDailyStreakCreditDate === 'string' ? this.meta.lastDailyStreakCreditDate : null;
      this.meta.lastIncompleteQuestReminderDayKey = typeof this.meta.lastIncompleteQuestReminderDayKey === 'string'
        ? this.meta.lastIncompleteQuestReminderDayKey
        : null;
      this.meta.lastIncompleteQuestReminderAt = this.normalizeIsoTimestamp(this.meta.lastIncompleteQuestReminderAt);
      this.meta.accountCreatedDateKey = typeof this.meta.accountCreatedDateKey === 'string'
        ? this.meta.accountCreatedDateKey
        : null;
      this.meta.questRotationDate = typeof this.meta.questRotationDate === 'string' ? this.meta.questRotationDate : null;
      this.meta.rotationAnchorDate = this.meta.accountCreatedDateKey
        || (typeof this.meta.rotationAnchorDate === 'string' ? this.meta.rotationAnchorDate : null)
        || this.todayDateKey();
      this.meta.protocolDay = Number.isFinite(this.meta.protocolDay) ? Math.min(7, Math.max(1, this.meta.protocolDay)) : 1;
      this.meta.dailyStartXp = Number.isFinite(this.meta.dailyStartXp) ? Math.max(0, this.meta.dailyStartXp) : this.profile.xp;
      const statsSnapshot = this.meta.dailyStartStats && typeof this.meta.dailyStartStats === 'object' ? this.meta.dailyStartStats : {};
      this.meta.dailyStartStats = {
        strength: Number.isFinite(statsSnapshot.strength) ? statsSnapshot.strength : this.profile.stats.strength,
        endurance: Number.isFinite(statsSnapshot.endurance) ? statsSnapshot.endurance : this.profile.stats.endurance,
        agility: Number.isFinite(statsSnapshot.agility) ? statsSnapshot.agility : this.profile.stats.agility,
        discipline: Number.isFinite(statsSnapshot.discipline) ? statsSnapshot.discipline : this.profile.stats.discipline,
        aura: Number.isFinite(statsSnapshot.aura) ? statsSnapshot.aura : this.profile.stats.aura,
        recovery: Number.isFinite(statsSnapshot.recovery) ? statsSnapshot.recovery : this.profile.stats.recovery
      };
      this.meta.weeklyDirectiveTaskCompletions = Number.isFinite(this.meta.weeklyDirectiveTaskCompletions)
        ? Math.max(0, Math.min(this.totalWeeklyDirectiveTasks(), this.meta.weeklyDirectiveTaskCompletions))
        : 0;
      this.meta.reassignmentDayKey = typeof this.meta.reassignmentDayKey === 'string' ? this.meta.reassignmentDayKey : null;
      this.meta.reassignmentProtocolDay = Number.isFinite(this.meta.reassignmentProtocolDay)
        ? Math.min(7, Math.max(1, this.meta.reassignmentProtocolDay))
        : null;
      this.meta.focusBuild = typeof this.meta.focusBuild === 'string' ? this.meta.focusBuild : null;
      this.meta.focusBuildDayKey = typeof this.meta.focusBuildDayKey === 'string' ? this.meta.focusBuildDayKey : null;
      const dietStatXp = this.meta.dietStatXp && typeof this.meta.dietStatXp === 'object' ? this.meta.dietStatXp : {};
      this.meta.dietStatXp = {
        strength: Number.isFinite(dietStatXp.strength) ? Math.max(0, Math.round(dietStatXp.strength)) : 0,
        endurance: Number.isFinite(dietStatXp.endurance) ? Math.max(0, Math.round(dietStatXp.endurance)) : 0,
        recovery: Number.isFinite(dietStatXp.recovery) ? Math.max(0, Math.round(dietStatXp.recovery)) : 0
      };
      const dailyStartDietStatXp = this.meta.dailyStartDietStatXp && typeof this.meta.dailyStartDietStatXp === 'object'
        ? this.meta.dailyStartDietStatXp
        : {};
      this.meta.dailyStartDietStatXp = {
        strength: Number.isFinite(dailyStartDietStatXp.strength) ? Math.max(0, Math.round(dailyStartDietStatXp.strength)) : this.meta.dietStatXp.strength,
        endurance: Number.isFinite(dailyStartDietStatXp.endurance) ? Math.max(0, Math.round(dailyStartDietStatXp.endurance)) : this.meta.dietStatXp.endurance,
        recovery: Number.isFinite(dailyStartDietStatXp.recovery) ? Math.max(0, Math.round(dailyStartDietStatXp.recovery)) : this.meta.dietStatXp.recovery
      };
      this.meta.dietTrackingDayKey = typeof this.meta.dietTrackingDayKey === 'string' ? this.meta.dietTrackingDayKey : this.todayDateKey();
      this.meta.aiDietPlanMeals = Array.isArray(this.meta.aiDietPlanMeals) ? this.meta.aiDietPlanMeals : null;
      this.meta.aiDietPlanNutrition = this.meta.aiDietPlanNutrition && typeof this.meta.aiDietPlanNutrition === 'object'
        ? this.normalizeAiDietNutrition(this.meta.aiDietPlanNutrition)
        : null;
      this.meta.aiDietPlanNote = typeof this.meta.aiDietPlanNote === 'string' ? this.meta.aiDietPlanNote : null;
      if (
        typeof this.meta.aiDietPlanNote === 'string'
        && this.meta.aiDietPlanNote.toLowerCase().includes('fallback plan generated locally')
      ) {
        this.meta.aiDietPlanMeals = null;
        this.meta.aiDietPlanNutrition = null;
        this.meta.aiDietPlanNote = null;
        this.meta.aiDietPlanDayKey = null;
        this.meta.aiDietPlanProfileKey = null;
      }
      this.meta.aiDietPlanDayKey = typeof this.meta.aiDietPlanDayKey === 'string' ? this.meta.aiDietPlanDayKey : null;
      this.meta.aiDietPlanProfileKey = typeof this.meta.aiDietPlanProfileKey === 'string' ? this.meta.aiDietPlanProfileKey : null;
      const existingDietMealStatus = this.meta.dietMealStatus && typeof this.meta.dietMealStatus === 'object'
        ? this.meta.dietMealStatus
        : {};
      this.meta.dietMealStatus = { ...existingDietMealStatus };
      this.dietPlan.forEach((meal) => {
        if (!meal || typeof meal.key !== 'string') return;
        if (!(meal.key in this.meta.dietMealStatus)) {
          this.meta.dietMealStatus[meal.key] = Boolean(meal.done);
        }
      });
      this.applyDietMealTemplate();
      this.meta.dietWaterLiters = Number.isFinite(this.meta.dietWaterLiters)
        ? Math.max(0, Math.min(this.waterGoalLiters, Math.round(this.meta.dietWaterLiters)))
        : 0;
      this.meta.dailyStartDietWaterLiters = Number.isFinite(this.meta.dailyStartDietWaterLiters)
        ? Math.max(0, Math.min(this.waterGoalLiters, Math.round(this.meta.dailyStartDietWaterLiters)))
        : this.meta.dietWaterLiters;
      this.meta.premiumMembershipActive = Boolean(this.meta.premiumMembershipActive);
      this.meta.premiumMembershipSince = typeof this.meta.premiumMembershipSince === 'string'
        ? this.meta.premiumMembershipSince
        : null;
      this.meta.premiumMembershipUntil = typeof this.meta.premiumMembershipUntil === 'string'
        ? this.meta.premiumMembershipUntil
        : null;
      this.meta.premiumLastPaymentId = typeof this.meta.premiumLastPaymentId === 'string'
        ? this.meta.premiumLastPaymentId
        : null;
      const nutritionHistory = this.meta.weeklyNutritionHistory && typeof this.meta.weeklyNutritionHistory === 'object'
        ? this.meta.weeklyNutritionHistory
        : {};
      this.meta.weeklyNutritionHistory = {};
      Object.keys(nutritionHistory).forEach((weekKey) => {
        const weekEntry = nutritionHistory[weekKey];
        if (!weekEntry || typeof weekEntry !== 'object') return;
        const days = weekEntry.days && typeof weekEntry.days === 'object' ? weekEntry.days : {};
        this.meta.weeklyNutritionHistory[weekKey] = { days: {} };
        Object.keys(days).forEach((dayKey) => {
          const snapshot = days[dayKey] || {};
          const proteinPercent = Number.isFinite(snapshot.proteinPercent) ? Math.max(0, Math.min(100, Math.round(snapshot.proteinPercent))) : 0;
          const hydrationPercent = Number.isFinite(snapshot.hydrationPercent) ? Math.max(0, Math.min(100, Math.round(snapshot.hydrationPercent))) : 0;
          const consistencyPercent = Number.isFinite(snapshot.consistencyPercent) ? Math.max(0, Math.min(100, Math.round(snapshot.consistencyPercent))) : 0;
          this.meta.weeklyNutritionHistory[weekKey].days[dayKey] = {
            proteinPercent,
            hydrationPercent,
            consistencyPercent
          };
        });
      });
      this.syncDietPlanCompletionState();
      if (!this.meta.loadCycleAnchorDate) {
        this.meta.loadCycleAnchorDate = this.meta.rotationAnchorDate || this.todayDateKey();
      }

    },

    syncDietPlanCompletionState() {
      this.dietPlan = this.dietPlan.map((meal) => ({
        ...meal,
        done: Boolean(this.meta.dietMealStatus?.[meal.key])
      }));
    },

    premiumMembershipPriceLabel() {
      return `${this.premiumMembershipMonthlyPrice}/month`;
    },

    nameChangePriceLabel() {
      return `${this.nameChangePriceInr}`;
    },

    applyNameChangeStatus(status) {
      if (!status || typeof status !== 'object') return;
      this.meta.nameChangeFreeUsed = Boolean(status.name_change_free_used ?? this.meta.nameChangeFreeUsed);
      this.meta.nameChangePaidCredits = Number.isFinite(status.name_change_paid_credits)
        ? Math.max(0, status.name_change_paid_credits)
        : Math.max(0, this.meta.nameChangePaidCredits || 0);
      this.meta.nameChangeLastPaymentId = typeof status.name_change_last_payment_id === 'string'
        ? status.name_change_last_payment_id
        : this.meta.nameChangeLastPaymentId;
      this.save();
    },

    async verifyRazorpayNameChangePayment(responsePayload) {
      const response = await this.backendRequest('/payments/razorpay/name-change/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(responsePayload)
      });
      if (!response) {
        throw new Error('Name change payment verification failed on server.');
      }
      const status = await response.json();
      this.applyNameChangeStatus(status);
    },

    async startNameChangeCheckout() {
      try {
        await this.loadRazorpayCheckoutScript();
        const orderResponse = await this.backendRequest('/payments/razorpay/name-change/order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        });
        if (!orderResponse) {
          throw new Error('Unable to initialize name change payment. Please try again.');
        }
        const order = await orderResponse.json();
        const options = {
          key: order.key_id,
          amount: order.amount,
          currency: order.currency,
          name: order.name || 'Name Change Credit',
          description: order.description || `Name change credit (Rs ${this.nameChangePriceLabel()})`,
          order_id: order.order_id,
          prefill: {
            name: order.prefill_name || this.profile.name || 'Player Hunter',
            email: order.prefill_email || '',
            contact: order.prefill_contact || ''
          },
          notes: {
            uid: this.activeUid() || ''
          },
          theme: {
            color: '#22d3ee'
          },
          handler: async (paymentResult) => {
            try {
              await this.verifyRazorpayNameChangePayment(paymentResult);
              this.nameChangeInfo = `Payment successful. 1 name change unlocked (Rs ${this.nameChangePriceLabel()}).`;
              this.nameChangeError = '';
            } catch (error) {
              this.nameChangeError = error?.message || 'Payment succeeded but name change unlock failed.';
            }
          },
          modal: {
            ondismiss: () => {
              this.log('Name change payment cancelled.');
            }
          }
        };
        const checkout = new window.Razorpay(options);
        checkout.open();
      } catch (error) {
        this.nameChangeError = error?.message || 'Unable to start name change checkout.';
      }
    },

    async submitProfileNameChange() {
      const targetName = String(this.profileNameDraft || '').trim();
      this.nameChangeInfo = '';
      this.nameChangeError = '';
      if (!targetName) {
        this.nameChangeError = 'Name cannot be empty.';
        return;
      }
      if (targetName.length > 64) {
        this.nameChangeError = 'Name is too long (max 64 characters).';
        return;
      }
      if (targetName === this.profile.name) {
        this.nameChangeInfo = 'Name is already up to date.';
        return;
      }
      if (this.nameChangeBusy) return;
      this.nameChangeBusy = true;
      try {
        const response = await this.backendRequestWithStatus('/users/me/profile', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: targetName })
        });
        if (!response) {
          this.nameChangeError = 'Failed to connect to server.';
          return;
        }
        if (response.ok) {
          const wasFreeUsed = Boolean(this.meta.nameChangeFreeUsed);
          const user = await response.json();
          this.applyBackendUser(user);
          this.nameChangeInfo = wasFreeUsed ? 'Name updated.' : 'Name updated (free change used).';
          this.nameChangeError = '';
          this.save();
          return;
        }
        if (response.status === 402) {
          this.nameChangeError = `Name change locked. Pay Rs ${this.nameChangePriceLabel()} to unlock next change.`;
          return;
        }
        let detail = `Name update failed (${response.status}).`;
        try {
          const payload = await response.json();
          if (typeof payload?.detail === 'string' && payload.detail.trim()) {
            detail = payload.detail.trim();
          }
        } catch (_) {}
        this.nameChangeError = detail;
      } finally {
        this.nameChangeBusy = false;
      }
    },

    hasPremiumMembership() {
      return Boolean(this.meta?.premiumMembershipActive);
    },

    applyPremiumMembershipStatus(status) {
      if (!status || typeof status !== 'object') return;
      this.meta.premiumMembershipActive = Boolean(status.premium_membership_active);
      this.meta.premiumMembershipSince = typeof status.premium_membership_since === 'string'
        ? status.premium_membership_since
        : this.meta.premiumMembershipSince;
      this.meta.premiumMembershipUntil = typeof status.premium_membership_until === 'string'
        ? status.premium_membership_until
        : this.meta.premiumMembershipUntil;
      this.meta.premiumLastPaymentId = typeof status.premium_last_payment_id === 'string'
        ? status.premium_last_payment_id
        : this.meta.premiumLastPaymentId;
      this.save();
    },

    loadRazorpayCheckoutScript() {
      if (typeof window === 'undefined') {
        return Promise.reject(new Error('Browser environment required.'));
      }
      if (window.Razorpay) return Promise.resolve();
      return new Promise((resolve, reject) => {
        const existing = document.querySelector('script[data-razorpay-checkout="1"]');
        if (existing) {
          existing.addEventListener('load', () => resolve(), { once: true });
          existing.addEventListener('error', () => reject(new Error('Failed to load Razorpay checkout script.')), { once: true });
          return;
        }
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        script.dataset.razorpayCheckout = '1';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Razorpay checkout script.'));
        document.head.appendChild(script);
      });
    },

    async verifyRazorpayPremiumPayment(responsePayload) {
      const response = await this.backendRequest('/payments/razorpay/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(responsePayload)
      });
      if (!response) {
        throw new Error('Payment verification failed on server.');
      }
      const status = await response.json();
      this.applyPremiumMembershipStatus(status);
      this.log(`Premium membership activated (${this.premiumMembershipPriceLabel()}).`);
    },

    async startPremiumCheckout() {
      try {
        if (this.hasPremiumMembership()) {
          this.log('Premium membership is already active.');
          return;
        }
        await this.loadRazorpayCheckoutScript();
        const orderResponse = await this.backendRequest('/payments/razorpay/order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        });
        if (!orderResponse) {
          throw new Error('Unable to initialize payment order. Please try again.');
        }
        const order = await orderResponse.json();
        const options = {
          key: order.key_id,
          amount: order.amount,
          currency: order.currency,
          name: order.name || 'Ascendra Premium',
          description: order.description || `Premium membership (${this.premiumMembershipPriceLabel()})`,
          order_id: order.order_id,
          prefill: {
            name: order.prefill_name || this.profile.name || 'Player Hunter',
            email: order.prefill_email || '',
            contact: order.prefill_contact || ''
          },
          notes: {
            uid: this.activeUid() || ''
          },
          theme: {
            color: '#22c55e'
          },
          handler: async (paymentResult) => {
            try {
              await this.verifyRazorpayPremiumPayment(paymentResult);
            } catch (error) {
              this.log(error?.message || 'Payment succeeded but verification failed.');
            }
          },
          modal: {
            ondismiss: () => {
              this.log('Payment cancelled.');
            }
          }
        };
        const checkout = new window.Razorpay(options);
        checkout.open();
      } catch (error) {
        this.log(error?.message || 'Unable to start Razorpay checkout.');
      }
    },

    dietStatLabel(stat) {
      return stat.charAt(0).toUpperCase() + stat.slice(1);
    },

    dietStatProgress(stat) {
      const totalXp = this.meta?.dietStatXp?.[stat] || 0;
      const carryXp = totalXp % this.dietStatPointThresholdXp;
      return `${carryXp} / ${this.dietStatPointThresholdXp}`;
    },

    applyDietStatXp(stat, deltaXp) {
      if (!['strength', 'endurance', 'recovery'].includes(stat)) return;
      if (!Number.isFinite(deltaXp) || deltaXp === 0) return;
      const previousXp = this.meta.dietStatXp[stat] || 0;
      const nextXp = Math.max(0, previousXp + Math.round(deltaXp));
      this.meta.dietStatXp[stat] = nextXp;
      const previousPoints = Math.floor(previousXp / this.dietStatPointThresholdXp);
      const nextPoints = Math.floor(nextXp / this.dietStatPointThresholdXp);
      const pointDelta = nextPoints - previousPoints;
      if (pointDelta !== 0 && Number.isFinite(this.profile.stats?.[stat])) {
        this.profile.stats[stat] += pointDelta;
        this.syncStatUnlockQuests();
        const sign = pointDelta > 0 ? '+' : '';
        this.log(`Diet conversion: ${sign}${pointDelta} ${this.dietStatLabel(stat)} (every ${this.dietStatPointThresholdXp} XP).`);
      }
    },

    toggleDietMeal(mealKey) {
      this.applyDailyResets();
      if (!this.isDietUnlocked()) {
        this.log('Diet is locked. Select a build first.');
        return;
      }
      if (!this.meta.dietMealStatus || typeof this.meta.dietMealStatus !== 'object') {
        this.meta.dietMealStatus = {};
      }
      const meal = this.dietPlan.find((entry) => entry.key === mealKey);
      if (!meal) {
        const aiMeal = this.aiDietMealPlan().find((entry) => entry.key === mealKey);
        if (!aiMeal) return;
        this.dietPlan.push({
          ...aiMeal,
          done: Boolean(this.meta.dietMealStatus[mealKey])
        });
      }
      const activeMeal = this.dietPlan.find((entry) => entry.key === mealKey);
      if (!activeMeal) return;
      if (activeMeal.done || this.meta.dietMealStatus[mealKey]) {
        this.log(`${activeMeal.time} already completed for today.`);
        return;
      } else {
        activeMeal.done = true;
        this.meta.dietMealStatus[activeMeal.key] = true;
        this.applyDietStatXp(activeMeal.stat, activeMeal.xp);
        this.recordDailyNutritionSnapshot();
        this.log(`${activeMeal.time} completed. +${activeMeal.xp} ${this.dietStatLabel(activeMeal.stat)} XP.`);
      }
      this.save();
    },

    trainingLoadTargetsForTier(tier = 0) {
      const tiers = [
        { pushups: 25, pullups: 5, squats: 100 },
        { pushups: 30, pullups: 8, squats: 150 },
        { pushups: 35, pullups: 10, squats: 180 }
      ];
      return tiers[Math.min(Math.max(0, tier), tiers.length - 1)];
    },

    trainingLoadTargets(mode = null) {
      const base = this.trainingLoadTargetsForTier(this.meta.loadTier || 0);
      const idx = this.modeIndex(mode);
      return {
        pushups: base.pushups + (idx * 5),
        pullups: base.pullups + (idx * 2),
        squats: base.squats + (idx * 20)
      };
    },

    pushupTargetReps() {
      return this.trainingLoadTargets().pushups;
    },

    pushupQuestNote() {
      return `Objective: ${this.pushupTargetReps()} Push-ups | Requirement: Minimum 4 sets | Stat Gain: +2 Strength`;
    },

    daysBetweenDateKeys(startKey, endKey) {
      const start = new Date(`${startKey}T00:00:00`);
      const end = new Date(`${endKey}T00:00:00`);
      if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return 0;
      const dayMs = 24 * 60 * 60 * 1000;
      return Math.floor((end.getTime() - start.getTime()) / dayMs);
    },

    evaluateBiweeklyLoadProgress(todayKey) {
      const anchorKey = this.meta.loadCycleAnchorDate || todayKey;
      const elapsedDays = this.daysBetweenDateKeys(anchorKey, todayKey);
      if (elapsedDays < 14) return;

      const currentTier = this.meta.loadTier || 0;
      const nextTier = currentTier + 1;
      const currentTargets = this.trainingLoadTargetsForTier(currentTier);
      const nextTargets = this.trainingLoadTargetsForTier(nextTier);

      const qualified = (this.meta.loadCycleFullClears || 0) >= 8;
      if (qualified && nextTier !== currentTier) {
        this.meta.loadTier = nextTier;
        this.activeSystemNotification = {
          id: Date.now(),
          title: 'System Alert',
          message: 'Growth Detected. Increasing Load.'
        };
        this.log('Growth Detected. Increasing Load.');
        this.log(`Push-ups: ${currentTargets.pushups} -> ${nextTargets.pushups}`);
        this.log(`Pull-ups: ${currentTargets.pullups} -> ${nextTargets.pullups}`);
        this.log(`Squats: ${currentTargets.squats} -> ${nextTargets.squats}`);
      } else if (!qualified) {
        this.log('Bi-weekly review: load held. Complete more full clears to unlock progression.');
      }

      this.meta.loadCycleAnchorDate = todayKey;
      this.meta.loadCycleFullClears = 0;
    },

    protocolDayNumberFromDate(dateObj = new Date()) {
      const anchorDateKey = this.meta.rotationAnchorDate || this.todayDateKey();
      const anchorDate = new Date(`${anchorDateKey}T00:00:00`);
      const targetDate = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
      if (Number.isNaN(anchorDate.getTime()) || Number.isNaN(targetDate.getTime())) {
        return 1;
      }
      const dayMs = 24 * 60 * 60 * 1000;
      const diffDays = Math.floor((targetDate.getTime() - anchorDate.getTime()) / dayMs);
      return ((diffDays % 7) + 7) % 7 + 1;
    },

    currentProtocol() {
      const day = this.meta.protocolDay || this.protocolDayNumberFromDate();
      const protocol = this.weeklyProtocols.find((p) => p.day === day) || this.weeklyProtocols[0];
      if (this.meta.reassignmentDayKey === this.todayDateKey() && this.meta.reassignmentProtocolDay === 3) {
        return {
          ...protocol,
          banner: 'System Override - Lower Body Reassignment',
          primaryFocus: 'Lower Body Recovery Priority',
          targetMuscles: 'Quads / Glutes / Hamstrings / Calves'
        };
      }
      if (protocol.day === 1) {
        return {
          ...protocol,
          banner: '🟦 System Directive Issued',
          primaryFocus: 'Upper Body Strength',
          targetMuscles: 'Chest / Triceps'
        };
      }
      return protocol;
    },

    buildProtocolQuests(day) {
      const protocol = this.weeklyProtocols.find((p) => p.day === day) || this.weeklyProtocols[0];
      return protocol.tasks.map((task, index) => ({
        id: (day * 100) + (index + 1),
        title: task.title,
        note: task.note,
        xp: task.xp,
        done: false,
        key: task.key
      }));
    },

    syncDailyQuestRotation(targetDateKey = this.todayDateKey()) {
      const dayDate = new Date(`${targetDateKey}T00:00:00`);
      const calendarDay = Number.isNaN(dayDate.getTime()) ? this.protocolDayNumberFromDate(new Date()) : this.protocolDayNumberFromDate(dayDate);
      const day = this.meta.reassignmentDayKey === targetDateKey && Number.isFinite(this.meta.reassignmentProtocolDay)
        ? this.meta.reassignmentProtocolDay
        : calendarDay;
      const isSameDay = this.meta.questRotationDate === targetDateKey;

      if (isSameDay && Array.isArray(this.quests) && this.quests.length > 0 && this.meta.protocolDay === day) {
        return;
      }

      const previousState = isSameDay
        ? new Map(
          (Array.isArray(this.quests) ? this.quests : []).map((quest) => [
            `${quest.id}:${quest.title}`,
            {
              done: Boolean(quest.done)
            }
          ])
        )
        : new Map();
      this.meta.protocolDay = day;
      this.meta.questRotationDate = targetDateKey;
      this.quests = this.buildProtocolQuests(day).map((quest) => ({
        ...quest,
        done: previousState.get(`${quest.id}:${quest.title}`)?.done || false
      }));
    },

    triggerStatGainFx(text) {
      this.statGainFx.text = text;
      this.statGainFx.visible = true;
      if (this.statGainFxTimer) {
        clearTimeout(this.statGainFxTimer);
      }
      this.statGainFxTimer = setTimeout(() => {
        this.statGainFx.visible = false;
      }, 1300);
    },

    syncStatUnlockQuests() {
      if (!Array.isArray(this.quests)) this.quests = [];

      const unlockables = [
        {
          id: 6,
          unlocked: (this.profile.stats?.strength || 0) >= 10,
          title: '🏋️ Weighted Push-ups Protocol',
          note: 'Strength 10 unlocked | Objective: Weighted push-ups session',
          xp: 480
        },
        {
          id: 7,
          unlocked: (this.profile.stats?.endurance || 0) >= 15,
          title: '🏃 15k Steps Expedition',
          note: 'Endurance 15 unlocked | Objective: Complete 15,000 steps',
          xp: 430
        }
      ];

      unlockables.forEach((entry) => {
        const exists = this.quests.some((quest) => quest.id === entry.id);
        if (entry.unlocked && !exists) {
          this.quests.push({
            id: entry.id,
            title: entry.title,
            note: entry.note,
            xp: entry.xp,
            done: false
          });
          this.log(`Stat Impact Unlock: ${entry.title}`);
        }
      });
    },

    dungeonDefinitionForWeek(arcWeek = 1) {
      if (arcWeek >= 6) {
        return {
          name: 'Shadow Commander',
          phase: 'Week 6+',
          descriptor: 'Abyss-Class',
          tasks: [
            { id: 1, title: 'Night training drills x4', xp: 460 },
            { id: 2, title: 'Endurance run x3 sessions', xp: 420 },
            { id: 3, title: 'No sugar for 6 days', xp: 520 }
          ],
          bonusXp: 900
        };
      }
      if (arcWeek >= 3) {
        return {
          name: 'Orc Stronghold',
          phase: 'Week 3-5',
          descriptor: 'Warfront-Class',
          tasks: [
            { id: 1, title: 'Heavy strength blocks x3', xp: 380 },
            { id: 2, title: 'Cardio assault x2', xp: 340 },
            { id: 3, title: 'No junk food for 5 days', xp: 450 }
          ],
          bonusXp: 750
        };
      }
      return {
        name: 'Goblin Dungeon (Beginner)',
        phase: 'Week 1-2',
        descriptor: 'Starter-Class',
        tasks: [
          { id: 1, title: 'Bodyweight strength x3', xp: 280 },
          { id: 2, title: 'Walk/Cardio x2', xp: 240 },
          { id: 3, title: 'Clean food streak 4 days', xp: 330 }
        ],
        bonusXp: 600
      };
    },

    currentDungeon() {
      return this.dungeonDefinitionForWeek(this.meta.dungeonArcWeek || 1);
    },

    syncRaidTasksWithDungeon() {
      const dungeon = this.currentDungeon();
      this.raidBonusXp = dungeon.bonusXp;
      const previousDoneByKey = new Map(
        (Array.isArray(this.raidTasks) ? this.raidTasks : []).map((task) => [`${task.id}:${task.title}`, Boolean(task.done)])
      );
      this.raidTasks = dungeon.tasks.map((task, index) => ({
        id: task.id || index + 1,
        title: task.title,
        xp: task.xp,
        done: previousDoneByKey.get(`${task.id || index + 1}:${task.title}`) || false
      }));
    },

    maybeTriggerHiddenQuest(dayKey) {
      if (this.hiddenQuest.dayKey === dayKey) return;
      this.hiddenQuest.dayKey = dayKey;
      this.hiddenQuest.active = false;
      this.hiddenQuest.completed = false;

      if (Math.random() > 0.28) return;

      this.hiddenQuest.active = true;
      this.activeSystemNotification = {
        id: Date.now(),
        title: this.hiddenQuest.title,
        message: `${this.hiddenQuest.objective} Reward: +${this.hiddenQuest.rewardXp} XP | Failure: -${this.hiddenQuest.penaltyXp} XP`
      };
      this.log(`Hidden Quest Detected: ${this.hiddenQuest.objective}`);
    },

    resolveHiddenQuestOnDayChange(previousDayKey) {
      if (!this.hiddenQuest.active) return;
      if (this.hiddenQuest.dayKey !== previousDayKey) return;

      if (this.hiddenQuest.completed) {
        this.log('Hidden Quest archived: objective completed.');
      } else {
        this.addXp(-this.hiddenQuest.penaltyXp);
        this.log(`Hidden Quest failed. -${this.hiddenQuest.penaltyXp} XP`);
      }

      this.hiddenQuest.active = false;
      this.hiddenQuest.completed = false;
    },

    completeHiddenQuest() {
      this.applyDailyResets();
      if (!this.hiddenQuest.active || this.hiddenQuest.completed) return;
      this.hiddenQuest.completed = true;
      this.addXp(this.hiddenQuest.rewardXp);
      this.log(`Hidden Quest complete! +${this.hiddenQuest.rewardXp} XP`);
      this.save();
    },

    applyQuestStatRewards(quest) {
      if (!quest) return;
      const key = quest.key || '';
      const rewardsByQuestKey = {
        pushups_main: [{ stat: 'strength', amount: 2 }],
        boss_pushups: [{ stat: 'strength', amount: 2 }],
        sprint_intervals: [{ stat: 'endurance', amount: 1 }],
        light_cardio: [{ stat: 'endurance', amount: 1 }],
        sleep_requirement: [{ stat: 'recovery', amount: 1 }]
      };
      const rewardsByQuestId = {
        21: [{ stat: 'discipline', amount: 1 }],
        22: [{ stat: 'discipline', amount: 1 }],
        23: [{ stat: 'discipline', amount: 1 }]
      };
      const rewards = [...(rewardsByQuestKey[key] || []), ...(rewardsByQuestId[quest.id] || [])];
      rewards.forEach((reward) => {
        if (!this.profile.stats || typeof this.profile.stats[reward.stat] !== 'number') return;
        this.profile.stats[reward.stat] += reward.amount;
        const statLabel = reward.stat.charAt(0).toUpperCase() + reward.stat.slice(1);
        this.log(`Stat up: +${reward.amount} ${statLabel}`);
        if (reward.stat === 'strength') {
          this.triggerStatGainFx(`+${reward.amount} STR`);
        }
      });
      this.syncStatUnlockQuests();
    },

    todayDateKey() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },

    currentWeekKey() {
      const now = new Date();
      const jan1 = new Date(now.getFullYear(), 0, 1);
      const dayMs = 24 * 60 * 60 * 1000;
      const dayOfYear = Math.floor((now - jan1) / dayMs) + 1;
      const week = Math.ceil(dayOfYear / 7);
      return `${now.getFullYear()}-W${String(week).padStart(2, '0')}`;
    },

    canEnterDungeonRaid() {
      return this.directiveCompletionPercent() >= 75;
    },

    directiveCompletionProgress() {
      const completed = this.meta.weeklyDirectiveTaskCompletions || 0;
      const total = this.totalWeeklyDirectiveTasks();
      return `${completed}/${total}`;
    },

    totalWeeklyDirectiveTasks() {
      if (!Array.isArray(this.weeklyProtocols) || this.weeklyProtocols.length === 0) return 0;
      return this.weeklyProtocols.reduce((sum, protocol) => sum + ((protocol.tasks && protocol.tasks.length) || 0), 0);
    },

    directiveCompletionPercent() {
      const total = this.totalWeeklyDirectiveTasks();
      if (total <= 0) return 0;
      const completed = this.meta.weeklyDirectiveTaskCompletions || 0;
      return Math.round((completed / total) * 100);
    },

    dungeonDifficultyRank() {
      const rankOrder = ['E-Rank', 'D-Rank', 'C-Rank', 'B-Rank', 'A-Rank', 'S-Rank', 'S++ Rank'];
      const currentIndex = Math.max(0, rankOrder.indexOf(this.profile.rank));
      return rankOrder[Math.min(currentIndex + 1, rankOrder.length - 1)];
    },

    estimatedSurvivalRate() {
      const fixedByDungeonRank = {
        'E-Rank': 88,
        'D-Rank': 80,
        'C-Rank': 72,
        'B-Rank': 64,
        'A-Rank': 56,
        'S-Rank': 48,
        'S++ Rank': 40
      };
      return fixedByDungeonRank[this.dungeonDifficultyRank()] ?? 64;
    },

    applyDailyResets() {
      const today = this.todayDateKey();
      const currentWeek = this.currentWeekKey();
      if (this.meta.dietTrackingDayKey !== today) {
        if (this.meta.dietTrackingDayKey) {
          this.recordDailyNutritionSnapshot(this.meta.dietTrackingDayKey);
        }
        this.meta.dietTrackingDayKey = today;
        this.dietPlan.forEach((meal) => {
          meal.done = false;
          this.meta.dietMealStatus[meal.key] = false;
        });
        this.meta.dietWaterLiters = 0;
      }

      if (this.meta.weeklyDirectiveWeek !== currentWeek) {
        if (this.meta.weeklyDirectiveWeek) {
          this.meta.dungeonArcWeek = (this.meta.dungeonArcWeek || 1) + 1;
        }
        this.meta.weeklyDirectiveWeek = currentWeek;
        this.meta.weeklyDirectiveTaskCompletions = 0;
        this.meta.lastRaidClaimWeek = null;
        this.syncRaidTasksWithDungeon();
      }

      if (this.meta.lastDailyResetDate !== today) {
        const previousDayKey = this.meta.lastDailyResetDate;
        const previousMode = this.meta.dailyMode;
        const previousProtocolDay = this.meta.protocolDay;
        if (previousMode === 'extreme') {
          this.meta.extremeModeStreak = (this.meta.extremeModeStreak || 0) + 1;
        } else {
          this.meta.extremeModeStreak = 0;
        }
        this.meta.reassignmentDayKey = null;
        this.meta.reassignmentProtocolDay = null;
        if (this.meta.lastDailyResetDate) {
          const pushupQuestsToday = this.quests.filter((quest) => typeof quest.title === 'string' && quest.title.toLowerCase().includes('push-up'));
          if (pushupQuestsToday.length > 0) {
            if (pushupQuestsToday.every((quest) => quest.done)) {
              this.meta.pushupConsistencyDays = (this.meta.pushupConsistencyDays || 0) + 1;
            } else {
              this.meta.pushupConsistencyDays = 0;
            }
          }
          if (this.meta.pushupTier === 0 && this.meta.pushupConsistencyDays >= 5) {
            this.meta.pushupTier = 1;
            this.log('Growth detected. Increasing difficulty.');
            this.log('Push-up discipline tier upgraded.');
          }
          this.resolveHiddenQuestOnDayChange(previousDayKey);
          if (!this.allDailyQuestsComplete()) {
            this.addXp(-this.dailyFailurePenaltyXp);
            this.log(`Daily directive incomplete. -${this.dailyFailurePenaltyXp} XP penalty applied.`);
            this.log('Rank reset warning: repeated failures can downgrade your standing.');
            this.log('Streak broken.');
            this.log('Fatigue Debuff applied.');
            this.meta.dailyStreak = 0;
            if ((this.meta.survivalStreak || 0) > 0) {
              this.log('System disappointment detected.');
            }
            this.meta.survivalStreak = 0;
            if (previousMode === 'extreme') {
              this.addXp(-this.extremeModeFailurePenaltyXp);
              this.log(`Extreme Mode failure penalty applied: -${this.extremeModeFailurePenaltyXp} XP.`);
            }
            this.meta.fatigueDebuffActive = true;
          }
          const lowerBodyProtocol = this.weeklyProtocols.find((protocol) => protocol.day === 3);
          const lowerBodyKeys = new Set((lowerBodyProtocol?.tasks || []).map((task) => task.key));
          const lowerBodyTasks = this.quests.filter((quest) => lowerBodyKeys.has(quest.key));
          const lowerBodySkipped = previousProtocolDay === 3
            && lowerBodyTasks.length > 0
            && !lowerBodyTasks.every((quest) => quest.done);
          if (lowerBodySkipped) {
            this.meta.reassignmentDayKey = today;
            this.meta.reassignmentProtocolDay = 3;
            this.activeSystemNotification = {
              id: Date.now(),
              title: 'System Alert',
              message: 'Lower body deficiency detected. Reassigning training.'
            };
            this.log('Lower body deficiency detected. Reassigning training.');
          }
        }
        this.evaluateBiweeklyLoadProgress(today);
        this.meta.lastDailyResetDate = today;
        this.meta.dailyMode = null;
        this.meta.dailyModeDayKey = null;
        this.meta.focusBuild = null;
        this.meta.focusBuildDayKey = null;
        this.meta.lastFullClearBonusDate = null;
        this.meta.lastDailyStreakCreditDate = null;
        this.meta.lastIncompleteQuestReminderDayKey = null;
        this.meta.lastIncompleteQuestReminderAt = null;
        this.meta.dailyStartXp = this.profile.xp;
        this.meta.dailyStartStats = {
          strength: this.profile.stats.strength,
          endurance: this.profile.stats.endurance,
          agility: this.profile.stats.agility,
          discipline: this.profile.stats.discipline,
          aura: this.profile.stats.aura,
          recovery: this.profile.stats.recovery
        };
        this.meta.dailyStartDietStatXp = {
          strength: this.meta.dietStatXp.strength,
          endurance: this.meta.dietStatXp.endurance,
          recovery: this.meta.dietStatXp.recovery
        };
        this.meta.dailyStartDietWaterLiters = this.meta.dietWaterLiters;
        this.syncDailyQuestRotation(today);
        this.syncModeSpecificQuests();
        this.maybeTriggerHiddenQuest(today);
      }

      this.applyDietMealTemplate();

      const weekKey = this.currentWeekKey();
      if (this.meta.lastRaidResetWeek !== weekKey) {
        this.meta.lastRaidResetWeek = weekKey;
      }
    },

    isRaidBonusClaimedThisWeek() {
      return this.meta.lastRaidClaimWeek === this.currentWeekKey();
    },

    normalizeQuestAndRaidXp() {
      const questXpById = { 6: 480, 7: 430, 21: 170, 22: 150, 23: 130 };

      if (!Array.isArray(this.quests)) this.quests = [];
      if (!Array.isArray(this.raidTasks)) this.raidTasks = [];

      this.quests = this.quests.map((quest) => ({
        ...quest,
        title:
          quest.id === 6 ? '🏋️ Weighted Push-ups Protocol' :
          quest.id === 7 ? '🏃 15k Steps Expedition' :
          quest.id === 21 ? '📵 Mind Discipline: Social Silence' :
          quest.id === 22 ? '📖 Mind Discipline: Focus Reading' :
          quest.id === 23 ? '🧘 Mind Discipline: Meditation Protocol' :
          quest.title,
        note:
          quest.id === 6 ? 'Strength 10 unlocked | Objective: Weighted push-ups session' :
          quest.id === 7 ? 'Endurance 15 unlocked | Objective: Complete 15,000 steps' :
          quest.id === 21 ? this.questNoteForDisplay({ id: 21 }) :
          quest.id === 22 ? this.questNoteForDisplay({ id: 22 }) :
          quest.id === 23 ? this.questNoteForDisplay({ id: 23 }) :
          quest.note,
        xp: questXpById[quest.id] ?? quest.xp
      }));

      // Raid tasks are generated by the active dungeon definition.
    },

    xpThresholdForLevel(level) {
      if (level <= 1) return 0;
      if (level === 2) return this.progression.level2Requirement;

      let total = this.progression.level2Requirement;
      for (let current = 2; current < level; current += 1) {
        total += Math.round(
          this.progression.level2Requirement * Math.pow(this.progression.perLevelGrowth, current - 1)
        );
      }
      return total;
    },

    recomputeProgressFromCurrentXp() {
      if (typeof this.profile.xp !== 'number' || Number.isNaN(this.profile.xp)) {
        this.profile.xp = 0;
      }
      if (this.profile.xp < 0) {
        this.profile.xp = 0;
      }

      let level = 1;
      while (this.profile.xp >= this.xpThresholdForLevel(level + 1)) {
        level += 1;
      }
      this.profile.level = level;
      this.profile.nextLevelXp = this.xpThresholdForLevel(level + 1);
      this.updateRank();
    },

    completeQuest(id) {
      this.applyDailyResets();
      if (!this.isFocusBuildSelected()) {
        this.log('Select a build before starting directives.');
        return;
      }
      if (!this.isDailyModeSelected()) {
        this.log('Select a daily mode before starting directives.');
        return;
      }
      const quest = this.quests.find((q) => q.id === id);
      if (!quest) return;
      const wasAllDailyComplete = this.allDailyQuestsComplete();
      const couldEnterRaidBefore = this.canEnterDungeonRaid();
      if (quest.done) {
        this.log(`Quest already completed today: ${quest.title}`);
        return;
      }

      quest.done = true;
      const gainedXp = this.questReward(quest);
      this.addXp(gainedXp);
      this.log(`Quest complete: ${quest.title} (+${gainedXp} XP, ${this.modeLabel()}).`);
      this.applyQuestStatRewards(quest);
      if (quest.key) {
        this.meta.weeklyDirectiveTaskCompletions = Math.min(
          this.totalWeeklyDirectiveTasks(),
          (this.meta.weeklyDirectiveTaskCompletions || 0) + 1
        );
      }

      if (!wasAllDailyComplete && this.allDailyQuestsComplete()) {
        this.log('Daily directives cleared for today.');
        this.meta.loadCycleFullClears = (this.meta.loadCycleFullClears || 0) + 1;
        if (this.meta.lastDailyStreakCreditDate !== this.todayDateKey()) {
          this.meta.dailyStreak = (this.meta.dailyStreak || 0) + 1;
          this.meta.survivalStreak = (this.meta.survivalStreak || 0) + 1;
          this.meta.lastDailyStreakCreditDate = this.todayDateKey();
          this.log(`Streak increased: Day ${this.meta.dailyStreak}.`);
        }
        if (this.meta.lastFullClearBonusDate !== this.todayDateKey()) {
          const clearBonusXp = Math.round(
            this.quests.reduce((sum, dailyQuest) => sum + this.questReward(dailyQuest), 0) * 0.5
          );
          this.addXp(clearBonusXp);
          this.meta.lastFullClearBonusDate = this.todayDateKey();
          this.log(`Full Clear Bonus activated: +${clearBonusXp} XP (50% bonus).`);
        }
        if (this.meta.fatigueDebuffActive) {
          this.meta.fatigueDebuffActive = false;
          this.log('Fatigue Debuff removed.');
        }
      }
      if (!couldEnterRaidBefore && this.canEnterDungeonRaid()) {
        this.log('Weekly Dungeon Raid unlocked. Directive threshold reached (75%).');
      }
      this.save();
    },

    toggleQuest(id) {
      this.completeQuest(id);
    },

    toggleRaid(id) {
      this.applyDailyResets();
      if (!this.canEnterDungeonRaid()) {
        this.log('Weekly Dungeon Raid locked. Complete at least 75% of daily directive tasks this week.');
        return;
      }
      if (this.isRaidBonusClaimedThisWeek()) {
        this.log('Weekly Dungeon Raid already cleared this week. New raid opens next week.');
        return;
      }

      const raid = this.raidTasks.find((r) => r.id === id);
      if (!raid) return;
      if (raid.done) {
        this.log(`Raid task already completed this week: ${raid.title}`);
        return;
      }

      raid.done = true;
      this.addXp(raid.xp);
      this.log(`Raid task done: ${raid.title} (+${raid.xp} XP)`);
      this.save();
    },

    claimRaidBonus() {
      this.applyDailyResets();
      if (!this.canEnterDungeonRaid()) {
        this.log('Weekly Dungeon Raid locked. Complete at least 75% of daily directive tasks this week.');
        return;
      }
      if (this.isRaidBonusClaimedThisWeek()) {
        this.log('Raid bonus already claimed this week.');
        return;
      }

      const allDone = this.raidTasks.every((task) => task.done);
      if (!allDone) {
        this.log('Raid bonus failed. Complete all weekly raid tasks first.');
        return;
      }

      this.addXp(this.raidBonusXp);
      this.raidTasks.forEach((task) => {
        task.done = false;
      });
      this.meta.lastRaidClaimWeek = this.currentWeekKey();
      this.log(`Weekly Dungeon Raid cleared! Bonus claimed: +${this.raidBonusXp} XP`);
      this.save();
    },

    addXp(amount) {
      const delta = Number(amount);
      const safeDelta = Number.isFinite(delta) ? delta : 0;
      const currentXp = Number(this.profile.xp);
      this.profile.xp = (Number.isFinite(currentXp) ? currentXp : 0) + safeDelta;
      if (this.profile.xp < 0) {
        this.profile.xp = 0;
      }

      const oldLevel = this.profile.level;
      this.recomputeProgressFromCurrentXp();
      if (this.profile.level > oldLevel) {
        this.log(`Level up! You reached level ${this.profile.level}.`);
      }
      // Push XP changes to backend immediately so leaderboard reflects updates quickly.
      this.syncProgressToBackend().catch(() => {});
    },

    updateRank() {
      const lvl = this.profile.level;
      if (lvl >= 60) this.profile.rank = 'S++ Rank';
      else if (lvl >= 45) this.profile.rank = 'S-Rank';
      else if (lvl >= 32) this.profile.rank = 'A-Rank';
      else if (lvl >= 22) this.profile.rank = 'B-Rank';
      else if (lvl >= 14) this.profile.rank = 'C-Rank';
      else if (lvl >= 7) this.profile.rank = 'D-Rank';
      else this.profile.rank = 'E-Rank';
    },

    rankKey(rank = '') {
      const value = String(rank || '').toLowerCase();
      if (value.includes('s++')) return 'spp';
      if (value.includes('s-rank') || value === 's') return 's';
      if (value.includes('a-rank') || value === 'a') return 'a';
      if (value.includes('b-rank') || value === 'b') return 'b';
      if (value.includes('c-rank') || value === 'c') return 'c';
      if (value.includes('d-rank') || value === 'd') return 'd';
      return 'e';
    },

    rankPillClass(rank = '') {
      return `rank-pill-${this.rankKey(rank)}`;
    },

    rankTextClass(rank = '') {
      return `rank-text-${this.rankKey(rank)}`;
    },

    log(message) {
      const timestamp = new Date().toLocaleString();
      this.logs.unshift(`[${timestamp}] ${message}`);
      this.logs = this.logs.slice(0, 30);
      this.announceVoiceForLog(message);
    },

    initializeVoiceAnnouncer() {
      if (typeof window === 'undefined' || typeof window.speechSynthesis === 'undefined') return;
      const assignVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        const preferred = this.pickPreferredVoice(voices);
        this.speechVoiceName = preferred?.name || '';
      };
      assignVoice();
      if (typeof window.speechSynthesis.onvoiceschanged !== 'undefined') {
        window.speechSynthesis.onvoiceschanged = assignVoice;
      }
      const prime = () => {
        this.speechPrimed = true;
        window.removeEventListener('pointerdown', prime);
        window.removeEventListener('keydown', prime);
      };
      window.addEventListener('pointerdown', prime, { once: true });
      window.addEventListener('keydown', prime, { once: true });
    },

    pickPreferredVoice(voices = []) {
      if (!Array.isArray(voices) || !voices.length) return null;
      const femaleHints = ['female', 'woman', 'samantha', 'zira', 'karen', 'hazel', 'ava', 'aria', 'susan', 'google uk english female'];
      for (const hint of femaleHints) {
        const match = voices.find((voice) => String(voice?.name || '').toLowerCase().includes(hint));
        if (match) return match;
      }
      const english = voices.find((voice) => String(voice?.lang || '').toLowerCase().startsWith('en'));
      return english || voices[0];
    },

    announceVoiceForLog(message) {
      if (!this.voiceAnnouncerEnabled) return;
      if (!this.speechPrimed) return;
      if (typeof window === 'undefined' || typeof window.speechSynthesis === 'undefined' || typeof window.SpeechSynthesisUtterance === 'undefined') return;
      const text = String(message || '').trim();
      if (!text) return;
      if (!/(quest|diet|nutrition|hydration|meal|water|directive|raid)/i.test(text)) return;
      try {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 0.85;
        utterance.volume = 1;
        const voices = window.speechSynthesis.getVoices();
        const selectedVoice = voices.find((voice) => voice.name === this.speechVoiceName) || this.pickPreferredVoice(voices);
        if (selectedVoice) {
          utterance.voice = selectedVoice;
        }
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
      } catch (_) {
        // Ignore speech errors and continue silently.
      }
    },

    initializeQuestReminderNotifications() {
      if (typeof window === 'undefined') return;
      const primePermission = () => {
        this.ensureQuestReminderPermissions().catch(() => {});
      };
      window.addEventListener('pointerdown', primePermission, { once: true });
      window.addEventListener('keydown', primePermission, { once: true });
    },

    async ensureQuestReminderPermissions() {
      if (typeof Notification !== 'undefined' && Notification.permission === 'default') {
        try {
          await Notification.requestPermission();
        } catch (_) {
          // Ignore browser notification permission failures.
        }
      }
      const localNotifications = window?.Capacitor?.Plugins?.LocalNotifications;
      if (!localNotifications || typeof localNotifications.checkPermissions !== 'function') return;
      try {
        const permission = await localNotifications.checkPermissions();
        if (permission?.display !== 'granted' && typeof localNotifications.requestPermissions === 'function') {
          await localNotifications.requestPermissions();
        }
      } catch (_) {
        // Ignore native notification permission failures.
      }
    },

    shouldSendIncompleteQuestReminder() {
      if (this.allDailyQuestsComplete()) return false;
      const remainingMs = this.timeUntilDailyResetMs();
      if (remainingMs <= 0 || remainingMs > this.questReminderWindowMs) return false;
      const today = this.todayDateKey();
      return this.meta.lastIncompleteQuestReminderDayKey !== today;
    },

    maybeSendIncompleteQuestReminder() {
      if (!this.shouldSendIncompleteQuestReminder()) return;
      const today = this.todayDateKey();
      const remaining = this.formatDuration(this.timeUntilDailyResetMs());
      const title = 'Daily Quest Reminder';
      const message = `Daily directives are still incomplete. ${remaining} left before reset.`;
      this.activeSystemNotification = {
        id: Date.now(),
        title: 'System Alert',
        message
      };
      this.log(`Reminder: Daily directives are incomplete. ${remaining} left before reset.`);
      this.sendPlatformQuestReminder(title, message);
      this.meta.lastIncompleteQuestReminderDayKey = today;
      this.meta.lastIncompleteQuestReminderAt = new Date().toISOString();
      this.save();
    },

    sendPlatformQuestReminder(title, message) {
      if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
        try {
          new Notification(title, {
            body: message,
            tag: `daily-quest-reminder-${this.todayDateKey()}`
          });
        } catch (_) {
          // Ignore browser notification send failures.
        }
      }
      const localNotifications = window?.Capacitor?.Plugins?.LocalNotifications;
      if (!localNotifications || typeof localNotifications.schedule !== 'function') return;
      localNotifications.schedule({
        notifications: [
          {
            id: Number(String(Date.now()).slice(-9)),
            title,
            body: message,
            schedule: { at: new Date(Date.now() + 1000) }
          }
        ]
      }).catch(() => {
        // Ignore native notification send failures.
      });
    },

    rollSystemNotification(force = false) {
      if (this.activeSystemNotification) return;
      if (!force && Math.random() > 0.35) return;
      const idx = Math.floor(Math.random() * this.systemNotifications.length);
      this.activeSystemNotification = {
        id: Date.now(),
        ...this.systemNotifications[idx]
      };
    },

    startSystemNotificationLoop() {
      if (this.systemNotificationTimer) {
        clearInterval(this.systemNotificationTimer);
      }
      this.systemNotificationTimer = setInterval(() => {
        this.rollSystemNotification(false);
      }, 45000);
    },

    dismissSystemNotification() {
      this.activeSystemNotification = null;
    },

    requestAbandonMission() {
      this.showAbandonModal = true;
    },

    cancelAbandonMission() {
      this.showAbandonModal = false;
    },

    confirmAbandonMission() {
      this.applyDailyResets();
      const completedToday = this.quests.filter((quest) => quest.done).length;
      const completedDirectiveTasks = this.quests.filter((quest) => quest.done && quest.key).length;
      const abandonPenaltyXp = 500;
      const resetXp = Number.isFinite(this.meta.dailyStartXp) ? Math.max(0, this.meta.dailyStartXp) : 0;
      this.profile.xp = Math.max(0, resetXp - abandonPenaltyXp);
      const resetStats = this.meta.dailyStartStats && typeof this.meta.dailyStartStats === 'object' ? this.meta.dailyStartStats : {};
      this.profile.stats = {
        strength: Number.isFinite(resetStats.strength) ? resetStats.strength : this.profile.stats.strength,
        endurance: Number.isFinite(resetStats.endurance) ? resetStats.endurance : this.profile.stats.endurance,
        agility: Number.isFinite(resetStats.agility) ? resetStats.agility : this.profile.stats.agility,
        discipline: Number.isFinite(resetStats.discipline) ? resetStats.discipline : this.profile.stats.discipline,
        aura: Number.isFinite(resetStats.aura) ? resetStats.aura : this.profile.stats.aura,
        recovery: Number.isFinite(resetStats.recovery) ? resetStats.recovery : this.profile.stats.recovery
      };
      const resetDietStatXp = this.meta.dailyStartDietStatXp && typeof this.meta.dailyStartDietStatXp === 'object'
        ? this.meta.dailyStartDietStatXp
        : {};
      this.meta.dietStatXp = {
        strength: Number.isFinite(resetDietStatXp.strength) ? Math.max(0, Math.round(resetDietStatXp.strength)) : this.meta.dietStatXp.strength,
        endurance: Number.isFinite(resetDietStatXp.endurance) ? Math.max(0, Math.round(resetDietStatXp.endurance)) : this.meta.dietStatXp.endurance,
        recovery: Number.isFinite(resetDietStatXp.recovery) ? Math.max(0, Math.round(resetDietStatXp.recovery)) : this.meta.dietStatXp.recovery
      };
      this.meta.dietWaterLiters = Number.isFinite(this.meta.dailyStartDietWaterLiters)
        ? Math.max(0, Math.min(this.waterGoalLiters, Math.round(this.meta.dailyStartDietWaterLiters)))
        : this.meta.dietWaterLiters;
      this.recomputeProgressFromCurrentXp();
      this.quests.forEach((quest) => {
        quest.done = false;
      });
      this.dietPlan.forEach((meal) => {
        meal.done = false;
        this.meta.dietMealStatus[meal.key] = false;
      });
      if (this.hiddenQuest.dayKey === this.todayDateKey()) {
        this.hiddenQuest.completed = false;
      }
      this.meta.weeklyDirectiveTaskCompletions = Math.max(
        0,
        (this.meta.weeklyDirectiveTaskCompletions || 0) - completedDirectiveTasks
      );
      this.meta.dailyMode = null;
      this.meta.dailyModeDayKey = null;
      this.meta.focusBuild = null;
      this.meta.focusBuildDayKey = null;
      this.meta.lastFullClearBonusDate = null;
      this.meta.lastDailyStreakCreditDate = null;
      this.showAbandonModal = false;
      this.log('Mission abandoned. All XP gained today has been removed.');
      this.log(`Mission abandoned penalty applied: -${abandonPenaltyXp} XP.`);
      this.log('Mission abandoned. All stats gained today have been removed.');
      this.save();
    },

    requestResetProgress() {
      this.showResetProgressModal = true;
    },

    cancelResetProgress() {
      this.showResetProgressModal = false;
    },

    confirmResetProgress() {
      this.showResetProgressModal = false;
      this.resetAll();
      this.log('Warning acknowledged. Full progress reset executed.');
    },

    resetAll() {
      localStorage.removeItem(this.stateStorageKey());
      this.profile = {
        name: 'Player Hunter',
        rank: 'E-Rank',
        level: 1,
        xp: 0,
        nextLevelXp: this.progression.level2Requirement,
        isAdmin: false,
        stats: {
          strength: 0,
          endurance: 0,
          agility: 0,
          discipline: 0,
          aura: 0,
          recovery: 0
        }
      };
      this.meta = {
        lastDailyResetDate: this.todayDateKey(),
        lastRaidResetWeek: this.currentWeekKey(),
        lastRaidClaimWeek: null,
        weeklyDirectiveWeek: this.currentWeekKey(),
        weeklyDirectiveTaskCompletions: 0,
        dungeonArcWeek: 1,
        survivalStreak: 0,
        dailyStreak: 0,
        fatigueDebuffActive: false,
        extremeModeStreak: 0,
        lastExtremeRiskAlertDayKey: null,
        dailyMode: null,
        dailyModeDayKey: null,
        focusBuild: null,
        focusBuildDayKey: null,
        lastFullClearBonusDate: null,
        lastDailyStreakCreditDate: null,
        lastIncompleteQuestReminderDayKey: null,
        lastIncompleteQuestReminderAt: null,
        accountCreatedDateKey: this.meta.accountCreatedDateKey || this.todayDateKey(),
        questRotationDate: this.todayDateKey(),
        rotationAnchorDate: this.meta.accountCreatedDateKey || this.todayDateKey(),
        protocolDay: 1,
        dailyStartXp: 0,
        dailyStartStats: {
          strength: 0,
          endurance: 0,
          agility: 0,
          discipline: 0,
          aura: 0,
          recovery: 0
        },
        pushupConsistencyDays: 0,
        pushupTier: 0,
        loadTier: 0,
        loadCycleAnchorDate: this.todayDateKey(),
        loadCycleFullClears: 0,
        reassignmentDayKey: null,
        reassignmentProtocolDay: null,
        dietTrackingDayKey: this.todayDateKey(),
        dietMealStatus: {
          breakfast: false,
          lunch: false,
          hydration: false,
          dinner: false,
          before_bed: false
        },
        dietStatXp: {
          strength: 0,
          endurance: 0,
          recovery: 0
        },
        dailyStartDietStatXp: {
          strength: 0,
          endurance: 0,
          recovery: 0
        },
        dietWaterLiters: 0,
        dailyStartDietWaterLiters: 0,
        weeklyNutritionHistory: {},
        aiDietPlanMeals: null,
        aiDietPlanNutrition: null,
        aiDietPlanNote: null,
        aiDietPlanDayKey: null,
        aiDietPlanProfileKey: null,
        premiumMembershipActive: false,
        premiumMembershipSince: null,
        premiumMembershipUntil: null,
        premiumLastPaymentId: null,
        gameStateUpdatedAt: null
      };
      this.hiddenQuest = {
        active: false,
        completed: false,
        dayKey: this.todayDateKey(),
        title: '🟦 System Alert: Hidden Quest Detected',
        objective: 'Complete 50 push-ups today instead of 25.',
        rewardXp: 900,
        penaltyXp: 700
      };
      this.quests = [];
      this.applyDietMealTemplate();
      this.syncDailyQuestRotation(this.todayDateKey());
      this.syncModeSpecificQuests();
      this.syncRaidTasksWithDungeon();
      this.logs = [];
      this.log('System reset complete. Start over stronger.');
      this.updateResetCountdown();
      this.recordDailyNutritionSnapshot();
      this.save();
      this.syncProgressToBackend().catch(() => {});
      this.syncProfileToBackend().catch(() => {});
    }
  };
}


