import React , {useState} from 'react'
import {IoIosArrowDropdown} from 'react-icons/io';
import {IoCartOutline} from 'react-icons/io5';
import { OrderItem, PickupOption, SpecialSubHeading, SubMenuNav, Cart } from '../../components';
import {data} from '../../constants';
import './OrderOnline.css';

const OrderOnline = () => {
  // Define the state for storing the state of dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Define the state for storing the state of pick up option box
  const [isOpenPickup, setIsOpenPickup] = useState(false);

  const togglePickup = () => {
    setIsOpenPickup(!isOpenPickup);
  };

  const handleClosePickup = () => {
    setIsOpenPickup(false);
  };

  // Define cart items to store selected items
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (title, quantity, price, totalPrice) =>{
    const newItem = {
      title: title,
      quantity: quantity,
      price: price,
      totalPrice: totalPrice

    };

    setCartItems([...cartItems, newItem]);
  }
  const [isOpenCart, setIsOpenCart] = useState(false);

  const toggleCart = () => {
    setIsOpenCart(!isOpenCart);
  }

  return (
    <div className='app__orderOnline'>
        <section className='orderOnline__header'/>
        <section className='orderOnline__body'>
          <div className='app__orderOnline-content'>
            <div className='app__orderOnline-content-header'>
              <SpecialSubHeading title='Order Online' />
            </div>
            <div className='app__orderOnline-content-body'>
              <div className='app__orderOnline-content-pickup'>
                <div className='app__orderOnline-content-pickup_time' onClick={togglePickup}>
                  <span className='p__normal-text' aria-hidden='false'>Pickup, ASAP (usually take 20 minutes) </span>
                  <button className='app__orderOnline-content-pickup_button p__normal-text'>View</button>
                </div>
                {isOpenPickup && (
                  <PickupOption onClose={handleClosePickup}/>
                )}
              </div>
              <div className='app__orderOnline-content-subNav'>
                <div className='app__orderOnline-content-subNav_menu'>
                  <div className='app__orderOnline-content-menu_dropdown'>
                    <div className='orderOnline__menu-dropdown'>
                    {/* The toggleDropdown works as a switch. It will be set false and true respectively after clicking */}
                    {/* Here is turn on = true */}
                      <button className='orderOnline__menu-dropdown_button' onClick={toggleDropdown}> 
                        <span className='p__normal-text'>Menu</span>
                        <IoIosArrowDropdown color='#145365' className='orderOnline__icons'/>
                      </button>
                      {isOpen && (
                        <div className="orderOnline__menu-dropdown_overlay">
                          <div className='orderOnline__menu-dropdown_overlay_button'>
                          {/* Here is turn off = false */}
                            <button className="p__normal-text" onClick={toggleDropdown}>Menu</button>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className='orderOnline__menu-empty_div' />
                  </div>
                  <div className='app__orderOnline-content-menu_nav'>
                    <div className='orderOnline__menu-nav'>
                      <SubMenuNav />
                    </div>
                    
                  </div>
                  <div className='app__orderOnline-content-menu_cart' >
                    
                      <button className='orderOnline__menu-cart_button' onClick={toggleCart}>
                        <span className='p__normal-text'>View cart</span>
                        <div className='orderOnline__menu-cart_quantity'>
                          <IoCartOutline color='#ffffff' className='orderOnline__icons'/>
                          <span className='p__normal-text'>{cartItems.length}</span>
                        </div>
                       
                      </button>
                    
                    {isOpenCart && (
                      <Cart items={cartItems} />
                    )}
                    
                  </div>
                  
                </div>
                
              </div>
              <div className='app__orderOnline-content-menu'>
                <ul className='orderOnline__content'>
                  <li className='orderOnline__content-menu_nigirit menu__section' id='subMenu-nigirit'>
                    <h3 className='orderMenu__title p__normal-text'>Nigirit</h3>
                    <ul className='orderOnline__content-menu_nigiri'>
                      {/* Take the list from data file and print each item according to its name */}
                      {data.nigirit.map((nigiri, index)=> (
                        <OrderItem key={nigiri.title + index} imgUrl= {nigiri.imgUrl} title={nigiri.title} price={nigiri.price} tags={nigiri.tags} addToCart={addToCart}  />
                      ))}
                    </ul>
                  </li>
                  <li className='orderOnline__content-menu_makit menu__section' id='subMenu-makit'>
                    <h3 className='orderMenu__title p__normal-text'>Makit</h3>
                    <ul className='orderOnline__content-menu_maki'>
                      {data.makit.map((maki, index)=> (
                        <OrderItem key={maki.title + index} imgUrl= {maki.imgUrl} title={maki.title} price={maki.price} tags={maki.tags} addToCart={addToCart} />
                      ))}
                    </ul>
                  </li>
                  <li className='orderOnline__content-menu_laijtelmat menu__section' id='subMenu-laijtelmat'>
                    <h3 className='orderMenu__title p__normal-text'>Laijtelmat</h3>
                    <ul className='orderOnline__content-menu_laijtelma'>
                      {data.laijtelmat.map((laijtelma, index)=> (
                        <OrderItem key={laijtelma.title + index} imgUrl= {laijtelma.imgUrl} title={laijtelma.title} price={laijtelma.price} tags={laijtelma.tags} addToCart={addToCart} />
                      ))}
                    </ul>
                  </li>
                  <li className='orderOnline__content-menu_foods menu__section' id='subMenu-foods'>
                    <h3 className='orderMenu__title p__normal-text'>Foods</h3>
                    <ul className='orderOnline__content-menu_food'>
                      {data.foods.map((food, index)=> (
                        <OrderItem key={food.title + index} imgUrl= {food.imgUrl} title={food.title} price={food.price} tags={food.tags} addToCart={addToCart} />
                      ))}
                    </ul>
                  </li>
                  <li className='orderOnline__content-menu_drinks menu__section' id='subMenu-drinks'>
                    <h3 className='orderMenu__title p__normal-text'>Drinks</h3>
                    <ul className='orderOnline__content-menu_drink'>
                      {data.drinks.map((drink, index)=> (
                        <OrderItem key={drink.title + index} imgUrl= {drink.imgUrl} title={drink.title} price={drink.price} tags={drink.tags} addToCart={addToCart} />
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </section>
    </div>
  )
}

export default OrderOnline