import React, { useContext, useEffect } from "react";
import { Form, Tabs, Tab, Container, Button } from "react-bootstrap";
import SubmitClearButtons from "./SubmitClearButtons";
import { FunctionContext, StateContext } from "../StateContainer";
import loadable from "@loadable/component";
import styled from "styled-components";
import LockToggle from "./ControlAtoms/LockToggle";
import { useHistory } from "react-router-dom";
// import CheckToggle from "./ControlAtoms/CheckToggle";

const ControlAtom = loadable((props) =>
  import(`./ControlAtoms/${props.compType}`)
);

const SpacedContainer = styled(Container).attrs({
  fluid: true,
})`
  margin-top: 16px;
  margin-bottom: 16px;
`;
function Controls({ controlInfo, refNode, lockInfo }) {
  const { clearState, handleGenerate, handleChange, handleSwitch } = useContext(
    FunctionContext
  );
  const state = useContext(StateContext);
  const history = useHistory();
  useEffect(() => {
    const pathname = history.location.pathname;
    const campaign = pathname.substring(1);
    handleChange("campaign")(campaign);
    clearState();
  }, [history, handleChange, clearState]);
  // console.log(controlInfo);
  
  return (
    <Form className="controls" onSubmit={handleGenerate(refNode)}>
      <Container>
        <Tabs defaultActiveKey={(controlInfo && controlInfo[0].key) || "Text"}>
          {controlInfo &&
            controlInfo.map((item, index) => (
              <Tab
                eventKey={item.key}
                title={item.name}
                key={`${item.key}-tab`}>
                <SpacedContainer key={`${item.key}-container`}>
                  {item.controlData.map((innerItem, innerIndex) => (
                    <ControlAtom
                      {...innerItem}
                      value={state[innerItem.stateKey]}
                      key={`${innerItem.stateKey}-elem`}
                      handleChange={handleChange}
                      handleSwitch={handleSwitch}></ControlAtom>
                  ))}
                </SpacedContainer>
              </Tab>
            ))}
        </Tabs>
        <hr></hr>
        <LockToggle {...lockInfo} handleSwitch={handleSwitch}></LockToggle>
        <hr></hr>
        {SubmitClearButtons(clearState)}
        <hr></hr>
        <div className="button-container">
          <Button>Test 1</Button> <Button>Test 2</Button> <Button></Button>
        </div>
        <hr></hr>
      </Container>
    </Form>
  );
}
export default Controls;
