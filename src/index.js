import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

let dialogs = [
  { id: 1, name: 'Parker' },
  { id: 2, name: 'DeXy' },
  { id: 3, name: 'Dimych' },
  { id: 4, name: 'Artue' },
  { id: 5, name: 'Vlad' },
  { id: 6, name: 'Sasha' },
]

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How is your it-kamasutra' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'Yo' },
  { id: 5, message: 'Yo' },
]

let posts = [
  { id: 1, post: 'Siper-Man cool', likesCount: 100 },
  { id: 2, post: "It's my first post", likesCount: 1 },
  { id: 3, post: 'I love Andrew Garfield', likesCount: 100 },
  { id: 4, post: 'S.W.A.G', likesCount: 150 },
  { id: 4, post: 'I love Spider-Man Andrew Garfield', likesCount: 150000000 },
]

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts} dialogs={dialogs} messages={messages} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
