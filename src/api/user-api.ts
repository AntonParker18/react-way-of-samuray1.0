import { UserType } from "../types/types"
import { instance, ResponseType } from "./api"

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

export const UsersAPI = {
  async getUsers(currentPage: number, pageSize: number) {
    const response = await instance.get<GetUsersTypeApi>(
      `users?page=${currentPage}&count=${pageSize}`
    )
    return response.data
  },
  async getDelete(userId: number) {
    const response = await instance.delete<ResponseType>(`follow/${userId}`)
    return response.data
  },
  async getPost(userId: number) {
    const response = await instance.post<FollowApiType>(`follow/${userId}`)
    return response.data
  },
}
