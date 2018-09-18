import React, { Component } from 'react';
import transparent_logo from '../static/small_transparent_logo.png'
import '../styles/Nav.css'
import { Link } from 'react-router-dom'

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
        <nav className={`${barColor} navbar navbar-inverse`}>
            <div className="container">
              <div className="navbar-header">
                <Link to="/">
                  <img src={transparent_logo} alt="logo" width="200px"/>
                </Link>
              <button type="button" className="navbar-toggle collapsed">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="navbar-collapse collapse">
            {!this.props.user ? 
              <ul className="nav navbar-nav navbar-right">
                <li className="presentation login ">
                  <Link className={`${linkColor}`} to="/users/login">Login</Link>
                </li>
                <li className="presentation login ">
                  <Link className={`${linkColor}`} to="/users/register">Register</Link>
                </li>
              </ul>
              :
              <ul className="nav navbar-nav navbar-right">
                <li className={`presentation login ${currentURL === '/users/register' ? 'active' : ''}`}>
                  <Link to='/users/logout' className={linkColor}><i className="fas fa-user" style={{ marginRight: '10px' }}></i>{this.props.user.username}</Link>
                </li>
              </ul>
            }
            </div>

          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar