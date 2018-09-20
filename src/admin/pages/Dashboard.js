import React, { Component } from 'react'

export class Dashboard extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Dashboard</div>
        <div className="panel-body">เดี๋ยวจะต้องดึงตรงนี้มาจาก database</div>
      </div>
    )
  }
}

export default Dashboard
