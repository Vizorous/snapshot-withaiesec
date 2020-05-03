import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ControlContext, StateContext } from "../../App";
import { Form } from "react-bootstrap";

function TextInput(props) {
  const { handleChange } = useContext(ControlContext);
  return (
    <Form.Group controlId={props.stateKey}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type={props.type || undefined}
        placeholder={props.placeholder || undefined}
        as={props.as || undefined}
        value={props.value}
        onChange={props.handleChange(props.stateKey)}
      />
      {props.desc && (
        <Form.Text className="text-muted">{props.desc.text}</Form.Text>
      )}
    </Form.Group>
  );
}
TextInput.propTypes = {
  stateKey: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  as: PropTypes.string,
  key: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  desc: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  handleSwitch: PropTypes.func,
};

export default TextInput;
