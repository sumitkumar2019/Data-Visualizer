import React from "react";
const Input = ({ name, type, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <input
        {...rest}
        type={type}
        name={name}
        className="form-control form-control-sm mb-3"
        id={name}
        placeholder={label}
      />
      {error && <div className="alert alert-danger ">{error}</div>}
    </div>
  );
};

export default Input;
