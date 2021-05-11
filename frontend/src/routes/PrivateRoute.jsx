import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const PrivateRoute = ({component: Component, ...rest}) => {
  const isTokenExist = useSelector((state) => state.token);
  return (<Route {...rest} render={props => !isTokenExist ? <Redirect to="/" /> : <Component {...props} />} />);
};

export default PrivateRoute;