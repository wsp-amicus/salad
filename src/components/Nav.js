import React, { Component } from 'react';
import picture from '../static/small_logo.jpg'
import './styles/Nav.css'
import { Grid, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        const currentURL = window.location.pathname
        return (
            <Grid className='bar wrapper'>
                <Col md={10}> 
                    <Link to="/"><img src={picture} alt="logo" width='250px' /></Link>
                </Col>
                <Col md={1}>
                    <Link to="/users/login" className={`login ${currentURL === '/users/login' ? 'active':''}`}>Login</Link>
                    <Link to="/users/register" className={`login ${currentURL === '/users/register' ? 'active':''}`}>Register</Link>
                </Col>
            </Grid>
        )
    }
}

export default NavBar