import React, { Component } from "react";
import { DropdownButton, Image, Button } from "react-bootstrap";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Store } from "../../../store/product";

const _store = Store.getInstance();

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartOpen: false
    };
  }
  getComponent(products) {
    return products.map(_product => {
      const { product, count } = _product;
      return (
        <div
          style={{
            width: "300px",
            background: "white",
            color: "black",
            padding: "5px"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Image
              style={{ width: "75px", height: "75px" }}
              src={product.imageUrl}
            />
            <h3>{product.name}</h3>
            <h3>{product.price * count}</h3>
          </div>
        </div>
      );
    });
  }

  render() {
    const { transparent } = this.props;
    return (
      <DropdownButton
        title="Cart"
        className="dropdown-button"
        open={this.state.cartOpen}
        onToggle={() => {}}
        onMouseOver={() => this.setState({ cartOpen: true })}
        onMouseLeave={() => this.setState({ cartOpen: false })}
      >
        {this.getComponent(_store.products, transparent)}

        <Link to="/">
          <Button
            bsStyle="danger"
            style={{ width: "100%" }}
            disabled={_store.products.length === 0}
          >
            Check out
          </Button>
        </Link>
      </DropdownButton>
    );
  }
}

export default observer(Cart);
