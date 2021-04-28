import React, { Component } from 'react';
import { getFavorites, getUserFromLocalStorage } from '../../apiUtils';

export default class FavoritesPage extends Component {
  state = {
    favoriteFoundation: [],
    loading: true
  };

  //   componentDidMount = async () => {
  //     const getFoundationFaves = await getFavorites();
  //     console.log(getFoundationFaves);
  //   };

  handleFavorites = async () => {
    const user = getUserFromLocalStorage();
    console.log(user);
    // const userId = user.id;
    const getFoundationFaves = await getFavorites();
    console.log(getFoundationFaves);
    this.setState({ favoriteFoundation: getFoundationFaves });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleFavorites}>Favorite Button</button>
        <div>{this.state.favoriteFoundation}</div>
      </div>
    );
  }
}
