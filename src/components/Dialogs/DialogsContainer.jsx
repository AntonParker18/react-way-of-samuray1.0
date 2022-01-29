import React from 'react'
import {
  addMessageActionCreactor,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogs-reducer'
import StoreContext from '../../StoreContext'
import Dialogs from './Dialogs'

const DialogsContainer = props => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState().dialogsPage

        let onSendMessageClick = () => {
          store.dispatch(addMessageActionCreactor())
        }

        let onNewMessageChange = body => {
          store.dispatch(updateNewMessageTextActionCreator(body))
        }
        return (
          <Dialogs
            addMessageActionCreactor={onSendMessageClick}
            updateNewMessageBody={onNewMessageChange}
            dialogsPage={state}
          />
        )
      }}
    </StoreContext.Consumer>
  )
}

export default DialogsContainer
