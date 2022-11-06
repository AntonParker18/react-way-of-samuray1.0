import { CaptchaResultCodeEnum, instance, ResponseType, ResultCodeEnum } from './api'

type AuthResponseDataType = {
  id: number
  email: string
  login: string
}

type LoginResponseDataType = {
  userId: number
}

export const AuthAPI = {
  getAuth() {
    return instance.get<ResponseType<AuthResponseDataType>>(`auth/me`)
  },
  login(
    email: string,
    password: string,
    rememberMe = false,
    captcha: boolean | null = null
  ) {
    return instance.post<ResponseType<LoginResponseDataType, ResultCodeEnum | CaptchaResultCodeEnum>>(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    })
  },
  logout() {
    return instance.delete(`auth/login`)
  },
}
