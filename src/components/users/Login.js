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
      password: '',
      loading: false,
    }
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true })
    Axios.post('/users/login', {
      username: this.state.username,
      password: this.state.password
    }).then((res) => {
      Cookies.set('amicus-salad-uid', res.data._id, { expires: 1 })
      this.setState({ redirect: true, loading: false })
      this.props.verifyLogin()
    }).catch((err) => {
      this.setState({ error: err.response.data, loading: false })
    })
  }

  render() {
    if (this.state.redirect && window.location.pathname === '/users/login') {
      return <Redirect to={'/'} />
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
              <input type="text" className="form-control" id="username" placeholder="example" autoComplete="username" value={this.state.username} name="username" onChange={this.handleInputChange.bind(this)} />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" id="password" placeholder="......" autoComplete="new-password" value={this.state.password} name="password" onChange={this.handleInputChange.bind(this)} />
            </div>
            {!this.state.loading ? <button type="submit" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Submit</button> : <div className="loader"></div>}
          </form>
        </div>
        <hr />
      </div>
    )
  }
}

export default Login
