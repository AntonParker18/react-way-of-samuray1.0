import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'

const Dialogs = props => {
  let dialogsElements = props.state.dialogs.map(d => (
    <DialogsItem name={d.name} id={d.id} />
  ))
  let messagesElements = props.state.messages.map(m => (
    <Message message={m.message} />
  ))

  let newMessageElement = React.createRef()

  let addMessage = () => {
    let text = newMessageElement.current.value
    props.addMessage(text)
    newMessageElement.current.value = ''
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>

      <div className={s.addMessages}>
        <textarea ref={newMessageElement}></textarea>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  )
}

export default Dialogs
