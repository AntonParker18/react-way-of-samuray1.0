import { getAuthUserData } from './auth-reducer'

const SET_INITIALIZED_SACCESS = 'SET_INITIALIZED_SACCESS'

let initialState = {
  initialized: false,
  globalError: null
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED_SACCESS:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state
  }
}

export const initializedSuccess = () => ({ type: SET_INITIALIZED_SACCESS })

export const initializeApp = () => dispatch => {
  let promise = dispatch(getAuthUserData())
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess())
  })
}

export default appReducer
