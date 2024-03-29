import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { actions } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = dispatch => {
  return {
    sendMessage: newMessageBody => {
      dispatch(actions.addMessageActionCreator(newMessageBody))
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
