import React, { Component } from 'react';
import Foundation from './Foundation';

export default class FoundationList extends Component {
  render() {
    return (
      <div className="foundation-big-box">
        <ul className="foundation">
          {this.props.mapFoundations.map((oneFoundation) => (
            <Foundation
              key={oneFoundation.hex + oneFoundation.name}
              foundationProp={oneFoundation}
            />
          ))}
        </ul>
      </div>
    );
  }
}
