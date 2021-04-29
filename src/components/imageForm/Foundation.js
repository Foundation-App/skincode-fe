import React, { Component } from 'react';
import { postFavorites, getUserFromLocalStorage, getDateFromLocalStorage } from '../../apiUtils'
// postFavorites


export default class Foundation extends Component {

  state = { 
    username: getUserFromLocalStorage(), 
    makeup_name: this.props.foundationProp.name,
    image_link: this.props.foundationProp.image_link,
    brand: this.props.foundationProp.brand,
    color: this.props.foundationProp.color,
    hex: this.props.foundationProp.hex,
    product_link: this.props.foundationProp.product_link,
    date_added: getDateFromLocalStorage(),
}


handleSubmit = async e => {
  e.preventDefault();

  // const date_added = await getDateFromLocalStorage()

  await postFavorites(
    Number(this.state.username), 
    this.state.makeup_name,
    this.state.image_link,
    this.state.brand,
    this.state.color,
    this.state.hex,
    this.state.product_link,
    this.state.date_added
    );

  console.log(this.state.makeup_name, 'MAKEUP NAME')
  console.log(this.state.username.id, 'USERNAME')
  console.log(getDateFromLocalStorage(), 'DATE ADDED')
};




  render() {
    return (
      <div className="foundation-box">
        <ul className="box">
          <li>
            <img
              className="foundation-img"
              src="https://media0.giphy.com/media/YMpAIvLyFVKVujy5bH/giphy.gif"
              alt="makeup"
            />
          </li>
          <li>{this.props.foundationProp.name}</li>
          <li>
            <img
              className="product-img"
              src={this.props.foundationProp.image_link}
              alt="product" onerror="this.src='fallback-img.jpg'"
            />
          </li>

          <li>
              <a href={this.props.foundationProp.product_link}>Buy Now!</a>
          </li>

          <li>{this.props.foundationProp.brand}</li>
          <li>{this.props.foundationProp.color}</li>
          <li>
            <button
              style={{ backgroundColor: this.props.foundationProp.hex }}
              className="color"
              disabled
            ></button>
          </li>
          <li>
          <button className="like" onClick={this.handleSubmit}>❤️</button>
          </li>
        </ul>
      </div>
    );
  }
}
