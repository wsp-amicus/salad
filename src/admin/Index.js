import React, { Component } from 'react'
import { BrowserRouter as Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import '../styles/Admin.css'

export class Index extends Component {
  render() {
    return (
      <div id="admin">
        <Navbar />

        <div className="row">
            <div className="col-12 col-md-2">
                menuuu
            </div>
            <div className="col-12 col-md-10">
                Bodyyyy
            </div>
        </div>


        <div className="row">
            <div className="col-12 col-md-2">
                menuuu
            </div>
            <div className="col-12 col-md-10">
                Bodyyyy
            </div>
        </div>


        <div className="row">
            <div className="col-12 col-md-2">
                menuuu
            </div>
            <div className="col-12 col-md-10">
                Bodyyyy
            </div>
        </div>

        <Route to="/admin/test" component={this}/>
      </div>
    )
  }
}

export default Index
