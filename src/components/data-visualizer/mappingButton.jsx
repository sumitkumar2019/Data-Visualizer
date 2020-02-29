import React from "react";
import config from "../../config/app-config.json";
const MappingButton = ({ onMappingButtonClick }) => {
  return (
    <div className="mx-auto">
      <button className="btn btn-primary" onClick={onMappingButtonClick}>
        {config.dataVisualizer.label.button}
      </button>
    </div>
  );
};

export default MappingButton;
