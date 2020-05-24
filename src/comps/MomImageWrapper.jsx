import React, { useContext, useEffect, useState, useRef } from "react";
import GeneratedImage from "./GeneratedImage";
import styled from "styled-components";
import Draggable from "react-draggable";
import ExperienceText from "./ExperienceText";
import CanvasDraw from "../react-canvas-draw/lib/index";

import { StateContext } from "../App";
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
  const state = useContext(StateContext);
  // console.log(state);u
  const [count, setCount] = useState(1);
  const drawableCanvas = useRef(null);
  const finalCanvas = useRef(null);
  const momentText = useRef(null);
  function handleDrag(e, position) {
    // console.log(position);

    const { x, y } = position;
    setControlledPosition({ x, y });
  }
  const [controlledPosition, setControlledPosition] = useState({
    x: 300,
    y: 400,
  });
  const [textWidth, setTextWidth] = useState(null);
  const [enableEraser, setEnableEraser] = useState(false);
  const [enableZoom, setEnableZoom] = useState(false);
  const [roundedRectDrawable, setRoundedRectDrawable] = useState({
    top: controlledPosition.x,
    left: controlledPosition.y,
    height: 300,
    width: 400,
    rounded: 10,
    lineWidth: 1.5,
  });
  const [roundedRectFinal, setRoundedRectFinal] = useState({
    top: 0,
    left: 0,
    height: 0,
    width: 0,
    rounded: 0,
    lineWidth: 0,
  });
  const resizeRect = (roundedRect, sizeControl) => ({
    top: roundedRect.top * (1 / sizeControl),
    left: roundedRect.left * (1 / sizeControl),
    height: roundedRect.height * (1 / sizeControl),
    width: roundedRect.width * (1 / sizeControl),
    rounded: roundedRect.rounded * (1 / sizeControl),
    lineWidth: roundedRect.lineWidth * (1 / sizeControl),
  });
  const [drawableSizeControl, setDrawableSizeControl] = useState(0);
  const [enableRender, setEnableRender] = useState(false);
  const [canvasData, setCanvasData] = useState(undefined);
  const drawableCanvasProps = {
    className: count,
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
  const draggableData = {};
  const dragging = (params) => {
    console.log(params);
  };
  // useEffect(() => {

  // }, [state.expText]);

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
      top: controlledPosition.x + state.addedTop - 30 * state.sizeControl,
      left: controlledPosition.y + state.addedLeft - 30 * state.sizeControl,
      width: textIncreaseWidth + state.addedWidth + 65 * state.sizeControl,
      height: textIncreaseHeight + state.addedHeight + 65 * state.sizeControl,
      rounded: 10,
      lineWidth: 1.5,
    });
  }, [controlledPosition, state.expText]);

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
