import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
import Axios from 'axios'

class EditPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      newPassword: '',
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
      password: this.state.hashPassword
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
        <h1 style={{ marginTop: '100px' }}>Edit user information</h1>
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
              <label>Old password</label>
              <input
                type="text"
                name="password"
                className="form-control"
                placeholder="Old password"
                onChange={this.handleInputChange.bind(this)}
                required
              />
            </div>

            <div className="form-group col-12 col-md-6">
              <label>New password</label>
              <input
                type="text"
                name="newPassword"
                className="form-control"
                placeholder="New password"
                onChange={this.handleInputChange.bind(this)}
                required
              />
            </div>
          </div>
        </form>
        <div style={{ height: '70px' }}>
          <button
            type="submit"
            className="btn btn-success"
            onClick={() => {this.handleEdit()}}
            >
            Submit
          </button>
        </div>
        <hr />
      </div>
    )
  }
}

export default EditPassword
