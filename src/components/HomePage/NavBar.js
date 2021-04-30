import React from 'react';
import logo from '../../images/skincodelogo.gif'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks
} from './NavStyling';

function Navbar() {
 
  return (
    <>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
            <img className="logo" src={logo} alt="logo"></img>
            </NavLogo>
            <NavItem>
                <NavLinks
                  to='about'
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='/findmyskincode'
                >
                  Find A Match
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='/myfavorites'
                >
                  My Favorites
                </NavLinks>
              </NavItem>
            <NavBtn>
              <NavBtnLink to='/login'>Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
    </>
  );
};

export default Navbar;
