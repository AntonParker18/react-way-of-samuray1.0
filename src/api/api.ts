import axios from 'axios'
import { PhotosType, UserProfileType, UserType } from '../types/types'

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '0edb6b3d-7952-4cf5-aa55-3b33b9337b3f',
  },
})

export type ResponseType<D = {}, RC = ResultCodeEnum> = {
  data: D
  message: Array<string>
  resultCode: RC
}

export enum ResultCodeEnum {
  Error = 1,
  Success = 0,
}

export enum CaptchaResultCodeEnum {
  CaptchaIsRequired = 10
}
