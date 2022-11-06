import { UsersAPI } from '../api/user-api'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { UserType } from '../types/types'
//@ts-ignore
import { updateObjectInArray } from '../utils/validators/object-helpers'
import { AppStateType, InferActionsTypes } from './redux-store'

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number | null>,
}

type InitialStateType = typeof initialState

const usersReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true,
        }),
      }
    case 'UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false,
        }),
      }
    case 'SET_USERS': {
      return { ...state, users: action.users }
    }
    case 'SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.currentPage }
    }
    case 'SET_TOTAL_USERS_COUNT': {
      return { ...state, totalUsersCount: action.count }
    }
    case 'TOGGLE_IS_FETCHING': {
      return { ...state, isFetching: action.isFetching }
    }
    case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
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

type ActionType = InferActionsTypes<typeof actions>

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

const actions = {
  followSuccess: (userId: number) =>
    ({
      type: 'FOLLOW',
      userId,
    } as const),

  unfollowSuccess: (userId: number) =>
    ({
      type: 'UNFOLLOW',
      userId,
    } as const),

  setUsers: (users: Array<UserType>) =>
    ({
      type: 'SET_USERS',
      users,
    } as const),

  setCurrentPage: (currentPage: number) =>
    ({
      type: 'SET_CURRENT_PAGE',
      currentPage,
    } as const),

  setTotalUsersCounts: (setTotalUsersCounts: number) =>
    ({
      type: 'SET_TOTAL_USERS_COUNT',
      count: setTotalUsersCounts,
    } as const),

  toggleIsFetching: (isFetching: boolean) =>
    ({
      type: 'TOGGLE_IS_FETCHING',
      isFetching,
    } as const),

  toggleFollowingInProgress: (isFetching: boolean, userId: number | null) =>
    ({
      type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
      isFetching,
      userId,
    } as const),
}
export const requestUsers =
  (page: number, pageSize: number): ThunkType =>
  async dispatch => {
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.setCurrentPage(page))

    const data = await UsersAPI.getUsers(page, pageSize)
    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(data.items))
    dispatch(actions.setTotalUsersCounts(data.totalCount))
  }

const followUnfollowFlow = async (
  dispatch: Dispatch<ActionType>,
  userId: number,
  actionCreator: (userId: number) => ActionType,
  apiMethod: any
) => {
  dispatch(actions.toggleFollowingInProgress(true, userId))

  const res = await apiMethod(userId)
  if (res.resultCode == 0) {
    dispatch(actionCreator(userId))
  }

  dispatch(actions.toggleFollowingInProgress(false, userId))
}

export const follow = (userId: number): ThunkType => {
  return async dispatch => {
    followUnfollowFlow(
      dispatch,
      userId,
      actions.followSuccess,
      UsersAPI.getPost.bind(UsersAPI)
    )
  }
}

export const unfollow = (userId: number): ThunkType => {
  return async dispatch => {
    followUnfollowFlow(
      dispatch,
      userId,
      actions.unfollowSuccess,
      UsersAPI.getDelete.bind(UsersAPI)
    )
  }
}

export default usersReducer
