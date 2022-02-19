import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router'
import { compose } from 'redux'
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
