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
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div className="home">
        <Parallax bgImage={cover} strength={500} style={{ height: this.state.height * 0.7 }}>
          <div className="cover" style={{ paddingTop: this.state.height * 0.28, paddingBottom: this.state.height * 0.28 }}>
            Amicus
          </div>
        </Parallax>
        <div style={{ height: '1000px' }}>

        </div>
      </div>
    )
  }
}