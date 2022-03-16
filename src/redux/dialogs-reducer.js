const ADD_MESSAGE = 'ADD-MESSAGE'

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
}

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let body = action.newMessageBody
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: state.messages.length + 1,
            message: body,
          },
        ],
      }
    }
    default:
      return state
  }
}

export const addMessageActionCreactor = newMessageBody => ({
  type: ADD_MESSAGE,
  newMessageBody,
})

export default dialogsReduser
