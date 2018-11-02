import React, { Component } from "react";
import { addProduct } from "../../store/product";
import { observer } from "mobx-react";

class Menu extends Component {
  addProduct() {
    const product = {
      name: "hello"
    };
    addProduct(product);
  }

  render() {
    return (
      <div>
        <button onClick={this.addProduct}>Add to cart</button>
      </div>
    );
  }
}

export default observer(Menu);
