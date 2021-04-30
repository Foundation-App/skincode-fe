import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ render: Component, ...rest }) => {
  if(rest.loading) return null;
  console.log(rest.user)
  return (
    <Route {...rest} render={(props) => (
        !rest.user && !rest.loading ? 
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
