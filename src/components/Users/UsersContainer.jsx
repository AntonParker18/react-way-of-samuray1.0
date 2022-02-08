import React from 'react'
import { connect } from 'react-redux'
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountsAC,
  setUsersAC,
  unfollowAC,
} from '../../redux/users-reducer'
import Users from './Users'
import * as axios from 'axios'
class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCounts(response.data.totalCount)
      })
  }

  onPageChanget = pageNumber => {
    this.props.setCurrenPage(pageNumber)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanget={this.onPageChanget}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    )
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
    },
  }
}

export default connect(mapStateToProps, mapDispathcToProps)(UsersContainer)
