import { stopSubmit } from 'redux-form'
import { ThunkAction } from 'redux-thunk'
//@ts-ignore
import { ProfileAPI } from '../api/api'
import { PhotosType, UserProfile } from '../types/types'
import { AppStateType } from './redux-store'

const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'

type Posts = {
  id: number
  post: string
  likesCount: number
}

type InitialState = {
  posts: Array<Posts>
  profile: UserProfile | null
  status: string
}

let initialState: InitialState = {
  posts: [
    { id: 1, post: 'Siper-Man cool', likesCount: 100 },
    { id: 2, post: "It's my first post", likesCount: 1 },
    { id: 3, post: 'I love Spider-Man', likesCount: 150 },
    { id: 4, post: 'ReactJS top PHP and Java is shit', likesCount: 100 },
  ],
  profile: null,
  status: '',
}

const profileReducer = (state = initialState, action: ActionType) => {
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
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photo },
      }

    default:
      return state
  }
}

type ActionType =
  | AddPostActionCreatorType
  | SetUserProfileType
  | SetStatusType
  | DeletePostType
  | SavePhotoSuccessType

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

type AddPostActionCreatorType = {
  type: typeof ADD_POST
  newPostElement: string
}

export const addPostActionCreator = (
  newPostElement: string
): AddPostActionCreatorType => ({
  type: ADD_POST,
  newPostElement,
})

type SetUserProfileType = {
  type: typeof SET_USER_PROFILE
  profile: UserProfile
}

export const setUserProfile = (profile: UserProfile): SetUserProfileType => ({
  type: SET_USER_PROFILE,
  profile,
})

type SetStatusType = {
  type: typeof SET_STATUS
  status: string
}

export const setStatus = (status: string): SetStatusType => ({
  type: SET_STATUS,
  status,
})

type DeletePostType = {
  type: typeof DELETE_POST
  postId: number
}

export const deletePost = (postId: number): DeletePostType => ({
  type: DELETE_POST,
  postId,
})

type SavePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photo: PhotosType
}

export const savePhotoSuccess = (photo: PhotosType): SavePhotoSuccessType => ({
  type: SAVE_PHOTO_SUCCESS,
  photo,
})

export const getUserProfile = (userId: number | null): ThunkType => async (dispatch) => {
  const res = await ProfileAPI.getProfile(userId)
  dispatch(setUserProfile(res))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  const res = await ProfileAPI.getStatus(userId)
  dispatch(setStatus(res.data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  try {
    const res = await ProfileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  } catch (error) {}
}

export const savePhoto = (file: any): ThunkType => async (dispatch) => {
  const res = await ProfileAPI.savePhoto(file)
  if (res.data.data.resultCode === 0) {
    dispatch(savePhotoSuccess(res.data.data.photos))
  }
}

export const saveProfile =
  (profile: UserProfile): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.usersId
    const res = await ProfileAPI.saveProfile(profile)

    if (res.data.resultCode === 0) {
      dispatch(getUserProfile(userId))
    } else {
      //@ts-ignore
      dispatch(stopSubmit('edit-profile', { _error: res.data.messages[0] }))
      return Promise.reject(res.data.messages[0])
    }
  }

export default profileReducer
