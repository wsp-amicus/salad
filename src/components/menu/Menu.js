import React, { Component } from "react";
import { Grid, Row, Col, Button, Image } from "react-bootstrap";
import Loader from "react-loader-spinner";
import axios from "axios";
import { addProduct2Cart } from "../../store/product";
import "../../styles/Menu.css";
import CartImage from "../../static/cart.png";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], loading: true };
  }

  componentWillMount() {
    axios
      .get("/products")
      .then(res => this.setState({ products: res.data, loading: false }))
      .catch(err => console.log(err));
  }

  addProduct2Cart(product) {
    addProduct2Cart(product);
  }

  render() {
    let _products = this.state.products.map(product => {
      const _ingredients = product.ingredients.map(ing => <li>{ing.label}</li>);
      return (
        <div className="blackground product-center fadeIn">
          <Row className="show-grid">
            <Col md={5}>
              <div>
                <Image
                  src={product.imageUrl ? product.imageUrl[0] : ""}
                  rounded
                  responsive
                />
              </div>
            </Col>
            <Col md={7}>
              <Row className="text">
                <h1>{product.name}</h1>
              </Row>
              <Row className="text">
                <h4>{product.description}</h4>
              </Row>
              <Row className="text">
                <ul>{_ingredients}</ul>
              </Row>
              <Row>
                <Button
                  bsStyle="success"
                  className="button"
                  onClick={() => this.addProduct2Cart(product)}
                >
                  <img id="cart" src={CartImage} alt="cart" />
                  {product.price} ฿
                </Button>
              </Row>
            </Col>
          </Row>
        </div>
      );
    });
    return this.state.loading ? (
      <div
        style={{ textAlign: "center", minHeight: "200px", minWidth: "200px" }}
      >
        <Loader type="ThreeDots" color="#11ad3d" height={140} width={140} />
        <h3>Amicus Loading...</h3>
      </div>
    ) : (
      <div>{_products}</div>
    );
  }
}

export default Menu;
