import React, { Component } from "react";
import { connect } from "react-redux";
import operations from "../redux/auth/operations";
import selectors from "../redux/auth/selectors";

class RegisterForm extends Component {
  state = {
    name: "",
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
    const { name, email, password } = this.state;
    const newUser = {
      name,
      email,
      password,
    };
    console.log(newUser);
    this.props.onRegister(newUser);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { name, email, password } = this.state;
    console.log(this.props.myStore);
    return (
      <>
        <form onSubmit={(evt) => handleSubmit(evt)}>
          <input
            value={name}
            name="name"
            type="text"
            onChange={(evt) => handleChange(evt)}
            placeholder="Name"
            required
          />
          <input
            value={email}
            name="email"
            type="email"
            onChange={(evt) => handleChange(evt)}
            placeholder="Email"
            required
          />
          <input
            value={password}
            name="password"
            type="password"
            onChange={(evt) => handleChange(evt)}
            placeholder="Password"
            required
          />
          <button type="submit">Register</button>
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
  onRegister: operations.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
