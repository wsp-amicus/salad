import React, { Component } from "react";
import { observer } from "mobx-react";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import InputAddress from "react-thailand-address-autocomplete";
import { Store } from "../../store/product";
import CartImage from "../../static/cart.png";
import { addProduct2Cart } from "../../store/product";
import "../../styles/Ingredients.css";
import "./checkout.css";
import axios from "axios";
const _store = Store.getInstance();

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subdistrict: "",
      district: "",
      province: "",
      zipcode: "",
      products: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentWillMount() {
    axios
      .get("/products")
      .then(res => this.setState({ products: res.data, loading: false }))
      .catch(err => console.log(err));
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addProduct2Cart(product) {
    addProduct2Cart(product);
  }

  onSelect(fullAddress) {
    const { subdistrict, district, province, zipcode } = fullAddress;
    this.setState({
      subdistrict,
      district,
      province,
      zipcode
    });
  }

  getTotal(products) {
    let price = 0;
    products.forEach(product => (price += product.price));
    return price;
  }

  getIngredientsString(ingredients) {
    const counts = {}
    ingredients.forEach(item => {
      if (!counts[item.name]) counts[item.name] = 0
      counts[item.name] += 1
    })
    console.log(counts)
    const keys = Object.keys(counts)
    return keys.reduce((prev, cur) => {
      return `${counts[prev] && counts[prev] > 1 ? prev + ' x ' + counts[prev] : prev}, 
      ${counts[cur] && counts[cur] > 1 ? cur + ' x ' + counts[cur] : cur}`
    })
  }

  getListComponent(products) {
    return products.map(product => {
      return (
        <div
          key={product.name}
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "5px",
            padding: "5px 20px",
            margin: "10px"
          }}
        >
          <img
            src={product.imageUrl}
            style={{ width: "100px", height: "100%" }}
            alt="product"
          />
          <h4 style={{ marginTop: "25px" }}>{product.name}</h4>
          <h4 style={{ marginTop: "25px" }}>{this.getIngredientsString(product.ingredients)}</h4>
          <h4 style={{ marginTop: "25px" }}>{product.price} ฿</h4>
        </div>
      );
    });
  }

  getSuggestProduct(products) {
    return products.map(product => {
      return (
        <div
          key={product.name}
          className="box-container"
          style={{ width: "250px" }}
        >
          <div className="image-container">
            <img
              className="fadeIn"
              id="box"
              src={product.imageUrl[0]}
              alt="ingredients"
              height="auto"
              width="auto"
            />
            <div className="button-container">
              <Button
                id="add-button"
                bsStyle="success"
                onClick={() => this.addProduct2Cart(product)}
              >
                <img id="cart" src={CartImage} alt="cart" />
                Add
              </Button>
            </div>
          </div>
          <hr />
          <h3>{product.name}</h3>
          <h4>{product.price} ฿</h4>
        </div>
      );
    });
  }

  render() {
    const _products = this.state.products.slice(0, 3);
    return (
      <div>
        <div style={{ textAlign: "center", marginTop: "130px" }}>
          <h1>Checkout</h1>
        </div>
        <div style={{ margin: "20px", padding: "20px" }}>
          <h2>Order Review</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid black",
              padding: "0px 20px",
              margin: "10px",
              background: "rgba(0,0,0,0.8)",
              color: "white"
            }}
          >
            <h4>Image</h4>
            <h4>Name</h4>
            <h4>Ingredients</h4>
            <h4>Price</h4>
          </div>
          {this.getListComponent(_store.products)}
          <div style={{ textAlign: "right" }}>
            <h3>Total</h3>
            <h3>{this.getTotal(_store.products)} ฿</h3>
          </div>
        </div>
        <div style={{ margin: "20px", padding: "20px", borderRadius: "25px" }}>
          <h2>Derivery address</h2>
          <FormGroup
            bsSize="large"
            className="address"
            style={{ margin: "0 20% 0 20%" }}
          >
            <label>Address</label>
            <FormControl
              type="text"
              style={{ height: "37px", color: "black" }}
            />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div>
                <label>Sub-district</label>
                <div className="input-div">
                  <InputAddress
                    address="subdistrict"
                    value={this.state.subdistrict}
                    onChange={this.onChange}
                    onSelect={this.onSelect}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="gear">
                <label>District</label>
                <div className="input-div">
                  <InputAddress
                    address="district"
                    value={this.state.district}
                    onChange={this.onChange}
                    onSelect={this.onSelect}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div>
                <label>Province</label>
                <div className="input-div">
                  <InputAddress
                    address="province"
                    value={this.state.province}
                    onChange={this.onChange}
                    onSelect={this.onSelect}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="gear">
                <label>Postal code</label>
                <div className="input-div">
                  <InputAddress
                    address="zipcode"
                    value={this.state.zipcode}
                    onChange={this.onChange}
                    onSelect={this.onSelect}
                    style={{ width: "100" }}
                  />
                </div>
              </div>
            </div>
          </FormGroup>
        </div>
        <div style={{ textAlign: "center", margin: "40px" }}>
          <Button bsStyle="primary" bsSize="large" style={{ width: "200px" }}>
            Order
          </Button>
        </div>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Would you like anything else?</h1>
          <div style={{ display: "flex", width: "80%", margin: "auto" }}>
            {this.getSuggestProduct(_products)}
          </div>
        </div>
      </div>
    );
  }
}

export default observer(Checkout);
