import { stopSubmit } from 'redux-form'
import { ThunkAction } from 'redux-thunk'
import { ProfileAPI } from '../api/profile-api'
import { PhotosType, UserProfileType } from '../types/types'
import { AppStateType, InferActionsTypes } from './redux-store'

type PostsType = {
  id: number
  post: string
  likesCount: number
}

let initialState = {
  posts: [
    { id: 1, post: 'Siper-Man cool', likesCount: 100 },
    { id: 2, post: "It's my first post", likesCount: 1 },
    { id: 3, post: 'I love Spider-Man', likesCount: 150 },
    { id: 4, post: 'ReactJS top PHP and Java is shit', likesCount: 100 },
  ] as Array<PostsType>,
  profile: null as UserProfileType | null,
  status: '',
}

type InitialStateType = typeof initialState

const profileReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case 'profile/ADD_POST': {
      const newPost = {
        id: state.posts.length + 1,
        post: action.newPostElement,
        likesCount: 0,
      }
      return { ...state, posts: [...state.posts, newPost] }
    }
    case 'profile/SET_USER_PROFILE':
      return { ...state, profile: action.profile }
    case 'profile/SET_STATUS':
      return {
        ...state,
        status: action.status,
      }
    case 'profile/DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter(p => p.id != action.postId),
      }
    case 'profile/SAVE_PHOTO_SUCCESS':
      return {
        ...state,
        profile: { ...state.profile, photos: action.photo } as UserProfileType,
      }

    default:
      return state
  }
}

type ActionType = InferActionsTypes<typeof actions>

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

export const actions = {
  addPostActionCreator: (newPostElement: string) =>
    ({
      type: 'profile/ADD_POST',
      newPostElement,
    } as const),

  setUserProfile: (profile: UserProfileType) =>
    ({
      type: 'profile/SET_USER_PROFILE',
      profile,
    } as const),

  setStatus: (status: string) =>
    ({
      type: 'profile/SET_STATUS',
      status,
    } as const),

  deletePost: (postId: number) =>
    ({
      type: 'profile/DELETE_POST',
      postId,
    } as const),

  savePhotoSuccess: (photo: PhotosType) =>
    ({
      type: 'profile/SAVE_PHOTO_SUCCESS',
      photo,
    } as const),
}
export const getUserProfile =
  (userId: number): ThunkType =>
  async dispatch => {
    const res = await ProfileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(res))
  }

export const getStatus =
  (userId: number): ThunkType =>
  async dispatch => {
    const res = await ProfileAPI.getStatus(userId)
    dispatch(actions.setStatus(res.data.mediaType))
  }

export const updateStatus =
  (status: string): ThunkType =>
  async dispatch => {
    try {
      const res = await ProfileAPI.updateStatus(status)
      if (res.data.resultCode === 0) {
        dispatch(actions.setStatus(status))
      }
    } catch (error) {}
  }

export const savePhoto =
  (file: any): ThunkType =>
  async dispatch => {
    const res = await ProfileAPI.savePhoto(file)
    if (res.data.resultCode === 0) {
      dispatch(actions.savePhotoSuccess(res.data.data.photos))
    }
  }

export const saveProfile =
  (profile: UserProfileType): ThunkType =>
  async (dispatch, getState) => {
    const userId = getState().auth.usersId
    const res = await ProfileAPI.saveProfile(profile)

    if (res.data.resultCode === 0) {
      if (userId !== null) {
        dispatch(getUserProfile(userId))
      }
    } else {
      //@ts-ignore
      dispatch(stopSubmit('edit-profile', { _error: res.data.messages[0] }))
      return Promise.reject(res.data.messages[0])
    }
  }

export default profileReducer
