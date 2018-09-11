import React, { Component } from 'react';
import picture from '../static/small_logo.jpg'
import './styles/Nav.css'
import {Grid,Col} from 'react-bootstrap'

class NavBar extends Component {
    render() {
        return (
            <Grid class = 'bar'>
                <Col md={10}> 
                    <a href="#home"><img src={picture} alt="logo" width='250px' /></a>
                </Col>
                <Col md={1}>
                    <a id='login' href="">Login</a>
                    <a id='login' href="">Register</a>
                </Col>
            </Grid>
        )
    }
}

export default NavBar