import React, { useContext } from "react";
import { StateContext, FunctionContext } from "../../../App";
import styled from "styled-components";
import Draggable from "react-draggable";
import TextGenerator from "./TextGenerator";
const DraggableContainer = styled.div`
  pointer-events: none;
  position: absolute;
  height: inherit;
  width: inherit;
`;

export default function DraggableText({ reference }) {
  const state = useContext(StateContext);
  const { handleDrag } = useContext(FunctionContext);
  return (
    <DraggableContainer className="draggable-container">
      <Draggable
        bounds="parent"
        onStart={!state.textLock ? () => true : () => false}
        onDrag={handleDrag}
        scale={state.sizeControl}
        position={state.controlledPosition}>
        <div style={{ display: "inline-block", maxWidth: "fit-content" }}>
          <TextGenerator
            enableDrag={!state.textLock}
            text={state.text}
            fontSize={state.fontSize}
            lineHeight={state.lineHeight}
            accentColor={state.accentColor}
            textAlign={state.textAlign}
            reference={reference}></TextGenerator>
        </div>
      </Draggable>
    </DraggableContainer>
  );
}
