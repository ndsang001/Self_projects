import React from 'react'
import { SpecialSubHeading } from '../../components'

import './OurCatering.css';

const OurCatering = () => {
  return (
    <div className='app__ourcatering flex__center section__padding'>
        <div className='app__ourcatering-content ourcatering__content-border'>
            <div className='app__ourcatering-content_header'>
                <SpecialSubHeading title='Our Catering'/>
            </div>
            <div className='app__ourcatering-content_text'>
                <p className='p__normal-text'> 
                    
                There are two distinct types of restaurant service: A la carte and buffet. 
                <br/><br/>The A la carte option is available throughout the day, in accordance with the restaurant's opening hours. 
                On the other hand, the buffet option is exclusively offered during lunchtime.
                </p>
            </div>
        </div>
        <div className='app__ourcatering-button'>
            <a href='#catering' className='p__normal-text'>Find out more</a>
        </div>
    </div>
  )
}

export default OurCatering