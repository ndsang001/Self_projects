import React from 'react'
import { OrderOnline, Footer } from '../../container';
import './Order.css';
const Order = () => {
  return (
    <div className='app__order'>
        <OrderOnline />
        <Footer />
    </div>
  )
}

export default Order