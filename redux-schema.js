{
  users: {
    isAuthed,
    isFetching,
    err,
    authedId,
    [uid]: {
      lastUpdated,
      info: {
        name,
        uid,
        avatar
      }
    }
  },
  modal: {
    duck,
    isOpen
  },
  ducks: {
    [duckId]: {
      lastUpdated,
      info: {
        avatar,
        duckId,
        name,
        uid,
        text,
        timestamp
      }
    }
  },
  likeCount: {
    [duckId]: 0
  },
  usersDucks: {
    isFetching,
    err,
    [uid]: {
      lastUpdated,
      duckIds: [duckId, duckId, duckId]
    }
  },
  usersLikes: {
    duckId: true
  },
  feed: {
    isFetching,
    err,
    newDucksAvailiable,
    duckIdsToAdd: [duckId, duckId],
    duckIds: [duckId, duckId]
  },
  replies: {
    isFetching,
    err,
    [duckId]: {
      lastUpdated,
      replies: {
        [replyId]: {
          name,
          uid,
          reply,
          avatar,
          timestamp
        }
      }
    }
  },
  listen: {
    [listenId]: true
  }
}