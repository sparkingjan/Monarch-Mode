function soloLevelingApp() {
  return {
    progression: {
      level2Requirement: 10000,
      perLevelGrowth: 1.061
    },
    dailyFailurePenaltyXp: 0,
    extremeModeFailurePenaltyXp: 0,
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
    "day": 1,
    "banner": "Session 1 · Strength A",
    "type": "strength",
    "tasks": [
      {
        "key": "pushups_main",
        "title": "Wall, incline or floor push-ups",
        "xp": 180,
        "note": ""
      },
      {
        "key": "squats",
        "title": "Chair sit-to-stands or comfortable squats",
        "xp": 180,
        "note": ""
      },
      {
        "key": "prone_w",
        "title": "Prone W raises or light band rows",
        "xp": 180,
        "note": ""
      }
    ]
  },
  {
    "day": 2,
    "banner": "Session 2 · Easy movement",
    "type": "movement",
    "tasks": [
      {
        "key": "light_cardio",
        "title": "Comfortable walk or seated cardio",
        "xp": 180,
        "note": ""
      },
      {
        "key": "mobility_work",
        "title": "Gentle mobility",
        "xp": 180,
        "note": ""
      },
      {
        "key": "balance",
        "title": "Supported balance practice",
        "xp": 180,
        "note": ""
      }
    ]
  },
  {
    "day": 3,
    "banner": "Session 3 · Strength B",
    "type": "strength",
    "tasks": [
      {
        "key": "glute_bridge",
        "title": "Glute bridges",
        "xp": 180,
        "note": ""
      },
      {
        "key": "prone_w",
        "title": "Prone W raises or light band rows",
        "xp": 180,
        "note": ""
      },
      {
        "key": "dead_bug",
        "title": "Dead bugs or seated marches",
        "xp": 180,
        "note": ""
      }
    ]
  },
  {
    "day": 4,
    "banner": "Session 4 · Recovery",
    "type": "recovery",
    "tasks": [
      {
        "key": "mobility_work",
        "title": "Comfortable mobility",
        "xp": 180,
        "note": ""
      },
      {
        "key": "stretching",
        "title": "Gentle stretch or breathing break",
        "xp": 180,
        "note": ""
      },
      {
        "key": "recovery_check",
        "title": "Recovery check-in",
        "xp": 180,
        "note": ""
      }
    ]
  },
  {
    "day": 5,
    "banner": "Session 5 · Strength C",
    "type": "strength",
    "tasks": [
      {
        "key": "pushups_main",
        "title": "Wall, incline or floor push-ups",
        "xp": 180,
        "note": ""
      },
      {
        "key": "lunges",
        "title": "Supported split squats or chair sit-to-stands",
        "xp": 180,
        "note": ""
      },
      {
        "key": "bird_dog",
        "title": "Bird dogs or seated opposite arm and leg lifts",
        "xp": 180,
        "note": ""
      }
    ]
  },
  {
    "day": 6,
    "banner": "Session 6 · Easy movement",
    "type": "movement",
    "tasks": [
      {
        "key": "light_cardio",
        "title": "Comfortable walk or seated cardio",
        "xp": 180,
        "note": ""
      },
      {
        "key": "mobility_work",
        "title": "Gentle mobility",
        "xp": 180,
        "note": ""
      },
      {
        "key": "balance",
        "title": "Supported balance practice",
        "xp": 180,
        "note": ""
      }
    ]
  },
  {
    "day": 7,
    "banner": "Session 7 · Rest and review",
    "type": "recovery",
    "tasks": [
      {
        "key": "recovery_check",
        "title": "Rest and recovery check-in",
        "xp": 180,
        "note": ""
      },
      {
        "key": "stretching",
        "title": "Optional comfortable movement or quiet rest",
        "xp": 180,
        "note": ""
      },
      {
        "key": "weekly_review",
        "title": "Review the week and plan your next session",
        "xp": 180,
        "note": ""
      }
    ]
  }
],
    mindDisciplineQuestTemplates: [
      { id: 21, title: '📵 Mind Discipline: Social Silence', xp: 170 },
      { id: 22, title: '📖 Mind Discipline: Focus Reading', xp: 150 },
      { id: 23, title: '🧘 Mind Discipline: Meditation Protocol', xp: 130 }
    ],
    questTutorialLibrary: {
      pushup_basics: {
        title: 'Push-Up Form Basics',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=bwbBTPKHjtI',
        embedUrl: 'https://www.youtube-nocookie.com/embed/bwbBTPKHjtI?rel=0'
      },
      bench_dips: {
        title: 'Bench Dips Tutorial',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=Dk5JR0heZ9g',
        embedUrl: 'https://www.youtube-nocookie.com/embed/Dk5JR0heZ9g?rel=0'
      },
      diamond_pushups: {
        title: 'Diamond Push-Up Tutorial',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=ocrasqz9bMA',
        embedUrl: 'https://www.youtube-nocookie.com/embed/ocrasqz9bMA?rel=0'
      },
      plank_form: {
        title: 'Plank Form Tutorial',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c',
        embedUrl: 'https://www.youtube-nocookie.com/embed/ASdvN_XEl_c?rel=0'
      },
      pullup_form: {
        title: 'Pull-Up Form Tutorial',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=eGo4IYlbE5g',
        embedUrl: 'https://www.youtube-nocookie.com/embed/eGo4IYlbE5g?rel=0'
      },
      inverted_row: {
        title: 'Inverted Row Tutorial',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=hXTc1mDnZCw',
        embedUrl: 'https://www.youtube-nocookie.com/embed/hXTc1mDnZCw?rel=0'
      },
      band_curl: {
        title: 'Resistance Band Curl Tutorial',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=8LlgPpIlJlg',
        embedUrl: 'https://www.youtube-nocookie.com/embed/8LlgPpIlJlg?rel=0'
      },
      dead_hang: {
        title: 'Dead Hang Tutorial',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=pov0CUoWfjo',
        embedUrl: 'https://www.youtube-nocookie.com/embed/pov0CUoWfjo?rel=0'
      },
      squat_form: {
        title: 'Bodyweight Squat Tutorial',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=Yv6pKfdDRcM',
        embedUrl: 'https://www.youtube-nocookie.com/embed/Yv6pKfdDRcM?rel=0'
      },
      forward_lunge: {
        title: 'Forward Lunge Tutorial',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=QOVaHwm-Q6U',
        embedUrl: 'https://www.youtube-nocookie.com/embed/QOVaHwm-Q6U?rel=0'
      },
      wall_sit: {
        title: 'Wall Sit Tutorial',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=-cdph8hv0O0',
        embedUrl: 'https://www.youtube-nocookie.com/embed/-cdph8hv0O0?rel=0'
      },
      calf_raise: {
        title: 'Standing Calf Raise Tutorial',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=VdGuHOh7vE8',
        embedUrl: 'https://www.youtube-nocookie.com/embed/VdGuHOh7vE8?rel=0'
      },
      pike_pushup: {
        title: 'Pike Push-Up Tutorial',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=_w8Al0EHhkY',
        embedUrl: 'https://www.youtube-nocookie.com/embed/_w8Al0EHhkY?rel=0'
      },
      band_lateral_raise: {
        title: 'Resistance Band Lateral Raise Tutorial',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=UxxlX3smXHs',
        embedUrl: 'https://www.youtube-nocookie.com/embed/UxxlX3smXHs?rel=0'
      },
      lying_leg_raise: {
        title: 'Lying Leg Raise Tutorial',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=JB2oyawG9KI',
        embedUrl: 'https://www.youtube-nocookie.com/embed/JB2oyawG9KI?rel=0'
      },
      burpee_form: {
        title: 'Burpee Tutorial',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=G2hv_NYhM-A',
        embedUrl: 'https://www.youtube-nocookie.com/embed/G2hv_NYhM-A?rel=0'
      },
      jump_squat: {
        title: 'Jump Squat Tutorial',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=CVaEhXotL7M',
        embedUrl: 'https://www.youtube-nocookie.com/embed/CVaEhXotL7M?rel=0'
      },
      mountain_climber: {
        title: 'Mountain Climber Tutorial',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=2YggU-cce38',
        embedUrl: 'https://www.youtube-nocookie.com/embed/2YggU-cce38?rel=0'
      },
      interval_running: {
        title: 'Interval Running Tutorial',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=8hJ1HDcMowk',
        embedUrl: 'https://www.youtube-nocookie.com/embed/8hJ1HDcMowk?rel=0'
      },
      mobility_routine: {
        title: '10-Minute Mobility Routine',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=Eae4ENV1Vsc',
        embedUrl: 'https://www.youtube-nocookie.com/embed/Eae4ENV1Vsc?rel=0'
      },
      full_body_stretch: {
        title: 'Full Body Stretch Routine',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=L_xrDAtykMI',
        embedUrl: 'https://www.youtube-nocookie.com/embed/L_xrDAtykMI?rel=0'
      },
      walking_cardio: {
        title: 'Walking Cardio Workout',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=enYITYwvPAQ',
        embedUrl: 'https://www.youtube-nocookie.com/embed/enYITYwvPAQ?rel=0'
      },
      sleep_hygiene: {
        title: 'Sleep Hygiene Guide',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=FwcjXaXCEWY',
        embedUrl: 'https://www.youtube-nocookie.com/embed/FwcjXaXCEWY?rel=0'
      },
      social_media_detox: {
        title: 'Quit Social Media Guide',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=8cXuJrQaltg',
        embedUrl: 'https://www.youtube-nocookie.com/embed/8cXuJrQaltg?rel=0'
      },
      reading_focus: {
        title: 'Read and Remember More',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=1caaJDVl_64',
        embedUrl: 'https://www.youtube-nocookie.com/embed/1caaJDVl_64?rel=0'
      },
      guided_meditation: {
        title: 'Guided Meditation for Beginners',
        sourceLabel: 'YouTube',
        watchUrl: 'https://www.youtube.com/watch?v=ETXwO9ssXqQ',
        embedUrl: 'https://www.youtube-nocookie.com/embed/ETXwO9ssXqQ?rel=0'
      }
    },
    questTutorialKeys: {
      pushups_main: 'pushup_basics',
      dips: 'bench_dips',
      diamond_pushups: 'diamond_pushups',
      plank_hold: 'plank_form',
      pullups: 'pullup_form',
      rows: 'inverted_row',
      band_curls: 'band_curl',
      dead_hangs: 'dead_hang',
      squats: 'squat_form',
      lunges: 'forward_lunge',
      wall_sit: 'wall_sit',
      calf_raises: 'calf_raise',
      pike_pushups: 'pike_pushup',
      lateral_raises: 'band_lateral_raise',
      plank_variations: 'plank_form',
      leg_raises: 'lying_leg_raise',
      burpees: 'burpee_form',
      jump_squats: 'jump_squat',
      mountain_climbers: 'mountain_climber',
      sprint_intervals: 'interval_running',
      mobility_work: 'mobility_routine',
      stretching: 'full_body_stretch',
      light_cardio: 'walking_cardio',
      sleep_requirement: 'sleep_hygiene',
      boss_pushups: 'pushup_basics',
      boss_squats: 'squat_form',
      boss_pullups: 'pullup_form',
      boss_burpees: 'burpee_form'
    },
    questTutorialIds: {
      6: 'pushup_basics',
      7: 'walking_cardio',
      21: 'social_media_detox',
      22: 'reading_focus',
      23: 'guided_meditation'
    },
    questTutorialQueries: {
      pushups_main: 'push up proper form tutorial bodyweight',
      dips: 'bench dips proper form tutorial',
      diamond_pushups: 'diamond push up proper form tutorial',
      plank_hold: 'plank proper form tutorial',
      pullups: 'pull up proper form tutorial',
      rows: 'inverted row proper form tutorial',
      band_curls: 'resistance band bicep curl proper form tutorial',
      dead_hangs: 'dead hang grip training tutorial',
      squats: 'bodyweight squat proper form tutorial',
      lunges: 'bodyweight lunge proper form tutorial',
      wall_sit: 'wall sit proper form tutorial',
      calf_raises: 'standing calf raise proper form tutorial',
      pike_pushups: 'pike push up proper form tutorial',
      lateral_raises: 'resistance band lateral raise proper form tutorial',
      plank_variations: 'plank variations tutorial',
      leg_raises: 'lying leg raise proper form tutorial',
      burpees: 'burpee proper form tutorial',
      jump_squats: 'jump squat proper form tutorial',
      mountain_climbers: 'mountain climber proper form tutorial',
      sprint_intervals: 'sprint interval workout tutorial',
      mobility_work: 'full body mobility routine tutorial',
      stretching: 'full body stretching routine tutorial',
      light_cardio: 'low intensity cardio workout tutorial',
      sleep_requirement: 'sleep hygiene recovery routine tutorial',
      boss_pushups: 'push up proper form tutorial bodyweight',
      boss_squats: 'bodyweight squat proper form tutorial',
      boss_pullups: 'pull up proper form tutorial',
      boss_burpees: 'burpee proper form tutorial'
    },
    questTutorialQueriesById: {
      6: 'weighted push up proper form tutorial',
      7: 'walking posture and daily step goal tutorial',
      21: 'dopamine detox no social media challenge tutorial',
      22: 'how to read with focus and concentration tutorial',
      23: '10 minute meditation for beginners'
    },
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
    showQuestTutorialModal: false,
    activeQuestTutorial: null,
    showResetProgressModal: false,
    logs: [],
    dataStatus: 'loading',
    accountReady: false,
    accountHydrating: false,
    lastSyncedAt: null,

    rankTiers() {
      return [[1, 'E-Rank'], [7, 'D-Rank'], [14, 'C-Rank'], [22, 'B-Rank'],
        [32, 'A-Rank'], [45, 'S-Rank'], [60, 'S++ Rank']].map(([level, name]) => ({
          level, name, xp: this.xpThresholdForLevel(level)
        }));
    },

    recordProgressSnapshot() {
      const history = this.meta.progressHistory || {};
      const day = this.todayDateKey();
      history[day] = { xp: this.profile.xp, completed: this.quests.filter(q => q.done).length,
        total: this.quests.length };
      this.meta.progressHistory = Object.fromEntries(Object.entries(history).sort().slice(-366));
    },

    dataStatusLabel() {
      if (this.dataStatus === 'synced') return 'Synced with your account';
      if (this.dataStatus === 'loading') return 'Loading account data…';
      if (this.dataStatus === 'pending') return 'Local changes — waiting to sync';
      return 'Offline — showing saved data';
    },
    backendSyncTimer: null,
    backendRefreshTimer: null,
    backendSyncPending: false,
    aiDietGenerationBusy: false,
    voiceAnnouncerEnabled: true,
    speechVoiceName: '',
    speechPrimed: false,
    questReminderWindowMs: 60 * 60 * 1000,
    questReminderNotificationId: 11001,
    questReminderChannelId: 'daily-quest-reminders',
    questReminderChannelReady: false,
    questReminderSyncSignature: '',
    questReminderAppListenerBound: false,

    async init() {
      if (this._initialized) return;
      this._initialized = true;
      if (typeof window !== 'undefined') {
        window.__soloLevelingApp = this;
      }
      this.initializeVoiceAnnouncer();
      this.initializeQuestReminderNotifications();
      const stateKey = this.stateStorageKey();
      let saved = localStorage.getItem(stateKey);
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
          saved = null;
          this.log('Corrupted save detected. State reset.');
        }
      }
      this.loadHunterProfileFromRegistration();
      this.accountReady = Boolean(saved);
      this.accountHydrating = true;
      try { await this.syncFromBackend({initial:true}); } catch (_) { this.dataStatus = 'offline'; }
      this.accountHydrating = false;
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
      if (this.accountReady) this.save({ skipBackendSync: true, preserveGameStateUpdatedAt: true });
      if (this.accountReady && this.meta.progressSyncPending) this.scheduleBackendSync();
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
      const { progressSyncPending, ...syncedMeta } = this.meta;
      return {
        meta: syncedMeta,
        quests: Array.isArray(this.quests) ? this.quests : [],
        raidTasks: Array.isArray(this.raidTasks) ? this.raidTasks : [],
        hiddenQuest: this.hiddenQuest && typeof this.hiddenQuest === 'object'
          ? { ...this.hiddenQuest }
          : null
      };
    },

    applyBackendGameState(gameState, updatedAt = null) {
      if (!gameState || typeof gameState !== 'object') return;
      // A legacy server save must be migrated even if this device initialized v2 defaults offline.
      this.meta.questRulesVersion = gameState.meta?.questRulesVersion;
      if (gameState.meta && typeof gameState.meta === 'object') {
        const { progressSyncPending, ...syncedMeta } = gameState.meta;
        this.meta = { ...this.meta, ...syncedMeta };
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
      this.syncNativeQuestReminder(true).catch(() => {});
    },

    save(options = {}) {
      // Never persist placeholder progress before the account has loaded.
      if (!this.accountReady) return;
      const skipBackendSync = Boolean(options.skipBackendSync);
      if (!skipBackendSync) {
        this.recordProgressSnapshot();
        this.meta.progressSyncPending = true;
        this.dataStatus = 'pending';
      }
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
      this.syncNativeQuestReminder().catch(() => {});
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
      // Account age is not training experience and must never move the routine.
      if (typeof dateKey === 'string') this.meta.accountCreatedDateKey = dateKey;
      return false;
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
        xp: applyProgressFields && Number.isFinite(user.xp) ? user.xp : this.profile.xp,
        isAdmin: Boolean(user.is_admin || user.isAdmin),
        stats: {
          ...this.profile.stats,
          ...(applyProgressFields ? (user.stats || {}) : {})
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

    async syncFromBackend(options = {}) {
      if (this.backendSyncPending) return;
      if (this.accountReady && this.meta.progressSyncPending && !options.initial) { this.scheduleBackendSync(); return; }
      const response = await this.backendRequest('/users/me', { method: 'GET' });
      if (!response) { this.dataStatus = 'offline'; return; }
      const user = await response.json();
      const hadAccountData = this.accountReady;
      this.accountReady = true;
      const localGameStateTimestamp = hadAccountData ? this.timestampMs(this.meta?.gameStateUpdatedAt) : null;
      const hasPendingLocalProgress = hadAccountData && this.meta.progressSyncPending;
      const backendGameStateTimestamp = this.timestampMs(user?.game_state_updated_at);
      const hasBackendGameState = Boolean(user?.game_state && typeof user.game_state === 'object');
      const shouldApplyBackendGameState = (
        hasBackendGameState
        && (
          localGameStateTimestamp === null
          || (backendGameStateTimestamp === null && !hasPendingLocalProgress)
          || (backendGameStateTimestamp !== null && backendGameStateTimestamp >= localGameStateTimestamp)
        )
      );
      this.applyBackendUser(user, { applyProgressFields: (!hasBackendGameState && !hasPendingLocalProgress) || shouldApplyBackendGameState });
      if (shouldApplyBackendGameState) {
        this.meta.progressSyncPending = false;
        this.applyBackendGameState(user.game_state, user.game_state_updated_at || null);
      }
      this.ensureProfileStats();
      this.ensureMetaDefaults();
      this.applyDailyResets();
      this.recomputeProgressFromCurrentXp();
      this.recordProgressSnapshot();
      this.dataStatus = 'synced';
      this.lastSyncedAt = new Date().toISOString();
      this.save({ skipBackendSync: true, preserveGameStateUpdatedAt: true });
      if (this.meta.progressSyncPending || (hasBackendGameState && !shouldApplyBackendGameState)) {
        this.meta.progressSyncPending = true;
        this.scheduleBackendSync();
      }
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
      const response = await this.backendRequest('/users/me/progress', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response) throw new Error('Progress has not synced.');
      return response.json();
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
      if (this.accountHydrating || this.accountReady === false) return;
      if (!this.firebaseIdToken()) { this.dataStatus = 'offline'; return; }
      this.dataStatus = 'pending';
      if (this.backendSyncTimer) {
        clearTimeout(this.backendSyncTimer);
      }
      this.backendSyncTimer = setTimeout(() => {
        if (this.backendSyncPending) return;
        this.backendSyncPending = true;
        const sentAt = this.meta.gameStateUpdatedAt;
        Promise.all([this.syncProfileToBackend(), this.syncProgressToBackend()])
          .then(([, user]) => {
            if (this.meta.gameStateUpdatedAt !== sentAt) return;
            if (this.timestampMs(user.game_state_updated_at) > this.timestampMs(sentAt)) {
              this.applyBackendUser(user);
              this.applyBackendGameState(user.game_state, user.game_state_updated_at);
            }
            this.meta.progressSyncPending = false;
            this.dataStatus = 'synced'; this.lastSyncedAt = new Date().toISOString();
            this.save({skipBackendSync: true, preserveGameStateUpdatedAt: true});
          })
          .catch(() => { this.dataStatus = 'offline'; })
          .finally(() => {
            this.backendSyncPending = false;
            if (this.meta.progressSyncPending && this.dataStatus !== 'offline') this.scheduleBackendSync();
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
      const start = this.xpThresholdForLevel(this.profile.level);
      const xp = Number(this.profile?.xp) - start;
      const next = Number(this.profile?.nextLevelXp) - start;
      if (!Number.isFinite(xp) || !Number.isFinite(next) || next <= 0) return 0;
      return Math.max(0, Math.min(100, (xp / next) * 100));
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
      const date = new Date(`${dateKey}T00:00:00Z`);
      if (Number.isNaN(date.getTime())) return this.currentWeekKey();
      return this.currentWeekKey(dateKey);
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
      return ({normal: 1, hard: 1.1, extreme: 1.2})[mode || this.meta.dailyMode] || 1;
    },


    modeDifficultyMultiplier(mode = null) {
      return ({normal: 1, hard: 1.1, extreme: 1.15})[mode || this.meta.dailyMode] || 1;
    },


    modeLabel(mode = null) {
      return ({normal: 'Comfortable', hard: 'Steady', extreme: 'Challenging'})[mode || this.meta.dailyMode] || 'Comfortable';
    },


    isFocusBuildSelected() {
      return !!this.focusBuildProfiles[this.meta.focusBuild];
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
      if (!this.focusBuildProfiles[build]) return;
      this.meta.focusBuild = build;
      this.meta.focusBuildDayKey = this.todayDateKey();
      this.applyDietMealTemplate();
      this.recordDailyNutritionSnapshot();
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

    buildXpMultiplier() {
      // A cosmetic build choice does not change physical capacity or quest rewards.
      return 1;
    },


    selectDailyMode(mode) {
      this.applyDailyResets();
      if (!['normal','hard','extreme'].includes(mode) || this.sessionStarted()) return;
      this.meta.dailyMode = mode;
      this.meta.dailyModeDayKey = this.todayDateKey();
      this.log('Effort selected: ' + this.modeLabel(mode) + '.');
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
      return quest.done && Number.isFinite(quest.earnedXp) ? quest.earnedXp : this.questReward(quest);
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
      const minutes = this.meta.sessionMinutes || 20;
      const sets = minutes <= 20 ? 1 : minutes <= 30 ? 2 : 3;
      const base = {beginner:6, regular:8, experienced:10}[this.meta.trainingExperience] || 6;
      const reps = Math.round(base * this.modeDifficultyMultiplier());
      const strength = ['pushups_main','squats','prone_w','glute_bridge','dead_bug','lunges','bird_dog'];
      if (strength.includes(quest.key)) {
        const perSide = ['dead_bug','lunges','bird_dog'].includes(quest.key) ? ' per side' : '';
        return 'Up to ' + sets + ' × ' + reps + ' reps' + perSide + '. Rest 60–90s between sets. Use an easier variation or fewer reps as needed.';
      }
      if (quest.key === 'light_cardio') return Math.round(minutes * 0.55) + ' min at a pace where conversation is comfortable. Split into shorter blocks if needed.';
      if (quest.key === 'mobility_work') return '3–5 min of comfortable, unforced movement. Stay within a comfortable range.';
      if (quest.key === 'balance') return '2 min total near a stable support, or seated weight shifts.';
      if (quest.key === 'stretching') return '3–5 min of easy stretching or quiet breathing. Full rest is a valid option.';
      if (quest.key === 'recovery_check') return 'Check how you feel and choose rest or light movement. No extra workout required.';
      if (quest.key === 'weekly_review') return '2 min: note what felt manageable and choose your next session settings.';
      return quest.note || '';
    },


    questTutorialQuery(quest) {
      if (!quest) return '';
      const byKey = quest.key ? this.questTutorialQueries[quest.key] : '';
      const byId = Number.isFinite(quest.id) ? this.questTutorialQueriesById[quest.id] : '';
      if (byKey) return byKey;
      if (byId) return byId;
      const fallbackTitle = String(quest.title || '').replace(/[^\w\s-]+/g, ' ').trim();
      return fallbackTitle ? `${fallbackTitle} tutorial` : '';
    },

    questTutorial(quest) {
      if (!quest) return null;
      const tutorialId =
        (quest.key && this.questTutorialKeys[quest.key])
        || (Number.isFinite(quest.id) ? this.questTutorialIds[quest.id] : '');
      if (tutorialId && this.questTutorialLibrary[tutorialId]) {
        return this.questTutorialLibrary[tutorialId];
      }
      const query = this.questTutorialQuery(quest);
      if (!query) return null;
      return {
        title: `${String(quest.title || 'Quest').trim()} tutorial search`,
        sourceLabel: 'YouTube Search',
        watchUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`,
        embedUrl: ''
      };
    },

    questTutorialUrl(quest) {
      return this.questTutorial(quest)?.watchUrl || '';
    },

    questTutorialHint(quest) {
      const tutorial = this.questTutorial(quest);
      if (!tutorial) return '';
      if (!tutorial.embedUrl) {
        return 'Fallback web source: YouTube search';
      }
      return `Curated from web: ${tutorial.sourceLabel} video`;
    },

    questTutorialButtonLabel(quest) {
      return this.questTutorial(quest)?.embedUrl ? 'Watch tutorial' : 'Open search';
    },

    openQuestTutorial(quest) {
      const tutorial = this.questTutorial(quest);
      if (!tutorial) return;
      if (!tutorial.embedUrl) {
        if (typeof window !== 'undefined' && tutorial.watchUrl) {
          window.open(tutorial.watchUrl, '_blank', 'noopener,noreferrer');
        }
        return;
      }
      this.activeQuestTutorial = tutorial;
      this.showQuestTutorialModal = true;
    },

    closeQuestTutorial() {
      this.showQuestTutorialModal = false;
      this.activeQuestTutorial = null;
    },

    syncModeSpecificQuests() {
      // Effort changes the existing session, never adds mandatory chores.
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
      this.hiddenQuest.active = false;
      this.hiddenQuest.completed = Boolean(this.hiddenQuest.completed);
      this.hiddenQuest.dayKey = typeof this.hiddenQuest.dayKey === 'string' ? this.hiddenQuest.dayKey : null;
      this.hiddenQuest.title = this.hiddenQuest.title || '🟦 System Alert: Hidden Quest Detected';
      this.hiddenQuest.objective = '';
      this.hiddenQuest.rewardXp = 0;
      this.hiddenQuest.penaltyXp = 0;
    },

    ensureMetaDefaults() {
      this.ensureTrainingSettings();
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
        Object.keys(days).forEach((dayKey) => {
          if (!/^\d{4}-\d{2}-\d{2}$/.test(dayKey) || Number.isNaN(Date.parse(dayKey))) return;
          const calendarWeek = this.weekKeyFromDateKey(dayKey);
          if (!this.meta.weeklyNutritionHistory[calendarWeek]) this.meta.weeklyNutritionHistory[calendarWeek] = { days: {} };
          const snapshot = days[dayKey] || {};
          const proteinPercent = Number.isFinite(snapshot.proteinPercent) ? Math.max(0, Math.min(100, Math.round(snapshot.proteinPercent))) : 0;
          const hydrationPercent = Number.isFinite(snapshot.hydrationPercent) ? Math.max(0, Math.min(100, Math.round(snapshot.hydrationPercent))) : 0;
          const consistencyPercent = Number.isFinite(snapshot.consistencyPercent) ? Math.max(0, Math.min(100, Math.round(snapshot.consistencyPercent))) : 0;
          this.meta.weeklyNutritionHistory[calendarWeek].days[dayKey] = {
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

    ensureTrainingSettings() {
      if (this.meta.questRulesVersion !== 2) {
        // Preserve earned XP/stats. Old account-age routine numbers are not completed sessions.
        const alreadyCleared = this.meta.lastFullClearBonusDate === this.todayDateKey();
        this.meta.protocolDay = 1;
        this.meta.questRotationDate = null;
        this.meta.completedTrainingSessions = 0;
        this.meta.trainingSessions = {};
        this.meta.sessionRestDay = null;
        this.meta.questRulesVersion = 2;
        this.meta.progressSyncPending = true;
        this.meta.gameStateUpdatedAt = new Date().toISOString();
        this.meta.dailyMode = 'normal';
        this.meta.dailyModeDayKey = this.todayDateKey();
        this.meta.loadTier = 0;
        this.meta.fatigueDebuffActive = false;
        this.hiddenQuest.active = false;
        this.quests = this.buildProtocolQuests(1).map(quest=>({...quest,done:alreadyCleared}));
        this.meta.questRotationDate = this.todayDateKey();
        if (alreadyCleared) this.meta.trainingSessions[this.todayDateKey()]={completed:true,type:'legacy',protocolDay:1};
      }
      if (!['beginner','regular','experienced'].includes(this.meta.trainingExperience)) this.meta.trainingExperience = 'beginner';
      if (![15,20,25,30,40].includes(this.meta.sessionMinutes)) this.meta.sessionMinutes = 20;
      if (!this.meta.trainingSessions || typeof this.meta.trainingSessions !== 'object') this.meta.trainingSessions = {};
      this.meta.completedTrainingSessions = Math.max(0,Math.floor(Number(this.meta.completedTrainingSessions)||0));
      if (!this.focusBuildProfiles[this.meta.focusBuild]) this.meta.focusBuild = 'monarch';
    },

    sessionStarted() {
      return this.quests.some(quest=>quest.done) || this.meta.sessionRestDay === this.todayDateKey();
    },

    updateTrainingSetting(key, value) {
      this.applyDailyResets();
      if (!this.accountReady || this.sessionStarted()) return;
      if (key === 'trainingExperience' && ['beginner','regular','experienced'].includes(value)) this.meta[key] = value;
      else if (key === 'sessionMinutes' && [15,20,25,30,40].includes(Number(value))) this.meta[key] = Number(value);
      else return;
      this.save();
    },

    weeklyTrainingRecords() {
      const week = this.currentWeekKey();
      return Object.entries(this.meta.trainingSessions || {}).filter(([day])=>day<=this.todayDateKey() && this.currentWeekKey(day)===week).map(([,record])=>record);
    },

    sessionEstimate() {
      return this.currentProtocol().type === 'recovery' ? '5–10 min or full rest' : 'About ' + (this.meta.sessionMinutes || 20) + ' min including breaks';
    },

    trainingLoadTargetsForTier() {
      const reps = {beginner:6, regular:8, experienced:10}[this.meta.trainingExperience] || 6;
      return {pushups:reps, pullups:0, squats:reps};
    },


    trainingLoadTargets() {
      return this.trainingLoadTargetsForTier();
    },


    pushupTargetReps() {
      return this.trainingLoadTargets().pushups;
    },

    pushupQuestNote() {
      return this.questNoteForDisplay({key:'pushups_main'});
    },


    daysBetweenDateKeys(startKey, endKey) {
      const parse = key => /^\d{4}-\d{2}-\d{2}$/.test(key || '') ? Date.parse(key + 'T00:00:00Z') : NaN;
      const difference = parse(endKey) - parse(startKey);
      return Number.isFinite(difference) ? Math.round(difference / 86400000) : 0;
    },


    evaluateBiweeklyLoadProgress() {
      // Workload is chosen by the user; elapsed time and XP do not increase it.
      this.meta.loadTier = 0;
    },


    protocolDayNumberFromDate() {
      return this.meta.protocolDay || 1;
    },


    currentProtocol() {
      return this.weeklyProtocols.find(plan => plan.day === this.meta.protocolDay) || this.weeklyProtocols[0];
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
      const day = this.meta.protocolDay || 1;
      if (this.meta.questRotationDate === targetDateKey && this.quests.length) return;
      this.quests = this.buildProtocolQuests(day);
      this.meta.questRotationDate = targetDateKey;
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
      // Earned game stats never silently add weighted exercise or a 15,000-step target.
    },


    dungeonDefinitionForWeek() {
      return {name:'Weekly consistency bonus', phase:'This week', descriptor:'Optional · no extra workout',
        tasks:[{id:1,title:'Complete 3 chosen sessions',xp:0},
          {id:2,title:'Log a recovery session or planned rest day',xp:0},
          {id:3,title:'Reflect on the week and plan your next session',xp:0}],bonusXp:300};
    },


    currentDungeon() {
      return this.dungeonDefinitionForWeek(this.meta.dungeonArcWeek || 1);
    },

    syncRaidTasksWithDungeon() {
      const records = this.weeklyTrainingRecords();
      const definition = this.currentDungeon();
      this.raidBonusXp = definition.bonusXp;
      this.raidTasks = definition.tasks.map(task => ({...task, done:task.id === 1
        ? records.filter(day => day.completed).length >= 3
        : task.id === 2 ? records.some(day => day.rest || (day.completed && day.type === 'recovery'))
        : this.meta.weeklyReviewWeek === this.currentWeekKey()}));
    },


    maybeTriggerHiddenQuest(dayKey) {
      this.hiddenQuest = {...this.hiddenQuest, active:false, completed:false, dayKey, penaltyXp:0};
    },


    resolveHiddenQuestOnDayChange() {
      this.hiddenQuest.active = false;
    },


    completeHiddenQuest() {
      // Legacy hidden challenges no longer add unplanned work or rewards.
    },

    applyQuestStatRewards(quest) {
      if (!quest) return;
      const key = quest.key || '';
      const rewardsByQuestKey = {
        pushups_main: [{ stat: 'strength', amount: 2 }],
        squats: [{ stat: 'strength', amount: 1 }],
        prone_w: [{ stat: 'strength', amount: 1 }],
        glute_bridge: [{ stat: 'strength', amount: 1 }],
        lunges: [{ stat: 'strength', amount: 1 }],
        dead_bug: [{ stat: 'agility', amount: 1 }],
        bird_dog: [{ stat: 'agility', amount: 1 }],
        balance: [{ stat: 'agility', amount: 1 }],
        light_cardio: [{ stat: 'endurance', amount: 1 }],
        mobility_work: [{ stat: 'recovery', amount: 1 }],
        stretching: [{ stat: 'recovery', amount: 1 }],
        recovery_check: [{ stat: 'recovery', amount: 1 }],
        weekly_review: [{ stat: 'discipline', amount: 1 }]
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

    currentWeekKey(dateKey = this.todayDateKey()) {
      const date = new Date(dateKey + 'T00:00:00Z');
      const offset = (date.getUTCDay() + 6) % 7;
      date.setUTCDate(date.getUTCDate() - offset);
      return date.toISOString().slice(0,10); // Monday, including weeks crossing New Year.
    },


    canEnterDungeonRaid() {
      return this.weeklyTrainingRecords().filter(day => day.completed).length >= 3;
    },


    directiveCompletionProgress() {
      return Math.min(3, this.weeklyTrainingRecords().filter(day => day.completed).length) + '/3 sessions';
    },


    totalWeeklyDirectiveTasks() {
      return 3;
    },


    directiveCompletionPercent() {
      return Math.min(100, Math.round(this.weeklyTrainingRecords().filter(day => day.completed).length / 3 * 100));
    },


    dungeonDifficultyRank() {
      const rankOrder = ['E-Rank', 'D-Rank', 'C-Rank', 'B-Rank', 'A-Rank', 'S-Rank', 'S++ Rank'];
      const currentIndex = Math.max(0, rankOrder.indexOf(this.profile.rank));
      return rankOrder[Math.min(currentIndex + 1, rankOrder.length - 1)];
    },

    estimatedSurvivalRate() {
      return null; // No invented fitness or survival estimate.
    },


    applyDailyResets() {
      this.ensureTrainingSettings();
      const today = this.todayDateKey();
      const previous = this.meta.lastDailyResetDate;
      // Do not grant another day when a device clock moves backwards.
      if (previous && this.daysBetweenDateKeys(previous,today) <= 0) return;
      if (previous) {
        const prior = this.meta.trainingSessions[previous];
        if (prior?.completed) this.meta.protocolDay = (this.meta.protocolDay % 7) + 1;
        if (!prior?.completed && !prior?.rest || this.daysBetweenDateKeys(previous,today) > 1) {
          this.meta.dailyStreak = 0;
          this.meta.survivalStreak = 0;
        }
        this.recordDailyNutritionSnapshot(this.meta.dietTrackingDayKey || previous);
      }
      this.meta.lastDailyResetDate = today;
      this.meta.questRotationDate = null;
      this.meta.dailyMode = 'normal';
      this.meta.dailyModeDayKey = today;
      this.meta.focusBuildDayKey = today;
      this.meta.sessionRestDay = null;
      this.meta.lastFullClearBonusDate = null;
      this.meta.lastDailyStreakCreditDate = null;
      this.meta.lastIncompleteQuestReminderDayKey = null;
      this.meta.lastIncompleteQuestReminderAt = null;
      this.meta.fatigueDebuffActive = false;
      this.meta.reassignmentDayKey = null;
      this.meta.reassignmentProtocolDay = null;
      this.meta.dietTrackingDayKey = today;
      this.meta.dietMealStatus = {};
      this.meta.dietWaterLiters = 0;
      this.dietPlan.forEach(meal => {meal.done=false;});
      this.meta.dailyStartXp = this.profile.xp;
      this.meta.dailyStartStats = {...this.profile.stats};
      this.meta.dailyStartDietStatXp = {...this.meta.dietStatXp};
      this.meta.dailyStartDietWaterLiters = 0;
      this.meta.weeklyDirectiveWeek = this.currentWeekKey();
      this.meta.lastRaidResetWeek = this.currentWeekKey();
      this.syncDailyQuestRotation(today);
      this.maybeTriggerHiddenQuest(today);
      this.syncRaidTasksWithDungeon();
      this.applyDietMealTemplate();
      this.meta.progressSyncPending = true;
      this.meta.gameStateUpdatedAt = new Date().toISOString();
    },


    isRaidBonusClaimedThisWeek() {
      return this.meta.lastRaidClaimWeek === this.currentWeekKey();
    },

    normalizeQuestAndRaidXp() {
      if (!Array.isArray(this.quests)) this.quests = [];
      if (!Array.isArray(this.raidTasks)) this.raidTasks = [];
      // Versioned session templates own rewards; legacy bonus chores are not restored.
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
      if (!this.accountReady) return;
      if (this.meta.lastDailyResetDate && this.todayDateKey() < this.meta.lastDailyResetDate) return;
      this.applyDailyResets();
      if (this.meta.sessionRestDay === this.todayDateKey()) return;
      const quest = this.quests.find(item => item.id === id);
      if (!quest || quest.done) return;
      quest.done = true;
      quest.earnedXp = this.questReward(quest);
      this.addXp(quest.earnedXp);
      this.applyQuestStatRewards(quest);
      this.log('Completed: ' + quest.title + ' (+' + quest.earnedXp + ' XP).');
      if (this.allDailyQuestsComplete() && this.meta.lastFullClearBonusDate !== this.todayDateKey()) {
        const today = this.todayDateKey();
        const prior = this.meta.trainingSessions[today];
        if (!prior?.completed) {
          this.meta.completedTrainingSessions += 1;
          this.meta.trainingSessions[today] = {completed:true, type:this.currentProtocol().type, protocolDay:this.meta.protocolDay};
          this.meta.trainingSessions = Object.fromEntries(Object.entries(this.meta.trainingSessions).sort().slice(-366));
          this.meta.dailyStreak = (this.meta.dailyStreak || 0) + 1;
          this.meta.survivalStreak = this.meta.dailyStreak;
        }
        this.meta.lastDailyStreakCreditDate = today;
        this.meta.lastFullClearBonusDate = today;
        const bonus = Math.round(this.quests.reduce((sum,item)=>sum+(item.earnedXp || 0),0)*0.25);
        this.addXp(bonus);
        this.log('Session complete. +' + bonus + ' XP bonus. The next session opens tomorrow.');
      }
      this.syncRaidTasksWithDungeon();
      this.save();
    },


    toggleQuest(id) {
      this.completeQuest(id);
    },

    toggleRaid(id) {
      this.applyDailyResets();
      if (id !== 3 || !this.canEnterDungeonRaid() || this.isRaidBonusClaimedThisWeek()) return;
      this.meta.weeklyReviewWeek = this.currentWeekKey();
      this.syncRaidTasksWithDungeon();
      this.save();
    },


    claimRaidBonus() {
      this.applyDailyResets();
      if (!this.accountReady || this.todayDateKey() < this.meta.lastDailyResetDate) return;
      this.syncRaidTasksWithDungeon();
      if (!this.canEnterDungeonRaid() || this.isRaidBonusClaimedThisWeek() || !this.raidTasks.every(task=>task.done)) return;
      this.meta.lastRaidClaimWeek = this.currentWeekKey();
      this.addXp(this.raidBonusXp);
      this.log('Weekly consistency bonus: +' + this.raidBonusXp + ' XP.');
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
      // Mark changes from daily resets as well as quest rewards for synchronization.
      this.meta.progressSyncPending = true;
      this.meta.gameStateUpdatedAt = new Date().toISOString();
      // The caller saves the completed quest and XP together after all rewards.
    },

    updateRank() {
      this.profile.rank = this.rankTiers().filter(tier => this.profile.level >= tier.level).pop().name;
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

    localNotificationsPlugin() {
      return window?.Capacitor?.Plugins?.LocalNotifications || null;
    },

    isNativeApp() {
      if (typeof window === 'undefined' || !window.Capacitor) return false;
      if (typeof window.Capacitor.isNativePlatform === 'function') {
        return window.Capacitor.isNativePlatform();
      }
      if (typeof window.Capacitor.getPlatform === 'function') {
        return window.Capacitor.getPlatform() !== 'web';
      }
      return false;
    },

    shouldMaintainNativeQuestReminder() {
      if (!this.accountReady || this.meta.sessionRestDay === this.todayDateKey()) return false;
      if (!this.isNativeApp()) return false;
      if (!this.isFocusBuildSelected() || !this.isDailyModeSelected()) return false;
      if (!Array.isArray(this.quests) || this.quests.length === 0) return false;
      return !this.allDailyQuestsComplete();
    },

    nativeQuestReminderAt() {
      if (!this.shouldMaintainNativeQuestReminder()) return null;
      const remainingMs = this.timeUntilDailyResetMs();
      if (!Number.isFinite(remainingMs) || remainingMs <= this.questReminderWindowMs) {
        return null;
      }
      return new Date(Date.now() + remainingMs - this.questReminderWindowMs);
    },

    async ensureNativeQuestReminderChannel() {
      if (this.questReminderChannelReady) return;
      const localNotifications = this.localNotificationsPlugin();
      if (!localNotifications || typeof localNotifications.createChannel !== 'function') return;
      try {
        await localNotifications.createChannel({
          id: this.questReminderChannelId,
          name: 'Daily Quest Reminders',
          description: 'Reminders before the daily quest reset.',
          importance: 4,
          visibility: 1,
          vibration: true,
          lights: true,
          lightColor: '#22d3ee'
        });
        this.questReminderChannelReady = true;
      } catch (_) {
        // Ignore channel creation failures; default channel is an acceptable fallback.
      }
    },

    async syncNativeQuestReminder(force = false) {
      const localNotifications = this.localNotificationsPlugin();
      if (!localNotifications || !this.isNativeApp()) return;

      const reminderAt = this.nativeQuestReminderAt();
      const signature = reminderAt
        ? `schedule:${this.todayDateKey()}:${reminderAt.toISOString()}`
        : `cancel:${this.todayDateKey()}:${this.isFocusBuildSelected()}:${this.isDailyModeSelected()}:${this.allDailyQuestsComplete()}`;
      if (!force && this.questReminderSyncSignature === signature) return;
      this.questReminderSyncSignature = signature;

      try {
        if (typeof localNotifications.cancel === 'function') {
          await localNotifications.cancel({
            notifications: [{ id: this.questReminderNotificationId }]
          });
        }
      } catch (_) {
        // Ignore cancellation failures and continue with best-effort scheduling.
      }

      if (!reminderAt) return;

      try {
        const permission = typeof localNotifications.checkPermissions === 'function'
          ? await localNotifications.checkPermissions()
          : { display: 'prompt' };
        if (permission?.display !== 'granted') return;
        await this.ensureNativeQuestReminderChannel();
        if (typeof localNotifications.schedule !== 'function') return;
        await localNotifications.schedule({
          notifications: [
            {
              id: this.questReminderNotificationId,
              title: 'Daily Quest Reminder',
              body: 'Daily directives are still incomplete. 1 hour left before reset.',
              largeBody: 'Daily directives are still incomplete. Return to Ascendra and finish your quests before the daily reset.',
              summaryText: 'Ascendra quest reset',
              channelId: this.questReminderChannelId,
              schedule: {
                at: reminderAt,
                allowWhileIdle: true
              },
              extra: {
                type: 'daily-quest-reminder',
                dayKey: this.todayDateKey()
              }
            }
          ]
        });
      } catch (_) {
        // Ignore native scheduling failures; the in-app reminder still acts as fallback.
      }
    },

    initializeQuestReminderNotifications() {
      if (typeof window === 'undefined') return;
      const primePermission = () => {
        this.ensureQuestReminderPermissions().catch(() => {});
      };
      window.addEventListener('pointerdown', primePermission, { once: true });
      window.addEventListener('keydown', primePermission, { once: true });
      if (!this.questReminderAppListenerBound) {
        const appPlugin = window?.Capacitor?.Plugins?.App;
        if (appPlugin && typeof appPlugin.addListener === 'function') {
          appPlugin.addListener('appStateChange', ({ isActive }) => {
            if (!isActive) return;
            this.applyDailyResets();
            this.syncNativeQuestReminder(true).catch(() => {});
          });
          this.questReminderAppListenerBound = true;
        }
      }
      this.syncNativeQuestReminder().catch(() => {});
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
        await this.ensureNativeQuestReminderChannel();
        await this.syncNativeQuestReminder(true);
      } catch (_) {
        // Ignore native notification permission failures.
      }
    },

    shouldSendIncompleteQuestReminder() {
      if (!this.accountReady || this.meta.sessionRestDay === this.todayDateKey()) return false;
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
      if (!this.accountReady || this.meta.sessionRestDay === this.todayDateKey()) return;
      if (this.activeSystemNotification) return;
      if (this.dataStatus === 'loading') return;
      let message = null;
      if (this.hiddenQuest.active && !this.hiddenQuest.completed) {
        message = this.hiddenQuest.objective;
      } else if (this.meta.fatigueDebuffActive) {
        message = 'Fatigue debuff is active. Complete your daily directives to remove it.';
      } else if (this.isDailyModeSelected()) {
        const remaining = this.quests.filter(quest => !quest.done).length;
        if (remaining) message = `${remaining} daily quests remaining.`;
      }
      if (!message) return;
      this.activeSystemNotification = {
        id: Date.now(),
        title: '🟦 System Notice', message
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
      if (!this.accountReady || this.todayDateKey() < this.meta.lastDailyResetDate) return;
      this.showAbandonModal = false;
      if (this.allDailyQuestsComplete()) return;
      const today = this.todayDateKey();
      this.meta.sessionRestDay = today;
      this.meta.trainingSessions[today] = {rest:true,completed:false,type:'recovery',protocolDay:this.meta.protocolDay};
      this.syncRaidTasksWithDungeon();
      this.log('Rest day recorded. Earned XP stays. Your routine will resume tomorrow.');
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
      this.ensureTrainingSettings();
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


