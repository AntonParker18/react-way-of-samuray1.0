import { stopSubmit } from 'redux-form'
import { ThunkAction } from 'redux-thunk'
import { AuthAPI, SecurityAPI } from '../api/api'
import { AppStateType } from './redux-store'

const SET_USER_DATA = 'auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'

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
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

type ActionType = SetAuthUserDataType | GetCaptchaUrlSuccess

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

type SetAuthUserDataPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

type SetAuthUserDataType = {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataPayloadType
}

export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
})

type GetCaptchaUrlSuccess = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (
  captchaUrl: string
): GetCaptchaUrlSuccess => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
})

export const getAuthUserData = (): ThunkType => async dispatch => {
  const res = await AuthAPI.getAuth()
  if (res.data.resultCode === 0) {
    let { id, login, email } = res.data.data
    dispatch(setAuthUserData(id, email, login, true))
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
        res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
      //@ts-ignore
      dispatch(stopSubmit('login', { _error: messages }))
    }
  }

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const res = await SecurityAPI.getCaptchaUrl()
  const captchaUrl = res.data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = (): ThunkType => async (dispatch) => {
  const res = await AuthAPI.logout()
  if (res.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export default authReducer
