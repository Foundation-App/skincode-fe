import React, { Component } from 'react';
import { getFavoritesById, getUserFromLocalStorage } from '../../apiUtils';
import FavoriteList from './FavoriteList';
import FavNav from '../favorites/FavNav';
import {
  FavoriteWrapper,
  FavoriteContainer,
  FavH1,
  FavImg
} from '../favorites/FavStyling';
import heart from '../../images/heart.gif';

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
        <FavNav></FavNav>
        <FavoriteContainer>
          <FavH1>
            Your Favorites<FavImg src={heart} alt="heart"></FavImg>
          </FavH1>
          <FavoriteWrapper>
            <FavoriteList mapFavorites={this.state.favoriteFoundation} />
          </FavoriteWrapper>
        </FavoriteContainer>
      </div>
    );
  }
}
