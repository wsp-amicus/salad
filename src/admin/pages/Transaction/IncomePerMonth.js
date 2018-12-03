import React, { Component } from "react";
import { observer } from "mobx-react";
import { Store } from "../../../store/product";

import { Line } from "react-chartjs-2";
const _store = Store.getInstance();

class IncomePerMonth extends Component {
  componentDidMount() {
    _store.getTransactions();
  }

  render() {
    let income = 0;
    _store.transactions.forEach(item => (income += item.price));
    console.log(income);
    const data = {
      labels: ["November", "December"],
      datasets: [
        {
          label: "My First dataset",
          fill: false,
          data: [1250, income]
        }
      ]
    };
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <span>IncomePerMonth</span>
          </div>
          <div className="panel-body">
            <Line data={data} />
          </div>
        </div>
      </div>
    );
  }
}

export default observer(IncomePerMonth);
