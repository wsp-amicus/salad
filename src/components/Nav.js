import React, { Component } from 'react';
import logo from '../static/small_logo.jpg'
import burger from '../static/menu.png'
import '../styles/Nav.css'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            overflowWidth: 991,
            currentURL: window.location.pathname
        }
    }

    render() {
        // const currentURL = window.location.pathname
        return (
            <div className='bar wrapper'>
                <button id='burger'><img src={burger} width='30px' /></button>
                <Link to="/"><img src={logo} alt="logo" width='250px' /></Link>
                <span>
                    <Link to="/users/login" className={`login ${this.state.currentURL === '/users/login' ? 'active' : ''}`}>Login</Link>
                    <Link to="/users/register" className={`login ${this.state.currentURL === '/users/register' ? 'active' : ''}`}>Register</Link>
                </span>
            </div>
        )
    }
}

export default NavBar