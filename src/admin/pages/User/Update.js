import React, { Component } from 'react'
import queryString from 'query-string'
import axios from 'axios'
import Select from 'react-select';

const options = [
  { value: 0, label: 'User' },
  { value: 50, label: 'Read-only panel' },
  { value: 100, label: 'Admin' }
];

export class Update extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        _id: 'loading',
        firstName: 'loading',
        lastName: 'loading',
        email: 'loading',
        username: 'loading',
        password: 'loading',
        permission: 0
      },
      loaded: false,
      selectedOption: null,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const id = queryString.parse(window.location.search)._id
    console.log(id);
    if(!this.state.loaded) {
      axios.get('/users/find?_id=' + id)
      .then(
        (res) => { 
          const selectedPermission = options.filter((item) => item.value === res.data.permission)[0]
          this.setState({user:res.data, loaded: true, selectedOption: selectedPermission}) 
        }
      ).catch((err) => console.log(err))
    }
  }

  handleSelected = (selectedOption) => {
    this.setState({ selectedOption, user: { ...this.state.user, permission: selectedOption.value } })
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ user: { ...this.state.user, [name]: value } })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.user);
  }

  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          Edit
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-6">
              <label>id</label>
              <input className="form-control" value={this.state.user._id} readOnly/>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <label>First Name</label>
              <input name="firstName" className="form-control" value={this.state.user.firstName} onChange={this.handleChange}/>
            </div>
            <div className="col-12 col-md-6">
              <label>Last Name</label>
              <input name="lastName" className="form-control" value={this.state.user.lastName} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>Email</label>
              <input className="form-control" value={this.state.user.email} readOnly/>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <label>Username</label>
              <input className="form-control" value={this.state.user.username} readOnly/>
            </div>
            <div className="col-12 col-md-6">
              <label>Password # need to gen when change</label>
              <input name="password" className="form-control" value={this.state.user.password} onChange={this.handleChange}/>
            </div>
          </div>
          <h3>Permission</h3>
          <div className="row">
            <div className="col-md-6">
            <Select
                value={this.state.selectedOption}
                onChange={this.handleSelected}
                options={options}
              />
            </div>
          </div>

        </div>
        <div className="panel-footer">
          <button className="btn btn-success" onClick={this.handleSubmit.bind(this)}>SAVE</button>
        </div>
      </div>
    )
  }
}

export default Update
