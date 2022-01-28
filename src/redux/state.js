import dialogsReduser from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: 'Siper-Man cool', likesCount: 100 },
        { id: 2, post: "It's my first post", likesCount: 1 },
        { id: 3, post: 'I love Spider-Man', likesCount: 150 },
        { id: 4, post: 'ReactJS top PHP and Java is shit', likesCount: 100 },
      ],
      newPostText: '',
    },
    dialogsPage: {
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
    },
    sidebar: {
      friends: [
        { id: 1, name: 'Anton' },
        { id: 2, name: 'Vlad' },
        { id: 3, name: 'Artur' },
        { id: 4, name: 'Dimych' },
      ],
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
  },
}

export default store
