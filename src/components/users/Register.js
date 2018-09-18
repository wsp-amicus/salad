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

  handleFirstNameChange(e) {
    this.setState({firstName: e.target.value})
  }

  handleLastNameChange(e) {
    this.setState({lastName: e.target.value})
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value})
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    Axios.post('/users/register',{
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      username: this.state.username,
      password: this.state.hashPassword
    }).then((res) => {
      switch(res.data.header) {
        case 200: this.setState({redirect: true}); break;
        case 401: this.setState({errormsg: res.data.body}); break;
        default:
      }
    }).catch((err) => console.log(err))
  } 

  render() {
    if(this.state.redirect) {
      return <Redirect to={`/users/login?username=${this.state.username}`} />
    }
    return (
      <div className='container'>
        <h1>Register</h1>
        <hr />
        <form>
          { this.state.errormsg ? <div className="alert alert-danger">{this.state.errormsg}</div>: null}
          
          <div className="row">
            <div className="form-group col-12 col-md-6">
              <label>First name</label>
              <input name="firstName" type="text" className="form-control" id="firstname" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstNameChange.bind(this)} required/>
            </div>

            <div className="form-group col-12 col-md-6">
              <label>Last name</label>
              <input name="lastName" type="text" className="form-control" id="lastname" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastNameChange.bind(this)} required/>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12 col-md-6">
              <label>Email address</label>
              <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange.bind(this)} required/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12 col-md-6">
              <label>Username</label>
              <input name="username" type="text" className="form-control" id="username" placeholder="Username"  autoComplete="username" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} required/>
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
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit.bind(this)} disabled={!this.state.avaliable}>Submit</button>

          <input name="password" type="hidden" value={this.state.hashPassword} />
        </form>
        <hr />
      </div>
    )
  }
}

export default Register
