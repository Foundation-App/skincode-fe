import React from 'react';
import { IconContext } from 'react-icons/lib';
import logo from '../../images/skincodelogo.gif'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavBtn,
  NavBtnLink,
} from './NavStyling';

function FavNav() {
 
  return (
    <>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
            <img className="logo" src={logo} alt="logo"></img>
            </NavLogo>
            <NavBtn>
              <NavBtnLink to='/logout'>Logout</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
    </>
  );
};

export default FavNav;