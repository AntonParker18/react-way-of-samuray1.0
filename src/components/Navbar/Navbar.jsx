import React from 'react'
import Links from './Links'
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <Links name='Profile' path='/profile/' />
      <Links name='Messages' path='/dialogs/' />
      <Links name='News' path='/news/' />
      <Links name='Music' path='/music/' />
      <Links name='Settigns' path='/settings/' />
    </nav>
  )
}

export default Navbar
