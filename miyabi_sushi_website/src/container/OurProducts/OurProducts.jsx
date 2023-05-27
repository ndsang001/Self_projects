import React from 'react'
import images from '../../constants/images'
import { SpecialSubHeading } from '../../components'

import './OurProducts.css'

const OurProducts = () => {
  return (
    <div className='app__ourproducts app__wrapper_80 section__padding'>
        <div className='app__ourproducts_photo'>
            <img src={images.home_page_our_products_2} alt='home page our products' />
        </div>

        <div className='app__ourproducts_text'>
            <div className='app__ourproducts_text_header'>
                <SpecialSubHeading title='Our product' />
            </div>
            {/* Product introduction */}
            <div className='app__ourproducts_text_content'>
                <p className='app__ourproducts_text_content-p p__normal-text'>Welcome to Miyabi Sushi where we offer fresh sushi and delicious Asian fusion dishes. 
                Our sushi is made with premium ingredients, while our fusion menu combines traditional flavors with modern techniques for a unique culinary experience. 
                <br/><br/>Join us for an unforgettable dining experience! !</p>
                <div className='ourproducts__text_content_empty_div'/>
                <div className='app__ourproducts_text_content-a'>
                    <a className='ourproducts_text-a p__normal-text' href='/menu'>Explore Menu</a>
                </div>
                
            </div>
        </div>
        

    </div>
  )
}

export default OurProducts