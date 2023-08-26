import React from 'react';
import { SpecialSubHeading } from '../../components';

import './Header.css';

const Header = () => {

  return (
    <div className='app__header app__header_bg_img app__wrapper section__padding' id='home'>
      <div className='app__header_wrapper'>
        <div className='app__wrapper_info'>
          <SpecialSubHeading title="Miyabi Sushi"/>
          <h1 className='app__header-h1'>Sushi and Asian Fusion</h1>
          <h2 className='app__header-h2'>Open Daily for Takeout & Delivery</h2>
          <a className='app__header-button p__header-text' href='/order-online'>ONLINE ORDER</a>
        </div>
      </div>
    </div>
  );
}
  

export default Header;
