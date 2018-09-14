import React, { Component } from 'react'
import '../styles/NotFound.css'

export default class NotFound extends Component {
  render() {
    return (
      <div className="notfound">
        <b>404</b><br />
        Oops! Page not found<br />
        <p>The requested page was not found</p>
      </div>
    )
  }
}