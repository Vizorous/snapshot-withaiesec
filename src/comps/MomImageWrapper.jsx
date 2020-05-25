import React, { useContext, useEffect, useState, useRef } from "react";
import GeneratedImage from "./GeneratedImage";
import styled from "styled-components";
import Draggable from "react-draggable";
import ExperienceText from "./ExperienceText";
import CanvasDraw from "../react-canvas-draw/lib/index";

import { StateContext, ControlContext } from "../App";

const DraggableContainer = styled.div`
  pointer-events: none;
  position: absolute;
  height: ${(props) => props.sizeControl * 2000}px;
  width: ${(props) => props.sizeControl * 2000}px;
`;
const WhiteBoxContainer = styled.div`
  position: absolute;
  pointer-events: ${(props) => (props.enableEraser ? `all` : `none`)};
`;
const setTextRectScaleFinal = (
  controlledPosition,
  roundedRect,
  sizeControl
) => ({
  top: roundedRect.top * (1 / sizeControl),
  left: roundedRect.left * (1 / sizeControl),
  height: roundedRect.height * (1 / sizeControl),
  width: roundedRect.width * (1 / sizeControl),
  rounded: roundedRect.rounded * (1 / sizeControl),
  lineWidth: roundedRect.lineWidth * (1 / sizeControl),
});
const setTextRectScaleDrawable = (roundedRect, sizeControl) => ({
  top: roundedRect.top * sizeControl,
  left: roundedRect.left * sizeControl,
  height: roundedRect.height * sizeControl,
  width: roundedRect.width * sizeControl,
  rounded: roundedRect.rounded * sizeControl,
  lineWidth: roundedRect.lineWidth * sizeControl,
});
const finalCanvasProps = {
  canvasWidth: 2000,
  canvasHeight: 2000,
  disabled: true,
  hideGrid: true,
  hideInterface: true,
  immediateLoading: true,
  loadTimeOffset: 0,
};

export default function MomImageWrapper({ refNode }) {
  const state = useContext(StateContext);
  const { handleDrag } = useContext(ControlContext);

  const defaultControlledPosition = {
    x: 300 * state.sizeControl,
    y: 400 * state.sizeControl,
  };
  const defaultRoundedRectDrawable = {
    top: defaultControlledPosition.x,
    left: defaultControlledPosition.y,
    height: 300 * state.sizeControl,
    width: 0 * state.sizeControl,
    rounded: 10,
    lineWidth: 1.5,
  };
  const { handleChange } = useContext(ControlContext);
  const drawableCanvas = useRef(null);
  const finalCanvas = useRef(null);
  const momentText = useRef(null);
  const [enableEraser, setEnableEraser] = useState(false);
  const [enableZoom, setEnableZoom] = useState(false);
  const [roundedRectDrawable, setRoundedRectDrawable] = useState(
    defaultRoundedRectDrawable
  );
  const [roundedRectFinal, setRoundedRectFinal] = useState(null);

  const [drawableSizeControl, setDrawableSizeControl] = useState(0);
  const [enableRender, setEnableRender] = useState(false);
  const [canvasData, setCanvasData] = useState(undefined);
  const drawableCanvasProps = {
    loadTimeOffset: 5,
    lazyRadius: 0,
    brushRadius: 12,
    canvasWidth: 2000 * drawableSizeControl,
    canvasHeight: 2000 * drawableSizeControl,
    disabled: false,
    brushColor: "#444",
    catenaryColor: "#0a0302",
    gridColor: "rgba(150,150,150,0.17)",
    hideInterface: !enableEraser,
  };

  useEffect(() => {}, [state.clearState]);

  useEffect(() => {
    setDrawableSizeControl(state.sizeControl);
  }, []);

  useEffect(() => {
    console.log(state.whiteBoxControlMode);

    if (state.whiteBoxControlMode === "eraser") {
      setEnableEraser(true);
      setEnableZoom(false);
    } else if (state.whiteBoxControlMode === "zoom") {
      setEnableEraser(!true);
      setEnableZoom(!false);
    } else {
      setEnableEraser(false);
      setEnableZoom(false);
    }
  }, [state.whiteBoxControlMode]);
  useEffect(() => {
    if (state.sizeControl === 1) {
      drawableCanvas &&
        drawableCanvas.current &&
        setCanvasData(drawableCanvas.current.getSaveData());
      const rR = setTextRectScaleFinal(
        roundedRectDrawable,
        drawableSizeControl
      );
      setRoundedRectFinal(rR);
      setEnableRender(true);
    } else {
      if (drawableSizeControl !== 0) {
        const rR = setTextRectScaleDrawable(
          roundedRectFinal,
          state.sizeControl
        );
        setRoundedRectDrawable(rR);
      }
      setEnableRender(false);
    }
  }, [state.sizeControl]);
  useEffect(() => {
    if (!enableRender) {
      setTimeout(function () {
        canvasData &&
          drawableCanvas &&
          drawableCanvas.current &&
          drawableCanvas.current.loadSaveData(canvasData);
      }, 500);
    } else {
      // canvasData &&
      finalCanvas &&
        finalCanvas.current &&
        finalCanvas.current.loadSaveData(canvasData);
    }
  }, [enableRender]);
  useEffect(() => {
    const textIncreaseWidth =
      momentText && momentText.current && momentText.current.clientWidth;
    const textIncreaseHeight =
      momentText && momentText.current && momentText.current.clientHeight;
    // debugger;
    setRoundedRectDrawable({
      top:
        state.controlledPosition.y - (state.addedTop + 30) * state.sizeControl,
      left:
        state.controlledPosition.x - (state.addedLeft + 30) * state.sizeControl,
      width:
        textIncreaseWidth +
        (state.addedWidth + state.addedLeft + 65) * state.sizeControl,
      height:
        textIncreaseHeight +
        (state.addedHeight + state.addedTop + 65) * state.sizeControl,
      rounded: 10,
      lineWidth: 1.5,
    });
  }, [
    state.controlledPosition,
    state.expText,
    state.fontSize,
    state.lineHeight,
    state.addedTop,
    state.addedHeight,
    state.addedLeft,
    state.addedWidth,
  ]);

  return (
    <GeneratedImage
      image={state.image}
      overlayOpacity={state.overlayOpacity}
      refNode={refNode}
      sizeControl={state.sizeControl}
      tagImage={state.tagImage}
      imageLock={state.imageLock}>
      <WhiteBoxContainer enableEraser={enableEraser}>
        {!enableRender ? (
          <CanvasDraw
            {...drawableCanvasProps}
            ref={drawableCanvas}
            {...roundedRectDrawable}
            style={{ position: "absolute" }}></CanvasDraw>
        ) : null}
        {enableRender ? (
          <CanvasDraw
            {...finalCanvasProps}
            ref={finalCanvas}
            {...roundedRectFinal}
            style={{ position: "absolute" }}></CanvasDraw>
        ) : null}
      </WhiteBoxContainer>

      <DraggableContainer
        className="draggable-container"
        sizeControl={state.sizeControl}>
        <Draggable
          bounds="parent"
          onStart={!state.textLock ? () => true : () => false}
          onDrag={handleDrag}
          position={state.controlledPosition}>
          <div style={{ display: "inline-block", maxWidth: "fit-content" }}>
            <ExperienceText
              enableDrag={!state.textLock}
              sizeControl={state.sizeControl}
              expText={state.expText}
              fontSize={state.fontSize}
              lineHeight={state.lineHeight}
              accentColor={state.accentColor}
              textAlign={state.textAlign}
              reference={momentText}></ExperienceText>
          </div>
        </Draggable>
      </DraggableContainer>
    </GeneratedImage>
  );
}
