import React from "react";
import config from "../../config/app-config.json";
const SortCard = ({ selectedColumns, onSortFieldSelect, enableSortCard }) => {
  if (enableSortCard && selectedColumns) {
    return (
      <div className="card">
        <div className="container">
          <div className="row">
            <p>{config.dataVisualizer.label.sortCard}</p>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <select
                  onClick={e => onSortFieldSelect(e.currentTarget.value)}
                  className="form-control"
                  id="field"
                >
                  {selectedColumns.map(column => (
                    <option key={column + Math.random()}>{column}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default SortCard;
