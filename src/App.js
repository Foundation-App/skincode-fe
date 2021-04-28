import React, { Component } from 'react';
import './App.css';
import logo from '../src/skincode-logo.gif';
import Cloudinary from './components/imageForm/Cloudinary';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import FavoritesPage from './components/favorites/FavoritesPage';

export default class App extends Component {
  render() {
    return (
      <div>
      <Router>
          <Switch>
              <Route 
                  path="/" 
                  exact
                  render={(routerProps) => <Signup {...routerProps}/>} 
              />
              <Route 
                  path="/login" 
                  exact
                  render={(routerProps) => <Login {...routerProps}/>} 
              />
                <Route 
                  path="/findmyskincode" 
                  exact
                  render={(routerProps) => <Cloudinary {...routerProps}/>} 
              />
               <Route 
                  path="/myfavorites" 
                  exact
                  render={(routerProps) => <FavoritesPage {...routerProps}/>} 
              />
                {/* <PrivateRoute 
                  path="/myfavorites" 
                  exact
                  token={user && user.token}
                  render={(routerProps) => 
                  <ApodsFavoritesPage
                    user={this.state.user}
                    {...routerProps} />} 
              /> */}
          </Switch>
      </Router>
  </div>
      
    );
  }
}

// return (
//   <div>
//       <Router>
//           <Switch>
//               <Route 
//                   path="/signup" 
//                   exact
//                   render={(routerProps) => <Signup
//                     user={this.state.user} {...routerProps} />} 
//               />
//               <Route 
//                   path="/login" 
//                   exact
//                   render={(routerProps) => <Login {...routerProps} 
//                   handleUserChange={this.handleUserChange}/>} 
//               />
//                 <Route 
//                   path="/findmyskincode" 
//                   exact
//                   render={(routerProps) => <Cloudinary {...routerProps}
//                   handleUserChange={this.handleUserChange} />} 
//               />
//                <Route 
//                   path="/myfavorites" 
//                   exact
//                   render={(routerProps) => <FavoritesPage {...routerProps}
//                   handleUserChange={this.handleUserChange} 
//                   dummyProp="cat"/>} 
//               />
//                 <PrivateRoute 
//                   path="/myfavorites" 
//                   exact
//                   token={user && user.token}
//                   render={(routerProps) => 
//                   <ApodsFavoritesPage
//                     user={this.state.user}
//                     {...routerProps} />} 
//               />
//           </Switch>
//       </Router>
//   </div>
// )
