import React from 'react';
import {images} from '../../constants';
import {FiFacebook, FiInstagram} from 'react-icons/fi';
import { SpecialSubHeading } from '..';

import './Footer.css';

const Footer = () => {
  const facebookLink = 'https://www.facebook.com/miyabikokkola';
  const instagramLink = 'https://www.instagram.com/miyabi_sushi_kokkola';
  const woltLink = 'https://wolt.com/en/fin/kokkola/restaurant/miyabi-sushi';
  const foodoraLink = 'https://www.foodora.fi/en/restaurant/npuz/miyabi-sushi';

  return (
    <div className='app__footer section__padding'>
      <div className='app__footer-links'>
        {/* Contact information */}
        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__normal-text'>Tehtaankatu 13, Kokkola, Finland</p>
          <p className='p__normal-text'>+358456993355</p>
          <p className='p__normal-text'>goncookingtmi@gmail.com</p>
        </div>
        {/* Logo and social media and partners links */}
        <div className='app__footer-links_logo'>
          <SpecialSubHeading title='Hungry?'/>
          <p className='p__normal-text'>"Let us satisfy your hunger now!"</p>
          <div className='app__footer-links_icons'>
            <a href={facebookLink} target="_blank" rel="noopener noreferrer">
              <FiFacebook />
            </a>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <FiInstagram />
            </a>
          </div>
          <div className='app__footer-links_partners'>
            <div className='app__footer-links_partners_intro'>
              <span className='p__normal-text'>ORDER THROUGH OUR PARTNERS</span>
            </div>
            <div className='app__footer-links_partners_logos'>
              <a href={woltLink} target="_blank" rel="noopener noreferrer">
                <img src={images.wolt_logo} alt="wolt logo" />
              </a>
              <a href={foodoraLink} target="_blank" rel="noopener noreferrer">
                <img src={images.foodora_logo} alt="foodora logo" />
              </a>
            </div>
          </div>
        </div>
        {/* Opening hours */}
        <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__normal-text'>Monday-Thursday:</p>
          <p className='p__normal-text'>10:30 - 20:00</p>
          <p className='p__normal-text'>Friday:</p>
          <p className='p__normal-text'>10:30 - 21:00</p>
          <p className='p__normal-text'>Saturday:</p>
          <p className='p__normal-text'>12:00 - 21:00</p>

        </div>
      </div>
      {/* Copyright */}
      <div className='footer__copyright'>
          <p className='p__normal-text'>2023 by Miyabi Sushi. All Rights reserved.</p>
      </div>
    </div> 
  );
};

export default Footer;