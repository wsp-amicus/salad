import React, { Component } from 'react'
import '../styles/Custom.css'
import { Image } from 'react-bootstrap'
import bowl from '../static/bowl.png'

export default class Custom extends Component {
  render() {
    return (
      <div className="custom-container">
        <div className="bowl">
          <Image src={bowl} responsive width="700px" />
        </div>
      </div>
    )
  }
}
