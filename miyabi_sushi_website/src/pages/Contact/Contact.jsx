import React, {useEffect, useRef, useState} from 'react'

import img from '../../constants/images';
import { SpecialSubHeading } from '../../components';
import { Footer } from '../../container';

import './Contact.css';


const Contact = () => {
  // Using Hooks (useEffect, useRef) to handle the side effects. 
  // The empty dependency array ([]) to make sure the effect will only un once when the component mounts. 
  // The useRef helps to create a mutable object and we can update the current object property
  // The useEffect helps to perform side effects in the functional components
  
  // Define ref objects to store the values of DOM elements
  const mapContainerRef = useRef(null);
  const mapContainerContentRef = useRef(null);
  const photoContainerRef = useRef(null);
  const photoContainerBoxRef = useRef(null);
  
  // Define a state to store the input email address
  const [email, setEmail] = useState('');
  // Define a state to store error message
  const [errorMessage, setErrorMessage]= useState('');

  // Function to check the email address correction before submit action
  const handleSubmit = (event) => {
    // Prevent the default action of submit as refreshing the page
    event.preventDefault();

    // Conditions in email validation
    if(!email.trim()){
      setErrorMessage("Please fill in the email field.");
    } else if(!isValidEmail(email)) {
      setErrorMessage("Please fill in a valid email address.");
    } else {
      // Perform form submission logic here
      console.log('Form submitted successfully!');
      alert('Form submitted successfully!');
      setErrorMessage('');
      setEmail('');
    }
  }
  
  // Email form validation
  const isValidEmail = (value) => {
    // Use a regular expression to validate email format
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(value);
  }

  // Apply side effects in useEffect after component rendered
  useEffect(() => {
    // Assign current elements
    const mapContainer = mapContainerContentRef.current;
    const photoContainer = photoContainerBoxRef.current;
    // Adding class to the current elements
    mapContainer.classList.add('app__contact-map-unfold');  
    photoContainer.classList.add('app__contact-photo-unfold');
    const animationDuration = 2000;
    
    // Update elements style after animation duration
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
                {/* Event handler handles the submission of the form */}
                <form className='app__contact-form-content_text' onSubmit={handleSubmit}>
                  
                  <div className='contact__form-firstName'>
                    <label htmlFor='firstName' className='p__normal-text'>Enter your first name</label>
                    <input className='contact__form-input p__normal-text' 
                    id='firstName' type='text' placeholder='First Name' aria-required='false'/>
                  </div>
                  <div className='contact__form-email'>
                    <label htmlFor='email' className='p__normal-text'>Enter your email *</label>
                    {/* The same regular expression pattern used in the isValidEmail function. 
                    This pattern enforces the email format validation on the client-side. */}
                    <input className='contact__form-input p__normal-text'
                    id='email' type='email' placeholder='Email' 
                    value={email} onChange={(event) => setEmail(event.target.value)} 
                    pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
                    aria-required='true'/>
                  </div>
                  <div className='contact__form-phone'>
                    <label htmlFor='phone' className='p__normal-text'>Enter your phone number</label>
                    <input className='contact__form-input p__normal-text' id='phone' type='tel' placeholder='Phone' aria-required='false'/>
                  </div>
                  <div className='contact__form-message'>
                    <label htmlFor='message' className='p__normal-text'>Enter your message</label>
                    <textarea className='contact__form-textarea p__normal-text' id='message' placeholder='Message' aria-required='false'/>
                  </div>
                  {/* Send an error message when the conditions are not meet */}
                  {errorMessage && <div className='contact__form-errorMessage p__normal-text'>{errorMessage}</div>}
                  <div className='contact__form-submit'>
                    <button type='submit' className='contact__form-submit_button p__normal-text'>Submit</button>
                  </div>
                </form>
              </div>
            </div>
            {/* Ref attribute is used to assign a reference to the element */}
            <div className='app__contact-map' ref={mapContainerRef}>
              <div className='app__contact-map-content' ref={mapContainerContentRef}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1759.2857523330215!
                2d23.124912916258438!3d63.8358835834557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!
                1s0x46874892f88fb80d%3A0xb87d2988ebc51151!2sMiyabi%20Sushi!5e0!3m2!1sen!2sfi!4v1684099938753!5m2!1sen!2sfi" 
              width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" title='miyabi map location'></iframe>
              </div>
            </div>
            {/* Photo GIF section */}
            <div className='app__contact-photo' ref={photoContainerRef}>
              <div className='app__contact-photo-box' ref={photoContainerBoxRef}>
                <img src={img.miyabi_kiitos_gif} alt='miyabi kiitos'/>
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