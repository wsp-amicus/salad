import Axios from 'axios'
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import '../styles/Ingredients.css'
import CartImage from '../static/cart.png'

class Ingredients extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingre: [],
    }
  }
  componentDidMount() {
    Axios.get('/ingredients')
      .then(res => {
        this.setState({ ingre: res.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="content">
        <div className="ingreMenu">
          {this.state.ingre && this.state.ingre.length > 0
            ? this.state.ingre
              .sort(
                (a, b) => (a.type > b.type ? -1 : b.type > a.type ? 1 : 0)
              )
              .map(item => {
                return (
                  <div className="box-container">
                    <div className="image-container">
                      <img
                        id="box"
                        src={item.imageUrl.length > 1 ? item.imageUrl : item.imageUrl[0]}
                        alt="ingredients"
                        height="200px"
                      />
                      <div className="button-container">
                        <Button id="add-button" bsStyle="success">
                          <img id="cart" src={CartImage} alt="cart" />
                          Add
                          </Button>
                      </div>
                    </div>
                    <hr />
                    <h3>{item.name}</h3>
                    <h4>{item.type}</h4>
                    <p>{item.description}</p>
                    <p>
                      <h4>{item.price}฿</h4>
                    </p>
                  </div>
                )
              })
            : 'No ingredient'}
        </div>
      </div>
    )
  }
}

export default Ingredients
