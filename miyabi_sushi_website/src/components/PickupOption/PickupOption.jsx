import React from 'react';
import {IoClose, IoAlertCircleOutline} from 'react-icons/io5';
import './PickupOption.css';
const PickupOption = ({onClose}) => {
    const handleClosePickup = () => {
        onClose();
    };
  return (
    <div className='app__pickupOption'>
        <div className='app__pickupOption-container'>
            <div className='app__pickupOption-container-box'>
                <IoClose color='#145365' className='pickupOption__icon-close' onClick={handleClosePickup}/>
                <div className='app__pickupOption-container-box_header'>
                    <span className='p__normal-text'>How do you want to get your order?</span>
                </div>
                <div className='app__pickupOption-container-box_content'>
                    <div className='pickupOption__content'>
                        <div className='pickupOption__content-location'>
                            <p className='p__normal-text'>Pickup from</p>
                            <p className='p__normal-text'>Tehtaankatu 13, 67100 Kokkola, Finland</p>
                        </div>
                        <div className='pickupOption__content-time'>
                            <p className='p__normal-text'>Pickup time</p>
                            <p className='p__normal-text'>ASAP (around 15 minutes)</p>
                        </div>
                    </div>
                    <div className='pickupOption__content-alert'>
                        <IoAlertCircleOutline color='#145365' className='pickupOption__icon-alert'/>
                        <p className='p__normal-text'><span><i>Only one branch and pick up option is available now!</i></span></p>
                    </div>
                </div>
                <div className='app__pickupOption-container-box_buttons'>
                    <div className='pickupOption__box-buttons'>
                        <button className='pickupOption__button' onClick={handleClosePickup}><span className='p__normal-text'>Cancel</span></button>
                        <div className='pickupOption__empty_div'/>
                        <button className='pickupOption__button' onClick={handleClosePickup}><span className='p__normal-text'>Save</span></button>
                    </div>
                    
                </div>

            </div>
            
        </div>
        
    </div>
  )
}

export default PickupOption