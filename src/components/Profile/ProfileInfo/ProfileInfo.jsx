import React, { useState } from 'react'
import Preloader from '../../common/Preloader/preloader'
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import usersPhoto from './../../../assets/images/user.png'
import ProfileDataForm from './ProfileDataForm'

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader />
  }

  const networks = Object.keys(profile.contacts)

  const lookingForAJob = profile.lookingForAJob ? 'Yes' : 'No'

  const onMainPhotoSelector = e => {
    if (e.target.files[0]) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = formData => {
    saveProfile(formData).then(() => {
      setEditMode(false)
    })
  }

  return (
    <div className={s.contant}>
      <div></div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || usersPhoto} className={s.mainPhoto} />
        {isOwner && <input type={'file'} onChange={onMainPhotoSelector} />}
        {editMode ? (
          <ProfileDataForm
            initialValues={profile}
            profile={profile}
            lookingForAJob={lookingForAJob}
            onSubmit={onSubmit}
            networks={networks}
          />
        ) : (
          <ProfileData
            status={status}
            updateStatus={updateStatus}
            networks={networks}
            lookingForAJob={lookingForAJob}
            profile={profile}
            isOwner={isOwner}
            goToEditMode={() => {
              setEditMode(true)
            }}
          />
        )}
      </div>
    </div>
  )
}

const Contacts = ({ contactsTitle, contactsValue }) => {
  return (
    <div>
      <b>{contactsTitle}</b>:{' '}
      {contactsValue === null ? 'not have' : contactsValue}
    </div>
  )
}

const ProfileData = ({
  status,
  updateStatus,
  profile,
  networks,
  lookingForAJob,
  isOwner,
  goToEditMode,
}) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Edit</button>
        </div>
      )}
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
        <div>About me: {profile.aboutMe}</div>
        <div>
          <h3>Contacts:</h3>
          {networks.map(key => (
            <div>
              <Contacts
                key={key}
                contactsTitle={key}
                contactsValue={profile.contacts[key]}
              />
            </div>
          ))}
        </div>
      </div>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  )
}

export default ProfileInfo
