import React, { Component } from "react";
import { Button } from "react-bootstrap";

export class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMethod: "Cash"
    };
    this.changeMethod = this.changeMethod.bind(this);
  }

  changeMethod(val) {
    this.setState({ currentMethod: val });
  }

  render() {
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
          <div>Cash</div>
        ) : (
          <div>Credit</div>
        )}
      </div>
    );
  }
}

export default Payment;
