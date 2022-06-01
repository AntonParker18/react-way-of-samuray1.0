import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { required } from '../../utils/validators/validators'
import { createField, Input } from '../common/FormsControls/FormsControls'
import { Navigate } from 'react-router'
import s from './../common/FormsControls/FormsControls.module.css'

const LoginFrom = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField('Email', 'email', Input, [required])}
      {createField('Password', 'password', Input, [required], { type: 'password', })}
      {createField(null, 'rememberMe', Input, null, { type: 'checkbox' }, 'remember me')}

      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl && createField("Symbols from images", 'captcha', Input ,[required], {})}


      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxFrom = reduxForm({ form: 'login' })(LoginFrom)

const Login = props => {
  const onSubmit = formData => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
    return <Navigate replace to={'/profile'} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxFrom onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
}

const mapStateToProps = state => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)
