import React, { Component } from "react";
import { observer } from "mobx-react";
import { Store } from "../../store/product";
const _store = Store.getInstance();

export class AfterSell extends Component {
  componentDidMount() {
    // save to database
    console.log(JSON.stringify(_store.deliveryCode.get()));
  }

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          margin: "30px"
        }}
      >
        <h3>You order is completed.</h3>
        <div>Tracking number is {_store.deliveryCode.get()}</div>
        <h2>You will recieve the product less than 30 minutes</h2>
        <img
          style={{ width: "100%" }}
          src="https://i.gifer.com/EIG1.gif"
          alt="delivery"
        />
      </div>
    );
  }
}

export default observer(AfterSell);
