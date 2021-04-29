import React from 'react';
import { IconContext } from 'react-icons/lib';
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
      <IconContext.Provider value={{ color: '#fff' }}>
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
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
