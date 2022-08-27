import React, { Component, Suspense } from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import { Navigate, useParams } from 'react-router'
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader/preloader'
import store from './redux/redux-store'

import './App.css'


const DialogsContainer = React.lazy(() =>
  import('./components/Dialogs/DialogsContainer')
)

const ProfileContainer = React.lazy(() =>
  import('./components/Profile/ProfileContainer')
)

const withRouter = WrappedComponent => props => {
  const params = useParams()
  // etc... other react-router-dom v6 hooks
  return (
    <WrappedComponent
      {...props}
      params={params}
      // etc...
    />
  )
}

class App extends Component {
  catcheAppUnhandleErorrs = (reason, promise) => {
    console.log('some error occured', reason, promise)
  }
  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.catcheAppUnhandleErorrs)
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catcheAppUnhandleErorrs)
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Suspense
            fallback={
              <div>
                Loading
                <Preloader />
              </div>
            }
          >
            <Routes>
              <Route path='/' element={<Navigate replace to={'/profile'} />} />
              <Route path='/profile' element={<ProfileContainer />}>
                <Route path=':userId' element={<ProfileContainer />} />
              </Route>
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='news' element={<News />} />
              <Route path='music' element={<Music />} />
              <Route path='settings' element={<Settings />} />
              <Route path='login' element={<Login />} />
              <Route path='*' element={<div>404 NOT FOUNT</div>} />
            </Routes>
          </Suspense>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized,
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)

let SamuraiJsApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SamuraiJsApp
