import { ThunkAction } from 'redux-thunk'
import { getAuthUserData } from './auth-reducer'
import { AppStateType, InferActionsTypes } from './redux-store'

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
    case 'SET_INITIALIZED_SUCCESS':
      return {
        ...state,
        initialized: true,
      }
    default:
      return state
  }
}

type ActionType = InferActionsTypes<typeof actions>

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>

const actions = {
  initializedSuccess: () => ({
    type: 'SET_INITIALIZED_SUCCESS',
  } as const),
}
export const initializeApp = (): ThunkType => dispatch => {
  let promise = dispatch(getAuthUserData())
  Promise.all([promise]).then(() => {
    dispatch(actions.initializedSuccess())
  })
}

export default appReducer
