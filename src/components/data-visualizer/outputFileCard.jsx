import React from "react";
import config from "../../config/app-config.json";
const OutputFileCard = ({
  fileTypes,
  onOuputFileTypeSelect,
  enableOutputCard
}) => {
  if (enableOutputCard) {
    return (
      <div className="card">
        <div className="container">
          <div className="row">
            <p>{config.dataVisualizer.label.outFileCard}</p>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <select
                  onClick={e => onOuputFileTypeSelect(e.currentTarget.value)}
                  className="form-control"
                  id="field"
                >
                  {fileTypes.map(file => (
                    <option key={file}>{file}</option>
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

export default OutputFileCard;
