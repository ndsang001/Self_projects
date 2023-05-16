import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, HomeLayout } from './container';
import { Navbar } from './components';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Switch} from 'react-router-dom';
import {Home, About, Catering, Contact, Menu} from './pages'


const App = () => {
  return( 
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HomeLayout />}>
    //       <Route index element={<Header />} />
    //       <Route path="about" element={<AboutUs />} />
    //       <Route path="contact" element={<FindUs />} />
    //       <Route path="menu" element={<FindUs />} />
    //       <Route path="catering" element={<FindUs />} />
    //       {/* <Route path="*" element={<NoPage />} /> */}
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="menu" element={<Menu />} />
            <Route path="catering" element={<Catering />} />
            {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </div>
    
  </BrowserRouter>
    // <div >
    //   <Navbar /> 
    //   <Header />
    //       {/* <AboutUs />
    //           <SpecialMenu />
    //           <Chef />
    //           <Intro />
    //           <Laurels />
    //           <Gallery />
    //           <FindUs />
    //           <Footer /> */} 
    //   </div>
  )
}

export default App;