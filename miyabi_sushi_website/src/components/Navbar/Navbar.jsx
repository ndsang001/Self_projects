import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import {BrowserRouter, Route, Link, useLocation} from 'react-router-dom';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = React.useState(false); // Switch for opening the small screen menu
  const location = useLocation(); // Checking current location (which page?) to add new class

  const handleLinkClick = () => {
    setToggleMenu(false); // Close the overlay menu list when a link is clicked
  };
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.miyabi_logo} alt="app logo"/>
      </div>
      <ul className='app__navbar-links'>
        <li className="p__montserrat"><Link to="/" className={`nav-link ${location.pathname === '/' ? 'current' : ''}`}>Home</Link></li>
        <li className="p__montserrat"><Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'current' : ''}`}>About</Link></li>
        <li className="p__montserrat"><Link to="/menu" className={`nav-link ${location.pathname === '/menu' ? 'current' : ''}`}>Menu</Link></li>
        <li className="p__montserrat"><Link to="/catering" className={`nav-link ${location.pathname === '/catering' ? 'current' : ''}`}>Catering</Link></li>
        <li className="p__montserrat"><Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'current' : ''}`}>Contact</Link></li>
      </ul>
      <div className='app__navbar-login'>
        <div />
        <Link to="/order-online"><button href='/' className='p__montserrat'>ONLINE ORDER</button></Link>
        

      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=> setToggleMenu(true)}/>

        {toggleMenu && (
          <div  className='app__navbar-smallscreen_overlay flex__center slide_bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={()=>setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__montserrat"><Link to="/" className={`nav-link-smallscreen ${location.pathname === '/' ? 'current' : ''}`} 
              onClick={handleLinkClick}>Home</Link></li>
              <li className="p__montserrat"><Link to="/about" className={`nav-link-smallscreen ${location.pathname === '/about' ? 'current' : ''}`} 
              onClick={handleLinkClick}>About</Link></li>
              <li className="p__montserrat"><Link to="/menu" className={`nav-link-smallscreen ${location.pathname === '/menu' ? 'current' : ''}`} 
              onClick={handleLinkClick}>Menu</Link></li>
              <li className="p__montserrat"><Link to="/catering" className={`nav-link-smallscreen ${location.pathname === '/catering' ? 'current' : ''}`} 
              onClick={handleLinkClick}>Catering</Link></li>
              <li className="p__montserrat"><Link to="/contact" className={`nav-link-smallscreen ${location.pathname === '/contact' ? 'current' : ''}`} 
              onClick={handleLinkClick}>Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
