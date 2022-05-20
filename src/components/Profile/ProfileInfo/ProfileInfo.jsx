import React from 'react'
import Preloader from '../../common/Preloader/preloader'
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }

  const networks = Object.keys(profile.contacts).filter(
    networkName => profile.contacts[networkName]
  )

  const lookingForAJob = profile.lookingForAJob ? 'Yes' : 'No'

  return (
    <div className={s.contant}>
      <div>
      </div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} />
        <ProfileStatusWithHooks
          status={status}
          updateStatus={updateStatus}
        />
        <div>About me: {profile.aboutMe}</div>
        <div>Full name: {profile.fullName}</div>
        <div>
          Looking for a job:
          <span> {lookingForAJob}</span>
        </div>
        <div>
          Looking for a job description:
          {profile.lookingForAJobDescription}
        </div>
        <div>
          <div>
            <h3>Contacts:</h3>
            {networks.map(networkName => (
              <div>
                {networkName}: {profile.contacts[networkName]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
