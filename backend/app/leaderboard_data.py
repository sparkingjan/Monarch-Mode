from app.progression import progression_for_xp


def build_leaderboard(records, limit, current_uid=None):
    """Rank an entire recorded population before limiting the visible entries."""
    users = [{**data, **progression_for_xp(data.get("xp"))} for data in records]
    users.sort(key=lambda user: (-user["xp"], user["uid"]))
    entries = [dict(
        position=position, uid=data["uid"], name=data.get("name") or "Player Hunter",
        rank=data["rank"], level=data["level"], xp=data["xp"],
        survival_streak=int(data.get("survival_streak") or 0),
        is_admin=bool(data.get("is_admin")),
    ) for position, data in enumerate(users, start=1)]
    return dict(
        total=len(entries), entries=entries[:limit],
        current_user=next((entry for entry in entries if entry["uid"] == current_uid), None),
        hunters_with_streak=sum(entry["survival_streak"] > 0 for entry in entries),
        s_rank_holders=sum(entry["rank"] in {"S-Rank", "S++ Rank"} for entry in entries),
    )
