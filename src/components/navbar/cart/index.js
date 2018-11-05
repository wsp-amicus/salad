import React, { Component } from "react";
import { DropdownButton, Image, Button } from "react-bootstrap";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Store, removeProduct } from "../../../store/product";
import "../../../styles/Cart.css";
import CartImage from "../../../static/cart.png";

const _store = Store.getInstance();

class Listproducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products
    };
    this.removeProduct = this.removeProduct.bind(this);
  }

  removeProduct(product) {
    removeProduct(product);
    const products = this.state.products.filter(item => item !== product);
    this.setState({ products: products });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ products: nextProps.products });
  }

  render() {
    const _products = this.state.products.map(product => {
      return (
        <div
          key={product.name}
          style={{
            width: "400px",
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
            <h3>{product.price} ฿</h3>
            <Button
              bsStyle="danger"
              onClick={() => this.removeProduct(product)}
            >
              <i className="fa fa-minus" aria-hidden="true" />
            </Button>
          </div>
        </div>
      );
    });
    return <div>{_products}</div>;
  }
}

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartOpen: false
    };
  }
  getComponent(products) {
    return <Listproducts products={products} />;
  }

  render() {
    const { transparent } = this.props;
    return (
      <DropdownButton
        title={
          <p>
            <img id="cart" src={CartImage} alt="cart" />
            Cart
          </p>
        }
        id="1"
        className="dropdown-button"
        open={this.state.cartOpen}
        noCaret
        onToggle={() => {}}
        onMouseOver={() => this.setState({ cartOpen: true })}
        onMouseLeave={() => this.setState({ cartOpen: false })}
      >
        <li className="scroll">
          {this.getComponent(_store.products, transparent)}
        </li>

        <Link to="/checkout">
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
