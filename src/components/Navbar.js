import React, { Component } from 'react'
import transparent_logo from '../static/small_transparent_logo.png'
import { Link } from 'react-router-dom'
import {
  DropdownButton,
  Glyphicon,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap'
import '../styles/Navbar.css'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transparent: true,
      redirect: '',
      userOpen: false,
      menuOpen: false,
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
    if (scroll <= 200 && !this.state.transparent) this.setState({ transparent: true })
    else if (scroll > 200 && this.state.transparent) this.setState({ transparent: false })
  }

  render() {
    const currentURL = window.location.pathname
    const barColor = `${this.state.transparent && currentURL === '/' ? 'transparent' : 'non-transparent'}`
    const linkColor = `${this.state.transparent && currentURL === '/' ? 'white' : ''}`
    return (
      <div className="bar wrapper">
        <Navbar inverse collapseOnSelect className={barColor}>
          <Navbar.Header>
            <Link to="/">
              <img src={transparent_logo} alt="logo" width="200px" />
            </Link>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem>
                <Link className={`${linkColor}`} to="/">
                  Menu
                </Link>
              </NavItem>
              <NavItem>
                <Link className={`${linkColor}`} to="/">
                  Custom
                </Link>
              </NavItem>
            </Nav>
            {!this.props.user ? (
              <Nav className="navbar-right">
                <NavItem>
                  <Link className={`${linkColor}`} to="/users/login">
                    Login
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className={`${linkColor}`} to="/users/register">
                    Register
                  </Link>
                </NavItem>
              </Nav>
            ) : (
                <Nav className="navbar-right">
                  <DropdownButton
                    title={
                      <div>
                        <Glyphicon glyph="user" style={{ marginRight: '10px' }} />
                        {this.props.user.username}
                      </div>
                    }
                    id="0"
                    noCaret
                    open={this.state.userOpen}
                    onToggle={() => { }}
                    onMouseOver={() => this.setState({ userOpen: true })}
                    onMouseLeave={() => this.setState({ userOpen: false })}
                    className="dropdown-button"
                  >
                    <li
                      role="presentation"
                      style={{
                        background: this.state.transparent ? 'transparent' : '#222',
                      }}
                    >
                      <Link role="menuitem" tabIndex="-1" to="/users/logout">
                        Logout
                      </Link>
                    </li>
                  </DropdownButton>
                </Nav>
              )}
          </Navbar.Collapse>
        </Navbar>
        <style>{`
          .dropdown-menu {
            background: ${this.state.transparent ? 'transparent' : '#222'};
          }
        `}</style>
      </div >
    )
  }
}

export default NavBar
