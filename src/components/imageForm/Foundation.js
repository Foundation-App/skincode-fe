import React, { Component } from 'react';
import { postFavorites, getUserFromLocalStorage } from '../../apiUtils'
// postFavorites


export default class Foundation extends Component {

  state = { 
    makeup_name: this.props.foundationProp.name,
    username: getUserFromLocalStorage(), //username equals to user ID in local storage
}

handleSubmit = async e => {
  e.preventDefault();

  await postFavorites(this.state.makeup_name, Number(this.state.username));

  console.log(this.state.makeup_name, 'MAKEUP NAME')
  console.log(this.state.username.id, 'USERNAME')
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
              alt="product"
            />
          </li>
          <li>{this.props.foundationProp.brand}</li>
          <li>{this.props.foundationProp.color}</li>
          <li>
            <button
              style={{ backgroundColor: this.props.foundationProp.hex }}
              className="color"
              disabled
            ></button>

            <button onClick={this.handleSubmit}>Like Button</button>

          </li>{' '}
        </ul>
      </div>
    );
  }
}
