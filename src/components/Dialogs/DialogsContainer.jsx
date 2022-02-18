import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {
  addMessageActionCreactor,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent)

export default DialogsContainer
