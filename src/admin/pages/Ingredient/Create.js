import React, { Component } from "react";
import Select from "react-select";
import ImageUploader from "react-images-upload";
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const options = [
  { value: "vegetable", label: "Vegetable" },
  { value: "meat", label: "Meat" },
  { value: "dressing", label: "Dressing" }
];

export class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      pictures: [],
      name: '',
      price: '',
      redirect: false
    };
    this.onDrop = this.onDrop.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  handleSelected = selectedOption => {
    this.setState({
      selectedOption
    });
  };

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures: pictureFiles
    });
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    if(this.state.selectedOption===null || this.state.name === '' || this.state.price === '') {
      return
    }
    e.preventDefault()
    let formData = new FormData()
    formData.append('name', this.state.name)
    formData.append('price', this.state.price)
    formData.append('type', this.state.selectedOption.value)
    this.state.pictures.forEach( (picture,index) => {
      formData.append('picture-' + index, picture)
    })
    axios.post('/ingredient/create',
      formData
    ).then(res => this.setState({redirect: true})).catch(err => console.log(err))
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/admin/ingredients" />
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
              <input name="name" className="form-control" value={this.state.name} onChange={this.handleChange}/>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <label>Category</label>
              <Select
                value={this.state.selectedOption}
                onChange={this.handleSelected}
                options={options}
              />
            </div>

            <div className="col-md-6">
              <label>Price - THB</label>
              <input name="price" className="form-control" value={this.state.price} onChange={this.handleChange}/>
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
          <button className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Create;
