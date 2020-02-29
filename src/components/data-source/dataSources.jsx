import React from "react";
import DataSourcesBody from "./dataSourcesBody";
import config from "../../config/app-config.json";
const DataSources = ({
  selectedFormat,
  credentials,
  onSourceColumnSelect,
  onPreviewButtonClick,
  onTableButtonClick,
  onPrimaryKeyColumnSelection
}) => {
  console.log(credentials);
  return (
    <div className=" container">
      <div className="row">
        <h5>{config.dataSource.label.header}</h5>
      </div>
      <div className="row">
        <DataSourcesBody
          credentials={credentials}
          selectedFormat={selectedFormat}
          onSourceColumnSelect={onSourceColumnSelect}
          onPreviewButtonClick={onPreviewButtonClick}
          onTableButtonClick={onTableButtonClick}
          onPrimaryKeyColumnSelection={onPrimaryKeyColumnSelection}
        />
      </div>
    </div>
  );
};

export default DataSources;
