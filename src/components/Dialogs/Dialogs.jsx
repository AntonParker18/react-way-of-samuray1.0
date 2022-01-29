import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'

const Dialogs = props => {
  let state = props.dialogsPage

  let dialogsElements = state.dialogs.map(d => (
    <DialogsItem name={d.name} id={d.id} />
  ))
  let messagesElements = state.messages.map(m => (
    <Message message={m.message} />
  ))

  let newMessageBody = state.newMessageText

  let onSendMessageClick = () => {
    props.addMessageActionCreactor()
  }

  let onNewMessageChange = e => {
    const body = e.target.value
    props.updateNewMessageBody(body)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements} </div>
      <div className={s.messages}>{messagesElements}</div>

      <div className={s.addMessages}>
        <textarea
          value={newMessageBody}
          onChange={onNewMessageChange}
        ></textarea>
        <button onClick={onSendMessageClick}>Add message</button>
      </div>
    </div>
  )
}

export default Dialogs
