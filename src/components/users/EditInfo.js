import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
import Axios from 'axios'

class EditInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: this.props.user ? this.props.user.firstName : '',
      lastName: this.props.user ? this.props.user.lastName : '',
      email: this.props.user ? this.props.user.email : '',
      username: this.props.user ? this.props.user.username : '',
      loading: false,
      alertMessage: '',
      alertStyle: 'danger',
      enable: false,
      alert: false
    }
    this.showAlert = this.showAlert.bind(this)
  }

  handleInputChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  showAlert(alertMessage, alertStyle) {
    clearTimeout(this.clearAlert)
    this.setState({
      alert: true,
      enable: true,
      alertMessage,
      alertStyle: alertStyle || 'danger'
    })
    this.clearAlert = setTimeout(() => this.setState({ alert: false }), 5000)
  }

  handleEdit = e => {
    this.showAlert('Profile is already edited.', 'success')
    this.setState({ loading: true })
    Axios.post('/users/update', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      username: this.state.username,
    })
      .then(res => {
        this.setState({ redirect: true, loading: false })
      })
      .catch(err => {
        this.setState({ errormsg: err.response.data, loading: false })
      })
  }

  render() {
    return (
      <div className="container">
        <Alert
          bsStyle={this.state.alertStyle}
          className="alert"
          style={{
            animation: `${
              this.state.alert ? 'fadeIn' : 'fadeOut'
            } 0.5s forwards`,
            display: `${this.state.enable ? 'block' : 'none'}`
          }}
        >
          {this.state.alertMessage}
        </Alert>
        <h1 style={{ marginTop: '70px' }}>Edit user information</h1>
        <hr />
        <form>
          {this.state.errormsg ? (
            <div className="alert alert-danger">{this.state.errormsg}</div>
          ) : null}

          <div className="row">
            <div className="form-group col-12 col-md-6">
              <label>Username</label>
              <div>{this.props.user ? this.props.user.username : ''}</div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12 col-md-6">
              <label>First name</label>
              <input
                name="firstName"
                type="text"
                className="form-control"
                id="firstname"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleInputChange.bind(this)}
                required
              />
            </div>

            <div className="form-group col-12 col-md-6">
              <label>Last name</label>
              <input
                name="lastName"
                type="text"
                className="form-control"
                id="lastname"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleInputChange.bind(this)}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12 col-md-6">
              <label>Email address</label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleInputChange.bind(this)}
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
          </div>
        </form>
        <div style={{ height: '70px' }}>
          <button
            type="submit"
            className="btn btn-success"
            onClick={() => this.handleEdit()}
          >
            Edit
          </button>
        </div>
        <hr />
      </div>
    )
  }
}

export default EditInfo
