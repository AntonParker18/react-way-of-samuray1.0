import React from 'react'
import { connect } from 'react-redux'
import {
  follow,
  setCurrentPage,
  setTotalUsersCounts,
  setUsers,
  toggleIsFetching,
  unfollow,
} from '../../redux/users-reducer'
import Users from './Users'
import * as axios from 'axios'
import Preloader from '../common/preloader'
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCounts(response.data.totalCount)
      })
  }

  onPageChanget = pageNumber => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanget={this.onPageChanget}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    )
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}

// let mapDispathcToProps = dispatch => {
//   return {
//     follow: usersId => {
//       dispatch(followAC(usersId))
//     },
//     unfollow: usersId => {
//       dispatch(unfollowAC(usersId))
//     },
//     setUsers: users => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrenPage: pageNumber => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCounts: totalCount => {
//       dispatch(setTotalUsersCountsAC(totalCount))
//     },
//     toggleIsFetching: isFetching => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     },
//   }
// }

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCounts,
  toggleIsFetching,
})(UsersContainer)
