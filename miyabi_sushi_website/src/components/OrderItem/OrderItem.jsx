import React, {useState} from 'react'
import { IoClose } from 'react-icons/io5';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import './OrderItem.css';
const OrderItem = ({imgUrl, title, price, tags, addToCart}) => {

  // Define pop up to store the state of the item pop up
  const [isOpen, setIsOpen] = useState(false);
  // Define quantity variable to store the state of the quantity
  const [quantity, setQuantity] = useState(1);
  // Extracting numeric value from price prop
  const numericPrice = parseFloat(price.replace(',', '.'));

  // Function to increase the quantity
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to decrease the quantity
  const decrementQuantity = () => {
    if(quantity > 1){
      setQuantity(quantity - 1);
    }
  };

  // Function to get the total amount according to the product quantity
  const handleAddToOrder = () => {
    const totalPrice = (numericPrice * quantity).toFixed(2);
    addToCart(title, quantity, price, totalPrice)
  }

  // Function to update the quantity change
  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
  }

  // Function to open a pop up of the selected item
  const openPopup = () => {
    setIsOpen(!isOpen);
    if(!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setQuantity(1);
    }
  }
  return (

    <li className='app__orderitem' >
      <div className='app__orderitem-container' onClick={openPopup}>
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
      </div>
      {isOpen && (
        <div className='app__orderitem-popup'>
          <div className='app__orderitem-popup-container' >
            <IoClose color='#145365' className='orderitem__popup-icon' onClick={openPopup}/>
            <div className='orderitem__popup-container'>
              <div className='orderitem__popup-container-img'>
                {/* Adding image for the item */}
                <img src={imgUrl} alt='img item'/>
              </div>
              <div className='orderitem__popup-container-content'>
                <div className='orderitem__popup-container-content_title'>
                  {/* Adding title for the item */}
                  <p className='p__normal-text'>{title}</p>
                </div>
                <div className='orderitem__popup-container-content_tags'>
                  {/* Adding description for the item */}
                  <p className='p__normal-text'>{tags}</p>
                </div>
                <div className='orderitem__popup-container-content_price'>
                  <div className='price__container'>
                    <div className='price__container-quantity'>
                      <div className='price__container-quantity-box'>
                        <button className='price__container-quantity-button_minus'>
                          <span className="price__container-icon_wrapper"><AiOutlineMinus color='#145365' className={`price__container-icon ${quantity === 1 ? 'price__container-icon_grey' : '' }`}
                          onClick={decrementQuantity}/></span>
                        </button>
                        <div className='price__container-quantity-number'>
                          {/* <span className='p__normal-text'>1</span> */}
                          <input 
                          aria-label="Quantity" 
                          aria-live="assertive" 
                          type="number" 
                          min="1" 
                          step="1" 
                          className="p__normal-text" 
                          value={quantity}
                          onChange={handleQuantityChange} />
                        </div>
                        <button className='price__container-quantity-button_plus'>
                        <span className="price__container-icon_wrapper"><AiOutlinePlus color='#145365' className='price__container-icon' onClick={incrementQuantity}/></span>
                        </button>
                      </div>
                    </div>
                    <div className='price__container-empty_div'/>
                    <button className='price__container-total' onClick={handleAddToOrder}>
                      <span className='price__container-total-box'>
                        {/* Adding price for the item */}
                        <span className='p__normal-text'>Add to my order {(numericPrice*quantity).toFixed(2)}€</span>
                      </span>
                      
                    </button>
                  </div>
                 
                </div>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </li>
    
  )
}

export default OrderItem