import dialogsReduser from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'

let store = {
  _state: {
    profilePage: {},
    dialogsPage: {},
    sidebar: {

    },
  },

  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  },
}

export default store
