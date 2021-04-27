import React, { Component } from 'react';
import { login } from '../../apiUtils';

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
      //   console.log(this.state.email, this.state.password, 'email,pass');
      const user = await login(this.state.email, this.state.password);
      return user;
    } catch (err) {
      console.log(err);
    }
    // console.log('hi im in the button!');
    // // this.setState({
    // //   email: e.target.value,
    // //   password: e.target.value
    // // });
    // console.log(
    //   this.state.email,
    //   this.state.password,
    //   'this is the current email and password'
    // );

    // await login(this.state.email, this.state.password);
  };

  render() {
    return (
      <div>
        {/* <form onSubmit={this.onLoginSubmit}> */}
        <form>
          <input
            // value={this.state.email}
            type="email"
            placeholder="email"
            onChange={this.handleEmailChange}
          ></input>
          <input
            // value={this.state.password}
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
