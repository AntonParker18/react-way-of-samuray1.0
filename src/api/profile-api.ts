import { PhotosType, UserProfileType } from "../types/types"
import { instance, ResponseType } from "./api"

type SavePhotoApiType = {
  resultCode: number
  messages: Array<string>
  data: { photos: PhotosType }
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
    return instance.put<ResponseType>(`profile/status`, {
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
