import React from 'react'
import Preloader from '../../common/preloader'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

  if(!props.profile) {
    return <Preloader />
  }

  return (
    <div className={s.contant}>
      <div>
        <img src='https://assets1.ignimgs.com/2020/11/14/spidermanremastered-blogroll-1605322159516_160w.jpg?width=1280' />
      </div >
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        ava + description</div>
    </div>
  )
}

export default ProfileInfo
