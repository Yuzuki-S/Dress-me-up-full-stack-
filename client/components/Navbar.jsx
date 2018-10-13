import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, NavDropdown, Nav,MenuItem,  } from 'react-bootstrap'



const Navy = () => {
  return (

      <Navbar inverse  >
        <Nav>
        <Navbar.Header>
          <Navbar.Brand>
          <Link to='/Home'>Home</Link>
          </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Brand>
          <Link to='/About'>About</Link>
          </Navbar.Brand>
          <Navbar.Brand>
          <Link to='/Contact'>Contact</Link>
          </Navbar.Brand>
          <Navbar.Brand>
          <Link to='/Login'>Login</Link>
          </Navbar.Brand>
          <Navbar.Brand>
          <Link to='/Signup'>Sign up</Link>
          </Navbar.Brand>
          <NavDropdown id="basic-nav-dropdown"title="Package" >
        <MenuItem id="basic-nav-dropdown">
        <Link to='/Package/sports'>Sports</Link></MenuItem>
        <MenuItem id="basic-nav-dropdown">   <Link to='/Package/casual'>Casual</Link></MenuItem>
        <MenuItem id="basic-nav-dropdown">   <Link to='/Package/work'>Work</Link></MenuItem>
      </NavDropdown>
        </Nav>
      </Navbar>

  )
}

export default Navy