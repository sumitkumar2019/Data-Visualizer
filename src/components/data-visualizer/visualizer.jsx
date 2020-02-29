import React from "react";
import VisulalizerBody from "./visualizerBody";
import config from "../../config/app-config.json";
const Visualizer = ({
  selectedFormat,
  joinTables,
  selectedColumns,
  primaryKeys,
  enableKeyCard,
  enableOutputCard,
  enableSortCard,
  enableTransformCard,
  mappingRecords,
  onDataFrameJoinLabelClick,
  onDataTransformLabelClick,
  onSelectOutputFileLabelClick,
  onCSVFileAddedLabelClick,
  onCSVDataTransformLabelClick,
  onCSVTableCreatedLabelClick,
  onOuputFileTypeSelect,
  onMappingButtonClick,
  onSortTypeSelect,
  onSortFieldSelect,
  onSortCheckBoxSelect,
  onPrimaryKeySelect
}) => {
  return (
    <div className=" container">
      <div className="col-sm-12">
        <div className="row">
          <h5>{config.dataVisualizer.label.header}</h5>
        </div>
        <div className="row">
          <VisulalizerBody
            mappingRecords={mappingRecords}
            selectedColumns={selectedColumns}
            primaryKeys={primaryKeys}
            enableKeyCard={enableKeyCard}
            enableOutputCard={enableOutputCard}
            enableSortCard={enableSortCard}
            enableTransformCard={enableTransformCard}
            joinTables={joinTables}
            selectedFormat={selectedFormat}
            onDataFrameJoinLabelClick={onDataFrameJoinLabelClick}
            onDataTransformLabelClick={onDataTransformLabelClick}
            onSelectOutputFileLabelClick={onSelectOutputFileLabelClick}
            onCSVFileAddedLabelClick={onCSVFileAddedLabelClick}
            onCSVDataTransformLabelClick={onCSVDataTransformLabelClick}
            onCSVTableCreatedLabelClick={onCSVTableCreatedLabelClick}
            onOuputFileTypeSelect={onOuputFileTypeSelect}
            onMappingButtonClick={onMappingButtonClick}
            onSortTypeSelect={onSortTypeSelect}
            onSortFieldSelect={onSortFieldSelect}
            onSortCheckBoxSelect={onSortCheckBoxSelect}
            onPrimaryKeySelect={onPrimaryKeySelect}
          />
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
