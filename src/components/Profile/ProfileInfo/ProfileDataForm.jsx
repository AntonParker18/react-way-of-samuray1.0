import React from 'react'
import { reduxForm } from 'redux-form'
import {
  createField,
  Input,
  Textarea,
} from '../../common/FormsControls/FormsControls'
import s from './../../common/FormsControls/FormsControls.module.css'

const ProfileDataForm = ({ handleSubmit, networks, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button onClick={() => {}}>Save</button>
      </div>
      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
      <div>Full name: {createField('Full name', 'fullName', Input, [])}</div>
      <div>
        Looking for a job:
        <span>
          {createField('', 'lookingForAJob', Input, [], { type: 'checkbox' })}
        </span>
      </div>
      <div>
        Looking for a job description:
        {createField(
          'My professional skills',
          'lookingForAJobDescription',
          Textarea,
          []
        )}
      </div>
      <div>
        <div>About me: {createField('About me', 'aboutMe', Textarea, [])}</div>
        <div>
          <h3>Contacts:</h3>
          {networks.map(key => (
            <div key={key}>
              {key}: {createField(key, 'contacts.' + key, Input, [])}
            </div>
          ))}
        </div>
      </div>
    </form>
  )
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(
  ProfileDataForm
)

export default ProfileDataFormReduxForm
