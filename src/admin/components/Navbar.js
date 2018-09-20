import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand">Amicus</a>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li className='presentation login'><a href="/">View page as User</a></li>
                    <li className='presentation login'>
                        <a><i className="fas fa-user" style={{ marginRight: '10px' }}></i>username</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
  }
}

export default Navbar
