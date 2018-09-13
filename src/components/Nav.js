import React, { Component } from 'react';
import logo from '../static/small_logo.jpg'
import '../styles/Nav.css'
import { Link} from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

class NavBar extends Component {

  render() {
    const currentURL = window.location.pathname
    return (
      <div className='bar wrapper'>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Link to="/"><img src={logo} alt="logo" width='200px' /></Link>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <li className={`presentation login ${currentURL === '/users/login' ? 'active' : ''}`}>
                <Link to="/users/login">Login</Link>
              </li>
              <li className={`presentation login ${currentURL === '/users/register' ? 'active' : ''}`}>
                <Link to="/users/register">Register</Link>
              </li>
              {/* ใช้ไม่ได้ */}
              {/* <NavItem eventKey={1} href="/users/login" className={`login ${currentURL === '/users/login' ? 'active' : ''}`}>
                                Login
                            </NavItem> */}
              {/* <NavItem eventKey={2} href="/users/register" className={`login ${currentURL === '/users/register' ? 'active' : ''}`}>
                                Register
                            </NavItem> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavBar