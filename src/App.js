import React, { Component } from 'react'
import './App.css';
import logo from '../src/skincode-logo.gif'
import Cloudinary from './components/imageForm/Cloudinary';
// import {Imageform} from './components/imageForm/Imageform';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header><img className="logo" src={logo} alt="logo"/></header>
        < Cloudinary/>
        
      </div>
    )
  }
}


