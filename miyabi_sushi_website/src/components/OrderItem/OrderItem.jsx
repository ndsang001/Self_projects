import React from 'react'
import './OrderItem.css';
const OrderItem = ({imgUrl, title, price,tags}) => {
  return (
    <li className='app__orderitem'>
      <div className='app__orderitem-img'>
        {/* Adding image for the item */}
        <img src={imgUrl} alt='img item'/>
      </div>
      <div className='app__orderitem-content'>
        <div className='app__orderitem-content_title'>
          {/* Adding title for the item */}
          <p className='p__normal-text'>{title}</p>
        </div>
        <div className='app__orderitem-content_tags'>
          {/* Adding description for the item */}
          <p className='p__normal-text'>{tags}</p>
        </div>
        <div className='app__orderitem-content_price'>
          {/* Adding price for the item */}
          <p className='p__normal-text'>{price}</p>
        </div>
      </div>
    </li>
  )
}

export default OrderItem