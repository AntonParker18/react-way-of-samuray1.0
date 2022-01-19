import React from 'react'
import s from './../Navbar.module.css'



const Friend = props => {
  return (
    <div className={s.friend}>
      <img
        src='https://upload.wikimedia.org/wikipedia/ru/c/cb/AmazingSpiderMan50.jpg'
        alt=''
      />

      {props.name}
    </div>
  )
}

export default Friend
