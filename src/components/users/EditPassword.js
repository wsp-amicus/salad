import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
import Axios from 'axios'

class EditPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username:this.props.user ? this.props.user.username : '',
      password: '',
      newPassword: '',
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
    this.setState({ loading: true })
    Axios.post('/users/changePassword', {      
      username: this.state.username,
      password: this.state.password,
      newPassword : this.state.newPassword
    })
      .then(res => {
        console.log('done')
        this.setState({ redirect: true, loading: false })
        this.showAlert('Password is already changed.', 'success')
      })
      .catch(err => {
        console.log('err')
        this.setState({ errormsg: err.response.data, loading: false })
        this.showAlert('Invalid password','danger')
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
        <h1 style={{ marginTop: '70px' }}>Change password</h1>
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
                type="password"
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
                type="password"
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
            className="btn btn-primary"
            onClick={() => {this.handleEdit()}}
            >
            Change password
          </button>
        </div>
        <hr />
      </div>
    )
  }
}

export default EditPassword
