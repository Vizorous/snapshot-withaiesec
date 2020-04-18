//!NOT A REUSABLE CONTROL STRUCTURE
import React, { useContext } from "react";
import { StateContext } from "../App";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

export default function TextAlignmentControl({
  headline,
  controlData,
  handleSwitch,
  handleChange,
}) {
  const state = useContext(StateContext);
  return (
    <>
      {controlData && (
        <div className="controls__button-group--function-control">
          {headline && <h5>{headline}</h5>}
          <ToggleButtonGroup
            type="radio"
            name="buttons-group--function-control"
            defaultValue={state.function}>
            {controlData.map((item, index) => (
              <ToggleButton
                size="lg"
                onChange={handleChange("function")}
                value={item.value}
                key={item.buttonKey}
                name={item.value}>
                {/* {item.icon &&
                  React.createElement(icons[item.icon], { key: item.iconKey })} */}
                {item.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </div>
      )}
    </>
  );
}
