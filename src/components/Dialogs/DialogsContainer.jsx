import React from 'react'
import {
  addMessageActionCreactor,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

const DialogsContainer = props => {
  let state = props.store.getState().dialogsPage

  let onSendMessageClick = () => {
    props.store.dispatch(addMessageActionCreactor())
  }

  let onNewMessageChange = body => {
    props.store.dispatch(updateNewMessageTextActionCreator(body))
  }

  return (
    <Dialogs
      addMessageActionCreactor={onSendMessageClick}
      updateNewMessageBody={onNewMessageChange}
      dialogsPage={state}
    />
  )
}

export default DialogsContainer
