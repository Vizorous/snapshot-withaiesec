import React from "react";
import PropTypes from "prop-types";
import { Form, Container } from "react-bootstrap";
import { StateContext } from "../../App";
import { useContext } from "react";

function CheckToggle(props) {
  const state = useContext(StateContext);
  return (
    <Form.Group>
      <Form.Label>{props.label}</Form.Label>
      <Container>
        {props.toggleData.map((item) => (
          <Form.Check
            custom
            checked={state[item.stateKey]}
            label={item.label}
            inline={item.inline}
            type={item.type}
            onChange={props.handleSwitch(item.stateKey)}
            id={`${item.stateKey}-toggle`}
          />
        ))}
      </Container>
    </Form.Group>
  );
}
CheckToggle.propTypes = {
  toggleData: PropTypes.arrayOf(
    PropTypes.shape({
      stateKey: PropTypes.string,
      label: PropTypes.string,
      type: PropTypes.string,
      key: PropTypes.string,
      inline: PropTypes.bool,
    })
  ),
  label: PropTypes.string,
  handleSwitch: PropTypes.func.isRequired,
  handleChange: PropTypes.func,
};

export default CheckToggle;
