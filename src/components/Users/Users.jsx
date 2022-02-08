import React from 'react'
import s from './Users.module.css'
import usersPhoto from './../../assets/images/user.png'

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
              <img
                src={u.photos.small != null ? u.photos.small : usersPhoto}
                className={s.usersPhoto}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id)
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id)
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

export default Users
