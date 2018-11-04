import React, { Component } from "react";
import { DropdownButton } from "react-bootstrap";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Store } from "../../../store/product";

const _store = Store.getInstance();

class Cart extends Component {
  getComponent(products, transparent) {
    return products.map(product => {
      return (
        <li
          role="presentation"
          style={{
            background: transparent ? "transparent" : "#222"
          }}
        >
          {product.name}
        </li>
      );
    });
  }

  render() {
    const { transparent } = this.props;
    return (
      <DropdownButton title="Cart" className="dropdown-button">
        {this.getComponent(_store.products, transparent)}
        <li
          role="presentation"
          style={{
            background: transparent ? "transparent" : "#222"
          }}
        >
          <Link to="/">Check out</Link>
        </li>
      </DropdownButton>
    );
  }
}

export default observer(Cart);
