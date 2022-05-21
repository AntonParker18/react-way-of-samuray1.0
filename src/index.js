import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import reportWebVitals from './reportWebVitals'
// import { BrowserRouter } from 'react-router-dom'
// import store from './redux/redux-store'
// import { Provider } from 'react-redux'
import SamurayJsApp from './App'

ReactDOM.render(
  <React.StrictMode>
    <SamurayJsApp />
  </React.StrictMode>,
  document.getElementById('root')
)
reportWebVitals()
