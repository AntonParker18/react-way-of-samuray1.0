import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators/validators'
import { Textarea } from '../common/FormsControls/FormsControls'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'

const maxLength50 = maxLengthCreator(50)

const Dialogs = props => {
  let state = props.dialogsPage

  let dialogsElements = state.dialogs.map(d => (
    <DialogsItem name={d.name} id={d.id} />
  ))
  let messagesElements = state.messages.map(m => (
    <Message message={m.message} />
  ))

  const addNewMessage = values => {
    props.sendMessage(values.newMessageBody)
    values.newMessageBody = ''
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements} </div>
      <div className={s.messages}>{messagesElements}</div>
      <DialogsFormRedux onSubmit={addNewMessage} />
    </div>
  )
}

const DialogsForm = props => {
  return (
    <form className={s.addMessages} onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        validate={[required, maxLength50]}
        name='newMessageBody'
        placeholder='Enter your message'
      />
      <button>Add message</button>
    </form>
  )
}

const DialogsFormRedux = reduxForm({ form: 'dialogAddMessageFrom' })(
  DialogsForm
)

export default Dialogs
