import { stopSubmit } from 'redux-form'
import { ThunkAction } from 'redux-thunk'
import { AuthAPI } from '../api/auth-api'
import { SecurityAPI } from '../api/security-api'
import { AppStateType, InferActionsTypes } from './redux-store'

type InitialStateType = {
  usersId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  captchaUrl: string | null
}

let initialState: InitialStateType = {
  usersId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
}

const authReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case 'auth/SET_USER_DATA':
    case 'auth/GET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

type ActionType = InferActionsTypes<typeof actions>

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

const actions = {
  setAuthUserData: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  ) =>
    ({
      type: 'auth/SET_USER_DATA',
      payload: { userId, email, login, isAuth },
    } as const),

  getCaptchaUrlSuccess: (captchaUrl: string) =>
    ({
      type: 'auth/GET_CAPTCHA_URL_SUCCESS',
      payload: { captchaUrl },
    } as const),
}
export const getAuthUserData = (): ThunkType => async dispatch => {
  const res = await AuthAPI.getAuth()
  if (res.data.resultCode === 0) {
    let { id, login, email } = res.data.data
    dispatch(actions.setAuthUserData(id, email, login, true))
  }
}

export const login =
  (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: any
  ): ThunkType =>
  async dispatch => {
    const res = await AuthAPI.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === 0) {
      dispatch(getAuthUserData())
    } else if (res.data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    } else {
      let messages =
        res.data.message.length > 0 ? res.data.message[0] : 'Some error'
      //@ts-ignore
      dispatch(stopSubmit('login', { _error: messages }))
    }
  }

export const getCaptchaUrl = (): ThunkType => async dispatch => {
  const res = await SecurityAPI.getCaptchaUrl()
  const captchaUrl = res.data.url
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

export const logout = (): ThunkType => async dispatch => {
  const res = await AuthAPI.logout()
  if (res.data.resultCode === 0) {
    dispatch(actions.setAuthUserData(null, null, null, false))
  }
}

export default authReducer
