import React, { useEffect, useState } from 'react';
import {IoIosArrowDropdown} from 'react-icons/io';
import './SubMenuNav.css';

const SubMenuNav = () => {
  // Define state to hold the current section
  const [currentSection, setCurrentSection] = useState('');

  // Define state to hold the current state of dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  // Define state to hold the current name of the section
  const [sectionName, setSectionName] = useState('Nigirit');
  
  const toggleDropdown = (event) => {
    setIsOpen(!isOpen);
    setSectionName(event.target.innerText);
  }

  // Set up an effect to handle scrolling and update the current section
  useEffect(() => {
    // Define the scroll event handler
    const handleScroll = () => {
      // Get all the sections on the page through the class name
      const sections = document.querySelectorAll('.menu__section');

      // Get the nav height (compared to the page height)
      // const navHeight = document.querySelector('.app__subMenuNav').offsetHeight;
      // console.log("nav height: " + navHeight);

      // Get the bottom position of the viewport
      const pageBottom = window.innerHeight + window.pageYOffset - 300;

      // Iterate over each section and check if it is in the viewport
      sections.forEach((section) => {
        // Get position and size information of the section 
        //=> return DOMRect object containing properties like top, bottom, left, right, width, and height.
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top - 300;
        const sectionHeight = rect.height;
        
        if (sectionTop <= 0 && sectionTop + sectionHeight > 0) {
          // Set current section to update the current part user is viewing
          setCurrentSection(`#${section.id}`);
          // Set the section name according to the current viewing section 
          setSectionName(section.querySelector(':first-child').innerText);
        }
      });
      // Check if user has scrolled to the end of the page
      if (pageBottom === document.documentElement.offsetHeight) {
        setCurrentSection('#subMenu-drinks');
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle the click event when user clicks a item on the subnav bar 
  const handleClick = (event, sectionId) => {
    // Prevent the default action to move the selected section to the page top
    event.preventDefault();
    // Get section ID
    const section =  document.querySelector(sectionId);
    
    // Get width of the screen
    const screenWidth = window.innerWidth;
    
    
    if(section){
      // According to the screen max width, the section position is different
      if(screenWidth < 450){
        // Get selected section position
        const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - 260;
        // Scroll to the selected section position
        window.scrollTo({top: sectionPosition, behavior: 'smooth'});
        // Update the appearance of the clicked section
        setCurrentSection(sectionId);
      } else {
        // Get selected section position
        const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - 280;
        // Scroll to the selected section position
        window.scrollTo({top: sectionPosition, behavior: 'smooth'});
        // Update the appearance of the clicked section
        setCurrentSection(sectionId);
      }
      
      
    }
  }

  return (
    <nav className='app__subMenuNav'>
      <ul className='app__subMenuNav-links'>
        {/* Add 'current' class to the menu item if it matches the current section */}
        <li className={`p__normal-text ${currentSection === '#subMenu-nigirit' ? 'current' : ''}`} 
        onClick={(e) => handleClick(e, '#subMenu-nigirit')}> {/* Adding handleClick event listener */}
          <a href='#subMenu-nigirit'>Nigirit</a>
        </li>
        <li className={`p__normal-text ${currentSection === '#subMenu-makit' ? 'current' : ''}`} 
        onClick={(e) => handleClick(e, '#subMenu-makit')}>
          <a href='#subMenu-makit'>Makit</a>
        </li>
        <li className={`p__normal-text ${currentSection === '#subMenu-laijtelmat' ? 'current' : ''}`} 
        onClick={(e) => handleClick(e, '#subMenu-laijtelmat')}>
          <a href='#subMenu-laijtelmat'>Laijtelmat</a>
        </li>
        <li className={`p__normal-text ${currentSection === '#subMenu-foods' ? 'current' : ''}`} 
        onClick={(e) => handleClick(e, '#subMenu-foods')}>
          <a href='#subMenu-foods'>Food</a>
        </li>
        <li className={`p__normal-text ${currentSection === '#subMenu-drinks' ? 'current' : ''}`} 
        onClick={(e) => handleClick(e, '#subMenu-drinks')}>
          <a href='#subMenu-drinks'>Drinks</a>
        </li>
      </ul>

      <div className='app__subMenuNav-smallscreen'>
        <div className='app__subMenuNav-smallscreen_dropdown'>
          {/* Adding toggleDropdown function to change the section name after user selects a item from sub menu bar */}
          <div className='subMenuNav__smallscreen-dropdown_overlay' onClick={(e) => toggleDropdown(e)}>
            <span className='p__normal-text'>
              {sectionName}
            </span>
            <IoIosArrowDropdown color='#145365' className='orderOnline__icons'/>
          </div>
          {isOpen && (
            <div className='subMenuNav__smallscreen-dropdown_items'>
              <ul className='app__subMenuNav-smallscreen_links'>
                {/* Add 'current' class to the menu item if it matches the current section */}
                <li className={`p__normal-text ${currentSection === '#subMenu-nigirit' ? 'current' : ''}`} 
                onClick={(e) => {handleClick(e, '#subMenu-nigirit'); toggleDropdown(e)}}> {/* Adding handleClick event listener */}
                  <a href='#subMenu-nigirit'>Nigirit</a>
                </li>
                <li className={`p__normal-text ${currentSection === '#subMenu-makit' ? 'current' : ''}`} 
                onClick={(e) => {handleClick(e, '#subMenu-makit'); toggleDropdown(e)}}>
                  <a href='#subMenu-makit'>Makit</a>
                </li>
                <li className={`p__normal-text ${currentSection === '#subMenu-laijtelmat' ? 'current' : ''}`} 
                onClick={(e) => {handleClick(e, '#subMenu-laijtelmat'); toggleDropdown(e)}}>
                  <a href='#subMenu-laijtelmat'>Laijtelmat</a>
                </li>
                <li className={`p__normal-text ${currentSection === '#subMenu-foods' ? 'current' : ''}`} 
                onClick={(e) => {handleClick(e, '#subMenu-foods'); toggleDropdown(e)}}>
                  <a href='#subMenu-foods'>Foods</a>
                </li>
                <li className={`p__normal-text ${currentSection === '#subMenu-drinks' ? 'current' : ''}`} 
                onClick={(e) => {handleClick(e, '#subMenu-drinks'); toggleDropdown(e)}}>
                  <a href='#subMenu-drinks'>Drinks</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default SubMenuNav;