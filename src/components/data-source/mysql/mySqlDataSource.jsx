import React, { Component } from "react";
import { getMySQLMetaData, login } from "../../../services/mysql-data-services";
import CollapsableDataContainer from "../collapsableDataContainer";
class MySQLDataSource extends Component {
  state = {
    data: [],
    errors: {}
  };

  async componentDidMount() {
    let data = [];
    try {
      const auth = await login(this.props.credentials);
      if (auth.loggedIn) {
        data = await getMySQLMetaData(this.props.credentials);
        this.setState({ data });
      }
      if (!auth.loggedIn) {
        const errors = { ...this.state.errors };
        errors["message"] = auth.message;
        console.log(errors.message);
        this.setState({ data, errors });
      }
    } catch (ex) {
      const errors = { ...this.state.errors };
      errors["message"] = ex.message;
      console.log(errors.message);
      this.setState({ data, errors });
    }
  }

  render() {
    if (this.state.errors.message) {
      return (
        <div className="alert alert-danger ">{this.state.errors.message}</div>
      );
    } else {
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
                      > {dataSource.name}
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
}

export default MySQLDataSource;
