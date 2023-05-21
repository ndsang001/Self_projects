import React from 'react';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';

import { SpecialSubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const galleryImages = [images.miyabi_gallery01, images.miyabi_gallery02, images.miyabi_gallery03, images.miyabi_gallery04, images.miyabi_gallery05,
  images.miyabi_gallery06, images.miyabi_gallery07, images.miyabi_gallery08, images.miyabi_gallery09, images.miyabi_gallery10];

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if(direction === 'left'){
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  
  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery_header'>
        <SpecialSubHeading title='Gallery'/>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt='gallery' />
              <BsInstagram className='gallery__image-icon'/>
            </div> 
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=> scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={()=> scroll('right')} />
        </div>
      </div>
      
    </div>
  )
}

export default Gallery;
