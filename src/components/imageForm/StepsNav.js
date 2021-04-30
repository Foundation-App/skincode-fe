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

function StepsNavbar() {
 
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
            <img className="logo" src={logo} alt="logo"></img>
            </NavLogo>
            <NavBtn>
              <NavBtnLink to='/myfavorites'>My Favorites</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default StepsNavbar;