import React from 'react'
import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer'
import Users from './Users'

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
  }
}

let mapDispathcToProps = dispatch => {
  return {
    follow: usersId => {
      dispatch(followAC(usersId))
    },
    unfollow: usersId => {
      dispatch(unfollowAC(usersId))
    },
    setUsers: users => {
      dispatch(setUsersAC(users))
    },
  }
}

export default connect(mapStateToProps, mapDispathcToProps)(Users)
