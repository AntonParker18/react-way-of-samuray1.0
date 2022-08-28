import axios from 'axios'
import { PhotosType, UserProfileType, UserType } from '../types/types'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '0edb6b3d-7952-4cf5-aa55-3b33b9337b3f',
  },
})

type GetUsersTypeApi = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}

type FollowApiType = {
  resultCode: number
  messages: Array<string>
  data: object
}

type UnfollowApiType = {
  resultCode: number
  messages: Array<string>
  data: object
}

export const UsersAPI = {
  async getUsers(currentPage: number, pageSize: number) {
    const response = await instance.get<GetUsersTypeApi>(
      `users?page=${currentPage}&count=${pageSize}`
    )
    return response.data
  },
  async getDelete(userId: number) {
    const response = await instance.delete<UnfollowApiType>(`follow/${userId}`)
    return response.data
  },
  async getPost(userId: number) {
    const response = await instance.post<FollowApiType>(`follow/${userId}`)
    return response.data
  },
}

type IsAuthApiType = {
  resultCode: number
  messages: Array<string>
  data: {
    id: number
    email: string
    login: string
  }
}

type LoginApiType = {
  resultCode: number
  messages: Array<string>
  data: {
    userId: number
  }
}

type LogoutApiType = {
  resultCode: number
  messages: Array<string>
  data: object
}

export const AuthAPI = {
  getAuth() {
    return instance.get<IsAuthApiType>(`auth/me`)
  },
  login(
    email: string,
    password: string,
    rememberMe = false,
    captcha: boolean | null = null
  ) {
    return instance.post<LoginApiType>(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    })
  },
  logout() {
    return instance.delete<LogoutApiType>(`auth/login`)
  },
}

type SecurityApiType = {
  url: string
}

export const SecurityAPI = {
  getCaptchaUrl() {
    return instance.get<SecurityApiType>('security/get-captcha-url')
  },
}

type UpdateStatusApiType = {
  resultCode: number
  messages: Array<string>
  data: object
}

type SavePhotoApiType = {
  resultCode: number
  messages: Array<string>
  data: {photos: PhotosType}
}

type GetStatusApiType = {
  mediaType: string
  type: any
  date: object
}

export const ProfileAPI = {
  async getProfile(userId: number) {
    const response = await instance.get<UserProfileType>(`profile/` + userId)
    return response.data
  },
  getStatus(userId: number) {
    return instance.get<GetStatusApiType>(`profile/status/` + userId)
  },
  updateStatus(status: string) {
    return instance.put<UpdateStatusApiType>(`profile/status`, {
      status: status,
    })
  },
  savePhoto(photoFile: File) {
    const formData = new FormData()
    formData.append('image', photoFile)

    return instance.put<SavePhotoApiType>(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
  saveProfile(profile: UserProfileType) {
    return instance.put(`profile`, profile)
  },
}
