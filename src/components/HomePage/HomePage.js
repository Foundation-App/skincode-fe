import React, { Component } from 'react';
import NavBar from './NavBar';
import HeroSection from './mainSection';




export default class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <HeroSection></HeroSection>
      </div>
    );
  }
}