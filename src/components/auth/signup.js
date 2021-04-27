import React, { Component } from 'react';
import { signup, putUserInLocalStorage } from '../../apiUtils';

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
      </div>
    );
  }
}

