import React from "react";
import RSR from "react-string-replace";
import styled from "styled-components";
import _ from "lodash";
const ExpText = styled.p`
  pointer-events: all;
  display: inline-block;
  font-family: Lato;
  font-weight: 700;
  font-size: ${(props) => props.sizeControl * props.fontSize}px;
  color: white;
  user-select: none;
  white-space: pre-line;
  /* max-width: fit-content; */
  /* position: absolute; */
  /* pointer-events: none; */
  text-align: ${(props) => props.textAlign};
  line-height: ${(props) => props.lineHeight};
`;
/* min-width: max-content; */
/* margin-bottom: ${state.sizeControl * 50}px; */
const ColoredSpan = styled.span`
  color: ${(props) => props.accentColor};
`;
export default function ExperienceText({
  expText,
  sizeControl,
  accentColor,
  textAlign,
  fontSize,
  lineHeight,
}) {
  const Test = (expText, accentColor) => {
    return RSR(expText, /\*(.*?)\*/g, (match, i) => (
      <ColoredSpan accentColor={accentColor} key={i}>
        {match}
      </ColoredSpan>
    ));
  };
  return (
    <ExpText
      sizeControl={sizeControl}
      textAlign={textAlign}
      fontSize={fontSize}
      lineHeight={lineHeight}>
      {expText && Test(expText, accentColor)}
    </ExpText>
  );
}
