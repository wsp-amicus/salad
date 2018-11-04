import React, { Component } from 'react'
import '../styles/Custom.css'
import { Image } from 'react-bootstrap'
import bowl from '../static/bowl.png'
import lettuce from '../static/lettuce.png'
import carrot from '../static/carrot.png'
import Ingredient from '../components/Ingredients'
import Loader from 'react-loader-spinner'

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
        <div style={{ minHeight: '430px' }}>
          {this.state.loading ? (
            <div style={{ paddingTop: '120px' }}>
              <Loader type="ThreeDots" color="#11ad3d" height={140} width={140} />
            </div>
          ) :
            <div className="bowl fadeIn" id="bowl">
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
                style={{ bottom: `15%`, left: `30%` }}
              />
            </div>
          }
        </div>
        <Ingredient loading={this.state.loading} />
      </div>
    )
  }
}
