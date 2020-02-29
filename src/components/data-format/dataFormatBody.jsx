import React from "react";
import config from "../../config/app-config.json";
import CollapsableMySQLContainer from "./mysql/collapsableMySQLContainer";
import CollapsableCSVContainer from "./csv/collapsableCSVContainer";
const DataFormatBody = ({
  selectedFormat,
  onFormatSelect,
  onDatabaseFormatSubmit,
  onCSVFormatSubmit
}) => {
  const { mysql, csv } = config.sources;
  return (
    <div className=" container data-format">
      <CollapsableMySQLContainer
        name={mysql.name}
        selectedFormat={selectedFormat}
        onFormatSelect={onFormatSelect}
        onDatabaseFormatSubmit={onDatabaseFormatSubmit}
        onCSVFormatSubmit={onCSVFormatSubmit}
      />
      <CollapsableCSVContainer
        name={csv.name}
        selectedFormat={selectedFormat}
        onFormatSelect={onFormatSelect}
        onDatabaseFormatSubmit={onDatabaseFormatSubmit}
        onCSVFormatSubmit={onCSVFormatSubmit}
      />
    </div>
  );
};

export default DataFormatBody;
