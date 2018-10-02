import React, { Component } from "react";
import SortableTbl from "react-sort-search-table";
import axios from "axios";

const tHead = ["Name", "Price", "Type", "Action"];

const col = ["name", "price", "type", "action"];

class Action extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem() {
    console.log("delete is not implemented");
  }
  
  render() {
    return (
      <td>
        {/* <Link to={`/admin/users/edit?_id=${this.props.rowData._id}`}> */}
        <button className="btn btn-warning">Edit</button>
        {/* </Link> */}
        <button className="btn btn-danger" onClick={this.deleteItem}>
          Delete
        </button>
      </td>
    );
  }
}

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios
      .get("/product")
      .then(res => this.setState({ products: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <span>Product</span>
        </div>
        <div className="panel-body">
          List all the product
          <SortableTbl
            tblData={this.state.products}
            tHead={tHead}
            customTd={[{ custd: Action, keyItem: "action" }]}
            dKey={col}
            search={true}
            defaultCSS={true}
          />
        </div>
      </div>
    );
  }
}

export default Product;
