import profileReducer, {
  addPostActionCreator,
  deletePost,
  setStatus,
  setUserProfile,
} from './profile-reducer'
import ReactDOM from 'react-dom'
import React from 'react'

let state = {
  posts: [
    { id: 1, post: 'Siper-Man cool', likesCount: 100 },
    { id: 2, post: "It's my first post", likesCount: 1 },
    { id: 3, post: 'I love Spider-Man', likesCount: 150 },
    { id: 4, post: 'ReactJS top PHP and Java is shit', likesCount: 100 },
  ],
  status: '',
}

it('lenght of posts shold be incremented', () => {
  let action = addPostActionCreator('it-kamasutra')

  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(5)
})

it('message of new post should be correct', () => {
  let action = addPostActionCreator('it-kamasutra')

  let newState = profileReducer(state, action)
  expect(newState.posts[4].post).toBe('it-kamasutra')
})

it("after deleting lenght shouldn'n be decrement if id incorrect", () => {
  let action = deletePost(1)

  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(3)
})

it('user profile sets', () => {
  let action = setStatus('status')

  let newState = profileReducer(state, action)
  expect(newState.status.length).toBe(6)
})
