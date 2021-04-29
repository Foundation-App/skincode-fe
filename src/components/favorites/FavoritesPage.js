import React, { Component } from 'react';
import { getFavoritesById, getUserFromLocalStorage } from '../../apiUtils';
import FavoriteList from './FavoriteList';

export default class FavoritesPage extends Component {
  state = {
    favoriteFoundation: [],
    loading: true,
    userId: getUserFromLocalStorage()
  };

  componentDidMount = async () => {
    this.setState({
      loading: true
    });

    const getFoundationFaves = await getFavoritesById(this.state.userId.id);

    this.setState({
      favoriteFoundation: getFoundationFaves,
      loading: false
    });
  };

  render() {
    return (
      <div>
        <FavoriteList mapFavorites={this.state.favoriteFoundation} />
      </div>
    );
  }
}
