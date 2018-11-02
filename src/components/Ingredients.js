import Axios from 'axios'
import React, { Component } from 'react'
import { Grid, Thumbnail, Button, Row, Col } from 'react-bootstrap'
import '../styles/Ingredients.css'
import CartImage from '../static/cart.png'

class Ingredients extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingre: [],
    }
  }
  componentDidMount() {
    Axios.get('/ingredients')
      .then(res => {
        this.setState({ ingre: res.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            {this.state.ingre && this.state.ingre.length > 0
              ? this.state.ingre.map(item => {
                  return (
                    <Col xs={6} md={3}>
                      <Thumbnail id="box" src={item.imageUrl}>
                        <h3>{item.name}</h3>
                        <p>Description</p>
                        <p>
                          <h4>{item.price}฿</h4>
                          <Button id="add" bsStyle="success">
                            <img id="cart" src={CartImage} alt="cart" />
                            Add to cart
                          </Button>
                        </p>
                      </Thumbnail>
                    </Col>
                  )
                })
              : ''}
          </Row>
        </Grid>
        ;
      </div>
    )
  }
}

export default Ingredients
