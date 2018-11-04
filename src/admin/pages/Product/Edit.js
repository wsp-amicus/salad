import React, { Component } from "react";
import ImageUploader from "react-images-upload";
import axios from "axios";
import { Redirect } from "react-router-dom";
import queryString from "query-string";
import ImageWrapper from "./ImageWrapper";

export class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      oldPictures: [],
      name: "",
      price: "",
      description: "",
      redirect: false
    };
    this.onDrop = this.onDrop.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOldDelete = this.handleOldDelete.bind(this);
  }

  componentDidMount() {
    const id = queryString.parse(window.location.search)._id;
    if (!this.state.loaded) {
      axios
        .get("/products/find?_id=" + id)
        .then(res => {
          this.setState({
            oldPictures: res.data.imageUrl ? res.data.imageUrl : [],
            name: res.data.name,
            price: res.data.price,
            description: res.data.description,
            loaded: true,
          });
        })
        .catch(err => console.log(err));
    }
  }

  handleOldDelete(url) {
    const deleted = this.state.oldPictures.filter(picture => picture !== url);
    this.setState({ oldPictures: deleted });
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
    if (
      this.state.name === "" ||
      this.state.price === ""
    ) {
      return;
    }
    e.preventDefault();
    let formData = new FormData();
    formData.append("_id", queryString.parse(window.location.search)._id);
    formData.append("name", this.state.name);
    formData.append("price", this.state.price);
    formData.append("description", this.state.description);
    this.state.pictures.forEach((picture, index) => {
      formData.append("picture-" + index, picture);
    });
    formData.append("oldPictures", this.state.oldPictures);
    axios
      .put("/products/edit", formData)
      .then(res => this.setState({ redirect: true }))
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/admin/products" />;
    }
    const images = this.state.oldPictures.map(picture => {
      return (
        <ImageWrapper url={picture} onRemove={this.handleOldDelete}>
          <img
            src={`/${picture}`}
            className="img-responsive"
            alt="products"
          />
        </ImageWrapper>
      );
    });
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <div>Edit products</div>
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
            <div className="col-md-6">
              <label>Old Images</label>
              <div className="row">{images}</div>
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

export default Edit;
