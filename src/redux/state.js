import { rernderEntireTree } from "../render"

let state = {
  profilePage: {
    posts: [
      { id: 1, post: 'Siper-Man cool', likesCount: 100 },
      { id: 2, post: "It's my first post", likesCount: 1 },
    ],
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

export let addPost = postMessage => {
  let newPost = {
    id: 3,
    message: postMessage,
    likesCount: 0,
  }
  state.profilePage.posts.push(newPost)
  rernderEntireTree(state)
}

export default state
