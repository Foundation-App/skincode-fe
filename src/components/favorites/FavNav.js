import React from 'react';
import logo from '../../images/skincodelogo.gif'
import {
  Nav,
  NavbarContainer,
  NavLogo,
} from './NavStyling';
import LogOutPage from '../auth/LogOutPage'

function FavNav() {
 
  return (
    <>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
            <img className="logo" src={logo} alt="logo"></img>
            </NavLogo>
            <LogOutPage/>
          </NavbarContainer>
        </Nav>
    </>
  );
};

export default FavNav;