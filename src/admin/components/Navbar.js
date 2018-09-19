import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
        <header className="main-header">
            <a href="index2.html" class="logo">
              <span class="logo-lg">Amicus</span>
            </a>
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
