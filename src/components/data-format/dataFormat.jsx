import React from "react";
import DataFormatBody from "./dataFormatBody";
import config from "../../config/app-config.json";
const DataFormat = ({
  selectedFormat,
  onFormatSelect,
  onDatabaseFormatSubmit,
  onCSVFormatSubmit
}) => {
  return (
    <div className=" container">
      <div className="row">
        <h5>{config.dataFormat.label.header}</h5>
      </div>
      <div className="row">
        <DataFormatBody
          selectedFormat={selectedFormat}
          onFormatSelect={onFormatSelect}
          onDatabaseFormatSubmit={onDatabaseFormatSubmit}
          onCSVFormatSubmit={onCSVFormatSubmit}
        />
      </div>
    </div>
  );
};

export default DataFormat;
