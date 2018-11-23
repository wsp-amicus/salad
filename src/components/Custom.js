import React, { Component } from 'react'
import '../styles/Custom.css'
import Ingredient from '../components/Ingredients'

export default class Custom extends Component {
  render() {
    return (
      <div className="custom-container">
        <h1>Create your own salad!</h1>
        <Ingredient user={this.props.user} />
      </div>
    )
  }
}
