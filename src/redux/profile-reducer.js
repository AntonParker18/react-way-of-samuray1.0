import { ProfileAPI } from '../api/api'

const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'

let initialState = {
  posts: [
    { id: 1, post: 'Siper-Man cool', likesCount: 100 },
    { id: 2, post: "It's my first post", likesCount: 1 },
    { id: 3, post: 'I love Spider-Man', likesCount: 150 },
    { id: 4, post: 'ReactJS top PHP and Java is shit', likesCount: 100 },
  ],
  profile: null,
  status: '',
}
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: state.posts.length + 1,
        post: action.newPostElement,
        likesCount: 0,
      }
      return { ...state, posts: [...state.posts, newPost] }
    }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id != action.postId),
      }

    default:
      return state
  }
}

// if (state.profilePage.newPostText[0].length <= 0) {
//   return state.addPost
// }

export const addPostActionCreator = newPostElement => ({
  type: ADD_POST,
  newPostElement,
})
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })
export const setStatus = status => ({ type: SET_STATUS, status })
export const deletePost = postId => ({ type: DELETE_POST, postId })

export const getUserProfile = userId => async dispatch => {
  const res = await ProfileAPI.getProfile(userId)
  dispatch(setUserProfile(res))
}

export const getStatus = userId => async dispatch => {
  const res = await ProfileAPI.getStatus(userId)
  dispatch(setStatus(res.data))
}

export const updateStatus = status => async dispatch => {
  const res = await ProfileAPI.updateStatus(status)
  if (res.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export default profileReducer
