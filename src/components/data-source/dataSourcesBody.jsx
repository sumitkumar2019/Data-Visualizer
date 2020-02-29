import React, { Component } from "react";
import config from "../../config/app-config.json";
import MySQLDataSource from "./mysql/mySqlDataSource";
import CsvDataSource from "./csv/csvDataSource";
class DataSourceBody extends Component {
  state = { credentials: { username: "", password: "", ipaddress: "" } };
  render() {
    const { mysql, csv } = config.sources;
    const {
      selectedFormat,
      credentials,
      onSourceColumnSelect,
      onPreviewButtonClick,
      onTableButtonClick,
      onPrimaryKeyColumnSelection
    } = this.props;

    return (
      <div className=" container data-source-body">
        {selectedFormat && !selectedFormat.mysql && !selectedFormat.csv}

        {selectedFormat && selectedFormat.mysql && !selectedFormat.csv && (
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#home">
                {mysql.label}
              </a>
            </li>
          </ul>
        )}
        {selectedFormat && !selectedFormat.mysql && selectedFormat.csv && (
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#home">
                {csv.label}
              </a>
            </li>
          </ul>
        )}
        {selectedFormat && selectedFormat.mysql && selectedFormat.csv && (
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#home">
                {mysql.label}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#menu1">
                {csv.label}
              </a>
            </li>
          </ul>
        )}

        {selectedFormat && !selectedFormat.mysql && !selectedFormat.csv}
        {selectedFormat && selectedFormat.mysql && !selectedFormat.csv && (
          <div className="tab-content">
            <div id="home" className="container tab-pane active">
              <MySQLDataSource
                credentials={credentials}
                selectedFormat={selectedFormat}
                onSourceColumnSelect={onSourceColumnSelect}
                onPreviewButtonClick={onPreviewButtonClick}
                onTableButtonClick={onTableButtonClick}
                onPrimaryKeyColumnSelection={onPrimaryKeyColumnSelection}
              />
            </div>
          </div>
        )}

        {selectedFormat && !selectedFormat.mysql && selectedFormat.csv && (
          <div className="tab-content">
            <div id="home" className="container tab-pane active">
              <CsvDataSource
                selectedFormat={selectedFormat}
                onSourceColumnSelect={onSourceColumnSelect}
                onPreviewButtonClick={onPreviewButtonClick}
                onPrimaryKeyColumnSelection={onPrimaryKeyColumnSelection}
              />
            </div>
          </div>
        )}
        {selectedFormat && selectedFormat.mysql && selectedFormat.csv && (
          <div className="tab-content">
            <div id="home" className="container tab-pane active">
              <MySQLDataSource
                selectedFormat={selectedFormat}
                onSourceColumnSelect={onSourceColumnSelect}
                onPreviewButtonClick={onPreviewButtonClick}
                onTableButtonClick={onTableButtonClick}
                onPrimaryKeyColumnSelection={onPrimaryKeyColumnSelection}
              />
            </div>
            <div id="menu1" className="container tab-pane">
              <CsvDataSource
                selectedFormat={selectedFormat}
                onSourceColumnSelect={onSourceColumnSelect}
                onPreviewButtonClick={onPreviewButtonClick}
                onPrimaryKeyColumnSelection={onPrimaryKeyColumnSelection}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default DataSourceBody;
