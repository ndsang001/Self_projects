import React from 'react';
import { images } from '../../constants';
import './NoPage.css'
const NoPage = () => {
  return (
    <div className='app__noPage'>
        <img src={images.error_404} alt='Error 404' />
    </div>
  )
}

export default NoPage