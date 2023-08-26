import React from 'react';
import { Navbar } from './components';
import './App.css';
// eslint-disable-next-line
import { BrowserRouter as Router,Routes, Route, BrowserRouter} from 'react-router-dom';
import {Home, About, Catering, Contact, Menu, Order, NoPage} from './pages'
import { Footer } from './container';


const App = () => {
  return( 
    <BrowserRouter>
      <div className='app__root'>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/order-online" element={<Order />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </div>
    
  </BrowserRouter>
  )
}

export default App;