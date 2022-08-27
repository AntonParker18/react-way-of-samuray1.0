const ADD_MESSAGE = 'ADD-MESSAGE'


type DialogsType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
}

type InitialStateType = {
  dialogs: Array<DialogsType>
  messages: Array<MessageType>
}

let initialState: InitialStateType = {
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

const dialogsReducer = (state = initialState, action: ActionType) => {
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

type ActionType = AddMessageActionCreatorType

type AddMessageActionCreatorType = {
  type: typeof ADD_MESSAGE
  newMessageBody: string
}

export const addMessageActionCreator = (newMessageBody: string): AddMessageActionCreatorType => ({
  type: ADD_MESSAGE,
  newMessageBody,
})

export default dialogsReducer
