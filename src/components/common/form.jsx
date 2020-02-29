import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import File from "./file";
import _ from "lodash";
class Form extends Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const options = {
      abortEarly: false
    };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = {
      [name]: this.schema[name]
    };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  validateMimeType = file => {
    const types = [".csv", "text/csv"];
    let error = null;
    if (types.every(type => file.type !== type)) {
      error = file.type + " is not a supported format\n";
    }
    return error;
  };

  validateFileSize = file => {
    let size = 2000000;
    let error = null;
    if (file.size > size) {
      error = file.type + "is too large, please pick a smaller file\n";
    }
    return error;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
  handleFileChange = async ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const data = { ...this.state.data };
    let errorMessage = this.validateMimeType(input.files[0]);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      errorMessage = this.validateFileSize(input.files[0]);
      if (errorMessage) {
        errors[input.name] = errorMessage;
      } else {
        delete errors[input.name];
      }
    }
    this.setState({ errors });
    if (!_.isEmpty(errors)) return;
    data[input.name] = input.value;
    data["file"] = input.files[0];
    await this.setState({ data, errors });
    this.dofileUpload();
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }
  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
  renderFile(name, label) {
    const { data, errors } = this.state;
    return (
      <File
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleFileChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
