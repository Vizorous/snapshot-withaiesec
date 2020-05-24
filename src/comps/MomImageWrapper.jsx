import React, { useContext, useEffect, useState, useRef } from "react";
import GeneratedImage from "./GeneratedImage";
import styled from "styled-components";
import Draggable from "react-draggable";
import ExperienceText from "./ExperienceText";
import CanvasDraw from "../react-canvas-draw/lib/index";
import { AddedLengthsContext } from "../pages/Moment";

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

export default function MomImageWrapper({ refNode }) {
  const {
    addedTop,
    addedLeft,
    addedWidth,
    addedHeight,
    setaddedTop,
    setaddedLeft,
    setaddedWidth,
    setaddedHeight,
  } = useContext(AddedLengthsContext);
  const state = useContext(StateContext);
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
  // console.log(state);u
  const drawableCanvas = useRef(null);
  const finalCanvas = useRef(null);
  const momentText = useRef(null);

  function handleDrag(e, position) {
    // console.log(position);

    const { x, y } = position;
    setControlledPosition({ x, y });
  }
  const resizeRect = (roundedRect, sizeControl) => ({
    top: roundedRect.top * (1 / sizeControl),
    left: roundedRect.left * (1 / sizeControl),
    height: roundedRect.height * (1 / sizeControl),
    width: roundedRect.width * (1 / sizeControl),
    rounded: roundedRect.rounded * (1 / sizeControl),
    lineWidth: roundedRect.lineWidth * (1 / sizeControl),
  });

  const [controlledPosition, setControlledPosition] = useState(
    defaultControlledPosition
  );
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
    // hideGrid: true,
    canvasWidth: 2000 * drawableSizeControl,
    canvasHeight: 2000 * drawableSizeControl,
    disabled: false,
    // imgSrc: img,
    brushColor: "#444",
    catenaryColor: "#0a0302",
    gridColor: "rgba(150,150,150,0.17)",
    // immediateLoading: true,
    hideInterface: !enableEraser,
    // loadTimeOffset: 0,
  };
  const finalCanvasProps = {
    canvasWidth: 2000,
    canvasHeight: 2000,
    disabled: true,
    hideGrid: true,
    // imgSrc: img,
    hideInterface: true,
    immediateLoading: true,
    loadTimeOffset: 0,
    ...roundedRectFinal,
  };

  // useEffect(() => {

  // }, [state.expText]);
  useEffect(() => {
    if (state.clearState === true) {
      setControlledPosition(defaultControlledPosition);
      setEnableEraser(false);
      setEnableZoom(false);
      setRoundedRectDrawable(defaultRoundedRectDrawable);
      setRoundedRectFinal(null);
      setEnableRender(false);
      setCanvasData(undefined);
      setaddedTop(0);
      setaddedLeft(0);
      setaddedWidth(0);
      setaddedHeight(0);
      handleChange("clearState")(false);
    }
    return () => {
      setControlledPosition(defaultControlledPosition);
      setEnableEraser(false);
      setEnableZoom(false);
      setRoundedRectDrawable(defaultRoundedRectDrawable);
      setRoundedRectFinal(null);
      setEnableRender(false);
      setCanvasData(undefined);
      setaddedTop(0);
      setaddedLeft(0);
      setaddedWidth(0);
      setaddedHeight(0);
      handleChange("clearState")(false);
    };
  }, [state.clearState]);

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
      setRoundedRectFinal(resizeRect(roundedRectDrawable, drawableSizeControl));
      setEnableRender(true);
    } else {
      setEnableRender(false);
    }
  }, [state.sizeControl]);
  useEffect(() => {
    if (!enableRender) {
      canvasData &&
        drawableCanvas &&
        drawableCanvas.current &&
        drawableCanvas.current.loadSaveData(canvasData);
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
    setRoundedRectDrawable({
      top: controlledPosition.y - (addedTop + 30) * state.sizeControl,
      left: controlledPosition.x - (addedLeft + 30) * state.sizeControl,
      width:
        textIncreaseWidth + (addedWidth + addedLeft + 65) * state.sizeControl,
      height:
        textIncreaseHeight + (addedHeight + addedTop + 65) * state.sizeControl,
      rounded: 10,
      lineWidth: 1.5,
    });
  }, [
    controlledPosition,
    state.expText,
    state.fontSize,
    state.lineHeight,
    addedTop,
    addedHeight,
    addedLeft,
    addedWidth,
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
          position={controlledPosition}>
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
