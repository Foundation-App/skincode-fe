import React, { Component } from 'react';

export default class Foundation extends Component {
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
          </li>{' '}
        </ul>
      </div>
    );
  }
}
