import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
        <header className="main-header">
            <nav className="navbar navbar-static-top">
            <a className="sidebar-toggle" data-toggle="push-menu" role="button">
                <span className="sr-only">Toggle navigation</span>
            </a>
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    ขวา
                </ul>
            </div>
            </nav>
        </header>
    )
  }
}

export default Navbar
