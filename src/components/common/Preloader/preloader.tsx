import React, { FC } from 'react'
// @ts-ignore
import preloader from './..//../../assets/images/preloader.gif'

let Preloader: FC = () => {
  return (
    <div>
      <img style={{ width: '50px' }} src={preloader} />
    </div>
  )
}

export default Preloader
