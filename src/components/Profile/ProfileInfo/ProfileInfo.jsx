import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={s.contant}>
      <div>
        <img src='https://assets1.ignimgs.com/2020/11/14/spidermanremastered-blogroll-1605322159516_160w.jpg?width=1280' />
      </div >
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  )
}

export default ProfileInfo
