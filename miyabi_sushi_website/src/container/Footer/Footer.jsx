import React from 'react';
import {FiFacebook, FiInstagram} from 'react-icons/fi';
import { SpecialSubHeading } from '../../components';

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__normal-text'>Tehtaankatu 13, Kokkola, Finland</p>
        <p className='p__normal-text'>+358456993355</p>
        <p className='p__normal-text'>goncookingtmi@gmail.com</p>
      </div>
      <div className='app__footer-links_logo'>
        <SpecialSubHeading title='Hungry?'/>
        <p className='p__normal-text'>"Let us satisfy your hunger now!"</p>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiInstagram />
        </div>
        
      </div>
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
    <div className='footer__copyright'>
        <p className='p__normal-text'>2023 by Miyabi Sushi. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;