import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants';
import background_img from '../../assets/Miyabisushi_discovery_2.jpg';
import { SpecialSubHeading } from '../../components';

import './Header.css';

const Header = () => {

  return (
    <div className='app__header app__header_bg_img app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        
        <SpecialSubHeading title="Miyabi Sushi"/>
        <h1 className='app__header-h1'>Sushi and Asian Fusion</h1>
        <h2 className='app__header-h2'>Open Daily for Takeout & Delivery</h2>

      </div>
      
    </div>
  );
}
  

export default Header;
