//@ts-ignore
import { UsersAPI } from '../api/api'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { UserType } from '../types/types'
//@ts-ignore
import { updateObjectInArrray } from '../utils/validators/object-helpers'
import { AppStateType } from './redux-store'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

type InitialStateType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: Array<number>
}

const initialState: InitialStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
}

const usersReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArrray(state.users, action.userId, 'id', {
          followed: true,
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArrray(state.users, action.userId, 'id', {
          followed: false,
        }),
      }
    case SET_USERS: {
      return { ...state, users: action.users }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id != action.userId),
      }
    }
    default:
      return state
  }
}

type ActionType =
  | FollowSuccessType
  | UnfollowSuccessType
  | SetUsersType
  | SetCurrentPageType
  | SetTotalUsersCountsType
  | ToggleIsFetchingType
  | ToggleFollowingInProgressType

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

type FollowSuccessType = {
  type: typeof FOLLOW
  userId: number
}

export const followSuccess = (userId: number): FollowSuccessType => ({
  type: FOLLOW,
  userId,
})

type UnfollowSuccessType = {
  type: typeof UNFOLLOW
  userId: number
}

export const unfollowSuccess = (userId: number): UnfollowSuccessType => ({
  type: UNFOLLOW,
  userId,
})

type SetUsersType = {
  type: typeof SET_USERS
  users: Array<UserType>
}

export const setUsers = (users: Array<UserType>): SetUsersType => ({
  type: SET_USERS,
  users,
})

type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}

export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
})

type SetTotalUsersCountsType = {
  type: typeof SET_TOTAL_USERS_COUNT
  count: number
}

export const setTotalUsersCounts = (
  setTotalUsersCounts: number
): SetTotalUsersCountsType => ({
  type: SET_TOTAL_USERS_COUNT,
  count: setTotalUsersCounts,
})

type ToggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}

export const toggleIsFetching = (
  isFetching: boolean
): ToggleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
})

type ToggleFollowingInProgressType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number | null
}

export const toggleFollowingInProgress = (
  isFetching: boolean,
  userId: number | null
): ToggleFollowingInProgressType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
})

export const requestUsers =
  (page: number, pageSize: number): ThunkType =>
  async dispatch => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))

    const data = await UsersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCounts(data.totalCount))
  }

const followUnfollowFlow = async (
  dispatch: Dispatch<ActionType>,
  userId: number,
  actionCreator: (userId: number) => FollowSuccessType | UnfollowSuccessType,
  apiMethod: any
) => {
  dispatch(toggleFollowingInProgress(true, userId))

  const res = await apiMethod(userId)
  if (res.resultCode == 0) {
    dispatch(actionCreator(userId))
  }

  dispatch(toggleFollowingInProgress(false, userId))
}

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      followSuccess,
      UsersAPI.getPost.bind(UsersAPI)
    )
  }
}

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      unfollowSuccess,
      UsersAPI.getDelete.bind(UsersAPI)
    )
  }
}

export default usersReducer
