import React, { Component } from 'react'
import Axios from 'axios'

export class Register extends Component {

  componentDidMount() {
    Axios.get('/users').then((res) => console.log(res.data))
  }

  render() {
    return (
      <div className='container'>
        <h1>Register</h1>
        <form action="/users/create" method="post">
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">First name</label>
            <input type="text" className="form-control" id="firstname" placeholder="First Name" />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Last name</label>
            <input type="text" className="form-control" id="lastname" placeholder="Last Name" />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Username</label>
            <input type="text" className="form-control" id="username" placeholder="Username"  autoComplete="username"/>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" autoComplete="new-password"/>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirm password</label>
            <input type="password" className="form-control" id="password2" placeholder="Password" autoComplete="new-password"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <hr />
      </div>
    )
  }
}

export default Register
