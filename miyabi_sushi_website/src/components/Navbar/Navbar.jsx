import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import {Link, useLocation} from 'react-router-dom';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {

  // Define variable to store the opening state of hamburger Menu overlay screen
  const [toggleMenu, setToggleMenu] = useState(false); // Switch for opening the small screen menu
  // Define variable to store the location of the current page
  const location = useLocation(); // Checking current location (which page?) to add new class

  // Handle open menu overlay in the order online page
  const handleMenuOpen = () => { 
    
    setToggleMenu(!toggleMenu);
    // Hide the online order menu nav bar to not display it when the small screen overlay is open
    const backgroundBlock = document.querySelector('.app__orderOnline-content-subNav');
    if(backgroundBlock){
      if(!toggleMenu) {
        backgroundBlock.style.display = 'none';
      } else {
        backgroundBlock.style.display = 'block';
      }
    }
    
  }

  const handleLinkClick = () => {
    setToggleMenu(false); // Close the overlay menu list when a link is clicked
    
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/" ><img src={images.miyabi_logo} alt="app logo"/></Link>
        {/* <img src={images.miyabi_logo} alt="app logo"/> */}
      </div>
      {/* Menu nav bar in a big screen */}
      <ul className='app__navbar-links'>
        <li className="p__header-text"><Link to="/" className={`nav-link ${location.pathname === '/' ? 'current' : ''}`}>Home</Link></li>
        <li className="p__header-text"><Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'current' : ''}`}>About</Link></li>
        <li className="p__header-text"><Link to="/menu" className={`nav-link ${location.pathname === '/menu' ? 'current' : ''}`}>Menu</Link></li>
        <li className="p__header-text"><Link to="/catering" className={`nav-link ${location.pathname === '/catering' ? 'current' : ''}`}>Catering</Link></li>
        <li className="p__header-text"><Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'current' : ''}`}>Contact</Link></li>
      </ul>
      <div className='app__navbar-login'>
        <div />
        <Link to="/order-online"><button href='/' className='p__header-text'>ONLINE ORDER</button></Link>
        

      </div>
      {/* Menu nav bar in a big screen */}
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={handleMenuOpen}/>

        {toggleMenu && (
          <div  className='app__navbar-smallscreen_overlay flex__center slide_bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={handleMenuOpen} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__header-text"><Link to="/" className={`nav-link-smallscreen ${location.pathname === '/' ? 'current' : ''}`} 
              onClick={handleLinkClick}>Home</Link></li>
              <li className="p__header-text"><Link to="/about" className={`nav-link-smallscreen ${location.pathname === '/about' ? 'current' : ''}`} 
              onClick={handleLinkClick}>About</Link></li>
              <li className="p__header-text"><Link to="/menu" className={`nav-link-smallscreen ${location.pathname === '/menu' ? 'current' : ''}`} 
              onClick={handleLinkClick}>Menu</Link></li>
              <li className="p__header-text"><Link to="/catering" className={`nav-link-smallscreen ${location.pathname === '/catering' ? 'current' : ''}`} 
              onClick={handleLinkClick}>Catering</Link></li>
              <li className="p__header-text"><Link to="/contact" className={`nav-link-smallscreen ${location.pathname === '/contact' ? 'current' : ''}`} 
              onClick={handleLinkClick}>Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
