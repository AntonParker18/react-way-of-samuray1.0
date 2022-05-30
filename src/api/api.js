import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '0edb6b3d-7952-4cf5-aa55-3b33b9337b3f',
  },
})

export const UsersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  getDelete(userId) {
    return instance.delete(`follow/${userId}`).then(response => {
      return response.data
    })
  },
  getPost(userId) {
    return instance.post(`follow/${userId}`).then(response => {
      return response.data
    })
  },
}

export const AuthAPI = {
  getAuth() {
    return instance.get(`auth/me`)
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe })
  },
  logout() {
    return instance.delete(`auth/login`)
  },
}

export const ProfileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId).then(response => {
      return response.data
    })
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status })
  },
  savePhoto(photoFile) {
    const formData = new FormData()
    formData.append('image', photoFile)

    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile)
  },
}
