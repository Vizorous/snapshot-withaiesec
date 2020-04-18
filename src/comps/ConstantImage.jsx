import React from "react";
import styled from "styled-components";
const BlackOverlay = styled.div`
  height: ${(props) => props.sizeControl * 2000}px;
  width: ${(props) => props.sizeControl * 2000}px;
  position: absolute;
  background-color: rgba(0, 0, 0, ${(props) => props.overlayOpacity});
  pointer-events: none;
`;
const WithAiesec = styled.p`
  margin-bottom: ${(props) => props.sizeControl * 50}px;
  min-width: max-content;
  font-family: Lato;
  font-weight: 900;
  font-size: ${(props) => props.sizeControl * 50}px;
  color: white;
`;
const WithAiesecContainer = styled.div`
  width: ${(props) => props.sizeControl * 2000}px;
  height: ${(props) => props.sizeControl * 2000}px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  pointer-events: none;
`;
const TopTag = styled.img.attrs((props) => ({
  src: props.tagImage,
}))`
  pointer-events: none;
  position: absolute;
  height: ${(props) => props.sizeControl * 250}px;
  width: auto;
  left: ${(props) => props.sizeControl * 130}px;
  top: 0;
`;
export default function ConstantImage({
  sizeControl,
  overlayOpacity,
  tagImage,
}) {
  return (
    <>
      <BlackOverlay
        sizeControl={sizeControl}
        overlayOpacity={overlayOpacity}
        className="black-overlay"></BlackOverlay>
      <TopTag {...{ sizeControl, tagImage }}></TopTag>
      <WithAiesecContainer
        sizeControl={sizeControl}
        className="with-aiesec-container">
        <WithAiesec className="with-aiesec" sizeControl={sizeControl}>
          with aiesec.
        </WithAiesec>
      </WithAiesecContainer>
    </>
  );
}
