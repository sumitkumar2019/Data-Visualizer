import React from "react";
import Joi from "joi-browser";
import Form from "../../common/form";
class MySQLLoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      ipaddress: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password"),
    ipaddress: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    const { name, onDatabaseFormatSubmit } = this.props;
    onDatabaseFormatSubmit(name, this.state.data);
  };

  render() {
    return (
      <div className="form-group">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("ipaddress", "Ip Address")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default MySQLLoginForm;
