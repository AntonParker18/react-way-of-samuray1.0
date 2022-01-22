import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import {
  addMessage,
  addPost,
  subscribe,
  updateNewMessageText,
  updateNewPotsText,
} from './redux/state'
import state from './redux/state'

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost}
          addMessage={addMessage}
          updateNewPotsText={updateNewPotsText}
          updateNewMessageText={updateNewMessageText}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )
  reportWebVitals()
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)
