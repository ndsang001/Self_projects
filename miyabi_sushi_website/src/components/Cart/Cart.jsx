import React, {useEffect, useState} from 'react'
import './Cart.css';
import { IoClose } from 'react-icons/io5';
import {RiErrorWarningLine} from 'react-icons/ri'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Cart = ({items, onClose, onUpdateItems}) => {
    const [cartItems, setCartItems] = useState(items);
    const handleCloseCart = () =>{
        onClose();
    }
    const [subTotal, setSubTotal] = useState(0)
    useEffect(() => {
        const calculateSubTotal = () => {
          let tempPrice = 0;
          for (let i = 0; i < cartItems.length; i++) {
            tempPrice += parseFloat(cartItems[i].totalPrice); // Assuming each item has a 'totalPrice' property
          }
          return tempPrice;
        };
    
        const updatedSubTotal = calculateSubTotal();
        setSubTotal(updatedSubTotal);
      }, [cartItems]);

      const formattedSubTotal = subTotal.toFixed(2); // Format subTotal to have 2 decimal places

    
    const handleQuantityChange = (index, change) => {
        setCartItems(prevItems => {
            const updatedItems = prevItems.map((item, i) =>{
                if(i === index) {
                    
                        const newQuantity = item.quantity + change;
                        const newTotalPrice = newQuantity * parseFloat(item.price.replace(',','.'));
                        return{...item, quantity: newQuantity, totalPrice: newTotalPrice};
                    
                    
                }
                return item;
            });
            // onUpdateItems(updatedItems);
            return updatedItems;
        });
    };
    

    const handleRemoveItem = (index) => {
        setCartItems(prevItems => {
            const updatedItems = prevItems.filter((_, i) => i !== index);
            // onUpdateItems(updatedItems);
            return updatedItems;
        });
        
    };

    useEffect(()=>{
        onUpdateItems(cartItems);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    },[cartItems, onUpdateItems]);

        
    
  return (
    <div className='app__cart'>
        <div className='app__cart-container'>
            <div className='app__cart-container-header'>
                <span className= 'cart__container-header' >
                    <p className='p__normal-text'>My order ({cartItems.length})</p>
                </span>
                <IoClose color='#145365' className='cart__container-icon' onClick={handleCloseCart}/>
            </div>
            <div className='app__cart-container-content'>
                <div className='app__cart-container-content_items'>
                    <div className={`cart__container-content_noitem ${cartItems.length === 0 ? 'cart__container-content_noitem_display' : ''}`}>
                        <p className='p__normal-text'>Browse our menu and start adding items to your order</p>
                    </div>
                    {cartItems.map((item, index) => (
                        <div className='cart__container-content_item' key={index}>
                            <div className='cart__container-content_item_box'>
                                <div className='cart__item-box'>
                                    <div className='cart__item-box_quantity'>
                                        <div className='cart__item-box_quantity_button'>
                                            <button className='cart__item-box_quantity_button_minus'>
                                                <span className='cart__item-icon_wrapper'>
                                                    <AiOutlineMinus color='#145365' className={`cart__item-icon ${item.quantity === 1 ? 'cart__item-icon_disabled': ''}`}
                                                    onClick={() => handleQuantityChange(index, -1)}/>
                                                </span>
                                            </button>
                                            <div className='cart__item-box_quantity_number'>
                                                <input 
                                                    aria-label="Quantity" 
                                                    aria-live="assertive" 
                                                    type="number" 
                                                    min="1" 
                                                    step="1" 
                                                    className="p__normal-text" 
                                                    value={item.quantity}
                                                    onChange={handleQuantityChange} />
                                            </div>
                                            
                                            <button className='cart__item-box_quantity_button_plus'>
                                                <span className='cart__item-icon_wrapper'>
                                                    <AiOutlinePlus color='#145365' className='cart__item-icon' onClick={() => handleQuantityChange(index, +1)}/>
                                                </span>
                                            </button>
                                        </div>
                                        
                                    </div>
                                    <div className='cart__item-box_title'>
                                        <p className='p__normal-text'>{item.title}</p>
                                    </div>
                                    <span className='p__normal-text'><p>{item.totalPrice}€</p></span>
                                </div> 
                                <div className='cart__item-remove'>
                                    <button className='cart__item-remove_button p__normal-text' onClick={() => handleRemoveItem(index)}>
                                        <span className='p__normal-text'>Remove</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='app__cart-container-content_note'>
                    <input className='p__normal-text'type='text' placeholder='Add Order Notes'/>
                </div>
                <div className='app__cart-container-content_subtotal'>
                    <div className='cart__container-content_subtotal'>
                        <span className='p__normal-text'>Subtotal</span>
                        <span className='p__normal-text'>{formattedSubTotal}€</span>
                    </div>
                </div>
                
            </div>
            <div className='app__cart-container-button'>
                <div className='app__cart-container-button_warning'>
                    <div className='cart__container-button_warning'>
                        <RiErrorWarningLine color='red' className='cart__container-button-icon' />
                        <p className='p__normal-text'>We're not accepting online orders yet. 
                        Please contact us to complete the order.</p>
                    </div>
                    
                </div>
                <button className=''><span className='p__normal-text'>Continue to Checkout</span></button>
            </div>
        </div>
    </div>
  )
}

export default Cart