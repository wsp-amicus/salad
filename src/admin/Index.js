import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import '../styles/Admin.css'

export class Admin extends Component {
  render() {
    return (
      <div id="admin">
        <div className="row">
          <div className="col-md-12">
            <Navbar user={this.props.user} />
          </div>
          <div className="col-md-3">
            <Sidebar />
          </div>
          {/* content */}
          <div className="col-md-9">
            <section className="content container-fluid">
              <this.props.children />
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default Admin
