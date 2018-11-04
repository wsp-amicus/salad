import React, { Component } from "react";
import ImageUploader from "react-images-upload";
import axios from "axios";
import { Redirect } from "react-router-dom";
import CreatableSelect from "react-select/lib/Creatable";

export class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      name: "",
      price: "",
      description: "",
      redirect: false,
      ingredients: [],
      options: []
    };
    this.onDrop = this.onDrop.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentWillMount() {
    axios.get("/ingredients").then(res => {
      const { data } = res;
      const _data = [];
      data.forEach(d => {
        const value = d.name;
        const label = d.name;
        _data.push({ value, label });
      });
      this.setState({ options: _data });
    });
  }

  handleSelectChange(newValue: any, actionMeta: any) {
    console.group("Value Changed");
    console.log(newValue);
    this.setState({ ingredients: newValue });
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  }

  handleSelected(selectedOption) {
    this.setState({
      selectedOption
    });
  }

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures: pictureFiles
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    if (this.state.name === "" || this.state.price === "") {
      return;
    }
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("price", this.state.price);
    formData.append("description", this.state.description);
    formData.append("ingredients", JSON.stringify(this.state.ingredients));
    this.state.pictures.forEach((picture, index) => {
      formData.append("picture-" + index, picture);
    });
    axios
      .post("/products/create", formData)
      .then(res => this.setState({ redirect: true }))
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/admin/products" />;
    }
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <div>Create ingredient</div>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-6">
              <label>Name</label>
              <input
                name="name"
                className="form-control"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <label>Price - THB</label>
              <input
                name="price"
                className="form-control"
                value={this.state.price}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <label>Description</label>
              <textarea
                name="description"
                className="form-control"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-md-6">
              <label>Ingredient</label>
              <CreatableSelect
                isMulti
                onChange={this.handleSelectChange}
                // onInputChange={this.handleSelectInputChange}
                options={this.state.options}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>Image</label>
              <ImageUploader
                withIcon
                buttonText="Choose images"
                onChange={this.onDrop}
                imgExtension={[".jpg", ".png", ".jpeg"]}
                maxFileSize={5242880}
                withPreview
                singleImage
                label="Max file size: 5mb, accepted jpg png jpeg"
              />
              <small>Warning: space on file name is not allowed</small>
            </div>
          </div>
        </div>

        <div className="panel-footer">
          <button
            className="btn btn-primary"
            onClick={this.handleSubmit.bind(this)}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Create;
