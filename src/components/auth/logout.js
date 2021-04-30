import React, { Component } from 'react';
import { logout, getUserFromLocalStorage } from '../../apiUtils';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormButton
} from './authStyling';
import logo from '../../images/skincodelogo.gif';

export default class logoutPage extends Component {
  state = {
    email: '',
    password: '',
    userlogout: getUserFromLocalStorage()
  };

  onLogOutSubmit = async (e) => {
    e.preventDefault();

    await logout();
    localStorage.clear();
    window.location.replace('/findmyskincode');
  };

  render() {
    return (
      <div>
        <Container>
          <FormWrap>
            <Icon to="/">
              <img className="logo" src={logo} alt="logo"></img>
            </Icon>
            <FormContent>
              <Form action="#">
                <FormButton type="submit" onClick={this.onLogOutSubmit}>
                  LOGOUT
                </FormButton>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </div>
    );
  }
}
