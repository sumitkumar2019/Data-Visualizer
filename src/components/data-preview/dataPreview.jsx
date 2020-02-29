import React from "react";
import DataPreviewBody from "./dataPreviewBody";
import config from "../../config/app-config.json";
const DataPreview = ({ selectedItem, previewData }) => {
  return (
    <div className=" container">
      <div className="row">
        <h5>{config.dataPreview.label.header}</h5>
      </div>
      <div className="row">
        <DataPreviewBody
          selectedItem={selectedItem}
          previewData={previewData}
        />
      </div>
    </div>
  );
};

export default DataPreview;
