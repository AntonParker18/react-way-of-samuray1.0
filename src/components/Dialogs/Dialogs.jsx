import React from 'react'
import { addMessageActionCreactor, updateNewMessageTextActionCreator } from '../../redux/state'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'

const Dialogs = props => {
  const dialogsElements = props.dialogsPage.dialogs.map(d => (
    <DialogsItem name={d.name} id={d.id} />
  ))
  const messagesElements = props.dialogsPage.messages.map(m => (
    <Message message={m.message} />
  ))

  const newMessageElement = React.createRef()

  let addMessage = () => {
    props.dispatch(addMessageActionCreactor())
  }

  let onMessageChange = () => {
    const text = newMessageElement.current.value
    props.dispatch(updateNewMessageTextActionCreator(text))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>

      <div className={s.addMessages}>
        <textarea
          onChange={onMessageChange}
          ref={newMessageElement}
          value={props.newMessageText}
        ></textarea>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  )
}

export default Dialogs
