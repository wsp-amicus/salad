import React, { Component } from "react";
import axios from "axios";

export class Transaction extends Component {
  componentDidMount() {
    axios.get("/transactions").then(res => console.log(res.data));
  }

  render() {
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <span>Transaction</span>
          </div>
          <div className="panel-body">graph</div>
        </div>
      </div>
    );
  }
}

export default Transaction;
