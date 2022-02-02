const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
  users: [
    // {
    //   id: 1,
    //   followed: false,
    //   fullName: 'Anton',
    //   status: 'I am good',
    //   lacation: { city: 'Vinnytsia', country: 'Ukraine' },
    // },
    // {
    //   id: 1,
    //   followed: true,
    //   fullName: 'Zahar',
    //   status: 'I am good',
    //   lacation: { city: 'Moscow', country: 'Russia' },
    // },
    // {
    //   id: 1,
    //   followed: true,
    //   fullName: 'Dmitry',
    //   status: 'I am good',
    //   lacation: { city: 'Minsk', country: 'Belarus' },
    // },
  ],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
        }),
      }
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] }
    }
    default:
      return state
  }
}

export const followAC = userId => ({ type: FOLLOW, userId })
export const unfollowAC = userId => ({ type: UNFOLLOW, userId })
export const setUsersAC = users => ({ type: SET_USERS, users })
