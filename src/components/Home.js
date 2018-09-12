import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import { Roll } from 'react-reveal'
import { Fade } from 'react-bootstrap'
import cover from '../static/cover.jpg'
import '../styles/Home.css'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true,
      slogan: ''
    }
    this.changeSlogan = this.changeSlogan.bind(this)
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ open: !this.state.open }), 0);
  }

  componentDidUpdate() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if (!this.state.open)
        this.changeSlogan()
      this.setState({ open: !this.state.open })
    }, this.state.open ? 4000 : 500)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeSlogan() {
    const slogans = [
      'slogan1', 'slogan2', 'slogan3'
    ]
    const index = slogans.indexOf(this.state.slogan)
    this.setState({ slogan: slogans[(index + 1) % slogans.length] })
  }

  render() {
    return (
      <div className="home">
        <Parallax bgImage={cover} strength={500} style={{ height: this.props.height * 0.85 }}>
          <div className="cover" style={{ paddingTop: this.props.height * 0.3, paddingBottom: this.props.height * 0.4 }}>
            <h1>Amicus</h1>
            <Fade in={this.state.open}>
              <p>{this.state.slogan}</p>
            </Fade>
          </div>
        </Parallax>
        <div className="container promotion">
          <h1>Promotions</h1>
          <hr />
          <div className="flexwrap">
            <Roll left>
              <div className="shadow">
                <img
                  className="shadow"
                  src="https://i1.wp.com/www.sgdtips.com/wp-content/uploads/2015/11/KFC-Roast-Chicken-Salad-Meal-promo.jpg"
                  alt="example"
                />
              </div>
            </Roll>
            <Roll right>
              <div>
                <img
                  className="shadow"
                  src="https://s3-ap-southeast-1.amazonaws.com/s3.loopme.sg/img/newos/posts/d/14933_1QUh1xZNbf2hFN9V_.jpg"
                  alt="example"
                />
              </div>
            </Roll>
          </div>
        </div>
      </div>
    )
  }
}