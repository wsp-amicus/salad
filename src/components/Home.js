import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import { Roll } from 'react-reveal'
import { Fade, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import cover from '../static/cover.jpg'
import '../styles/Home.css'

const slogans = ['Custom Your Owns.', 'More Than Just a Salad.', 'Salad Evolution.']

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true,
      slogan: slogans[0],
    }
    this.changeSlogan = this.changeSlogan.bind(this)
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ open: !this.state.open }), 4000)
  }

  componentDidUpdate() {
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      if (!this.state.open) this.changeSlogan()
      this.setState({ open: !this.state.open })
    }, this.state.open ? 4000 : 500)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  changeSlogan() {
    const index = slogans.indexOf(this.state.slogan)
    this.setState({ slogan: slogans[(index + 1) % slogans.length] })
  }

  getMenus = (image, button, link) => {
    return (
      <div style={{
        overflow: 'hidden',
        width: '50vw',
        height: '700px',
        background: `url('${image}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div style={{
          height: `100%`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0, 0, 0, 0.3)'
        }}>
          <Link to={link}>
            <Button bsStyle={button.color} style={{
              fontSize: '25px',
              padding: '10px 20px',
            }}>{button.text}</Button>
          </Link>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="home">
        <Parallax bgImage={cover} strength={500} style={{ height: this.props.height * 0.85 }}>
          <div
            className="cover"
            style={{
              paddingTop: this.props.height * 0.3,
              paddingBottom: this.props.height * 0.4,
            }}
          >
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
        <div className="home-menu">
          {this.getMenus('https://media-cdn.tripadvisor.com/media/photo-s/0c/dd/7f/0a/we-have-many-salads-to.jpg', { text: 'See our Menus', color: 'primary' }, '/menu')}
          {this.getMenus('https://www.jessicagavin.com/wp-content/uploads/2016/05/salad-ingredients-with-homemade-lemon-basil-dressing.jpg', { text: 'Custom your own Salad', color: 'primary' }, '/custom')}
        </div>
      </div>
    )
  }
}
