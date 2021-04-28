import React from 'react';
import { IconContext } from 'react-icons/lib';
import logo from '../../images/skincodelogo.gif'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavBtn,
  NavBtnLink
} from './NavStyling';

function Navbar() {
 
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo>
            <img className="logo" src={logo} alt="logo"></img>
            </NavLogo>
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
