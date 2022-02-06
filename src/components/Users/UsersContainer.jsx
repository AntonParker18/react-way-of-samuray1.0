import React from 'react'
import { connect } from 'react-redux'
import { followAC, setCurrentPageAC, setTotalUsersCountsAC, setUsersAC, unfollowAC } from '../../redux/users-reducer'
import Users from './Users'

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage

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
    setCurrenPage: pageNumber => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCounts: totalCount => {
      dispatch(setTotalUsersCountsAC(totalCount))
    }
  }
}

export default connect(mapStateToProps, mapDispathcToProps)(Users)
