import React, { Component } from 'react';
import './App.css';
import Cloudinary from './components/imageForm/Cloudinary';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import Signup from './components/auth/signup';
import FavoritesPage from './components/favorites/FavoritesPage';
import HomePage from './components/HomePage/HomePage';
// import PrivateRoute from './components/auth/PrivateRoute'
import { getUserFromLocalStorage, putUserInLocalStorage } from './apiUtils';



export default class App extends Component {
  state = {
    user: getUserFromLocalStorage()
  };

  handleUserChange = (user) => {
    this.setState({ user });

    putUserInLocalStorage(user);
  };

  handleLogout = () => {
    this.handleUserChange();
    sessionStorage.clear();
    // saveCookies.clear
  };

  render() {
    // const { user } = this.state;
    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />}
            />
            <Route
              path="/signup"
              exact
              render={(routerProps) => <Signup {...routerProps} />}
            />
            <Route
              path="/login"
              exact
              render={(routerProps) => <Login {...routerProps} />}
            />
            <Route
              path="/findmyskincode"
              exact
              render={(routerProps) => <Cloudinary {...routerProps} />}
            />
             <Route 
               path="/logout" 
               exact
               render={(routerProps) => <Logout {...routerProps}/>} 
            />
            {/* <PrivateRoute
                 path='/myfavorites' 
                 exact
                 render={(routerProps) => <FavoritesPage {...routerProps} />} 
                //  user={this.state.user}
              /> */}
            <Route
              path="/myfavorites"
              exact
              render={(routerProps) => <FavoritesPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

// <PrivateRoute
// path="/playlist"
// exact
// token={user && user.token}
// render={(routerProps) => <Playlist {...routerProps} />}
// user={this.state.user}
// />


