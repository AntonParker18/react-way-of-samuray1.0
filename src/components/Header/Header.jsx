import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = props => {
  return (
    <header className={s.header}>
      <img src='https://assets.teenvogue.com/photos/618a84502c843cb59d7b962e/1:1/w_1997,h_1997,c_limit/171172352' />

      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} <button onClick={props.logout}>Log Out</button>{' '}
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  )
}

export default Header
