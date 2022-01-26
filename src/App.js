import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Dialogs from './components/Dialogs/Dialogs'
import Profile from './components/Profile/Profile'
import { Route, Routes } from 'react-router-dom'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

const App = props => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.state.sidebar} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route
            path='/profile'
            element={
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path='/dialogs/*'
            element={
              <Dialogs
                // dialogsPage={props.state.dialogsPage}
                store={props.store}
              />
            }
          />
          <Route path='news' element={<News />} />
          <Route path='music' element={<Music />} />
          <Route path='settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
