import React, { Component } from 'react';
import { getFavoritesById, getUserFromLocalStorage, getCloudFromLocalStorage } from '../../apiUtils';
import FavoriteList from './FavoriteList';
import FavNav from '../favorites/FavNav'
import {
  FavoriteWrapper,
  FavoriteContainer,
  FavH1
} from '../favorites/FavStyling';

export default class FavoritesPage extends Component {
  state = {
    favoriteFoundation: [],
    loading: true,
    userId: getUserFromLocalStorage(),
    cloudinarylink: getCloudFromLocalStorage()

  };

  componentDidMount = async () => { 
    this.setState({
      loading: true,
    })

    const getFoundationFaves = await getFavoritesById(this.state.userId.id);
      console.log(getFoundationFaves, 'HELP');

    this.setState({ 
      favoriteFoundation: getFoundationFaves,
      loading: false
    });
   
  }

  render() {
    return (
        <div>
        <FavNav></FavNav>
        <FavoriteContainer>
          <FavH1>Your Favorites</FavH1>
          <FavoriteWrapper>        
            <FavoriteList
          mapFavorites={this.state.favoriteFoundation}/>
          </FavoriteWrapper>
        </FavoriteContainer>
        </div>
    );
  }
}
