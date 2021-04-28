import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  postion: fixed;
  
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

export const Icon = styled(Link)`
 
  width: 50px;
  height:50px;
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

export const Form = styled.form`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  text-align: center;
  max-width: 400px;
  height: auto;
  width: 100%;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
backdrop-filter: blur( 20.0px );
-webkit-backdrop-filter: blur( 20.0px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #E0AC69;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #E0AC69;
  text-align: left;
`;
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: 2px solid #C68642;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background:#fff;
  color:#C68642;
  border:none;
  position:relative;
  height:40px;
  font-size:1.6em;
  padding:0 1em;
  cursor:pointer;
  transition:800ms ease all;
  outline:none;
  margin-top: 20px;
  border: 2px solid #E3B696;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #E3B696;
    color: #fff;
  }
  
`;
export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #E0AC69;
  font-size: 14px;
`;
