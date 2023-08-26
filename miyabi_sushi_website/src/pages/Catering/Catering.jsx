import React from 'react'

import images from '../../constants/images';
import { SpecialSubHeading } from '../../components'

import './Catering.css'
const Catering = () => {
  return (
    <div className='app__catering'>
      <section className='catering__header'></section>
      <section className='catering__body'>
        <div className='app__catering-introduce'>
          <div className='app__catering-introduce_text'>
            <div className='app__catering-introduce_text_frame'>
              <SpecialSubHeading title='Our Catering'/>
              
              <h5 className='p__comfortaa'>LET US CATER YOUR NEXT MEETING OR EVENT!</h5>
              <p className='p__normal-text'>We provide a variety of services that cater to different preferences, 
              including the option to dine in, enjoy the lunch buffet, order take-out, or order online through our partners, Wolt and Foodora. 
              Take a moment to explore our offerings and choose the service that best suits your needs or the needs of your group. 
              We hope that you will savor your meal and take pleasure in your day-to-day experiences.</p>
            </div>
           
          </div>
        </div>
        <div className='app__catering-content'>
          <div className='app__catering-content-box'>
            <div className='app__catering-content-box_alacarte'>
              <img src={images.miyabi_closeup} alt= 'catering page - miyabi close up' />
              <div className='catering__alacarte-content'>
                <h5 className=''>
                  A LA CARTE
                </h5>
                <p className='p__normal-text'>Our menu features a diverse selection of Asian fusion cuisine, 
                which includes a range of sushi options as well as a variety of wok dishes with an Asian twist.
                <br/><br/><i>We also offer a take-out option.</i>
                </p>
              </div>
            </div>
            <div className='app__catering-content-box_buffet'>
              <img src={images.miyabi_gallery09} alt= 'catering page - miyabi buffet' />
              <div className='catering__buffet-content'>
                <h5>
                  BUFFET
                </h5>
                <p className='p__normal-text'><span style={{fontStyle:'italic', fontWeight:'500'}}>The buffet service every day from opening time until 5:00 PM.</span>
                Our buffet spread features a wide range of delectable options including sushi, warm dishes, soup, salads, coffee, tea, and desserts. 
                <br/><br/><i>We also offer a take-out option for buffet.</i>
                </p>
              </div>
            </div>
            <div className='app__catering-content-box_online'>
              <img src={images.miyabi_gallery07} alt= 'catering page - miyabi online' />
              <div className='catering__online-content'>
                <h5>
                  ONLINE
                </h5>
                <p className='p__normal-text'>With Wolt and Foodora, we offer you the convenience of ordering our food online with just a few clicks. 
                You can easily have your order delivered right to your doorstep by a courier. 
                <br/><br/><i>Give it a try now!</i></p>
              </div>
            </div>
          </div>
          <div className='app__catering-content-button'>
            <a href='/contact' className='p__normal-text'>Contact Us</a>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Catering