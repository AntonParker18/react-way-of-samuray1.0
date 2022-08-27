import { ThunkAction } from 'redux-thunk'
import { getAuthUserData } from './auth-reducer'
import { AppStateType } from './redux-store'

const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS'

type InitialStateType = {
  initialized: boolean
  globalError: string | null
}
let initialState: InitialStateType = {
  initialized: false,
  globalError: null,
}

const appReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}

type ActionType = InitializedSuccessType

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>

type InitializedSuccessType = {
  type: typeof SET_INITIALIZED_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessType => ({
  type: SET_INITIALIZED_SUCCESS,
})

export const initializeApp = (): ThunkType => (dispatch) => {
  let promise = dispatch(getAuthUserData())
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess())
  })
}

export default appReducer
