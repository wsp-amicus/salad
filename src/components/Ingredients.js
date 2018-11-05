import Axios from 'axios'
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import '../styles/Ingredients.css'
import Loader from 'react-loader-spinner'
import CartImage from '../static/cart.png'
import { addProduct2Cart } from '../store/product';

class Ingredients extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingre: [],
      selected: []
    }
  }
  componentDidMount() {
    Axios.get('/ingredients')
      .then(res => {
        this.setState({ ingre: res.data })
        this.state.ingre.sort(
          (a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0)
        )
        this.state.ingre.sort(
          (a, b) => (a.type > b.type ? -1 : b.type > a.type ? 1 : 0)
        )
      })
      .catch(err => console.log(err))
  }

  getTotalPrice(ingredients) {
    let price = 0
    ingredients.forEach(product => price += product.price)
    return price
  }

  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div className="custom-list">
          <h2 style={{ marginBottom: '50px' }}>Ingredients</h2>
          <h4 style={{ display: 'flex' }}>Total price: <p style={{ color: 'red', marginLeft: 'auto', marginRight: '0', fontSize: '22px' }}>{this.getTotalPrice(this.state.selected)} ฿</p></h4>
          <Button
            onClick={() => addProduct2Cart({
              name: 'Custom',
              ingredients: this.state.selected,
              price: this.getTotalPrice(this.state.selected),
              description: '',
              imageUrl: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2IJmKt8z72wzaYgCmlhlmdcW-4dKtoqtUE8qDM_9PjVIj1kby'],
            })}
            bsStyle="primary"
            style={{ background: 'green' }}
          >
            <img src={CartImage} alt="cart" height="20px" style={{ marginRight: '10px' }} />
            Add to cart
          </Button>
          <hr />
          {this.state.selected.length > 0 ? this.state.selected.map(item => (
            <div style={{ display: 'flex' }}>
              <img src={item.imageUrl.length > 1
                ? item.imageUrl
                : item.imageUrl[0]
              }
                alt="selected"
                height="100px"
              />
              <h4 style={{ margin: 'auto', padding: '0 10px 0 0' }}>{item.name}</h4>
              <Button
                bsStyle="danger"
                style={{ height: '35px', margin: 'auto', marginRight: '0' }}
                onClick={() => this.setState({ selected: this.state.selected.filter(i => i.id !== item.id) })}
              >
                X
              </Button>
            </div>
          )) : <h4>No ingredient selected</h4>}
        </div>
        <div className="ingredient-content">
          <div className="ingreMenu">
            {this.state.ingre && this.state.ingre.length > 0
              ? this.state.ingre.map(item => {
                return (
                  <div className="box-container" key={item.name}>
                    <div className="image-container">
                      {this.props.loading ? (
                        <div style={{ minHeight: '200px', minWidth: '200px' }}>
                          <Loader
                            type="TailSpin"
                            color="#11ad3d"
                            height={80}
                            width={80}
                          />
                        </div>
                      ) : (
                          <img
                            className="fadeIn"
                            id="box"
                            src={
                              item.imageUrl.length > 1
                                ? item.imageUrl
                                : item.imageUrl[0]
                            }
                            alt="ingredients"
                            height="200px"
                          />
                        )}
                      <div className="button-container">
                        <Button id="add-button" bsStyle="success" onClick={() => this.setState({ selected: [...this.state.selected, { ...item, id: this.state.selected.length }] })}>
                          <img id="cart" src={CartImage} alt="cart" />
                          Add
                        </Button>
                      </div>
                    </div>
                    <hr />
                    <h3>{item.name}</h3>
                    <h4>{item.type}</h4>
                    <p>{item.description}</p>
                    <h4>{item.price}฿</h4>
                  </div>
                )
              })
              : <h4>No ingredient</h4>}
          </div>
        </div>

      </div >
    )
  }
}

export default Ingredients
