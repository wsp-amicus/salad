import React, { Component } from 'react'
import transparent_logo from '../static/small_transparent_logo.png'
import { Link } from 'react-router-dom'
import { DropdownButton, Glyphicon, Navbar } from 'react-bootstrap'
import '../styles/Nav.css'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transparent: true,
      redirect: '',
      open: false,
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
            {!this.props.user ? (
              <ul className="nav navbar-nav navbar-right">
                <li className="presentation login">
                  <Link className={`${linkColor}`} to="/users/login">
                    Login
                  </Link>
                </li>
                <li className="presentation login">
                  <Link className={`${linkColor}`} to="/users/register">
                    Register
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="nav navbar-nav navbar-right">
                <li className="presentation login d-none d-md-block">
                  <DropdownButton
                    title={
                      <div>
                        <Glyphicon glyph="user" style={{ marginRight: '10px' }} />
                        {this.props.user.username}
                      </div>
                    }
                    id="0"
                    noCaret
                    open={this.state.open}
                    onToggle={() => {}}
                    onMouseOver={() => this.setState({ open: true })}
                    onMouseLeave={() => this.setState({ open: false })}
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
                </li>
                <li className="presentation login d-md-none">
                  <Link className={`${linkColor}`} to="/">
                    <Glyphicon glyph="user" style={{ marginRight: '10px' }} />
                    {this.props.user.username}
                  </Link>
                </li>
                <li className="presentation login d-md-none">
                  <Link className={`${linkColor}`} to="/users/logout">
                    Logout
                  </Link>
                </li>
              </ul>
            )}
          </Navbar.Collapse>
        </Navbar>
        <style>{`
          .dropdown-menu {
            background: ${this.state.transparent ? 'transparent' : '#222'};
          }
        `}</style>
      </div>
    )
  }
}

export default NavBar
