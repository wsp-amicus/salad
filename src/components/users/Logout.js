import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

export class Logout extends Component {
  componentDidMount() {
    Cookies.remove('amicus-salad-uid');
    this.props.verifyLogin()
  }

  render() {
    return (
        <Redirect to="/" />
    )
  }
}

export default Logout
