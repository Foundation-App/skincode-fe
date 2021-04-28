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
} from './authStyling';
import logo from '../../images/skincodelogo.gif'

export default class signupPage extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  handleNameChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    console.log(this.state.name);

    this.setState({
      name: e.target.value
    });
  };

  handleEmailChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    console.log(this.state.email);

    this.setState({
      email: e.target.value
    });
  };

  handlePasswordChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    this.setState({
      password: e.target.value
    });
  };

  onSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await signup(this.state.name, this.state.email, this.state.password);
      putUserInLocalStorage(user)
      return user;
    } catch (err) {
      console.log(err);
    }
  };


  render() {
    return (
      <div>
      {/* <div>
        <form>
        <input
            type="name"
            placeholder="name"
            onChange={this.handleNameChange}
          ></input>
          <input
            type="email"
            placeholder="email"
            onChange={this.handleEmailChange}
          ></input>
          <input
            type="password"
            placeholder="password"
            onChange={this.handlePasswordChange}
          ></input>
          <button onClick={this.onSignupSubmit} type="submit">
            Signup
          </button>
        </form>
      </div> */}
      <Container>
        <FormWrap>
          <Icon to='/'><img className="logo" src={logo} alt="logo"></img></Icon>
            <FormContent>
              <Form action='#'>
                    <FormH1>Sign Up to your account</FormH1>
                    <FormLabel>Name</FormLabel>
                    <FormInput onChange={this.handleNameChange} type='fname' required />
                    <FormLabel>Email</FormLabel>
                    <FormInput onChange={this.handleEmailChange} type='email' required />
                    <FormLabel>Password</FormLabel>
                    <FormInput onChange={this.handlePasswordChange}type='password' required />
                    <FormButton type='submit' onClick={this.onSignupSubmit} >Sign Up!</FormButton>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
              
      </div>
    );
  }
}

