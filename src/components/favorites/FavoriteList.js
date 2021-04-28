import React, { Component } from 'react';
import Favorite from './Favorite';

export default class FavoriteList extends Component {
  render() {
    return (
      <div className="favorite-big-box">
        <ul className="favorite">
          {this.props.mapFavorites.map((oneFavorite) => <Favorite 
          key={oneFavorite.hex} 
          favoriteProp={oneFavorite}/>)}
        </ul>
      </div>
    );
  }
}
