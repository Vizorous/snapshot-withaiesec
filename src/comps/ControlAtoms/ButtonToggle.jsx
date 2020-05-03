import React from "react";
import {
  Form,
  ToggleButtonGroup,
  ToggleButton,
  Container,
} from "react-bootstrap";

function ButtonToggle({
  stateKey,
  label,
  buttonData,
  defaultValue,
  handleChange,
}) {
  return (
    <Form.Group controlId={stateKey}>
      <Form.Label>{label}</Form.Label>
      <Container>
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
      </Container>
    </Form.Group>
  );
}

export default ButtonToggle;
