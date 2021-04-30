import React, { Component } from 'react';
import Foundation from './Foundation';

export default class FoundationList extends Component {
 

  render() {
    const loading = this.props.loading
    return (
      <div className="foundation-big-box">
        {
          loading
          ?
          <div>Loading...</div>
          :
        <ul className="foundation">
          {this.props.mapFoundations.map((oneFoundation) => (
            <Foundation
              key={oneFoundation.hex + oneFoundation.name}
              foundationProp={oneFoundation}
            />
          ))}
        </ul>
        }
      </div>
    );
  }
}
