import React, { Component } from 'react';
import Favorite from './Favorite';

export default class FavoriteList extends Component {
  render() {
    const loading = this.props.loading
    return (
      <div className="favorite-big-box">
        {loading
          ?
          <div>Loading...</div>
          :
        <ul className="favorite">
          {this.props.mapFavorites.map((oneFavorite) => (
            <Favorite
              key={oneFavorite.hex + oneFavorite.name}
              favoriteProp={oneFavorite}
            />
          ))}
        </ul>
          } 
      </div>
    );
  }
}
