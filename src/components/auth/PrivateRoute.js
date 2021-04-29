
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { login } from '../../apiUtils'

const PrivateRoute = ({ render: Component, restricted, ...rest }) => {
  return (
    
    <Route {...rest} render={(props) => (
        login() && restricted ? 
          <Redirect to="/login" />

         : <Component {...props} />

        )} />
  );
};

export default PrivateRoute;
