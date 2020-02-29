import React, { Component } from "react";
import { getCSVMetaData } from "../../../services/csv-data-service";
import CollapsableDataContainer from "../collapsableDataContainer";

class CsvDataSource extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    const data = getCSVMetaData();
    this.setState({ data });
  }
  render() {
    const { source, dataSources } = this.state.data;
    const {
      selectedFormat,
      onSourceColumnSelect,
      onPreviewButtonClick,
      onTableButtonClick,
      onPrimaryKeyColumnSelection
    } = this.props;
    return (
      <div className="container">
        {dataSources &&
          dataSources.map(dataSource => (
            <div className="row" key={dataSource.name}>
              <nav className="navbar container-color">
                <div>
                  <label
                    className="navbar-toggler"
                    style={{ fontSize: "medium" }}
                    data-toggle="collapse"
                    data-target={`#collapsible${source}${dataSource.name}Navbar`}
                    aria-expanded="true"
                  >
                    > {dataSource.fileName}
                  </label>
                </div>
                <div
                  className="collapse navbar-collapse form-group"
                  id={`collapsible${source}${dataSource.name}Navbar`}
                >
                  <CollapsableDataContainer
                    tables={dataSource.tables}
                    source={source}
                    selectedFormat={selectedFormat}
                    onSourceColumnSelect={onSourceColumnSelect}
                    onPreviewButtonClick={onPreviewButtonClick}
                    onTableButtonClick={onTableButtonClick}
                    onPrimaryKeyColumnSelection={onPrimaryKeyColumnSelection}
                  />
                </div>
              </nav>
            </div>
          ))}
      </div>
    );
  }
}

export default CsvDataSource;
