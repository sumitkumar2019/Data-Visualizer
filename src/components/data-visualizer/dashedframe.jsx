import React, { Component } from "react";
class DashedFrame extends Component {
  drag = e => {
    e.dataTransfer.setData("text", e.currentTarget.id);
  };
  drop = e => {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.currentTarget.appendChild(document.getElementById(data));
    document.getElementById(data).style.display = "none";
  };
  allowDrop = e => {
    e.preventDefault();
  };
  render() {
    const {
      id,
      name,
      iconName,
      dragToJoin,
      join,
      transform,
      output,
      fileAdded,
      csvTransform,
      tableCreated,
      onDataFrameJoinLabelClick,
      onDataTransformLabelClick,
      onSelectOutputFileLabelClick,
      onCSVFileAddedLabelClick,
      onCSVDataTransformLabelClick,
      onCSVTableCreatedLabelClick
    } = this.props;
    if (dragToJoin) {
      return (
        <span
          id={id}
          className="dashed-label cursor"
          draggable="true"
          onDragStart={this.drag}
        >
          {iconName && <i className={`${iconName}`} aria-hidden="true"></i>}
          {name}
        </span>
      );
    }
    if (join) {
      return (
        <span
          className="dashed-label cursor"
          onDrop={this.drop}
          onDragOver={this.allowDrop}
          onClick={onDataFrameJoinLabelClick}
        >
          {iconName && <i className={`${iconName}`} aria-hidden="true"></i>}
          {name}
        </span>
      );
    }
    if (transform) {
      return (
        <span
          className="dashed-label cursor"
          onClick={onDataTransformLabelClick}
        >
          {iconName && <i className={`${iconName}`} aria-hidden="true"></i>}
          {name}
        </span>
      );
    }
    if (output) {
      return (
        <span
          className="dashed-label cursor"
          onClick={onSelectOutputFileLabelClick}
        >
          {iconName && <i className={`${iconName}`} aria-hidden="true"></i>}
          {name}
        </span>
      );
    }
    if (fileAdded) {
      return (
        <span
          className="dashed-label cursor"
          onClick={onCSVFileAddedLabelClick}
        >
          {iconName && <i className={`${iconName}`} aria-hidden="true"></i>}
          {name}
        </span>
      );
    }
    if (tableCreated) {
      return (
        <span
          className="dashed-label cursor"
          onClick={onCSVTableCreatedLabelClick}
        >
          {iconName && <i className={`${iconName}`} aria-hidden="true"></i>}
          {name}
        </span>
      );
    }
    if (csvTransform) {
      return (
        <span
          className="dashed-label cursor"
          onClick={onCSVDataTransformLabelClick}
        >
          {iconName && <i className={`${iconName}`} aria-hidden="true"></i>}
          {name}
        </span>
      );
    }
    return (
      <span className="dashed-label cursor">
        {iconName && <i className={`${iconName}`} aria-hidden="true"></i>}
        {name}
      </span>
    );
  }
}

export default DashedFrame;
