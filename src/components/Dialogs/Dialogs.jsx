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

const Message = props => {
  return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: 'Parker' },
    { id: 2, name: 'DeXy' },
    { id: 3, name: 'Dimych' },
    { id: 4, name: 'Artue' },
    { id: 5, name: 'Vlad' },
    { id: 6, name: 'Sasha' },
  ]

  let messagesData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it-kamasutra' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' },
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
      </div>
    </div>
  )
}

export default Dialogs
