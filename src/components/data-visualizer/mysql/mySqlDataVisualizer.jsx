import _ from "lodash";
import React, { Component } from "react";
import OutputFileCard from "../outputFileCard";
import KeyCard from "../keyCard";
import DashedFrame from "../dashedframe";
import SortCard from "../sortCard";
import TransformCard from "../transformCard";
import MappingButton from "../mappingButton";
import TableModal from "../tableModal";

class MySQLDataVisualizer extends Component {
  state = {
    fileTypes: ["CSV", "MySQL"]
  };
  render() {
    const {
      joinTables,
      selectedColumns,
      primaryKeys,
      enableKeyCard,
      mappingRecords,
      enableOutputCard,
      enableSortCard,
      enableTransformCard,
      onDataFrameJoinLabelClick,
      onDataTransformLabelClick,
      onSelectOutputFileLabelClick,
      onOuputFileTypeSelect,
      onMappingButtonClick,
      onSortTypeSelect,
      onSortFieldSelect,
      onSortCheckBoxSelect,
      onPrimaryKeySelect
    } = this.props;
    const { fileTypes } = this.state;
    return (
      <div className=" container text-dark visualizer-body-container overflow-auto">
        <TableModal mappingRecords={mappingRecords} />
        <div className="row mx-auto">
          <div className="col-sm-4">
            {!_.isEmpty(joinTables) ? (
              joinTables.map(joinTable => (
                <div className="row m-3 p-3" key={joinTable}>
                  <DashedFrame
                    id={joinTable}
                    name={joinTable}
                    iconName="fa fa-database m-3"
                    dragToJoin="true"
                  />
                </div>
              ))
            ) : (
              <div className="row m-3 p-3">
                <DashedFrame id="d" name="D" iconName="fa fa-database m-3" />
              </div>
            )}
            <div className="row">
              <TransformCard
                onSortTypeSelect={onSortTypeSelect}
                enableTransformCard={enableTransformCard}
              />
            </div>
            <div className="row">
              <SortCard
                enableSortCard={enableSortCard}
                selectedColumns={selectedColumns}
                onSortFieldSelect={onSortFieldSelect}
                onSortCheckBoxSelect={onSortCheckBoxSelect}
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="row m-3 p-5">
              <DashedFrame
                name="Join"
                iconName="fa fa-link m-1"
                join="true"
                onDataFrameJoinLabelClick={onDataFrameJoinLabelClick}
              />
            </div>
            <div className="row">
              <div className="vl" style={{ top: "102px" }}></div>
            </div>

            <div className="row m-3 p-5">
              <DashedFrame
                name="Transform"
                transform="true"
                onDataTransformLabelClick={onDataTransformLabelClick}
              />
            </div>
            <div className="row">
              <div className="vl" style={{ top: "270px" }}></div>
            </div>
            <div className="row m-3 p-5">
              <DashedFrame
                name="Output File Type"
                output="true"
                onSelectOutputFileLabelClick={onSelectOutputFileLabelClick}
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="row">
              <KeyCard
                primaryKeys={primaryKeys}
                onPrimaryKeySelect={onPrimaryKeySelect}
                enableKeyCard={enableKeyCard}
              />
            </div>
            <div className="row">
              <OutputFileCard
                fileTypes={fileTypes}
                onOuputFileTypeSelect={onOuputFileTypeSelect}
                enableOutputCard={enableOutputCard}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <MappingButton onMappingButtonClick={onMappingButtonClick} />
        </div>
      </div>
    );
  }
}

export default MySQLDataVisualizer;
