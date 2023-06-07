import React from 'react';
import { SpecialSubHeading } from '../../components';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__about section__padding flex__center'>
    <div className='app__about-content'>
      {/* Photo decoration */}
      <div className='app__about-content_photo1'>
        <img src={images.about_page_photo3} alt='about page 1' />
      </div>
      <div className='app__about-content_photo2'>
        <img src={images.about_page_photo2} alt='about page 2' />
      </div>
      {/* Information of the restaurant for visitors */}
      <div className='app__about-content_text'>
        <SpecialSubHeading title='About Us' />
        <p className='p__normal-text' >Miyabi Sushi is an eatery that specializes in Asian cuisine, featuring a unique blend of different Asian flavors. 
        The restaurant was established in 2021 and is currently on track to becoming one of the top Asian restaurants in the area. 
        The establishment operates with the guiding principle of providing customers with exceptional dishes and service, 
        and is always striving to enhance our offerings and improve our quality, 
        continuously striving to be the best version of ourselves by listening to customer feedback and making daily improvements.
        </p>
      </div>
      
    </div>

  </div>
);

export default AboutUs;
