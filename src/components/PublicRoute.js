import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import selectors from "../redux/auth/selectors";

const PublicRoute = ({ isAuthenticated, restricted, component: Component, ...routeProps }) => {
  return (
    <Route
      {...routeProps}
      render={(props) => (isAuthenticated && restricted ? <Redirect to="/home" /> : <Component {...props} />)}
    />
  );
};

const mapStateToProps = (store) => {
  return {
    isAuthenticated: selectors.isAuth(store),
  };
};

export default connect(mapStateToProps)(PublicRoute);
