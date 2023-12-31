import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().min(2).label("Name"),
  };

  doSubmit = () => {
    try {
      window.location = "/movies";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <br />
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", "email")}
          <br />
          {this.renderInput("password", "Password", "password")}
          <br />
          {this.renderInput("name", "Name")}
          <br />
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
