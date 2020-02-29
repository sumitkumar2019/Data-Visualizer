import React, { Component } from "react";
import DataPreview from "./data-preview/dataPreview";
import Visualizer from "./data-visualizer/visualizer";
import DataFormat from "./data-format/dataFormat";
import DataSources from "./data-source/dataSources";
import {
  getTableRecords,
  createSelectQueryForTables,
  appendIdsForTables,
  appendOrderByClause,
  executeQuery
} from "../services/mysql-data-services";
class DataVisualizer extends Component {
  state = {
    selectedFormat: { mysql: false, csv: false },
    credentials: {
      username: "",
      password: "",
      ipaddress: ""
    },

    previewData: {},
    joinTables: [],
    primaryKeys: [],
    selectedPrimaryKeys: [],
    selectedColumns: [],
    order: "ASC",
    enableKeyCard: false,
    enableOutputCard: false,
    enableSortCard: false,
    enableTransformCard: false,
    mappingRecords: {},
    outputFile: "",
    query: ""
  };
  handleDataFormatSelect = e => {
    console.log("handleDataFormatSelect");
  };
  handleDataSourceColumnSelect = (columnName, checked) => {
    const selectedColumns = [...this.state.selectedColumns];
    if (checked) {
      selectedColumns.push(columnName);
    } else {
      const index = selectedColumns.indexOf(columnName);
      delete selectedColumns[index];
    }
    this.setState({ selectedColumns });
    console.log("handleDataSourceColumnSelect");
  };
  handleDatabaseFormatSubmit = (name, credentials) => {
    console.log("handleDataFormatSubmit");
    const selectedFormat = { ...this.state.selectedFormat };
    if (name && name === "mysql") {
      selectedFormat.mysql = true;
      this.setState({ selectedFormat, credentials });
    }
  };
  handleCSVFormatSubmit = name => {
    const selectedFormat = { ...this.state.selectedFormat };
    if (name && name === "csv") {
      selectedFormat.csv = true;
      this.setState({ selectedFormat });
    }
    console.log("call server for csv format submission");
  };
  handlePreviewButtonClick = async tableName => {
    const records = await getTableRecords(tableName);
    this.setState({ previewData: records });
    console.log("handlePreviewButtonClick");
  };
  handleTableButtonClick = tableName => {
    const joinTables = [...this.state.joinTables];
    const selectedColumns = [...this.state.selectedColumns];
    console.log("handleTableButtonClick");
    const index = joinTables.indexOf(tableName);
    if (index <= -1) {
      joinTables.push(tableName);
    }
    let query = this.state.query;
    query = createSelectQueryForTables(joinTables, selectedColumns);
    console.log(query);
    this.setState({ joinTables, query });
  };
  handleDataFrameJoinLabelClick = e => {
    this.setState({ enableKeyCard: true });
  };
  handleDataTransformLabelClick = e => {
    this.setState({ enableTransformCard: true, enableSortCard: true });
    console.log("handleDataTransformLabelClick");
  };
  handleSelectOutputFileTypeLabelClick = outputFile => {
    this.setState({ enableOutputCard: true, outputFile });
    console.log("handleSelectOutputFileTypeLabelClick");
  };
  handleCSVFileAddedLabelClick = e => {
    console.log("handleCSVFileAddedLabelClick");
  };
  handleCSVDataTransformLabelClick = e => {
    console.log("handleCSVDataTransformLabelClick");
  };
  handleCSVTableCreatedLabelClick = e => {
    console.log("handleCSVTableCreatedLabelClick");
  };
  handleOuputFileTypeSelect = e => {
    console.log("handleOuputFileTypeSelect");
  };
  handleMappingButtonClick = e => {
    const { query, outputFile } = this.state;
    let tempMappingRecords = executeQuery(query);
    this.setState({ mappingRecords: tempMappingRecords });
    if (outputFile === "CSV") {
      //Prepare and Download csv file
    }
    console.log("handleMappingButtonClick");
  };
  handleSortTypeSelection = order => {
    this.setState({ order });
    console.log("handleSortTypeSelection");
  };
  handleSortFieldSelection = orderColumn => {
    const { query, order } = this.state;
    let tempQuery = query;
    tempQuery = appendOrderByClause(order, tempQuery, orderColumn);
    this.setState({ query: tempQuery });
    console.log("handleSortFieldSelection" + tempQuery);
  };
  handlePrimaryKeySelect = (primaryKeyField, checked) => {
    const { query } = this.state;
    const selectedPrimaryKeys = [...this.state.selectedPrimaryKeys];
    if (checked) {
      selectedPrimaryKeys.push(primaryKeyField);
    } else {
      const index = selectedPrimaryKeys.indexOf(primaryKeyField);
      delete selectedPrimaryKeys[index];
    }
    let tempQuery = query;
    tempQuery = appendIdsForTables(selectedPrimaryKeys, tempQuery);
    console.log("handleDataFrameJoinLabelClick" + tempQuery);
    this.setState({ query: tempQuery, selectedPrimaryKeys });
    console.log("handlePrimaryKeySelect" + selectedPrimaryKeys);
    console.log("handlePrimaryKeySelect" + tempQuery);
  };
  handleOnPrimaryKeyColumnSelection = (columnName, checked) => {
    const primaryKeys = [...this.state.primaryKeys];
    if (checked) {
      primaryKeys.push(columnName);
    } else {
      const index = primaryKeys.indexOf(columnName);
      delete primaryKeys[index];
    }
    console.log("PrimaryKey: " + primaryKeys);
    this.setState({ primaryKeys });
    console.log("handleOnPrimaryKeyColumnSelection");
  };

  render() {
    const {
      selectedFormat,
      credentials,
      selectedColumns,
      primaryKeys,
      previewData,
      joinTables,
      enableKeyCard,
      enableOutputCard,
      enableSortCard,
      enableTransformCard,
      mappingRecords
    } = this.state;
    return (
      <main role="main" className="container-fluid mt-5 pt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-5">
              <div className=" container">
                <div className="row">
                  <div className="col-sm-6">
                    <DataFormat
                      selectedFormat={selectedFormat}
                      onFormatSelect={this.handleDataFormatSelect}
                      onDatabaseFormatSubmit={this.handleDatabaseFormatSubmit}
                      onCSVFormatSubmit={this.handleCSVFormatSubmit}
                    />
                  </div>
                  <div className="col-sm-6">
                    <DataSources
                      credentials={credentials}
                      selectedFormat={selectedFormat}
                      onSourceColumnSelect={this.handleDataSourceColumnSelect}
                      onPreviewButtonClick={this.handlePreviewButtonClick}
                      onTableButtonClick={this.handleTableButtonClick}
                      onPrimaryKeyColumnSelection={
                        this.handleOnPrimaryKeyColumnSelection
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <DataPreview
                      selectedFormat={selectedFormat}
                      previewData={previewData}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-7">
              <Visualizer
                joinTables={joinTables}
                mappingRecords={mappingRecords}
                selectedColumns={selectedColumns}
                primaryKeys={primaryKeys}
                enableKeyCard={enableKeyCard}
                enableOutputCard={enableOutputCard}
                enableSortCard={enableSortCard}
                enableTransformCard={enableTransformCard}
                selectedFormat={selectedFormat}
                onDataFrameJoinLabelClick={this.handleDataFrameJoinLabelClick}
                onDataTransformLabelClick={this.handleDataTransformLabelClick}
                onSelectOutputFileLabelClick={
                  this.handleSelectOutputFileTypeLabelClick
                }
                onCSVFileAddedLabelClick={this.handleCSVFileAddedLabelClick}
                onCSVDataTransformLabelClick={
                  this.handleCSVDataTransformLabelClick
                }
                onCSVTableCreatedLabelClick={
                  this.handleCSVTableCreatedLabelClick
                }
                onOuputFileTypeSelect={this.handleOuputFileTypeSelect}
                onMappingButtonClick={this.handleMappingButtonClick}
                onSortTypeSelect={this.handleSortTypeSelection}
                onSortFieldSelect={this.handleSortFieldSelection}
                onSortCheckBoxSelect={this.handleSortCheckBoxSelect}
                onPrimaryKeySelect={this.handlePrimaryKeySelect}
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default DataVisualizer;
