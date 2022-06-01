import { stopSubmit } from 'redux-form'
import { AuthAPI, SecurityAPI } from '../api/api'

const SET_USER_DATA = 'auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'

let initialState = {
  usersId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
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

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
})

export const getCaptchaUrlSuccess = captchaUrl => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
})

export const getAuthUserData = () => async dispatch => {
  const res = await AuthAPI.getAuth()
  if (res.data.resultCode === 0) {
    let { id, login, email } = res.data.data
    dispatch(setAuthUserData(id, email, login, true))
  }
}

export const login =
  (email, password, rememberMe, captcha) => async dispatch => {
    const res = await AuthAPI.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === 0) {
      dispatch(getAuthUserData())
    } else if (res.data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    } else {
      let messages =
        res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
      dispatch(stopSubmit('login', { _error: messages }))
    }
  }

export const getCaptchaUrl = () => async dispatch => {
  const res = await SecurityAPI.getCaptchaUrl()
  const captchaUrl = res.data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async dispatch => {
  const res = await AuthAPI.logout()
  if (res.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export default authReducer
