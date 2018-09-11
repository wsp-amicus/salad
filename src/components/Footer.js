import React, { Component } from 'react'
import {Grid,Row,Col} from 'react-bootstrap'
import './styles/Footer.css'


export default class Home extends Component {
    box() {
      return (
        <Col  md={3}>
          <div className="outset"></div>
        </Col>
      )
    }
    render() {
        return (
          <div className="container font">    
          <Grid>
            <Row className="show-grid">
              <Col  md={3}>
              <p>Amicus</p>
              </Col>
              <Col  md={3}>
              <p>Product</p>
              </Col>
              <Col md={3}>
                <p>Useful Link</p>
              </Col>
              <Col md={3}>
                <p>Contact</p>
              </Col>
            </Row>
            <Row >
              <Col  md={3}>
                <div className="outset"></div>
              </Col>
              <Col  md={3}>
                <div className="outset"></div>
              </Col>
              <Col  md={3}>
                <div className="outset"></div>
              </Col>
              <Col  md={3}>
                <div className="outset"></div>
              </Col>
            </Row>
          </Grid>
          </div>
      )
  }
}