import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import {
  addMessage,
  addPost,
  updateNewMessageText,
  updateNewPotsText,
} from './redux/state'

export let rernderEntireTree = state => {
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
