import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControls'
import { Navigate } from 'react-router'

const LoginFrom = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder='Email'
          name={'email'}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder='Password'
          name={'password'}
          component={Input}
          type={'password'}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          component={Input}
          type='checkbox'
          name={'rememberMe'}
          validate={[required]}
        />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxFrom = reduxForm({ form: 'login' })(LoginFrom)

const Login = props => {
  const onSubmit = formData => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Navigate replace to={'/profile'} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxFrom onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)
