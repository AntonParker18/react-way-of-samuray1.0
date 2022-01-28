import React from 'react'
import {
  addMessageActionCreactor,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogs-reducer'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'

const Dialogs = props => {
  let state = props.store.getState().dialogsPage

  let dialogsElements = state.dialogs.map(d => (
    <DialogsItem name={d.name} id={d.id} />
  ))
  let messagesElements = state.messages.map(m => (
    <Message message={m.message} />
  ))

  let newMessageBody = state.newMessageText

  let onSendMessageClick = () => {
    props.store.dispatch(addMessageActionCreactor())
  }

  let onNewMessageChange = e => {
    let body = e.target.value
    props.store.dispatch(updateNewMessageTextActionCreator(body))
  }
  // const newMessageElement = React.createRef()

  // let addMessage = () => {
  //   props.dispatch(addMessageActionCreactor())
  // }

  // let onMessageChange = () => {
  //   const text = newMessageElement.current.value
  //   props.dispatch(updateNewMessageTextActionCreator(text))
  // }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements} </div>
      <div className={s.messages}>{messagesElements}</div>

      <div className={s.addMessages}>
        <textarea
          // onChange={onMessageChange}
          // ref={newMessageElement}
          // value={props.newMessageText}
          value={newMessageBody}
          onChange={onNewMessageChange}
        ></textarea>
        <button onClick={onSendMessageClick}>Add message</button>
      </div>
    </div>
  )
}

export default Dialogs
