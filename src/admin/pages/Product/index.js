import React, { Component } from "react";
import SortableTbl from "react-sort-search-table";
import axios from "axios";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const tHead = ["Name", "Description", "Price", "Ingredients", "Action"];

const col = ["name", "description", "price", "ingredients", "action"];

class Action extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem() {
    this.props.show(this.props.rowData._id);
  }

  render() {
    return (
      <td>
        <Link to={`/admin/products/edit?_id=${this.props.rowData._id}`}>
          <button className="btn btn-warning">Edit</button>
        </Link>
        <button className="btn btn-danger" onClick={this.deleteItem}>
          Delete
        </button>
      </td>
    );
  }
}

export class Ingredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      deleteModal: false,
      deleteId: ""
    };

    this.handleCancel = this.handleCancel.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleCancel() {
    this.setState({ deleteModal: false });
  }

  handleShow(id) {
    this.setState({ deleteModal: true, deleteId: id });
  }

  deleteItem() {
    axios
      .delete("/products/delete?_id=" + this.state.deleteId)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    window.location.reload();
  }

  componentDidMount() {
    axios
      .get("/products")
      .then(res => this.setState({ products: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const _products = this.state.products;
    this.state.products.forEach((product, index) => {
      const ingredientJson = JSON.parse(product.ingredients);
      const _ingredient = ingredientJson.map(ingredient => {
        return ingredient.label;
      });
      _products[index].ingredients = JSON.stringify(_ingredient);
    });

    return (
      <div className="panel panel-primary">
        <Modal show={this.state.deleteModal} onHide={this.handleCancel}>
          <Modal.Header>
            <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure to delete ?</Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleCancel}>Cancel</Button>
            <Button bsStyle="danger" onClick={this.deleteItem}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="panel-heading">
          <span>Products</span>
        </div>
        <div className="panel-body">
          List all the products
          <SortableTbl
            tblData={_products}
            tHead={tHead}
            customTd={[
              {
                custd: props => (
                  <Action rowData={props.rowData} show={this.handleShow} />
                ),
                keyItem: "action"
              }
            ]}
            dKey={col}
            search={true}
            defaultCSS={true}
          />
        </div>
      </div>
    );
  }
}

export default Ingredient;
