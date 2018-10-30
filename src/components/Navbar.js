import React, { Component } from 'react'
import transparent_logo from '../static/small_transparent_logo.png'
import { Link } from 'react-router-dom'
import {
  DropdownButton,
  Glyphicon,
  Navbar,
  Nav,
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
      expanded: false,
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
    const { transparent } = this.state
    if (scroll <= 200 && !transparent) this.setState({ transparent: true })
    else if (scroll > 200 && transparent) this.setState({ transparent: false })
  }

  getNavLink(to, label, linkColor) {
    return (
      <div>
        <Link className={`${linkColor}`} to={to} onClick={() => this.expand()}>
          {label}
        </Link>
      </div>
    )
  }

  expand() {
    if (this.props.width < 768)
      this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const currentURL = window.location.pathname
    const { transparent } = this.state
    const barColor = `${transparent && currentURL === '/' ? 'transparent' : 'non-transparent'}`
    const linkColor = `${transparent && currentURL === '/' ? 'white' : ''}`
    return (
      <div className="bar wrapper" onClick={() => this.expand()}>
        <Navbar inverse expanded={this.state.expanded} onToggle={() => { }} className={barColor}>
          <Navbar.Header>
            <Link to="/">
              <img src={transparent_logo} alt="logo" width="200px" />
            </Link>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {this.getNavLink('/menu', 'Menu', linkColor)}
              {this.getNavLink('/custom', 'Custom', linkColor)}
            </Nav>
            {!this.props.user ? (
              <Nav className="navbar-right">
                {this.getNavLink('/users/login', 'Login', linkColor)}
                {this.getNavLink('/users/register', 'Register', linkColor)}
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
                        background: transparent ? 'transparent' : '#222',
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
            background: ${transparent ? 'transparent' : '#222'};
          }
        `}</style>
      </div >
    )
  }
}

export default NavBar
