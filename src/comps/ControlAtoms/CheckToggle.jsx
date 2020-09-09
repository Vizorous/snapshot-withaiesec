import React from "react";
import PropTypes from "prop-types";
import { Form, Container } from "react-bootstrap";
import { StateContext } from "../../StateContainer";
import { useContext } from "react";

function CheckToggle(props) {
  const state = useContext(StateContext);
  const renderCheck = () => {
    return props.toggleData.map((item) => (
      <Form.Check
        custom
        key={item.stateKey}
        defaultChecked={item.defaultChecked}
        checked={state[item.stateKey]}
        label={item.label}
        inline={item.inline}
        type={item.type}
        onChange={props.handleSwitch(item.stateKey)}
        id={`${item.stateKey}-toggle`}
      />
    ));
  };

  return (
    <Form.Group>
      {props.label && <Form.Label>{props.label}</Form.Label>}
      {props.label ? <Container>{renderCheck()}</Container> : renderCheck()}
    </Form.Group>
  );
}
CheckToggle.propTypes = {
  toggleData: PropTypes.arrayOf(
    PropTypes.shape({
      defaultChecked: PropTypes.bool,
      stateKey: PropTypes.string,
      label: PropTypes.string,
      type: PropTypes.string,
      inline: PropTypes.bool,
    })
  ),
  label: PropTypes.string,
  handleSwitch: PropTypes.func.isRequired,
  handleChange: PropTypes.func,
};

export default CheckToggle;
