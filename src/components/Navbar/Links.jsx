import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const Links = (props) => {
  return (
    <div>
      <div className={s.item}>
        <NavLink
         to={props.to}
          style={({ isActive }) => {
            return {
              textDecoration: 'none',
              color: isActive ? 'gold' : 'white',
            }
          }}
        >
          {props.name}
        </NavLink>
      </div>
    </div>
  )
}

export default Links
