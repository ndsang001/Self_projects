import React from 'react';

import { images } from '../../constants';

const SpecialSubHeading = ({title}) => (
  <div style={{marginBottom: '1rem'}}>
    <p className='p__dancing app__subheading_title'>{title}</p>
    {/* <img src={images.spoon} alt='spoon' className='spoon__img'/> */}
  </div>
);

export default SpecialSubHeading;