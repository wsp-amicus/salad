import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Username</label>
            <input type="text" className="form-control" id="username" placeholder="Username"  autoComplete="username"/>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" autoComplete="new-password"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <hr />
      </div>
    )
  }
}

export default Login
