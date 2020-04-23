import React, { useContext } from "react";
import { StateContext } from "../App";
import { Form } from "react-bootstrap";

export default function RangeControl({
  headline,
  controlData,
  handleChange,
  handleSwitch,
  compName,
}) {
  const state = useContext(StateContext);
  return (
    <div>
      {controlData && (
        <div className={`controls__${compName}`}>
          {headline && <h5>{headline}</h5>}
          {controlData.map((item, index) => {
            return (
              <Form.Group controlId={item.id} key={item.groupKey}>
                <Form.Label key={item.labelKey}>{`${item.label} :  ${
                  state[item.id]
                }`}</Form.Label>
                <Form.Control
                  type="range"
                  custom
                  min={item.min}
                  max={item.max}
                  value={state[item.id]}
                  step={item.step !== undefined ? item.step : 1}
                  onChange={handleChange(item.id)}
                />
              </Form.Group>
            );
          })}
        </div>
      )}
    </div>
  );
}
