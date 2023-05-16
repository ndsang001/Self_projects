import React, {useEffect, useRef} from 'react'

import img from '../../constants/images';
import { SpecialSubHeading } from '../../components';
import { Footer } from '../../container';

import './Contact.css';


const Contact = () => {
  // Using Hooks (useEffect, useRef) to handle the side effects. 
  // The empty dependency array ([]) to make sure the effect will only un once when the component mounts. 
  // The useRef helps to create a mutable object and we can update the current object property
  // The useEffect helps to perform side effects in the functional components
  
  const mapContainerRef = useRef(null);
  const mapContainerContentRef = useRef(null);
  const photoContainerRef = useRef(null);
  const photoContainerBoxRef = useRef(null);
  

  useEffect(() => {
    const mapContainer = mapContainerContentRef.current;
    const photoContainer = photoContainerBoxRef.current;
    mapContainer.classList.add('app__contact-map-unfold');  
    photoContainer.classList.add('app__contact-photo-unfold');
    const animationDuration = 3000;
    setTimeout(() => {
      if(mapContainer){
        const unfoldMapClass = mapContainerRef.current.querySelector('.app__contact-map-unfold');
        unfoldMapClass.style.transition = '0.2s linear';
        unfoldMapClass.style.webkitTransition = '0.2s linear';
        unfoldMapClass.style.oTransition = '0.2s linear';
      }
      if(photoContainer){
        const unfoldPhotoClass = photoContainerRef.current.querySelector('.app__contact-photo-unfold');
        unfoldPhotoClass.style.transition = '0.2s linear';
        unfoldPhotoClass.style.webkitTransition = '0.2s linear';
        unfoldPhotoClass.style.oTransition = '0.2s linear';
      }
      
    }, animationDuration);

  }, []);


  return (
    <div className='app__contact'>
        <section className='contact__header'>
        </section>
        <section className='contact__body'>
            <div className='app__contact-form'>
              <div className='app__contact-form-header'>
                <SpecialSubHeading title='Contact Us'/>
              </div>
              <div className='app__contact-form-content'>
                <div className='app__contact-form-content_intro'>
                  <p className='p__normal-text'>We welcome queries, feedback and suggestions. We want to hear from you!</p>
                </div>
                <div className='contact__form_empty_div'/>
                <div className='app__contact-form-content_text'>
                  
                  <div className='contact__form-firstName'>
                    <label for='firstName' className='p__normal-text'>Enter your first name</label>
                    <input className='contact__form-input p__normal-text' id='firstName' type='text' placeholder='First Name' aria-required='false'/>
                  </div>
                  <div className='contact__form-email'>
                    <label for='email' className='p__normal-text'>Enter your email *</label>
                    <input className='contact__form-input p__normal-text' id='email' type='email' placeholder='Email' aria-required='true'/>
                  </div>
                  <div className='contact__form-phone'>
                    <label for='phone' className='p__normal-text'>Enter your phone number</label>
                    <input className='contact__form-input p__normal-text' id='phone' type='tel' placeholder='Phone' aria-required='false'/>
                  </div>
                  <div className='contact__form-message'>
                    <label for='message' className='p__normal-text'>Enter your message</label>
                    <textarea className='contact__form-textarea p__normal-text' id='message' placeholder='Message' aria-required='false'/>
                  </div>
                  <div className='contact__form-submit'>
                    <a href='' className='contact__form-submit_button p__normal-text'>Submit</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='app__contact-map' ref={mapContainerRef}>
              <div className='app__contact-map-content' ref={mapContainerContentRef}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1759.2857523330215!2d23.124912916258438!3d63.8358835834557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46874892f88fb80d%3A0xb87d2988ebc51151!2sMiyabi%20Sushi!5e0!3m2!1sen!2sfi!4v1684099938753!5m2!1sen!2sfi" 
              width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div className='app__contact-photo' ref={photoContainerRef}>
              <div className='app__contact-photo-box' ref={photoContainerBoxRef}>
                <img src={img.miyabi_kiitos_gif} />
              </div>
            </div>
        </section>
        <section className='contact__footer'>
            <Footer />
        </section>
    </div>
  )
}

export default Contact