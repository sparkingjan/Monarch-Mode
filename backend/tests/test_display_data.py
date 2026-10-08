import math
import unittest

from app.progression import RANK_TIERS, progression_for_xp
from app.leaderboard_data import build_leaderboard


class DisplayDataTests(unittest.TestCase):
    def test_every_rank_boundary(self):
        for level, rank in RANK_TIERS:
            threshold = sum(math.floor(10000 * 1.061 ** n + .5) for n in range(level - 1))
            self.assertEqual(progression_for_xp(threshold), dict(xp=threshold, level=level, rank=rank))
            if threshold:
                self.assertEqual(progression_for_xp(threshold - 1)["level"], level - 1)

    def test_global_counts_and_current_user_outside_page(self):
        users = [dict(uid=f"user-{n:03}", xp=n * 1000, survival_streak=n % 2) for n in range(150)]
        result = build_leaderboard(users, 100, "user-000")
        self.assertEqual(result["total"], 150)
        self.assertEqual(len(result["entries"]), 100)
        self.assertEqual(result["current_user"]["position"], 150)
        self.assertEqual(result["hunters_with_streak"], 75)

    def test_ties_and_stale_rank_fields(self):
        result = build_leaderboard([dict(uid="b", xp=0, rank="S++ Rank", level=60),
                                    dict(uid="a", xp=0)], 1, "b")
        self.assertEqual(result["entries"][0]["uid"], "a")
        self.assertEqual(result["current_user"]["position"], 2)
        self.assertEqual(result["current_user"]["rank"], "E-Rank")
        self.assertEqual(result["s_rank_holders"], 0)

    def test_empty_population(self):
        result = build_leaderboard([], 100)
        self.assertEqual(result["total"], 0)
        self.assertEqual(result["entries"], [])
        self.assertIsNone(result["current_user"])

    def test_s_rank_counts_include_s_plus_plus(self):
        threshold = lambda level: sum(math.floor(10000 * 1.061 ** n + .5) for n in range(level - 1))
        result = build_leaderboard([dict(uid="s", xp=threshold(45)),
                                    dict(uid="spp", xp=threshold(60))], 1)
        self.assertEqual(result["s_rank_holders"], 2)


if __name__ == "__main__":
    unittest.main()
