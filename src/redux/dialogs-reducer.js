const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const dialogsReduser = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let body = state.newMessageText
      state.newMessageText = ''
      state.messages.push({
        id: state.messages.length + 1,
        message: body,
      })
      return state
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.body
      return state
      default:
        return state
  }
  // if (action.type === ADD_MESSAGE) {
  //   if (state.dialogsPage.newMessageText[0].length <= 0) {
  //     return state.addMessage
  //   }

  //   if (state.dialogsPage.messages.length >= state.dialogsPage.dialogs.length) {
  //     const newUser = {
  //       id: state.dialogsPage.dialogs.length + 1,
  //       name: 'User',
  //     }
  //     state.dialogsPage.dialogs.push(newUser)
  //   }
  // } else if (action.type == UPDATE_NEW_MESSAGE_TEXT) {
  // }

  // return state
}

export const addMessageActionCreactor = () => ({ type: ADD_MESSAGE })

export const updateNewMessageTextActionCreator = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  body: text,
})

export default dialogsReduser
