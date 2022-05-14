import React from 'react'
import Preloader from '../../common/Preloader/preloader'
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />
  }

  const networks = Object.keys(props.profile.contacts).filter(
    networkName => props.profile.contacts[networkName]
  )

  const lookingForAJob = props.profile.lookingForAJob ? 'Yes' : 'No'

  return (
    <div className={s.contant}>
      <div>
        {/* <img
          className={s.wallpaper}
          src='https://assets1.ignimgs.com/2020/11/14/spidermanremastered-blogroll-1605322159516_160w.jpg?width=1280'
        /> */}
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <div>About me: {props.profile.aboutMe}</div>
        <div>Full name: {props.profile.fullName}</div>
        <div>
          Looking for a job:
          <span> {lookingForAJob}</span>
        </div>
        <div>
          Looking for a job description:
          {props.profile.lookingForAJobDescription}
        </div>
        <div>
          <div>
            <h3>Contacts:</h3>
            {networks.map(networkName => (
              <div>
                {networkName}: {props.profile.contacts[networkName]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
