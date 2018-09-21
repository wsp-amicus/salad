import React, { Component } from 'react'
import axios from 'axios'

export class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      dashboard: {
        header: 'loading',
        body: 'loading'
      }
    }
  }
  componentDidMount() {
    axios.get('/dashboard/index').then((res) => {
      this.setState({dashboard: res.data})
    }).catch(err => console.log(err))
  }

  save() {
    axios.put('/dashboard/update',{
      header: this.state.dashboard.header,
      body: this.state.dashboard.body
    }).then((res) => {
      this.setState({editing: false})
    }).catch(err=> console.log(err))
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({dashboard: {
      ...this.state.dashboard,
      [name]: value
    }})
  }

  render() {
    return (
      <div>
        {
          this.state.editing ? 
          <div className="panel panel-primary">
              <div className="panel-heading"><input name="header" onChange={this.handleChange.bind(this)} value={this.state.dashboard.header} style={{color:'black',width: '100%'}}/></div>
              <div className="panel-body">
                  <textarea name="body"
                    onChange={this.handleChange.bind(this)}
                    value={this.state.dashboard.body}
                    style={{ width: '100%' }}/>
              </div>
              <div className="panel-footer text-right">
                <button className="btn btn-success" onClick={this.save.bind(this)}>Save</button>
                <button className="btn btn-primary" onClick={()=> this.setState({editing:true})}>Edit</button>
              </div>
          </div>
          :
          <div className="panel panel-primary">
              <div className="panel-heading">{this.state.dashboard.header}</div>
              <div className="panel-body">{this.state.dashboard.body}</div>
              <div className="panel-footer text-right"><button className="btn btn-primary" onClick={()=> this.setState({editing:true})}>Edit</button></div>
          </div>
        }
      </div>
    )
  }
}

export default Dashboard
