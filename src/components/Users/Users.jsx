import React from 'react'
import s from './Users.module.css'

const Users = props => {

  if(props.users.lenght === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/428e2842-4157-45e8-a9af-1e5245e52c37/300x450',
        followed: false,
        fullName: 'Anton',
        status: 'I am good',
        lacation: { city: 'Vinnytsia', country: 'Ukraine' },
      },
      {
        id: 2,
        photoUrl:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/428e2842-4157-45e8-a9af-1e5245e52c37/300x450',
        followed: true,
        fullName: 'Zahar',
        status: 'I am good',
        lacation: { city: 'Moscow', country: 'Russia' },
      },
      {
        id: 3,
        photoUrl:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/428e2842-4157-45e8-a9af-1e5245e52c37/300x450',
        followed: true,
        fullName: 'Dmitry',
        status: 'I am good',
        lacation: { city: 'Minsk', country: 'Belarus' },
      },
    ])
  }



  return (
    <div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={s.usersPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id)
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id)
                  }}
                >
                  Unfollow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.lacation.country}</div>
            <div>{u.lacation.city}</div>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Users
