import React, { Component } from 'react';
import { getFavoritesById, getUserFromLocalStorage } from '../../apiUtils';
import FavoriteList from './FavoriteList';

export default class FavoritesPage extends Component {
  state = {
    favoriteFoundation: [],
    loading: true,
    userId: 1
  };

  //   componentDidMount = async () => {
  //     const getFoundationFaves = await getFavorites();
  //     console.log(getFoundationFaves);
  //   };
  user = async () => { 
    const userFromLS = await getUserFromLocalStorage()
    // const userId = Number(user.id);
    console.log(userFromLS.id);
    this.setState({
      userId: userFromLS.id
    })
    
  };

  componentDidMount = async () => { 
    this.setState({
      loading: true,
    })
    const getFoundationFaves = await getFavoritesById(this.state.userId);
      console.log(getFoundationFaves);

    this.setState({ 
      favoriteFoundation: getFoundationFaves,
      loading: false
    });
   
  }

  handleFavorites = async () => {
    // console.log(user);
    const getFoundationFaves = await getFavoritesById(this.state.userId);
    console.log(getFoundationFaves);
    this.setState({ favoriteFoundation: getFoundationFaves });
  };

  render() {
    return (
      <div>
        {/* <button onClick={this.handleFavorites}>Check out your favorites!</button> */}
        {/* <div>{JSON.stringify(this.state.favoriteFoundation)}</div> */}
        <FavoriteList
        mapFavorites={this.state.favoriteFoundation}/>
      </div>
    );
  }
}
