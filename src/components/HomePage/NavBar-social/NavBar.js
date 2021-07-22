import React from 'react';
import insta from '../../../images/3.svg'



import {
  Nav,
  NavItem2,
  NavLinks2,
  IMG,
} from './NavStyling';

function Navbar() {
 
  return (
    <div style= {{background:''}}>
        <Nav style= {{background:''}}>
                <NavItem2>
                    <NavLinks2 href='https://www.instagram.com/skincodeapp/'>
                        <IMG className="logo" src={insta} alt="logo"></IMG>
                    </NavLinks2>
                </NavItem2>
        </Nav>

    </div>
  );
};

export default Navbar;
