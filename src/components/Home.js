import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import cover from '../static/cover.jpg'
import '../styles/Home.css'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (this.state.width === 0 && this.state.height === 0)
      this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div className="home">
        <Parallax bgImage={cover} strength={500} style={{ height: this.state.height * 0.8 }}>
          <div className="cover" style={{ paddingTop: this.state.height * 0.28, paddingBottom: this.state.height * 0.32 }}>
            <h1>Amicus</h1>
            <p>Salad Salad Salad</p>
          </div>
        </Parallax>
        <div className="container promotion">
          <h1>Promotions</h1>
          <hr />
          <div className="flexwrap">
            <div className="shadow">
              <img
                className="shadow"
                src="https://i1.wp.com/www.sgdtips.com/wp-content/uploads/2015/11/KFC-Roast-Chicken-Salad-Meal-promo.jpg"
                alt="example"
              />
            </div>
            <div>
              <img
                className="shadow"
                src="https://s3-ap-southeast-1.amazonaws.com/s3.loopme.sg/img/newos/posts/d/14933_1QUh1xZNbf2hFN9V_.jpg"
                alt="example"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}