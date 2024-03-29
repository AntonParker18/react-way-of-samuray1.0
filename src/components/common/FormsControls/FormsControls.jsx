import React from 'react'
import { Field } from 'redux-form'
import s from './FormsControls.module.css'

const FormControl = ({ meta: { touched, error }, children }) => {
  const hasError = touched && error

  return (
    <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const Textarea = props => {
  const { input, meta, ...restProps } = props
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  )
}

export const Input = props => {
  const { input, meta, ...restProps } = props

  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  )
}

export const createField = (
  placeholder,
  email,
  component,
  validate,
  props = {},
  text = ''
) => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={email}
        component={component}
        validate={validate}
        {...props}
      />{' '}
      {text}
    </div>
  )
}
