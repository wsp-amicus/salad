import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import '../styles/Footer.css'

export default class Home extends Component {
  render() {
    return (
      <div className="container font copyright">
        <Grid>
          <Row className="show-grid">
            <div className="center">
              &copy;{' '}
              {new Date().getFullYear()} Copyright: Amicus Co., Ltd. All rights reserved
            </div>
          </Row>
        </Grid>
      </div>
    )
  }
}
