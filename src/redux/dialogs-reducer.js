const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
  dialogs: [
    { id: 1, name: 'Parker' },
    { id: 2, name: 'DeXy' },
    { id: 3, name: 'Dimych' },
    { id: 4, name: 'Artur' },
    { id: 5, name: 'Vlad' },
    { id: 6, name: 'Sasha' },
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it-kamasutra' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' },
  ],

  newMessageText: '',
}

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let body = state.newMessageText
      return {
        ...state,
        newMessageText: '',
        messages: [
          ...state.messages,
          {
            id: state.messages.length + 1,
            message: body,
          },
        ],
      }
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.body,
      }
    }
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
