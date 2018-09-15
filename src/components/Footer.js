import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import '../styles/Footer.css'

export default class Home extends Component {
  render() {
    const line = (
      <Col md={3}>
        <div className="outset"></div>
      </Col>
    )
    return (
      <div className="container font textcolor bgcolor padding">
        <Grid>
          <Row className="show-grid">
            <Col md={3}>
              <strong>Amicus</strong>
            </Col>
            <Col md={3}>
              <strong>Product</strong>
            </Col>
            <Col md={3}>
              <strong>Useful Link</strong>
            </Col>
            <Col md={3}>
              <strong>Contact</strong>
            </Col>
          </Row>
          <Row >
            {line}{line}{line}{line}
          </Row>
          <Row>
          <Col md={3}>
              <p>For salad lover from salad lover</p>
          </Col>
          <Col md={3}>
              <p>Salad</p>
          </Col>
          <Col md={3}>
              <p>Test</p>
            </Col>
          <Col md={3}>
              <p>Gear@gmail.com</p>
          </Col>
          </Row>
        </Grid>
        <Grid>
        <Row className="show-grid">
            <div className="center padding">
              &copy;{(new Date().getFullYear())} copyright: Amicus 
            </div>
          </Row>
        </Grid>
      </div>
    )
  }
}