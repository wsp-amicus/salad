import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import '../styles/Footer.css'

export default class Home extends Component {
  render() {
    const line = (
      <Col md={12}>
        <div className="outset" />
      </Col>
    )
    return (
      <div className="container font textcolor bgcolor padding">
        <Grid>
          <Row className="show-grid">
            <Col md={3}>
              <strong>Amicus</strong>
              <Row>{line}</Row>
              <Row>
                <Col md={12}>
                  <p>For salad lover from salad lover</p>
                </Col>
              </Row>
            </Col>
            <Col md={3}>
              <strong>Product</strong>
              <Row>{line}</Row>
              <Row>
                <Col md={12}>
                  <p>Salad</p>
                </Col>
              </Row>
            </Col>
            <Col md={3}>
              <strong>Useful Link</strong>
              <Row>{line}</Row>
              <Row>
                <Col md={12}>
                  <p>Test</p>
                </Col>
              </Row>
            </Col>
            <Col md={3}>
              <strong>Contact</strong>
              <Row>{line}</Row>
              <Row>
                <Col md={12}>
                  <p>gear2727@gmail.com</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
