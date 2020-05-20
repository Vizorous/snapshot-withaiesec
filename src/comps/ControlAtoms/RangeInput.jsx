import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

function RangeInput(props) {
  return (
    <Form.Group controlId={props.stateKey}>
      <Form.Label>{`${props.label} : ${props.value}`}</Form.Label>
      <Form.Control
        type="range"
        custom
        min={props.min}
        max={props.max}
        value={props.value}
        step={props.step !== undefined ? props.step : 1}
        onChange={props.handleChange(props.stateKey)}
      />
    </Form.Group>
  );
}

RangeInput.propTypes = {
  stateKey: PropTypes.string,
  key: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func.isRequired,
  handleSwitch: PropTypes.func,
};

export default RangeInput;
