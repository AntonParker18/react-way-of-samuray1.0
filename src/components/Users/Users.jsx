import * as axios from 'axios'
import React from 'react'
import s from './Users.module.css'
import usersPhoto from './../../assets/images/user.png'

class Users extends React.Component {
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
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div>
        <div>
          {pages.map(p => {
            return (
              <span
                className={this.props.currentPage === p && s.selectetPage}
                onClick={e => {
                  this.onPageChanget(p)
                }}
              >
                {p}
              </span>
            )
          })}
        </div>
        {this.props.users.map(u => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : usersPhoto}
                  className={s.usersPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id)
                    }}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id)
                    }}
                  >
                    Unfollow
                  </button>
                )}
              </div>
            </span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.lacation.country'}</div>
              <div>{'u.lacation.city'}</div>
            </span>
          </div>
        ))}
      </div>
    )
  }
}

export default Users
