import React, { Component } from "react";
class CollapsableDataContainer extends Component {
  state = {};
  render() {
    const {
      tables,
      selectedFormat,
      onSourceColumnSelect,
      onPreviewButtonClick,
      onTableButtonClick,
      onPrimaryKeyColumnSelection
    } = this.props;
    return tables.map(table => (
      <div className=" container container-color" key={table.name}>
        <div className="row">
          {!selectedFormat.csv && selectedFormat.mysql ? (
            <div className="col-sm-4">
              <button
                className="btn btn-sm btn-light m-2 w-30 rounded"
                onClick={() => onTableButtonClick(table.name)}
              >
                {table.name}
              </button>
            </div>
          ) : (
            <div className="col-sm-4">
              <button
                className="btn btn-sm btn-light m-2 w-30 rounded"
                onClick={() => onPreviewButtonClick(table.name)}
              >
                Preview
              </button>
            </div>
          )}
          {!selectedFormat.csv && selectedFormat.mysql ? (
            <div className="col-sm-4">
              <button
                className="btn btn-sm btn-light m-2 w-30 rounded"
                onClick={() => onPreviewButtonClick(table.name)}
              >
                Preview
              </button>
            </div>
          ) : (
            <div className="col-sm-4"></div>
          )}

          <div className="col-sm-4">
            <label className="btn-sm m-1 w-30" disabled>
              Primary Key
            </label>
          </div>
        </div>
        {table.columns.map(column => (
          <div className="row" key={column.name}>
            <div className="col-sm-4">
              <div className="form-check">
                <label className="form-check-label btn-sm m-1 w-30">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                    onChange={e =>
                      onSourceColumnSelect(column.name, e.currentTarget.checked)
                    }
                  />
                  {column.name}
                </label>
              </div>
            </div>
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <div className="form-check">
                <label className="form-check-label btn-sm m-1 w-30">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                    onChange={e =>
                      onPrimaryKeyColumnSelection(
                        column.name,
                        e.currentTarget.checked
                      )
                    }
                  />
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    ));
  }
}
export default CollapsableDataContainer;
