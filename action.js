// Users 
{
  type: AUTH_USER,
  uid,
}

{
  type: UNAUTH_USER
}

{
  type: FETCHING_USER
}

{
  type: FETCHING_USER_FAILURE
}

{
  type: FETCHING_USER_SUCCESS,
  uid,
  name,
  avatar,
  timestamp,
}

// Ducks
{
  type: FETCHING_DUCK
}

{
  type: FETCHING_DUCK_FAILURE,
  err: 'Error in fetching duck',
}

{
  type: FETCHING_DUCK_SUCCESS,
  duck,
}

{
  type: REMOVE_FETCHING
}

{
  type: ADD_DUCK,
  duck,
}

{
  type: ADD_MULTIPLE_DUCKS,
  ducks,
}

// feed
{
  type: SETTING_FEED_LISTENER
}

{
  type: SETTING_FEED_LISTENER_ERROR,
  err: 'Error fetching feeds'
}

{
  type: SETTING_FEED_LISTENER_SUCCESS,
  duckIds
}

{
  type: ADD_NEW_DUCK_ID_TO_FEED,
  duckId,
}

{
  type: RESET_NEW_DUCK_AVAILABLE
}

// listener
{
  type: ADD_LISTENER,
  listenerID
}

// modal
{
  type: OPEN_MODAL
}

{
  type: CLOSE_MODAL
}

{
  type: UPDATA_DUCK_TEXT,
  newDuckText,
}

// replies
{
  type: FETCHING_REPLYS,
}

{
  type: FETCHING_REPLYS_ERROR,
  err: 'Error fetching replies',
}

{
  type: FETCHING_REPLYS_SUCCESS,
  replies,
  duckId,
  lastUpdated: Date.now()
}

{
  type: ADD_REPLY,
  duckId,
  reply
}

{
  type: ADD_REPLY_ERROR,
  err: 'Error add reply'
}

{
  type: REMOVE_REPLY,
  replyId
}

// likeCount
{
  type: FETCHING_LIKECOUNT
}

{
  type: FETCHING_LIKECOUNT_ERROR,
  err: 'Error fetching duck\'s like count'
}

{
  type: FETCHING_LIKECOUNT_SUCCESS,
  duckId,
  likeCount
}

// usersDucks
{
  type: FETCHING_USERS_DUCKS
  uid
}

{
  type: FETCHING_USERS_DUCKS_ERROR,
  err: 'Error fetching users ducks'
}

{
  type: Fetching_USERS_DUCKS_SUCCESS,
  uid,
  duckIds,
  lastUpdated
}

{
  type: ADD_SINGLE_USER_DUCK,
  uid,
  duckId
}

// userLikes
{
  type: ADD_LIKE,
  duckId,
}

{
  type: REMOVE_LIKE,
  duckId
}

{
  type: FETCHING_LIKE
}

{
  type: FETCHING_LIKE_ERROR,
  err: 'Error fetching like'
}

{
  type: FETCHING_LIKE_SUCCESS,
  likes
}
