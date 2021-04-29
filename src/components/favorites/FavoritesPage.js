import React, { Component } from 'react';
import { getFavoritesById, getUserFromLocalStorage, getCloudFromLocalStorage } from '../../apiUtils';
import FavoriteList from './FavoriteList';

export default class FavoritesPage extends Component {
  state = {
    favoriteFoundation: [],
    loading: true,
    userId: getUserFromLocalStorage(),
    cloudinarylink: getCloudFromLocalStorage()

  };

  // user = async () => { 
  //   const userFromLS = await getUserFromLocalStorage()
  //   // const userId = Number(user.id);
  //   console.log(userFromLS.id);
  //   this.setState({
  //     userId: userFromLS.id
  //   })
    
  // };

  componentDidMount = async () => { 
    this.setState({
      loading: true,
    })

    const getFoundationFaves = await getFavoritesById(Number(this.state.userId));
    //add .id when merge with claudia
      console.log(getFoundationFaves);

    this.setState({ 
      favoriteFoundation: getFoundationFaves,
      loading: false
    });
   
  }

  // handleFavorites = async () => {
  //   // console.log(user);
  //   const getFoundationFaves = await getFavoritesById(this.state.userId);
  //   console.log(getFoundationFaves);
  //   this.setState({ favoriteFoundation: getFoundationFaves });
  // };

  render() {
    return (
      <div>
        <FavoriteList
        mapFavorites={this.state.favoriteFoundation}/>
      </div>
    );
  }
}
