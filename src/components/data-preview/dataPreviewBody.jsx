import React from "react";
import Table from "../common/table";
const DataPreviewBody = ({ selectedItem, previewData }) => {
  return (
    <div className=" container text-dark m-10 data-preview">
      <Table selectedItem={selectedItem} previewData={previewData} />
    </div>
  );
};

export default DataPreviewBody;
