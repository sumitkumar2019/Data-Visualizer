import React from "react";
import MySQLDataVisualizer from "./mysql/mySqlDataVisualizer";
import CSVDataVisualizer from "./csv/csvDataVisualizer";
const VisulalizerBody = ({
  selectedFormat,
  selectedColumns,
  primaryKeys,
  joinTables,
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
    <div className=" container text-white visualizer-body">
      {selectedFormat && !selectedFormat.mysql && !selectedFormat.csv}
      {selectedFormat && selectedFormat.mysql && (
        <MySQLDataVisualizer
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
      )}
      {selectedFormat && selectedFormat.csv && (
        <CSVDataVisualizer
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
      )}
    </div>
  );
};

export default VisulalizerBody;
