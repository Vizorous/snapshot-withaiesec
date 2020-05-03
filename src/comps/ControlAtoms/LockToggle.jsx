import React from "react";
import {
  Form,
  ToggleButtonGroup,
  ToggleButton,
  Container,
} from "react-bootstrap";

function LockToggle({
  stateKey,
  label,
  buttonData,
  defaultValue,
  handleChange,
}) {
  return (
    <Form.Group
      controlId={stateKey}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Form.Label>{label}</Form.Label>
      <ToggleButtonGroup
        type="radio"
        name={`buttons-group--${stateKey}`}
        defaultValue={defaultValue}>
        {buttonData.map((item, index) => (
          <ToggleButton
            onChange={handleChange(stateKey)}
            value={item.value}
            name={item.value}
            key={item.value}>
            {item.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Form.Group>
  );
}

export default LockToggle;
