import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={s.contant}>
      <div>
        <img src='https://assets-prd.ignimgs.com/2021/12/28/amazing-spiderman-3-andrew-garfield-1640735299847.jpg' />
      </div >
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  )
}

export default ProfileInfo
