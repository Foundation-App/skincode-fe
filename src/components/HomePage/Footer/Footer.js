import React from 'react';
import Navbar from '../NavBar-social/NavBar';

import {
  FooterContainer,
  FooterWrap,
  Logo,
  WebsiteRights,
  FooterContents,
  FooterContentsWrap
} from './FooterStyling';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterContents>
          <FooterContentsWrap>
            <Logo>
              SkinCode()
            </Logo>
            <Navbar/>
            <WebsiteRights>SkinCode() © 2021 All rights reserved.</WebsiteRights>
          </FooterContentsWrap>
        </FooterContents>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;