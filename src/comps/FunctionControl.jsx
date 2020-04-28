import React, { useContext } from "react";
import { StateContext } from "../App";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import styled from "styled-components";

const ButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 0 5vw;
`;
export default function TextAlignmentControl({
  headline,
  controlData,
  handleSwitch,
  handleChange,
  compName,
}) {
  const state = useContext(StateContext);
  return (
    <>
      {controlData && (
        <div className={`controls__${compName}`}>
          {headline && <h5>{headline}</h5>}
          <ButtonGroupContainer>
            <ToggleButtonGroup
              type="radio"
              name={`buttons-group--${compName}`}
              defaultValue={state.function}>
              {controlData.map((item, index) => (
                <ToggleButton
                  onChange={handleChange(item.id)}
                  value={item.value}
                  key={item.buttonKey}
                  name={item.value}>
                  {/* {item.icon &&
                    React.createElement(icons[item.icon], { key: item.iconKey })} */}
                  {item.label}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </ButtonGroupContainer>
        </div>
      )}
    </>
  );
}
