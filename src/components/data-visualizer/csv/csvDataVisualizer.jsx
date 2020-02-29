import React, { Component } from "react";
import DashedFrame from "../dashedframe";
class CSVDataVisualizer extends Component {
  state = {
    fileTypes: ["csv", "text"]
  };
  render() {
    const {
      onCSVFileAddedLabelClick,
      onCSVDataTransformLabelClick,
      onCSVTableCreatedLabelClick
    } = this.props;
    return (
      <div className=" container text-dark visualizer-body-container">
        <div className="row mx-auto">
          <div className="col-sm-4">
            <div className="row m-3 p-3"></div>
            <div className="row m-3 p-3"></div>

            <div className="row"></div>
            <div className="row"></div>
          </div>
          <div className="col-sm-4">
            <div className="row m-3 p-5">
              <DashedFrame
                name="File Added"
                fileAdded="true"
                onCSVFileAddedLabelClick={onCSVFileAddedLabelClick}
              />
            </div>
            <div className="row">
              <div className="vl" style={{ top: "102px" }}></div>
            </div>

            <div className="row m-3 p-5">
              <DashedFrame
                name="Transform"
                csvTransform="true"
                onCSVDataTransformLabelClick={onCSVDataTransformLabelClick}
              />
            </div>
            <div className="row">
              <div className="vl" style={{ top: "270px" }}></div>
            </div>
            <div className="row m-3 p-5">
              <DashedFrame
                name="TableCreated"
                tableCreated="true"
                onCSVTableCreatedLabelClick={onCSVTableCreatedLabelClick}
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="row"></div>
            <div className="row"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default CSVDataVisualizer;
