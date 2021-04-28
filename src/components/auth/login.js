import React, { Component } from 'react';
import { login, putUserInLocalStorage } from '../../apiUtils';

export default class loginPage extends Component {
  state = {
    email: '',
    password: ''
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

  onLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      // const user = await login((this.state.email, this.state.password), this.props.user.token);
      const user = await login((this.state.password, this.state.email));

      putUserInLocalStorage(user);
      console.log('YOU ARE LOGGED IN');

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
            type="email"
            placeholder="email"
            onChange={this.handleEmailChange}
          ></input>
          <input
            type="password"
            placeholder="password"
            onChange={this.handlePasswordChange}
          ></input>
          <button onClick={this.onLoginSubmit} type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}
