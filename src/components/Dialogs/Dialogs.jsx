import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink strict to={'/dialogs/1'}>Parker</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/2'}>DeXy</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/3'}>Dimych</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/4'}>Artur</NavLink>
        </div>
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