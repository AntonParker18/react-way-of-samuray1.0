import { instance } from "./api"

type SecurityApiType = {
  url: string
}

export const SecurityAPI = {
  getCaptchaUrl() {
    return instance.get<SecurityApiType>('security/get-captcha-url')
  },
}
