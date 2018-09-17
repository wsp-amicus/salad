import React, { Component } from 'react';
import transparent_logo from '../static/small_transparent_logo.png'
import '../styles/Nav.css'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transparent: true
    }
    this.handleScroll = this.handelScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handelScroll() {
    const scroll = window.scrollY
    if (scroll <= 200 && !this.state.transparent)
      this.setState({ transparent: true })
    else if (scroll > 200 && this.state.transparent)
      this.setState({ transparent: false })
  }

  render() {
    const currentURL = window.location.pathname
    const barColor = `${this.state.transparent && currentURL === '/' ? 'transparent' : 'non-transparent'}`
    const linkColor = `${this.state.transparent && currentURL === '/' ? 'white' : ''}`
    return (
      <div className='bar wrapper'>
        <Navbar inverse collapseOnSelect className={barColor}>
          <Navbar.Header>
            <Link to="/"><img src={transparent_logo} alt="logo" width='200px' /></Link>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            { !this.props.user ? 
            <Nav pullRight>
              <li className={`presentation login ${currentURL === '/users/login' ? 'active' : ''}`}>
                <Link to="/users/login" className={linkColor}>Login</Link>
              </li>
              <li className={`presentation login ${currentURL === '/users/register' ? 'active' : ''}`}>
                <Link to="/users/register" className={linkColor}>Register</Link>
              </li>
            </Nav>
              :
            <Nav pullRight>
              <li className={`presentation login ${currentURL === '/users/register' ? 'active' : ''}`}>
                <Link to={{pathname: '/users/logout', state: { prevPath: window.location.pathname }}} className={linkColor}><i className="fas fa-user" style={{ marginRight: '10px' }}></i>{this.props.user.username}</Link>
              </li>
            </Nav>
            }
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavBar