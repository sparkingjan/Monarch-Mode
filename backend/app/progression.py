"""Derive displayed level and rank from recorded XP, matching app.js."""
import math

RANK_TIERS = ((1, "E-Rank"), (7, "D-Rank"), (14, "C-Rank"),
              (22, "B-Rank"), (32, "A-Rank"), (45, "S-Rank"), (60, "S++ Rank"))


def progression_for_xp(xp):
    xp = max(0, int(xp or 0))
    level, threshold = 1, 10000
    while xp >= threshold:
        level += 1
        threshold += math.floor(10000 * 1.061 ** (level - 1) + 0.5)
    rank = next(name for minimum, name in reversed(RANK_TIERS) if level >= minimum)
    return {"xp": xp, "level": level, "rank": rank}
