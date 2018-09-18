import React, { Component } from 'react'
import { genSalt, hash } from 'bcryptjs'
import { Redirect } from 'react-router-dom'
import Axios from 'axios'

export class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      password2: '',
      hashPassword: '',
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      avaliable: false
    }
  }

  handleInputChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })

    if ((name === 'password' && this.state.password2 === value) ||
      (name === 'password2' && this.state.password === value)) {
      genSalt(10, (err, salt) => {
        if (err)
          console.log(err)
        else
          hash(value, salt, (err, hash) => {
            if (err)
              console.log(err)
            else
              this.setState({ hashPassword: hash, avaliable: true })
          })
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    Axios.post('/users/register', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      username: this.state.username,
      password: this.state.hashPassword
    }).then((res) => {
      switch (res.data.header) {
        case 200: this.setState({ redirect: true }); break;
        case 401: this.setState({ errormsg: res.data.body }); break;
        default:
      }
    }).catch((err) => console.log(err))
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/users/login?username=${this.state.username}`} />
    }
    return (
      <div className='container'>
        <h1>Register</h1>
        <hr />
        <form>
          {this.state.errormsg ? <div className="alert alert-danger">{this.state.errormsg}</div> : null}

          <div className="row">
            <div className="form-group col-12 col-md-6">
              <label>First name</label>
              <input name="firstName" type="text" className="form-control" id="firstname" placeholder="First Name" value={this.state.firstName} onChange={this.handleInputChange.bind(this)} required />
            </div>

            <div className="form-group col-12 col-md-6">
              <label>Last name</label>
              <input name="lastName" type="text" className="form-control" id="lastname" placeholder="Last Name" value={this.state.lastName} onChange={this.handleInputChange.bind(this)} required />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12 col-md-6">
              <label>Email address</label>
              <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange.bind(this)} required />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12 col-md-6">
              <label>Username</label>
              <input name="username" type="text" className="form-control" id="username" placeholder="Username" autoComplete="username" value={this.state.username} onChange={this.handleInputChange.bind(this)} required />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12 col-md-6">
              <label>Password</label>
              <input name="password" type="password" className="form-control" placeholder="Password" autoComplete="new-password" value={this.state.password} onChange={this.handleInputChange.bind(this)} />
            </div>
            <div className="form-group col-12 col-md-6">
              <label>Confirm password</label>
              <input name="password2" type="password" className="form-control" placeholder="Password" autoComplete="new-password" value={this.state.password2} onChange={this.handleInputChange.bind(this)} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit.bind(this)} disabled={!this.state.avaliable}>Submit</button>
        </form>
        <hr />
      </div>
    )
  }
}

export default Register
