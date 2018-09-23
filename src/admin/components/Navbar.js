import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/admin" className="navbar-brand" style={{ fontSize: '4rem' }}>Amicus</Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li className='presentation login'><a href="/">View page as User</a></li>
                        <li className='presentation login'>
                            <a><i className="fas fa-user" style={{ marginRight: '10px' }}></i>{this.props.user ? this.props.user.username : 'loading'}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
