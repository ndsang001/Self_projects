import React, {useRef}from 'react';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';
import { SpecialSubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

// Defining an array of gallery images to store image references
const galleryImages = [images.miyabi_gallery01, images.miyabi_gallery02, images.miyabi_gallery03, 
  images.miyabi_gallery04, images.miyabi_gallery05, images.miyabi_gallery06, images.miyabi_gallery07, 
  images.miyabi_gallery08, images.miyabi_gallery09, images.miyabi_gallery10];

const Gallery = () => {
  // Assign a variable to store the specific element reference by using useRef Hook
  const scrollRef = useRef(null);

  // Define the instagram link
  const instagramLink = 'https://www.instagram.com/miyabi_sushi_kokkola';

  // Function is defined to handle scrolling the gallery left or right 
  // based on the provided direction parameter 
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
      {/* Gallery images */}
      <div className='app__gallery-images'>
        {/* The scrollRef is used to reference the container element that holds the gallery images. */}
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt='gallery' />
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className='gallery__image-icon_wrapper'><BsInstagram className='gallery__image-icon' /></a>
            </div> 
          ))}
        </div>
        {/* Gallery navigation arrows */}
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=> scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={()=> scroll('right')} />
        </div>
      </div>
      
    </div>
  )
}

export default Gallery;