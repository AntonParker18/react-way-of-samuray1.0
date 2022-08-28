import React, { FC } from 'react'
//@ts-ignore
import usersPhoto from './../../assets/images/user.png'
import { NavLink } from 'react-router-dom'
import s from './Users.module.css'
import { UserType } from '../../types/types'


type PropsType = {
  user: UserType
  followingInProgress: Array<number>
  unfollow: (id: number | null) => void
  follow: (id: number | null) => void
}

const User: FC<PropsType> = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : usersPhoto}
              className={s.usersPhoto}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => {
                unfollow(user.id)
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => {
                follow(user.id)
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <div>{user.name}</div>
        <div>{user.status}</div>
      </span>
      <span>
        <div>{'u.lacation.country'}</div>
        <div>{'u.lacation.city'}</div>
      </span>
    </div>
  )
}

export default User
