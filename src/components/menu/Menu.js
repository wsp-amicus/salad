import React, { Component } from "react";
import { addProduct2Cart } from "../../store/product";

class Menu extends Component {
  addProduct2Cart() {
    const product = {
      name: "hello"
    };
    addProduct2Cart(product);
  }

  render() {
    return (
      <div>
        <button onClick={this.addProduct2Cart}>Add to cart</button>
      </div>
    );
  }
}

export default Menu
