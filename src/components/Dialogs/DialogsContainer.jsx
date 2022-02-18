import React from 'react'
import { connect } from 'react-redux'
import {
  addMessageActionCreactor,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = dispatch => {
  return {
    updateNewMessageBody: body => {
      dispatch(updateNewMessageTextActionCreator(body))
    },
    addMessageActionCreactor: () => {
      dispatch(addMessageActionCreactor())
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
