import Axios from "axios";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../styles/Ingredients.css";
import Loader from "react-loader-spinner";
import CartImage from "../static/cart.png";

class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingre: []
    };
  }
  componentDidMount() {
    Axios.get("/ingredients")
      .then(res => {
        this.setState({ ingre: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="ingredient-content">
        <div className="ingreMenu">
          {this.state.ingre && this.state.ingre.length > 0
            ? this.state.ingre
              .sort(
                (a, b) => (a.type > b.type ? -1 : b.type > a.type ? 1 : 0)
              )
              .map(item => {
                return (
                  <div className="box-container" key={item.name}>
                    <div className="image-container">
                      {this.props.loading ? (
                        <div
                          style={{ minHeight: "200px", minWidth: "200px" }}
                        >
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
                    <h4>{item.price}฿</h4>
                  </div>
                );
              })
            : "No ingredient"}
        </div>
      </div>
    );
  }
}

export default Ingredients;
