import React, { Component } from 'react'
import '../styles/Custom.css'
import Ingredient from '../components/Ingredients'

export default class Custom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    setTimeout(function () {
      this.setState({ loading: false })
    }.bind(this), 2000)
  }

  render() {
    return (
      <div className="custom-container">
        <h1>Create your own salad!</h1>
        <Ingredient loading={this.state.loading} user={this.props.user} />
      </div>
    )
  }
}
