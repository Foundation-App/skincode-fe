import React, { Component } from 'react';
import { signup, putUserInLocalStorage } from '../../apiUtils';
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
import logo from '../../images/skincodelogo.gif';
import heart from '../../images/wait.gif';

export default class signupPage extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  handleNameChange = (e) => {
    e.preventDefault();

    this.setState({
      name: e.target.value
    });
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

  onSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signup(
        this.state.name,
        this.state.email,
        this.state.password
      );
      putUserInLocalStorage(user);

      window.location.replace('/login');
    } catch (err) {
      await this.setState({ error: err.response.body.message });
    }
  };

  render() {
    let error_comp;
    let error = this.state.error;
    if (error) {
      error_comp = (
        <h5 style={{ color: 'red' }}>
          {' '}
          Uh oh, sign up failed. Please try new credentials.
        </h5>
      );
    } else {
      error_comp = '';
    }
    return (
      <div>
        <Container>
          <FormWrap>
            <Icon to="/">
              <img className="logo" src={logo} alt="logo"></img>
            </Icon>
            <FormContent>
<<<<<<< HEAD
<<<<<<< HEAD
              <Form action="#">
                <FormImage src={heart} alt="heart"></FormImage>
                <FormH1>Sign Up for an account</FormH1>
                <FormLabel>Name</FormLabel>
                <FormInput
                  onChange={this.handleNameChange}
                  type="fname"
                  required
                />
                <FormLabel>Email</FormLabel>
                <FormInput
                  onChange={this.handleEmailChange}
                  type="email"
                  required
                />
                <FormLabel>Password</FormLabel>
                <FormInput
                  onChange={this.handlePasswordChange}
                  type="password"
                  required
                />
                <FormButton type="submit" onClick={this.onSignupSubmit}>
                  Sign Up!
                </FormButton>
                {error_comp}
=======
              <Form action='#'>
=======
                <Form action='#'>
>>>>>>> b39e639a64f7c49ad1a84e3a028ba7822b192fcc
                    <FormImage src={heart} alt="heart"></FormImage>
                    <FormH1>Sign up for an account</FormH1>
                    <FormLabel>Name</FormLabel>
                    <FormInput onChange={this.handleNameChange} type='fname' required />
                    <FormLabel>Email</FormLabel>
                    <FormInput onChange={this.handleEmailChange} type='email' required />
                    <FormLabel>Password</FormLabel>
                    <FormInput onChange={this.handlePasswordChange}type='password' required />
                    <FormButton type='submit' onClick={this.onSignupSubmit} >Sign Up!</FormButton>
                    {error_comp}
<<<<<<< HEAD
>>>>>>> 40bb470dc16f446b10590d1ce2bf1f519e20a1f3
=======
>>>>>>> b39e639a64f7c49ad1a84e3a028ba7822b192fcc
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </div>
    );
  }
}
