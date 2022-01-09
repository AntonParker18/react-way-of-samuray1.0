import React from 'react'
import s from './Post.module.css'

const Post = props => {
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
