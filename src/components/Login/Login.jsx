import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControls'

const LoginFrom = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder='Login' name={'Login'} component={Input} validate={[required]} />
      </div>
      <div>
        <Field placeholder='Password' name={'Password'} component={Input} validate={[required]} />
      </div>
      <div>
        <Field component={Input} type='checkbox' name={'rememberMe'}  validate={[required]}/>
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
