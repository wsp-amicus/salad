import React, { Component } from 'react'
import '../../../styles/AdminIngredient.css'

export class ImageWrapper extends Component {
  render() {
    return (
        <div id='ingredient-admin' className="col-md-6 text-center">
            <div className="ingredient-image">
                <div className="x" onClick={() => this.props.onRemove(this.props.url)}><i className="fa fa-remove"></i></div>
                {this.props.children}
            </div>
        </div>
    )
  }
}

export default ImageWrapper
