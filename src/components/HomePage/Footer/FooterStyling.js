import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #fff;
`;

export const FooterWrap = styled.div`
  padding: 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterContents = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const FooterContentsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const Logo = styled(Link)`
  color: #714137;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #714137;
  margin-bottom: 16px;
`;
