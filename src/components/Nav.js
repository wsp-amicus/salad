import React, { Component } from 'react';
import picture from '../static/small_logo.jpg'

class Nav extends Component{
    render(){
        return(
            <nav>
                <img src ={picture} alt="logo"/>
                <a>Register</a>
                <a>Login</a>
            </nav>
            
        )
    }
}

export default Nav