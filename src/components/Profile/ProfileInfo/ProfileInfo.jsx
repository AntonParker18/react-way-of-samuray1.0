import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={s.contant}>
      <div>
        <img src='https://vastphotos.com/files/uploads/photos/10691/peaceful-water-landscape-photo-m.jpg' />
      </div >
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  )
}

export default ProfileInfo
