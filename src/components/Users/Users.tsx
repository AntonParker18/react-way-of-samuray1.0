import React, { FC } from 'react'
import { UserType } from '../../types/types'
import Paginator from '../common/Paginator/Paginator'
// import Paginator from '../common/Paginator/Paginator'
import User from './User'

type PropsType = {
  currentPage: number
  onPageChanget: (pageNumber: number) => void
  totalUsersCount: number
  pageSize: number
  users: Array<UserType>
  followingInProgress: Array<number>
  follow: (id: number | null) => void
  unfollow: (id: number | null) => void
}

const Users: FC<PropsType> = ({
  currentPage,
  onPageChanget,
  totalUsersCount,
  pageSize,
  users,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanget={onPageChanget}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div>
        {users.map(u => (
          <User
            user={u}
            followingInProgress={props.followingInProgress}
            key={u.id}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
    </div>
  )
}

export default Users
