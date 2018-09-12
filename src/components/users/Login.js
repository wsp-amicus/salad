import React, { Component } from 'react'
import '../../styles/Login.css'

export class Login extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center login-header'>Login</h1>
        <div id="login-form">
          <form>
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" id="username" placeholder="example@example.com"  autoComplete="username"/>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" id="password" placeholder="......" autoComplete="new-password"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <hr />
      </div>
    )
  }
}

export default Login
