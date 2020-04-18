//!NOT A REUSABLE CONTROLLER
import React, { useContext } from "react";
import { StateContext } from "../App";
import {
  ToggleButtonGroup,
  ToggleButton,
  Form,
  Col,
  Row,
} from "react-bootstrap";

export default function TextAlignmentControl({
  headline,
  controlData,
  handleSwitch,
  handleChange,
}) {
  const state = useContext(StateContext);
  return (
    <>
      {controlData && (
        <Form.Group as={Row}>
          {headline && (
            <Form.Label column sm={3} style={{ maxWidth: "max-content" }}>
              {headline}
            </Form.Label>
          )}
          <Col sm={4} style={{ maxWidth: "max-content" }}>
            <ToggleButtonGroup
              type="radio"
              name="buttons-group--aligment-control"
              defaultValue={state.textAlign}>
              {controlData.map((item, index) => (
                <ToggleButton
                  onChange={handleChange("textAlign")}
                  value={item.value}
                  key={item.buttonKey}
                  name={item.value}>
                  {/* {item.icon &&
                      React.createElement(icons[item.icon], { key: item.iconKey })} */}
                  {item.label}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Col>
        </Form.Group>
      )}
    </>
  );
}
