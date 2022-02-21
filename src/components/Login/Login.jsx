import React from 'react'
import { reduxForm, Field } from 'redux-form'

const LoginFrom = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder='Login' name={'Login'} component={'input'} />
      </div>
      <div>
        <Field placeholder='Password' name={'Password'} component={'input'} />
      </div>
      <div>
        <Field component={'input'} type='checkbox' name={'rememberMe'} />{' '}
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxFrom = reduxForm({ form: 'login' })(LoginFrom)

const Login = () => {
  const onSubmit = formData => {
    console.log(formData)
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxFrom onSubmit={onSubmit} />
    </div>
  )
}

export default Login
