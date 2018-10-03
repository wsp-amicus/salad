import React, { Component } from 'react'
import '../../../styles/AdminProduct.css'

export class ImageWrapper extends Component {
  render() {
    return (
        <div id='product-admin' className="col-md-6 text-center">
            <div className="product-image">
                <div className="x"><i className="fa fa-remove"></i></div>
                {this.props.children}
            </div>
        </div>
    )
  }
}

export default ImageWrapper
