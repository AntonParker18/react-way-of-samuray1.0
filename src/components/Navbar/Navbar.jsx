import React from 'react'
import Links from './Links'
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <Links name='Profile' to='/profile/' />
      <Links name='Dialogs' to='/dialogs/' />
      <Links name='News' to='/news/' />
      <Links name='Music' to='/music/' />
      <Links name='Settigns' to='/settings/ ' />
    </nav>
  )
}

export default Navbar
