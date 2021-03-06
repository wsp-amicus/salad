import React, { Component } from "react";
import { observer } from "mobx-react";
import { Store } from "../../store/product";
const _store = Store.getInstance();

export class AfterSell extends Component {
  componentDidMount() {
    if (_store.deliveryCode.get() !== "") {
      // save to database
    }
    console.log(JSON.stringify(_store.address));
    console.log("mounted")
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
        <div>Tracking code is {_store.deliveryCode.get()}</div>
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
