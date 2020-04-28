import React, { useContext, useEffect } from "react";
import { Form } from "react-bootstrap";
import SubmitClearButtons from "./SubmitClearButtons";
import { ControlContext } from "../App";
import { useHistory } from "react-router-dom";
function Controls({ controlInfo, refNode, ControlList }) {
  const { clearState, handleChange, handleSwitch, handleGenerate } = useContext(
    ControlContext
  );
  const history = useHistory();

  useEffect(() => {
    const pathname = history.location.pathname;
    const campaign = pathname.substring(1);
    handleChange("campaign")(campaign);
  }, []);

  return (
    <Form className="controls" onSubmit={handleGenerate(refNode)}>
      {controlInfo &&
        //This Can Dynamically Render The Control Components, DO NOT TOUCH THIS
        controlInfo.map((item, index) => (
          <React.Fragment key={`${index}-fragment`}>
            {React.createElement(ControlList[item.compName], {
              key: item.compName,
              compName: item.compName,
              headline: item.headline,
              controlData: item.controlData,
              handleChange: handleChange,
              handleSwitch: handleSwitch,
            })}
            <hr key={`${index}-hr`}></hr>
          </React.Fragment>
        ))}
      {SubmitClearButtons(clearState)}
      <hr></hr>
    </Form>
  );
}
export default Controls;
