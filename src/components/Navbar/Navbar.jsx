import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <div className={s.item}>
          <NavLink
            to={'profile/'}
            style={({ isActive }) => ({ color: isActive ? 'gold' : 'white' })}
          >
            Profile
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to={'dialogs/*'}
            style={({ isActive }) => ({ color: isActive ? 'gold' : 'white' })}
          >
            Dialogs
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to={'news/'}
            style={({ isActive }) => ({ color: isActive ? 'gold' : 'white' })}
          >
            News
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to={'music/'}
            style={({ isActive }) => ({ color: isActive ? 'gold' : 'white' })}
          >
            Music
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to={'settings/'}
            style={({ isActive }) => ({ color: isActive ? 'gold' : 'white' })}
          >
            Settings
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
