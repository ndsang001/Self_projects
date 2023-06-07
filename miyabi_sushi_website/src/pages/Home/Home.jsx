import React from 'react';
import { Header, OurProducts, Gallery, OurCatering, Footer} from '../../container';

import './Home.css';


const Home = () => {
  return (
    <div className='app__home_page'>
        <Header />
        <OurProducts />
        <Gallery />
        <OurCatering />
        <Footer />
    </div>
    
  )
}

export default Home