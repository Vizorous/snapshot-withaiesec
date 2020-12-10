import React, { useContext, useEffect, useMemo, useRef } from "react";
import { Form, Tabs, Tab, Container, Button } from "react-bootstrap";
import SubmitClearButtons from "./SubmitClearButtons";
import { FunctionContext, StateContext } from "../StateContainer";
import styled from "styled-components";
import LockToggle from "./ControlAtoms/LockToggle";
import { useHistory } from "react-router-dom";
// import CheckToggle from "./ControlAtoms/CheckToggle";
import { getLockInfo, getControlInfo } from "../info";
import ControlAtomWrapper from "./Wrappers/ControlAtomWrapper";

const SpacedContainer = styled(Container).attrs({
  fluid: true,
})`
  margin-top: 16px;
  margin-bottom: 16px;
`;
function Controls({ refNode }) {
  const { clearState, handleGenerate, handleChange, handleSwitch } = useContext(
    FunctionContext
  );
  const state = useContext(StateContext);
  const controlInfo = useMemo(
    () => getControlInfo([state.editTextOnImageMode]),
    [state.editTextOnImageMode]
  );
  const lockInfo = useMemo(() => getLockInfo(), []);

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
                    <ControlAtomWrapper
                      data={innerItem}
                      stateValue={state[innerItem.stateKey]}
                      handleChange={handleChange}
                      handleSwitch={handleSwitch}></ControlAtomWrapper>
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
