import React, { useContext } from "react";
import { StateContext } from "../App";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

export default function TextAlignmentControl({
  headline,
  controlData,
  handleSwitch,
  handleChange,
  compName,
}) {
  const state = useContext(StateContext);
  return (
    <>
      {controlData && (
        <div className={`controls__${compName}`}>
          {headline && <h5>{headline}</h5>}
          <ToggleButtonGroup
            type="radio"
            name={`buttons-group--${compName}`}
            defaultValue={state.function}>
            {controlData.map((item, index) => (
              <ToggleButton
                size="lg"
                onChange={handleChange(item.id)}
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
