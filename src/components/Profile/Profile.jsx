import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.contant}>
      <div>
        <img src='https://vastphotos.com/files/uploads/photos/10691/peaceful-water-landscape-photo-m.jpg' />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  )
}

export default Profile
