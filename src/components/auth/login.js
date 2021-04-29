import React, { Component } from 'react';
import { login, putUserInLocalStorage } from '../../apiUtils';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  FormImage
} from './authStyling';
import logo from '../../images/skincodelogo.gif'
import heart from '../../images/heart.gif'

export default class loginPage extends Component {
  state = {
    email: '',
    password: ''
  };

  handleEmailChange = (e) => {
    e.preventDefault();

    this.setState({
      email: e.target.value
    });
  };

  handlePasswordChange = (e) => {
    e.preventDefault();
   
    this.setState({
      password: e.target.value
    });
  };

  onLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login(this.state.email, this.state.password);
      console.log(user);
      putUserInLocalStorage(user);
      console.log('YOU ARE LOGGED IN');
      // return user;
      window.location.replace('/findmyskincode');
    } catch (err) {
       await this.setState({ error: err.response.body.message});
    }
  };

  render() {
    let err_comp;
    let error =  this.state.error
    if (error) {
      err_comp = <h5 style={{ color: 'red' }}> Uh oh, login failed. Please try again.</h5>
    } 
    else {
      err_comp = "";
    }
    return (
      <div>
            <Container>
            <FormWrap>
              <Icon to='/'>
                <img className="logo" src={logo} alt="logo"></img></Icon>
              <FormContent>
                <Form action='#'>
                  <FormImage src={heart} alt="heart"></FormImage>
                  <FormH1>Sign in to your account</FormH1>
                  <FormLabel htmlFor='for'>Email</FormLabel>
                  <FormInput onChange={this.handleEmailChange} type='email' required />
                  <FormLabel htmlFor='for'>Password</FormLabel>
                  <FormInput onChange={this.handlePasswordChange}type='password' required />
                  <FormButton type='submit' onClick={this.onLoginSubmit} >Login</FormButton>
                  {err_comp}
                </Form>
              </FormContent>
            </FormWrap>
          </Container>
          </div>
    );
  }
}
