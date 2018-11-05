import React, { Component } from "react";
import { observer } from "mobx-react";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import AddressFormTypeahead from "react-thailand-address-typeahead";
import { Store } from "../../store/product";
import CartImage from "../../static/cart.png";
import SalmonImage from "../../static/Salmon.jpg";
import "../../styles/Ingredients.css";
import "./checkout.css";
const _store = Store.getInstance();

class Checkout extends Component {
  getTotal(products) {
    let total = 0;
    products.forEach(product => {
      total += product.price;
    });
    return total;
  }

  getListComponent(products) {
    return products.map(product => {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid black",
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
          <h4 style={{ marginTop: "25px" }}>{product.price} ฿</h4>
        </div>
      );
    });
  }

  getMockSuggestion(lengths) {
    return lengths.map(l => {
      return (
        <div className="box-container" style={{ width: "200px" }}>
          <div className="image-container">
            <img
              className="fadeIn"
              id="box"
              src={SalmonImage}
              alt="ingredients"
              height="auto"
              width="auto"
            />
            <div className="button-container">
              <Button id="add-button" bsStyle="success">
                <img id="cart" src={CartImage} alt="cart" />
                Add
              </Button>
            </div>
          </div>
          <hr />
          <h3>Salmon</h3>
          <h4>Product</h4>
          <p>Salmon za 555+</p>
          <h4>99999 ฿</h4>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>Would you like anything else?</h1>

          <div style={{ display: "flex", width: "80%", margin: "auto" }}>
            {this.getMockSuggestion([{}, {}, {}])}
          </div>
        </div>
        <div
          style={{
            margin: "20px",
            padding: "20px",
            border: "1px solid black",
            borderRadius: "25px"
          }}
        >
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
            <h4>Price</h4>
          </div>
          {this.getListComponent([..._store.products])}
          <div style={{ textAlign: "right" }}>
            <h3>Total</h3>
            <h3>{this.getTotal(_store.products)} ฿</h3>
          </div>
        </div>
        <div
          style={{
            margin: "20px",
            padding: "20px",
            border: "1px solid black",
            borderRadius: "25px"
          }}
        >
          <h2>Derivery address</h2>
          <label>ที่อยู่</label>
          <FormGroup bsSize="large">
            <FormControl type="text" />
          </FormGroup>
          <AddressFormTypeahead
            onAddressSelected={addressObject => console.log(addressObject)}
          />
        </div>
        <div style={{ textAlign: "center", margin: "40px" }}>
          <Button bsStyle="primary" bsSize="large" style={{ width: "200px" }}>
            Order
          </Button>
        </div>
      </div>
    );
  }
}

export default observer(Checkout);
