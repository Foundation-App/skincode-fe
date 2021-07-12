import React from 'react';
// import vimeo from '../../../images/1.svg'
// import imdb from '../../../images/2.svg'
import insta from '../../../images/3.svg'



import {
  Nav,
  NavItem2,
  NavLinks2,
  IMG,
  ImgImdb
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
                {/* <NavItem2>
                    <NavLinks2 href='https://www.imdb.com/name/nm2829413/?ref_=rvi_nm'>
                      <ImgImdb className="logo" src={imdb} alt="logo" ></ImgImdb>
                    </NavLinks2>
                </NavItem2> */}
        </Nav>

    </div>
  );
};

export default Navbar;
