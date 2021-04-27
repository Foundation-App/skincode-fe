import React, { Component } from 'react';
import './App.css';
import logo from '../src/skincode-logo.gif';
import Cloudinary from './components/imageForm/Cloudinary';
// import {Imageform} from './components/imageForm/Imageform';
// import Router from 'react-router-dom';
import Login from './components/auth/login';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Router> */}
        <header>
          <img className="logo" src={logo} alt="logo" />
        </header>
        <Cloudinary />
        <Login />
        {/* </Router> */}
      </div>
    );
  }
}
