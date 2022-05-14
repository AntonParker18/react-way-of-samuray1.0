import React, { useState } from 'react'

const ProfileStatusWithHooks = props => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  const activateMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = e => {
    setStatus(e.currentTarget.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      deactivateEditMode(e)
    }
  }

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateMode}>
            Status: {props.status || '---------'}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          Status:
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            value={status}
            onKeyDown={handleKeyPress}
          />
        </div>
      )}
    </div>
  )
}

export default ProfileStatusWithHooks
