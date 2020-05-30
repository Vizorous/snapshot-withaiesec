import React, { useContext, useEffect, useState, useRef } from "react";
import GeneratedImageWrapper from "./GeneratedImageWrapper";
import styled from "styled-components";
import CanvasDraw from "../../../react-canvas-draw/lib/index";
import { StateContext, FunctionContext } from "../../../App";
import DraggableText from "../comps/DraggableText";
import { handleChange } from "../../../utils/handlerFunctions";

const WhiteBoxContainer = styled.div`
  position: absolute;
  pointer-events: ${(props) => (props.whiteBoxEraser ? `all` : `none`)};
`;

export default function MomImageWrapper({ refNode }) {
  const state = useContext(StateContext);
  const { handleChange } = useContext(FunctionContext);
  // const [whiteBox, setWhiteBox] = useState({
  //   top: state.controlledPosition.y,
  //   left: state.controlledPosition.x,
  //   bottom: 300,
  //   right: 300,
  //   rounded: 30,
  //   lineWidth: 5,
  // });
  // const { handleChange } = useContext(FunctionContext);
  const textRef = useRef(null);
  const canvasProps = {
    lazyRadius: 0,
    brushRadius: 12,
    canvasWidth: 2000,
    canvasHeight: 2000,
    disabled: !state.whiteBoxEraser,
    brushColor: "#444",
    hideInterface: !state.whiteBoxEraser,
  };

  useEffect(() => {
    const textIncreaseWidth =
      textRef && textRef.current && textRef.current.clientWidth;
    const textIncreaseHeight =
      textRef && textRef.current && textRef.current.clientHeight;
    console.log(textIncreaseWidth);

    handleChange("whiteBox")({
      top: state.controlledPosition.y - (state.addedTop + 30),
      left: state.controlledPosition.x - (state.addedLeft + 30),
      right: textIncreaseWidth + (state.addedRight + state.addedLeft + 65),
      bottom: textIncreaseHeight + (state.addedBottom + state.addedTop + 65),
      rounded: 30,
      lineWidth: 5,
    });
  }, [
    state.controlledPosition,
    state.text,
    state.fontSize,
    state.lineHeight,
    state.addedTop,
    state.addedBottom,
    state.addedLeft,
    state.addedRight,
  ]);

  return (
    <GeneratedImageWrapper refNode={refNode}>
      <WhiteBoxContainer whiteBoxEraser={state.whiteBoxEraser}>
        <CanvasDraw
          immediateLoading={true}
          hideInterface={!state.whiteBoxEraser}
          sizeControl={state.sizeControl}
          {...canvasProps}
          {...state.whiteBox}
          style={{ position: "absolute" }}></CanvasDraw>
      </WhiteBoxContainer>

      <DraggableText reference={textRef}></DraggableText>
    </GeneratedImageWrapper>
  );
}
