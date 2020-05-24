import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import { AddedLengthsContext } from "../../pages/Moment";
function MomentStatelessRangeInput(props) {
  const {
    [`set${props.stateKey}`]: setAddedLength,
    [`${props.stateKey}`]: addedLength,
  } = useContext(AddedLengthsContext);
  // debugger;
  // console.log(addedLengths[props.stateKey], props.stateKey);
  return (
    <Form.Group controlId={props.stateKey}>
      <Form.Label>{`${props.label} : ${addedLength}`}</Form.Label>
      <Form.Control
        type="range"
        custom
        min={props.min}
        max={props.max}
        value={addedLength.toString()}
        step={props.step !== undefined ? props.step : 1}
        onChange={(e) => {
          setAddedLength(
            Number(e.currentTarget.value) !== NaN
              ? Number(e.currentTarget.value)
              : e.currentTarget.value
          );
        }}
      />
    </Form.Group>
  );
}

MomentStatelessRangeInput.propTypes = {
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

export default MomentStatelessRangeInput;
