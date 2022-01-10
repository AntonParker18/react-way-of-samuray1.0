import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogItem = props => {
  let path = '/dialogs/' + props.id

  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name='Parker' id='1' />
        <DialogItem name='DeXy' id='2' />
        <DialogItem name='Dimych' id='3' />
        <DialogItem name='Artur' id='4' />
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How is your it-kamasutra</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>
  )
}

export default Dialogs
