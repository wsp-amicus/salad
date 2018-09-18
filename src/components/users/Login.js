import React, { Component } from 'react'
import Axios from 'axios'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import queryString from 'query-string'
import '../../styles/Login.css'

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: queryString.parse(window.location.search).username || '',
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
    Axios.post('/users/login', {
      username: this.state.username,
      password: this.state.password
    }).then((res) => {
      switch(res.data.header) {
        case 401: this.setState({error: res.data.body}); break;

        case 200: Cookies.set('amicus-salad-uid', res.data.body, { expires: 1 })
                  this.setState({redirect: true})
                  this.props.verifyLogin()
                  break;

        default: console.log("error when sending data")
      }
    }).catch((err)=> {
      console.log(err)
    })
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to={'/'}/>
    }
    const username = queryString.parse(window.location.search).username
    return (
      <div className='container'>
        {
          username ?
            <div className="alert alert-success text-center">You have successfully registered</div>
          :
            null
        }
        <h1 className='text-center login-header'>Login</h1>
        <div id="login-form">
          {
            !this.state.error ? 
              null
            :
              <div className={`alert alert-danger warning`}>{this.state.error}</div>
          }
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
