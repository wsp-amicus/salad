import React, { Component } from "react";
import { Row, Button, Image, Alert } from "react-bootstrap";
import Loader from "react-loader-spinner";
import axios from "axios";
import { addProduct2Cart } from "../../store/product";
import "../../styles/Menu.css";
import CartImage from "../../static/cart.png";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      queryLoading: true,
      loading: {},
      alert: false,
      enable: false
    };
  }

  componentWillMount() {
    axios
      .get("/products")
      .then(res => {
        const loading = {};
        res.data.forEach(item => (loading[item.name] = true));
        this.setState({ products: res.data, queryLoading: false, loading });
      })
      .catch(err => console.log(err));
  }

  addProduct2Cart(product) {
    addProduct2Cart(product);
  }

  showAlert = () => {
    this.setState({ alert: true, enable: true });
    setTimeout(() => this.setState({ alert: false }), 5000);
  };

  render() {
    let _products = this.state.products.map(product => {
      const _ingredients = product.ingredients
        ? product.ingredients.reduce(
            (prev, cur) => (prev ? `${prev}, ${cur}` : cur),
            ""
          )
        : "";
      return (
        <div className="background product-center fadeIn">
          <Alert
            bsStyle="danger"
            className="alert"
            style={{
              animation: `${
                this.state.alert ? "fadeIn" : "fadeOut"
              } 0.5s forwards`,
              display: `${this.state.enable ? "block" : "none"}`
            }}
          >
            Please login
          </Alert>
          <div className="MenuImage">
            <div
              style={{
                minHeight: "200px",
                minWidth: "200px",
                display: `${
                  this.state.loading[product.name] ? "flex" : "none"
                }`,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Loader
                type="TailSpin"
                color="#11ad3d"
                height={150}
                width={150}
              />
            </div>
            <Image
              src={product.imageUrl ? product.imageUrl[0] : ""}
              rounded
              responsive
              style={{
                display: `${
                  !this.state.loading[product.name] ? "block" : "none"
                }`
              }}
              onLoad={() =>
                this.setState({
                  loading: {
                    ...this.state.loading,
                    [product.name]: false
                  }
                })
              }
            />
          </div>
          <Row className="text product-name">
            <h3>{product.name}</h3>
            <hr />
          </Row>
          <Row className="text">
            <h4>{product.description}</h4>
          </Row>
          <Row className="text">
            <p>{_ingredients}</p>
          </Row>
          <Row>
            <Button
              bsStyle="success"
              className="button"
              onClick={() => {
                if (this.props.user) addProduct2Cart(product);
                else this.showAlert();
              }}
            >
              <img id="cart" src={CartImage} alt="cart" />
              {product.price} ฿
            </Button>
          </Row>
        </div>
      );
    });
    return this.state.queryLoading ? (
      <div
        style={{ textAlign: "center", minHeight: "200px", minWidth: "200px" }}
      >
        <Loader type="ThreeDots" color="#11ad3d" height={140} width={140} />
        <h3>Amicus Loading...</h3>
      </div>
    ) : (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          paddingLeft: "10%",
          paddingRight: "10%"
        }}
      >
        {_products}
      </div>
    );
  }
}

export default Menu;
