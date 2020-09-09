import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import { StateContext } from "../../StateContainer";
import { useContext } from "react";

function LockToggle(props) {
  const state = useContext(StateContext);
  return (
    <Form.Group
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Form.Label>{props.label}</Form.Label>
      <div style={{ marginLeft: 16 }}>
        {props.toggleData.map((item) => (
          <Form.Check
            custom
            key={item.stateKey}
            checked={state[item.stateKey]}
            defaultChecked={item.defaultChecked}
            label={item.label}
            inline={item.inline}
            type={item.type}
            onChange={props.handleSwitch(item.stateKey)}
            id={`${item.stateKey}-toggle`}
          />
        ))}
      </div>
    </Form.Group>
  );
}
LockToggle.propTypes = {
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

export default LockToggle;
