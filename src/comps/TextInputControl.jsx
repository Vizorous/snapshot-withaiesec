import React from "react";
import { StateContext } from "../App";
import { Form } from "react-bootstrap";

export default function TextInputControl({
  headline,
  controlData,
  handleChange,
  handleSwitch,
}) {
  return (
    <StateContext.Consumer>
      {(state) => (
        <>
          {controlData && (
            <div className="controls__text">
              {headline && <h5>{headline}</h5>}
              {controlData &&
                controlData.map((val) => (
                  <Form.Group key={val.groupKey} controlId={val.id}>
                    <Form.Label key={val.labelKey}>{val.label}</Form.Label>
                    <Form.Control
                      type={val.type || undefined}
                      placeholder={val.placeholder}
                      as={val.as || undefined}
                      key={val.controlKey}
                      value={state[val.id]}
                      onChange={handleChange(val.id)}
                    />
                    {val.desc && (
                      <Form.Text className="text-muted" key={val.desc.key}>
                        {val.desc.text}
                      </Form.Text>
                    )}
                  </Form.Group>
                ))}
              <Form.Group controlId={"controls__toggle"}></Form.Group>
              <Form.Group controlId={"controls__toggle"} className="mb-3">
                {/* {controlData &&
                  controlData.map((val) => {
                    return ( */}
                <Form.Check
                  custom
                  inline
                  type="checkbox"
                  value={state.check}
                  label={"Testing"}
                  onChange={handleSwitch("check")}></Form.Check>
                {/* );
                  })} */}
              </Form.Group>
            </div>
          )}
        </>
      )}
    </StateContext.Consumer>
  );
}
//Wrapper Function that renders Text Control
