import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '5a38cc3c-d3c5-4a49-8e66-0f31bd18ed61',
  },
})

export const UsersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then(response => {
        return response.data
      })
  },
  getFollow() {
    return instance
      .get(`auth/me`, {
        withCredentials: true,
      })
      .then(response => {
        return response.data
      })
  },
  getDelete(u) {
    return instance
      .delete(`follow/${u.id}`, {
        withCredentials: true,
        headers: {
          'API-KEY': '5a38cc3c-d3c5-4a49-8e66-0f31bd18ed61',
        },
      })
      .then(response => {
        return response.data
      })
  },
  getPost(u) {
    return instance
      .post(
        `follow/${u.id}`,
        {},
        {
          withCredentials: true,
          headers: {
            'API-KEY': '5a38cc3c-d3c5-4a49-8e66-0f31bd18ed61',
          },
        }
      )
      .then(response => {
        return response.data
      })
  },
  getProfile(userId) {
    return instance
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        return response.data
      })
  },
}
