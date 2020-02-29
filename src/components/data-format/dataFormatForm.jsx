import React from "react";
import MySQLLoginForm from "./mysql/mySqlLoginForm";
import CSVFileUploadForm from "./csv/csvFileUploadForm";
const DataFormatForm = ({
  selectedFormat,
  onDatabaseFormatSubmit,
  onCSVFormatSubmit
}) => {
  if (selectedFormat) {
    if (selectedFormat.mysql && !selectedFormat.csv) {
      return <MySQLLoginForm onDatabaseFormatSubmit={onDatabaseFormatSubmit} />;
    } else if (!selectedFormat.mysql && selectedFormat.csv) {
      return <CSVFileUploadForm onCSVFormatSubmit={onCSVFormatSubmit} />;
    } else {
      return null;
    }
  }
};

export default DataFormatForm;
