import React from "react";
import styled from "styled-components";
const BlackOverlay = styled.div`
  height: inherit;
  width: inherit;
  position: absolute;
  background-color: rgba(0, 0, 0, ${(props) => props.overlayOpacity});
  pointer-events: none;
`;
const WithAiesec = styled.p`
  margin-bottom: 50px;
  min-width: max-content;
  font-family: Lato;
  font-weight: 900;
  font-size: 50px;
  color: white;
`;
const WithAiesecContainer = styled.div`
  width: inherit;
  height: inherit;
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
  height: 250px;
  width: auto;
  left: 130px;
  top: 0;
`;
export default function ConstantImage({ overlayOpacity, tagImage }) {
  return (
    <>
      <BlackOverlay
        overlayOpacity={overlayOpacity}
        className="black-overlay"></BlackOverlay>
      <TopTag tagImage={tagImage} className="top-tag"></TopTag>
      <WithAiesecContainer className="with-aiesec-container">
        <WithAiesec className="with-aiesec">with aiesec.</WithAiesec>
      </WithAiesecContainer>
    </>
  );
}
