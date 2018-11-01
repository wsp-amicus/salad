import React, { Component } from 'react'
import '../styles/Custom.css'
import { Image } from 'react-bootstrap'
import bowl from '../static/bowl.png'
import lettuce from '../static/lettuce.png'
import carrot from '../static/carrot.png'

export default class Custom extends Component {
  render() {
    return (
      <div className="custom-container">
        <h1>Create your own salad!</h1>
        <div className="bowl" id="bowl">
          <Image className="bowl" src={bowl} responsive width="700px" />
          <Image
            className="ingredient"
            src={lettuce}
            responsive
            width="70%"
            style={{ bottom: `15%`, left: `15%` }}
          />
          <Image
            className="ingredient"
            src={carrot}
            responsive
            width="40%"
            style={{ bottom: `10%`, left: `30%` }}
          />
        </div>
      </div>
    )
  }
}
