import React, { Component, Suspense } from "react";
import "./App.css";
import routes from "./routes";
import { Switch, Link } from "react-router-dom";
import axios from "axios";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import selectors from "./redux/auth/selectors";
import { connect } from "react-redux";
import operations from "./redux/auth/operations";
console.log(axios.defaults.baseURL);

class App extends Component {
  render() {
    const { isAuthenticated, onLogout } = this.props;
    return (
      <>
        {isAuthenticated ? (
          <button onClick={() => onLogout()}>Log Out</button>
        ) : (
          <div>
            <Link className="navText" to="/login">
              Login
            </Link>
            <Link className="navText" to="/register">
              Register
            </Link>
          </div>
        )}

        <Suspense fallback="...">
          <Switch>
            {routes.map((item) => {
              return item.private ? <PrivateRoute {...item} /> : <PublicRoute restricted={item.restricted} {...item} />;
            })}
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    isAuthenticated: selectors.isAuth(store),
  };
};

const mapDispatchToProps = {
  onLogout: operations.logout(),
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
