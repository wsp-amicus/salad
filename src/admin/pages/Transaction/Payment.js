import React, { Component } from "react";
import { observer } from "mobx-react";
import { Store } from "../../../store/product";
import { Bar } from "react-chartjs-2";

const _store = Store.getInstance();

class MostProductBuy extends Component {
  componentDidMount() {
    _store.getTransactions();
  }
  render() {
    const payment = {
      Cash: 0,
      Credit: 0
    };
    _store.transactions.forEach(transaction => {
      payment[transaction.payment] += 1;
    });
    console.log(payment);
    const data = {
      labels: ["Cash", "Credit"],
      datasets: [
        {
          label: "Most Payment",
          fill: false,
          data: [payment["Cash"], payment["Credit"]]
        }
      ]
    };
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <span>Payment</span>
          </div>
          <div className="panel-body">
            <div>
              <Bar data={data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default observer(MostProductBuy);
