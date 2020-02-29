import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import config from "../../config/app-config.json";
const KeyCard = ({ primaryKeys, onPrimaryKeySelect, enableKeyCard }) => {
  console.log(enableKeyCard);
  let count = 0;
  if (enableKeyCard) {
    return (
      <div className="card">
        <p>{config.dataVisualizer.label.keyCard}</p>
        {primaryKeys &&
          primaryKeys.map(
            key =>
              !_.isEmpty(key) && (
                <div
                  className="custom-control custom-checkbox mb-3"
                  key={key + count++}
                >
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id={key + count}
                    name="example1"
                    onChange={e =>
                      onPrimaryKeySelect(key, e.currentTarget.checked)
                    }
                  />
                  <label className="custom-control-label" htmlFor={key + count}>
                    {key}
                  </label>
                </div>
              )
          )}
        <div>
          <Link to="#">{config.dataVisualizer.label.others}</Link>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default KeyCard;
