import React, { Component } from 'react';
import { logout, getUserFromLocalStorage } from '../../apiUtils';
import {
  FormButton
} from './authStyling';


export default class LogOutPage extends Component {
  state = {
    email: '',
    password: '',
    userlogout: getUserFromLocalStorage()
  };

  onLogOutSubmit = async (e) => {
    e.preventDefault();
    await logout();
    localStorage.clear();
    alert('you are looged out');
    // window.location.replace('/');
  };

  render() {
    return (
      <div>
     
                <FormButton type="submit" onClick={this.onLogOutSubmit}>
                  LOGOUT
                </FormButton>

      </div>
    );
  }
}
