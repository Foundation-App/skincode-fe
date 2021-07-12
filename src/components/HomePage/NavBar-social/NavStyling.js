import styled from 'styled-components';

// background: transparent;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    display: flex;
    flex-direction: row;
    width: inherit;
    margin: 0 auto;
    text-align: center;
  }

  @media screen and (max-width: 360px) {
    height: 10%;
    transition: 0.8s all ease;
    display: flex;
    flex-direction: row;
    width: inherit;
    margin: 0 auto;
    text-align: center;
  }
  
  @media screen and (max-width: 1030px) {
    display: flex;
    flex-direction: row;
   font-size: 26px;
    width: 200px;
    }
`;



export const NavItem2 = styled.li`
  height: 80px;
  margin-bottom: -20px;
  list-style-type: none;

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    margin-bottom: -4px;
  }

  @media screen and (max-width: 360px) {
    height: 40px;
  }
  @media screen and (max-width: 1030px) {
    font-size: 12px;
  }
`;


export const NavLinks2 = styled.a`
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 .6rem;
height: 100%;
cursor: pointer;
font-weight: 400;

&:hover {
    border-bottom: 2px solid red;
    color: black;
}

@media screen and (max-width: 360px) {
  height: 100%;
  transition: 0.8s all ease;
  display: flex;
  flex-direction: row;
  padding: 0 .6rem;
  width: inherit;
  margin: 0 auto;
  text-align: center;
}
`;



export const IMG = styled.img`
width: auto;
height:25%;
backgroundColor:'';


  @media screen and (max-width: 360px) {
    width: auto;
    height:30%;
    backgroundColor:'';
  }
`;


export const ImgImdb = styled.img`
width: auto;
height: 45%;
backgroundColor:'';


  @media screen and (max-width: 360px) {
    width: auto;
    height:50%;
    backgroundColor:'';
  }
`;