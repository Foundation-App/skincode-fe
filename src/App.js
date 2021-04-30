import React, { Component } from 'react';
import './App.css';
import Cloudinary from './components/imageForm/Cloudinary';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import Signup from './components/auth/signup';
import FavoritesPage from './components/favorites/FavoritesPage';
import HomePage from './components/HomePage/HomePage';
import PrivateRoute from './components/auth/PrivateRoute';
import { putUserInLocalStorage, verifyUser } from './apiUtils';

export default class App extends Component {
  state = {
    user: null,
    authError: '',
    authLoading: true
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

  componentDidMount = () => {
    this.setState({ authLoading: true });
    verifyUser()
      .then((user) =>
        this.setState({
          user,
          loading: false
        })
      )
      .catch((authError) => {
        this.setState({ authError: authError.message });
        console.log(authError.message);
      });
  };

  render() {
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
              render={(routerProps) => <Logout {...routerProps} />}
            />
            <PrivateRoute
              exact
              path="/myfavorites"
              render={(routerProps) => <FavoritesPage {...routerProps} />}
              user={this.state.user}
              error={this.state.authError}
              loading={this.state.authLoading}
            />
            {/* <Route
              path="/myfavorites"
              exact
              render={(routerProps) => <FavoritesPage {...routerProps} />}
            /> */}
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
