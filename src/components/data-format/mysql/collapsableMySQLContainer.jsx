import React from "react";
import MySQLLoginForm from "./mySqlLoginForm";
const CollapsableMySQLContainer = ({
  name,
  onFormatSelect,
  onDatabaseFormatSubmit
}) => {
  return (
    <nav className="navbar container-color">
      <div className="form-check">
        <label className="form-check-label mb-3">
          <input
            type="checkbox"
            name={name}
            id={name}
            className="form-check-input mb-3 navbar-toggler"
            data-toggle="collapse"
            data-target={`#collapsableMySQLNavbar`}
            onClick={onFormatSelect}
            value={name}
          />
          MySQL
        </label>
      </div>
      <div
        className="collapse navbar-collapse form-group"
        id={`collapsableMySQLNavbar`}
      >
        <MySQLLoginForm
          name={name}
          onDatabaseFormatSubmit={onDatabaseFormatSubmit}
        />
      </div>
    </nav>
  );
};
export default CollapsableMySQLContainer;
