import React, { Component } from 'react'
import { genSalt, hash } from 'bcryptjs'

export class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      password2: '',
      hashPassword: '',
      avaliable: false,
    }
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value})

    if(this.state.password2 === e.target.value) {
      genSalt(10, (err, salt) => {
          hash(this.state.password2, salt, (err, hash) => {
            this.setState({hashPassword: hash, avaliable: true})
          });
      });
    }
  }

  handlePassword2Change(e) {
    let confirmPassword = e.target.value
    this.setState({password2: confirmPassword})

    if(confirmPassword === this.state.password) {
      genSalt(10, (err, salt) => {
          hash(confirmPassword, salt, (err, hash) => {
            this.setState({hashPassword: hash, avaliable: true})
          });
      });
    }
  }

  render() {
    return (
      <div className='container'>
        <h1>Register</h1>
        <hr />
        <form action="/users/create" method="post">
          <div className="row">
            <div className="form-group col-12 col-md-6">
              <label>First name</label>
              <input name="firstName" type="text" className="form-control" id="firstname" placeholder="First Name" required/>
            </div>

            <div className="form-group col-12 col-md-6">
              <label>Last name</label>
              <input name="lastName" type="text" className="form-control" id="lastname" placeholder="Last Name" required/>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12 col-md-6">
              <label>Email address</label>
              <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12 col-md-6">
              <label>Username</label>
              <input name="username" type="text" className="form-control" id="username" placeholder="Username"  autoComplete="username" required/>
            </div>
          </div>
          <div className="row">  
            <div className="form-group col-12 col-md-6">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password" autoComplete="new-password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
            </div>
            <div className="form-group col-12 col-md-6">
              <label>Confirm password</label>
              <input type="password" className="form-control" placeholder="Password" autoComplete="new-password" value={this.state.password2} onChange={this.handlePassword2Change.bind(this)}/>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" disabled={!this.state.avaliable}>Submit</button>

          <input name="password" type="hidden" value={this.state.hashPassword} />
        </form>
        <hr />
      </div>
    )
  }
}

export default Register
