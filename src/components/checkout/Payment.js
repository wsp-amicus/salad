import React, { Component } from "react";
import { Button } from "react-bootstrap";
import CreditCardInput from "react-credit-card-input";
import { Store } from "../../store/product";
const _store = Store.getInstance();

export class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMethod: "Cash"
    };
    this.changeMethod = this.changeMethod.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  changeMethod(val) {
    this.setState({ currentMethod: val });
    _store.payment.set(val);
  }

  handleChange(val) {
    return name => {
      this.setState({ [name]: val });
    };
  }

  render() {
    const { cardNumber, expiry, cvc } = this.state;
    return (
      <div style={{ margin: "20px", padding: "20px" }}>
        <h2>Payment method</h2>
        <Button
          active={this.state.currentMethod === "Cash"}
          onClick={() => this.changeMethod("Cash")}
        >
          Cash
        </Button>
        <Button
          active={this.state.currentMethod === "Credit"}
          onClick={() => this.changeMethod("Credit")}
        >
          Credit / Debit Card
        </Button>
        {this.state.currentMethod === "Cash" ? (
          <div />
        ) : (
          <div
            style={{
              textAlign: "center",
              margin: "auto",
              marginTop: "10px",
              padding: "10px",
              backgroundColor: "rgba(0,0,0,0.1)",
              width: "400px"
            }}
          >
            <CreditCardInput
              cardNumberInputProps={{
                value: cardNumber,
                onChange: this.handleChange("cardNumber")
              }}
              cardExpiryInputProps={{
                value: expiry,
                onChange: this.handleChange("expiry")
              }}
              cardCVCInputProps={{
                value: cvc,
                onChange: this.handleChange("cvc")
              }}
              fieldClassName="input"
            />
            <div>Card holder name</div>
            <input name="name" style={{ width: "100%" }} />
          </div>
        )}
      </div>
    );
  }
}

export default Payment;
