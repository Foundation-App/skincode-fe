import React, { Component } from 'react'
import './App.css';
import Cloudinary from './components/imageForm/Cloudinary';
import {Imageform} from './components/imageForm/Imageform';


export default class App extends Component {
  render() {
    return (
      <div>
        <header>Hello</header>
        < Imageform />
        < Cloudinary/>
        
      </div>
    )
  }
}


