import React from "react";
import CSVFileUploadForm from "./csvFileUploadForm";
const CollapsableCSVContainer = ({
  name,
  onFormatSelect,
  onCSVFormatSubmit
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
            data-target={`#collapsableCSVNavbar`}
            onClick={onFormatSelect}
            value={name}
          />
          CSV
        </label>
      </div>
      <div
        className="collapse navbar-collapse form-group"
        id={`collapsableCSVNavbar`}
      >
        <CSVFileUploadForm name={name} onCSVFormatSubmit={onCSVFormatSubmit} />
      </div>
    </nav>
  );
};
export default CollapsableCSVContainer;
