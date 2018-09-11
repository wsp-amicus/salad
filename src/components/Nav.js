import React, { Component } from 'react';
import picture from '../static/small_logo.jpg'
import './styles/Nav.css'
import { Navbar, NavItem, Nav } from 'react-bootstrap'


class NavBar extends Component {
    render() {
        return (
            <div className = "bar">
                <a href="#home"><img src = {picture} alt="logo" width='200px'/></a>
            </div>
        )
    }
}

export default NavBar