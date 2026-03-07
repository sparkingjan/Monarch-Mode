from app.config import get_settings
from app.firebase import get_firestore_client
from firebase_admin import firestore


def main() -> None:
    settings = get_settings()
    db = get_firestore_client()
    collection = db.collection(settings.firestore_collection_users)
    docs = list(collection.stream())

    updated = 0
    for doc in docs:
        doc.reference.set(
            {
                "avatar_url": firestore.DELETE_FIELD,
                "banner_url": firestore.DELETE_FIELD,
                "avatarUrl": firestore.DELETE_FIELD,
                "bannerUrl": firestore.DELETE_FIELD,
            },
            merge=True,
        )
        updated += 1

    print(f"Processed {len(docs)} documents. Removed avatar/banner fields in {updated} documents.")


if __name__ == "__main__":
    main()
