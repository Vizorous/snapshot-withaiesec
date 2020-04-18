import React, { useContext, useRef } from "react";
import { StateContext } from "../App";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import ExperienceText from "./ExperienceText";
import ConstantImage from "./ConstantImage";
import Draggable from "react-draggable";

const ImageContainer = styled.div`
  margin: auto;
  position: relative;
  height: ${(props) => props.sizeControl * 2000}px;
  width: ${(props) => props.sizeControl * 2000}px;
`;
const DraggableContainer = styled.div`
  position: absolute;
  height: ${(props) => props.sizeControl * 2000}px;
  width: ${(props) => props.sizeControl * 2000}px;
`;

const ImageBackground = styled.img.attrs((props) => ({
  src: props.image,
}))`
  position: absolute;
  width: ${(props) => props.sizeControl * 2000}px;
  height: ${(props) => props.sizeControl * 2000}px;
`;
export default function GeneratedImage({ refNode, handleDrag }) {
  const state = useContext(StateContext);
  const draggableData = {};
  const dragging = (params) => {
    console.log(params);
  };
  return (
    <ImageContainer
      className="image-container"
      ref={refNode}
      sizeControl={state.sizeControl}>
      <ImageBackground
        image={state.image}
        sizeControl={state.sizeControl}
        className="image-background"></ImageBackground>
      <ConstantImage
        sizeControl={state.sizeControl}
        tagImage={state.tagImage}
        overlayOpacity={state.overlayOpacity}></ConstantImage>
      <DraggableContainer
        className="draggable-container"
        sizeControl={state.sizeControl}>
        <Draggable
          bounds="parent"
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
    </ImageContainer>
  );
}
{
  /* <div style={{ maxWidth: "fit-content" }}> sfdsfd</div> */
}

// const imageContainer = ({ height, width, sizeControl, children }) => {
//   const style = {
//     height: `${this.state.sizeControl * height}px`,
//     width: `${this.state.sizeControl * width}px`,
//   };
//   return <div style={style}>{children}</div>;
// };
// const ImageContainer = styled.div`
//   height: ${state.sizeControl * state.height}px;
//   width: ${state.sizeControl * state.width}px;
//   background-color: black;
// `;
