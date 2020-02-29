import React from "react";
import config from "../../config/app-config.json";
const TransformCard = ({ enableTransformCard, onSortTypeSelect }) => {
  if (enableTransformCard) {
    return (
      <div className="card">
        <p>{config.dataVisualizer.label.transformCard}</p>
        <div className="form-group">
          <select
            onClick={e => onSortTypeSelect(e.currentTarget.value)}
            className="form-control"
            id="order"
          >
            {config.dataVisualizer.sortingOrders.map(order => (
              <option key={order}>{order}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default TransformCard;
