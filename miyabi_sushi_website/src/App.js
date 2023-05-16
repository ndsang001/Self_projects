import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, HomeLayout } from './container';
import { Navbar } from './components';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, NavLink} from 'react-router-dom';
import {Home, About, Catering, Contact, Menu, Order, NoPage} from './pages'


const App = () => {
  return( 
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="menu" element={<Menu />} />
            <Route path="catering" element={<Catering />} />
            <Route path="order-online" element={<Order />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    
  </BrowserRouter>
  )
}

export default App;