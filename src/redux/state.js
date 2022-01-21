import { rernderEntireTree } from '../render'

const state = {
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
}

export let addPost = () => {
  const newPost = {
    id: state.profilePage.posts.length + 1,
    post: state.profilePage.newPostText,
    likesCount: 0,
  }

  if (state.profilePage.newPostText[0].length <= 0) {
    return addPost
  }

  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rernderEntireTree(state)
}

export let updateNewPotsText = newText => {
  state.profilePage.newPostText = newText

  rernderEntireTree(state)
}

export let addMessage = () => {
  const newMessage = {
    id: state.dialogsPage.messages.length + 1,
    message: state.dialogsPage.newMessageText,
  }

  if (state.dialogsPage.newMessageText[0].length <= 0) {
    return addMessage
  }

  if (state.dialogsPage.messages.length >= state.dialogsPage.dialogs.length) {
    const newUser = {
      id: state.dialogsPage.dialogs.length + 1,
      name: 'User',
    }
    state.dialogsPage.dialogs.push(newUser)
  }

  state.dialogsPage.messages.push(newMessage)
  rernderEntireTree(state)
}

export let updateNewMessageText = newText => {
  state.dialogsPage.newMessageText = newText

  rernderEntireTree(state)
}

export default state
