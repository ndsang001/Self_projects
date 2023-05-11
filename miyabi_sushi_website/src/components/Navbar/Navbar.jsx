import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = React.useState(false);


  return (
    <nav className="app__navbar">
      {/* <div className="app__navbar-logo">
        <img src={images.miyabi_logo} alt="app logo"/>
      </div>
      <ul className='app__navbar-links'>
        <li className="p__montserrat"><a href='#menu'>Home</a></li>
        <li className="p__montserrat"><a href='#about'>About</a></li>
        <li className="p__montserrat"><a href='#menu'>Menu</a></li>
        <li className="p__montserrat"><a href='#catering'>Catering</a></li>
        <li className="p__montserrat"><a href='#contact'>Contact</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__montserrat'>LOGIN / REGISTER</a>
        <div />
        <button href='#order' onClick={()=>{}} className='p__montserrat'>ONLINE ORDER</button>

      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=> setToggleMenu(true)}/>

        {toggleMenu && (
          <div  className='app__navbar-smallscreen_overlay flex__center slide_bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={()=>setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__montserrat"><a href='#home'>Home</a></li>
              <li className="p__montserrat"><a href='#about'>About</a></li>
              <li className="p__montserrat"><a href='#menu'>Menu</a></li>
              <li className="p__montserrat"><a href='#catering'>Catering</a></li>
              <li className="p__montserrat"><a href='#contact'>Contact</a></li>
            </ul>
          </div>
        )}
      </div> */}
      <div className="app__navbar-logo">
        <img src={images.miyabi_logo} alt="app logo"/>
      </div>
      <ul className='app__navbar-links'>
        <li className="p__montserrat"><Link to="/">Home</Link></li>
        <li className="p__montserrat"><Link to="/about">About</Link></li>
        <li className="p__montserrat"><Link to="/menu">Menu</Link></li>
        <li className="p__montserrat"><Link to="/catering">Catering</Link></li>
        <li className="p__montserrat"><Link to="/contact">Contact</Link></li>
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__montserrat'>LOGIN / REGISTER</a>
        <div />
        <button href='#order' onClick={()=>{}} className='p__montserrat'>ONLINE ORDER</button>

      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=> setToggleMenu(true)}/>

        {toggleMenu && (
          <div  className='app__navbar-smallscreen_overlay flex__center slide_bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={()=>setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__montserrat"><Link to="/">Home</Link></li>
              <li className="p__montserrat"><Link to="/about">About</Link></li>
              <li className="p__montserrat"><Link to="/menu">Menu</Link></li>
              <li className="p__montserrat"><Link to="/catering">Catering</Link></li>
              <li className="p__montserrat"><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
