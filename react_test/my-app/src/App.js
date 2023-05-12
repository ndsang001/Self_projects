import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';

import styled from 'styled-components';
import Home from './pages/Home';
import Contact from './pages/Contact';
import img from './assets/Miyabisushi_discovery_2.jpg';

const Container = styled.div`
//   background-color: #f2f2f2;
  background-image: url(${img});
  min-height: 100vh;
`;

const NavBar = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
`;

function App() {
  return (
    <Router>
      <Container>
        <NavBar>
          <NavLinks>
            <NavLink active={window.location.pathname === '/'}>
              <Link to="/">Home</Link>
            </NavLink>
            <NavLink active={window.location.pathname === '/contact'}>
              <Link to="/contact">Contact</Link>
            </NavLink>
          </NavLinks>
        </NavBar>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
