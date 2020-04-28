import React from "react";
import { StateContext } from "../App";
import { Form } from "react-bootstrap";

export default function TextInputControl({
  headline,
  controlData,
  handleChange,
  handleSwitch,
  compName,
}) {
  // console.log(key);

  return (
    <StateContext.Consumer>
      {(state) => (
        <>
          {controlData && (
            <div className={`controls__${compName}`}>
              {headline && <h5>{headline}</h5>}
              {controlData &&
                controlData.map((item) => (
                  <Form.Group key={item.groupKey} controlId={item.id}>
                    <Form.Label key={item.labelKey}>{item.label}</Form.Label>
                    <Form.Control
                      type={item.type || undefined}
                      placeholder={item.placeholder}
                      as={item.as || undefined}
                      key={item.controlKey}
                      value={state[item.id]}
                      onChange={handleChange(item.id)}
                    />
                    {item.desc && (
                      <Form.Text className="text-muted" key={item.desc.key}>
                        {item.desc.text}
                      </Form.Text>
                    )}
                  </Form.Group>
                ))}
            </div>
          )}
        </>
      )}
    </StateContext.Consumer>
  );
}
//Wrapper Function that renders Text Control
