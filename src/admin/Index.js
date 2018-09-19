import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import '../styles/Admin.css'

export class Admin extends Component {
  render() {
    return (
      <div id="admin">
        <div className="wrapper">
            <Navbar />
            <Sidebar />

            {/* content */}
            <div className="content-wrapper">
                <section className="content-header">
                  <h1>
                      Page Header
                      <small>Optional description</small>
                  </h1>
                  <ol className="breadcrumb">
                      <li><a><i className="fa fa-dashboard"></i> Level</a></li>
                      <li className="active">Here</li>
                  </ol>
                </section>

                <section className="content container-fluid">
                  <this.props.children />
                </section>
            </div>

            <Footer />
        </div>
      </div>
    )
  }
}

export default Admin
