import React from "react";
const File = ({ name, label, error, onChange }) => {
  return (
    <div className="form-group">
      <div className="custom-file">
        <input
          type="file"
          name={name}
          className="custom-file-input mb-3 form-control-sm"
          id={name}
          onChange={onChange}
        />
        <label className="custom-file-label mb-3" htmlFor="cFile">
          {label}
        </label>
        {error && <div className="alert alert-danger ">{error}</div>}
      </div>
    </div>
  );
};
export default File;
