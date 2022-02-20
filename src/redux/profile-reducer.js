import { ProfileAPI, UsersAPI } from '../api/api'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
  posts: [
    { id: 1, post: 'Siper-Man cool', likesCount: 100 },
    { id: 2, post: "It's my first post", likesCount: 1 },
    { id: 3, post: 'I love Spider-Man', likesCount: 150 },
    { id: 4, post: 'ReactJS top PHP and Java is shit', likesCount: 100 },
  ],
  newPostText: '',
  profile: null,
  status: '',
}
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: state.posts.length + 1,
        post: state.newPostText,
        likesCount: 0,
      }
      return { ...state, posts: [...state.posts, newPost], newPostText: '' }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      }
    }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      }

    default:
      return state
  }
}

// if (state.profilePage.newPostText[0].length <= 0) {
//   return state.addPost
// }

export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })
export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})
export const setStatus = status => ({ type: SET_STATUS, status })

export const getUserProfile = userId => {
  return dispatch => {
    UsersAPI.getProfile(userId).then(data => {
      dispatch(setUserProfile(data))
    })
  }
}

export const getStatus = userId => dispatch => {
  ProfileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data))
  })
}

export const updateStatus = status => dispatch => {
  ProfileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  })
}

export default profileReducer
