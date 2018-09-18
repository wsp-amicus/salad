import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
    <div className='bar wrapper'>
        <nav className={`navbar navbar-inverse`}>
            <div className="container">
              <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className="presentation login ">
                </li>
                <li className="presentation login ">
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
