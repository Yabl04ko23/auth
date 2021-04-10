import React, { Component } from "react";
import { connect } from "react-redux";
import operations from "../redux/auth/operations";
import selectors from "../redux/auth/selectors";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    console.log(event.target.value);
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = this.state;
    const newUser = {
      email,
      password,
    };
    this.props.onLogin(newUser);
    this.setState({ email: "", password: "" });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { email, password } = this.state;
    return (
      <>
        <form onSubmit={(evt) => handleSubmit(evt)}>
          <input
            value={email}
            name="email"
            type="text"
            placeholder="Email"
            required
            onChange={(evt) => handleChange(evt)}
          />
          <input
            value={password}
            name="password"
            type="password"
            placeholder="Password"
            required
            onChange={(evt) => handleChange(evt)}
          />
          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    myStore: selectors.getAllUsers(store),
  };
};

const mapDispatchToProps = {
  onLogin: operations.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
