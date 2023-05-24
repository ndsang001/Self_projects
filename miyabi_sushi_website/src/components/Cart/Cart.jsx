import React from 'react'
import './Cart.css';

const Cart = ({items}) => {
  return (
    <div className='app__cart'>
        <div className='app__cart-container'>
            <div className='app__cart-container-header'>
                <p className='p__normal-text'>My order</p>
            </div>
            <div className='app__cart-container-content'>
                {items.map((item, index) => (
                    <div key={index}>
                    <p>Name: {item.title}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Total Price: {item.totalPrice}</p>
                    </div>
                ))}
            </div>
            <div className='app__cart-container-button'>
                <button className=''>Pay</button>
            </div>
        </div>
    </div>
  )
}

export default Cart