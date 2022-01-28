import { combineReducers, createStore } from 'redux'
import dialogsReduser from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReduser,
  sidebar: sidebarReducer,
})

let store = createStore(reducers)

export default store
