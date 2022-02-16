import React from 'react'
import s from './Users.module.css'
import usersPhoto from './../../assets/images/user.png'
import { NavLink } from 'react-router-dom'
import { UsersAPI } from '../../api/api'

const Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
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
              className={props.currentPage === p && s.selectetPage}
              onClick={e => {
                props.onPageChanget(p)
              }}
            >
              {p}
            </span>
          )
        })}
      </div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : usersPhoto}
                  className={s.usersPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.toggleFollowingProgress(true, u.id)
                    UsersAPI.getDelete(u).then(data => {
                      if (data.resultCode == 0) {
                        props.unfollow(u.id)
                      }
                      props.toggleFollowingProgress(false, u.id)
                    })
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.toggleFollowingProgress(true, u.id)
                    UsersAPI.getPost(u).then(data => {
                      if (data.resultCode == 0) {
                        props.follow(u.id)
                      }
                      props.toggleFollowingProgress(false, u.id)
                    })
                  }}
                >
                  Follow
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

export default Users
