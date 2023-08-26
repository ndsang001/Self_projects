import React from 'react';
import { Header, OurProducts, Gallery, OurCatering} from '../../container';

import './Home.css';


const Home = () => {
  return (
    <div className='app__home_page'>
        <Header />
        <OurProducts />
        <Gallery />
        <OurCatering />
    </div>
    
  )
}

export default Home