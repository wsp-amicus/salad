import React, { Component } from 'react'
import transparent_logo from '../static/small_transparent_logo.png'

class Loading extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'black', width: '100%', height: '100vh' }}>
        <div className="center-on-screen">
          <img
            src={transparent_logo}
            alt="logo"
            style={{ width: '100%', height: 'auto' }}
          />
          <div
            className="text-center loading-animate"
            style={{ color: 'white' }}
          >
            Loading . . .
          </div>
        </div>
      </div>
    )
  }
}

export default Loading
