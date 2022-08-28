import React, { FC } from 'react'
import s from './Post.module.css'

type PropsType = {
  message: string
  likesCount: number
}

const Post: FC<PropsType> = props => {
  return (
    <div className={s.item}>
      <img
        src='https://assets1.ignimgs.com/2020/11/14/spidermanremastered-blogroll-1605322159516_160w.jpg?width=1280'
        alt=''
      />
      {props.message}
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post
