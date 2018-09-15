import React, { Component } from 'react'
import { genSalt, hash } from 'bcryptjs'
import Axios from 'axios'
import '../../styles/Login.css'

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value })
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    genSalt(10, (err, salt) => {
        hash(this.state.password, salt, (err, hash) => {
          Axios.post('/users/login', {
            username: this.state.username,
            password: hash
          }).then((res) => {
            switch(res.data.header) {
              case 401: console.log("wrong password"); break;
              case 200: console.log("you are now login to system"); break;
              default: console.log("error when sending data")
            }
          }).catch((err)=> {
            console.log(err)
          })
        });
    });
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center login-header'>Login</h1>
        <div id="login-form">
          <form>
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" id="username" placeholder="example" autoComplete="username" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" id="password" placeholder="......" autoComplete="new-password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Submit</button>
          </form>
        </div>
        <hr />
      </div>
    )
  }
}

export default Login
