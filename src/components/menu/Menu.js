import React, { Component } from "react";
import { addProduct2Cart } from "../../store/product";
import { Grid, Row, Col } from 'react-bootstrap'
import axios from "axios";
import '../../styles/Menu.css'



class Menu extends Component {

  constructor(props) {
    super(props)
    this.state = { products: [] }
  }

  addProduct2Cart() {
    const product = {
      name: "hello"
    };
    addProduct2Cart(product);
  }
  componentWillMount() {
    axios.get("/products")
      .then(res => this.setState({ products: res.data }))
      .catch(err => console.log(err));
  }


  render() {
    let _products = this.state.products.map(product => {
      console.log(product)
      return  (
        <div className="blackground product-center">
          <Grid>
            <Row className="show-grid">
              <Col md={5}>
                <div>
                  <img className="picture" alt="demo" src="" />
                </div>
              </Col>
              <Col md={7} >
                <Row className="text">
                  <h2>{product.name}</h2>
                </Row>
                <Row className="text">
                  <ul>
                    <li>Fired Chicken</li>
                    <li>Lettuce</li>
                    <li>Carrot</li>
                    <li>Tomato</li>
                  </ul>
                </Row>
                <Row>
                  <div>
                    <button className="button" onClick={this.addProduct2Cart}>Add to cart</button>
                  </div>
                </Row>
              </Col>
            </Row>
          </Grid>
        </div>
    )
    })
    return (
      <div >
        {_products}
      </div>
    );
  }
}

export default Menu
