import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Header.css';
function Header() {
    return (
      <Navbar id='navbar-nav' expand='lg' variant='light' >
          <Navbar.Brand id='navbar-style' href='#'>DASHBOARD</Navbar.Brand>
      </Navbar>

    )  
}
export default Header;