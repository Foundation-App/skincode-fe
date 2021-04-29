import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  postion: fixed;
  background-color: #FFFAFA;
  
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px) {
    height: 80%;
  }

`;

export const Icon = styled(Link)`
  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
  width: 50px;
  height:50px;
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }

`;

export const Form = styled.form`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  max-width: 400px;
  height: auto;
  width: 100%;
  margin: 0 auto;
  padding: 50px 32px;
  border-radius: 4px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
backdrop-filter: blur( 20.0px );
-webkit-backdrop-filter: blur( 20.0px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );

@media screen and (max-width: 400px) {
  padding: 32px 32px;
}
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #4D2A22;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #E0AC69;
  transition: all 0.5s ease-in-out;
	font-size:16px;
  &:focus {
    color:#714137;
  }
`;
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  width: 200px;
  outline:none;
  border: none;
  border: 1px solid #714137;
  &:focus {
    outline:none;
    border:none;	
    border:1px solid #E0AC69;
  }
`;

export const FormButton = styled.button`
  background:#fff;
  color:#C68642;
  position:relative;
  height:40px;
  font-size:1.2em;
  padding:0 1em;
  cursor:pointer;
  transition:800ms ease all;
  outline:none;
  margin-top: 20px;
  border: 2px solid #714137;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #714137;
    color: #fff;
    border: 2px solid #fff;
  }
  border-radius: 15px;
  
`;
export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #E0AC69;
  font-size: 14px;
`;

export const FormImage = styled.img`
  height: 80px;
  width: 80px;
`;
