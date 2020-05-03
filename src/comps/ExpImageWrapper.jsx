import React, { useContext, useEffect, useState } from "react";
import GeneratedImage from "./GeneratedImage";
import styled from "styled-components";
import Draggable from "react-draggable";
import ExperienceText from "./ExperienceText";
import { StateContext, ControlContext } from "../App";
const DraggableContainer = styled.div`
  pointer-events: none;
  position: absolute;
  height: ${(props) => props.sizeControl * 2000}px;
  width: ${(props) => props.sizeControl * 2000}px;
`;

export default function ExpImageWrapper({ refNode }) {
  const state = useContext(StateContext);
  const { handleDrag } = useContext(ControlContext);
  const [enableDrag, setEnableDrag] = useState(true);
  const draggableData = {};
  const dragging = (params) => {
    console.log(params);
  };
  useEffect(() => {
    if (state.lock === "textLock" || state.lock === "allLock") {
      setEnableDrag(false);
    } else {
      setEnableDrag(true);
    }
  }, [state.lock]);
  return (
    <GeneratedImage
      lock={state.lock}
      image={state.image}
      overlayOpacity={state.overlayOpacity}
      refNode={refNode}
      sizeControl={state.sizeControl}
      tagImage={state.tagImage}>
      <DraggableContainer
        className="draggable-container"
        sizeControl={state.sizeControl}>
        <Draggable
          bounds="parent"
          onStart={enableDrag ? () => true : () => false}
          onStop={handleDrag}
          position={state.controlledPosition}>
          <div style={{ display: "inline-block", maxWidth: "fit-content" }}>
            <ExperienceText
              sizeControl={state.sizeControl}
              expText={state.expText}
              fontSize={state.fontSize}
              lineHeight={state.lineHeight}
              accentColor={state.accentColor}
              textAlign={state.textAlign}></ExperienceText>
          </div>
        </Draggable>
      </DraggableContainer>
    </GeneratedImage>
  );
}
