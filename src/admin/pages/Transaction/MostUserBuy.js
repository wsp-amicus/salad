import React, { Component } from "react";
import { observer } from "mobx-react";
import { Store } from "../../../store/product";
import { Bar } from "react-chartjs-2";

const _store = Store.getInstance();

class MostUserBuy extends Component {
  componentDidMount() {
    _store.getTransactions();
  }
  render() {
    const users = {};
    _store.transactions.forEach(transaction => {
      if (!users[transaction.username]) {
        users[transaction.username] = 0;
      }
      users[transaction.username] += 1;
    });
    const data = {
      labels: Object.keys(users),
      datasets: [
        {
          label: "Most User Buy",
          fill: false,
          data: Object.values(users)
        }
      ]
    };
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <span>MostUserBuy</span>
          </div>
          <div className="panel-body">
            <Bar data={data} />
          </div>
        </div>
      </div>
    );
  }
}

export default observer(MostUserBuy);
