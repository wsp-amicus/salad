import React, { Component } from 'react'
import { Row, Button, Image } from 'react-bootstrap'
import Loader from 'react-loader-spinner'
import axios from 'axios'
import { addProduct2Cart } from '../../store/product'
import '../../styles/Menu.css'
import CartImage from '../../static/cart.png'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = { products: [], loading: true }
  }

  componentWillMount() {
    axios
      .get('/products')
      .then(res => this.setState({ products: res.data, loading: false }))
      .catch(err => console.log(err))
  }

  addProduct2Cart(product) {
    addProduct2Cart(product)
  }

  render() {
    let _products = this.state.products.map(product => {
      const _ingredients = product.ingredients ? product.ingredients.reduce(
<<<<<<< HEAD
        (prev, cur) => `${prev}, ${cur}`) : ''
=======
        (prev, cur) => prev ? `${prev}, ${cur}` : cur, '') : ''
>>>>>>> 2f5e6b691bb509d7dadca9c0612abe4c5cc31877
      return (
        <div className="background product-center fadeIn">
          <div className="MenuImage">
            <Image
              src={product.imageUrl ? product.imageUrl[0] : ''}
              rounded
              responsive
            />
          </div>
          <Row className="text product-name">
            <h3>{product.name}</h3>
            <hr />
          </Row>
          <Row className="text">
            <h4>{product.description}</h4>
          </Row>
          <Row className="text">
            <p>{_ingredients}</p>
          </Row>
          <Row>
            <Button
              bsStyle="success"
              className="button"
              onClick={() => this.addProduct2Cart(product)}
            >
              <img id="cart" src={CartImage} alt="cart" />
              {product.price} ฿
            </Button>
          </Row>
        </div>
      )
    })
    return this.state.loading ? (
      <div
        style={{ textAlign: 'center', minHeight: '200px', minWidth: '200px' }}
      >
        <Loader type="ThreeDots" color="#11ad3d" height={140} width={140} />
        <h3>Amicus Loading...</h3>
      </div>
    ) : (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            paddingLeft: '10%',
            paddingRight: '10%'
          }}
        >
          {_products}
        </div>
      )
  }
}

export default Menu