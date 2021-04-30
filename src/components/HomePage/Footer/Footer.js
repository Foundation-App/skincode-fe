import React from 'react';
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
            <WebsiteRights>SkinCode() © 2021 All rights reserved.</WebsiteRights>
          </FooterContentsWrap>
        </FooterContents>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;