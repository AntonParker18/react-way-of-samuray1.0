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
        { id: 4, name: 'Artue' },
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

  getState() {
    return this._state
  },

  _rernderEntireTree() {
    console.log('State changed')
  },

  addPost() {
    const newPost = {
      id: this._state.profilePage.posts.length + 1,
      post: this._state.profilePage.newPostText,
      likesCount: 0,
    }

    if (this._state.profilePage.newPostText[0].length <= 0) {
      return this.addPost
    }

    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this._rernderEntireTree(this._state)
  },

  updateNewPotsText(newText) {
    this._state.profilePage.newPostText = newText
    this._rernderEntireTree(this._state)
  },

  addMessage() {
    const newMessage = {
      id: this._state.dialogsPage.messages.length + 1,
      message: this._state.dialogsPage.newMessageText,
    }

    if (this._state.dialogsPage.newMessageText[0].length <= 0) {
      return this.addMessage
    }

    if (this._state.dialogsPage.messages.length >= this._state.dialogsPage.dialogs.length) {
      const newUser = {
        id: this._state.dialogsPage.dialogs.length + 1,
        name: 'User',
      }
      this._state.dialogsPage.dialogs.push(newUser)

    }

    this._state.dialogsPage.messages.push(newMessage)
    this._state.dialogsPage.newMessageText = ''
    this._rernderEntireTree(this._state)
  },

  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText

    this._rernderEntireTree(this._state)
  },

  subscribe(observer) {
    this._rernderEntireTree = observer
  },
}

export default store
