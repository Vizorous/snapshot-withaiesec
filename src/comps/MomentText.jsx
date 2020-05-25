import React from "react";
import RSR from "react-string-replace";
import styled from "styled-components";
import _ from "lodash";
const ExpText = styled.p`
  pointer-events: all;
  display: inline-block;
  font-family: Lato;
  font-weight: 900;
  font-size: ${(props) => props.sizeControl * props.fontSize}px;
  color: white;
  user-select: none;
  white-space: pre-line;

  text-align: ${(props) => props.textAlign};
  line-height: ${(props) => props.lineHeight};
`;

const BigSpan = styled.span`
  font-size: ${(props) => props.sizeControl * (props.fontSize * 1.1)}px;
`;
export default function ExperienceText({
  expText,
  sizeControl,
  accentColor,
  textAlign,
  fontSize,
  lineHeight,
  reference,
}) {
  const Test = (expText, sizeControl, fontSize) => {
    return RSR(expText, /\*(.*?)\*/g, (match, i) => (
      <BigSpan sizeControl={sizeControl} fontSize={fontSize} key={i}>
        {match}
      </BigSpan>
    ));
  };
  return (
    <ExpText
      sizeControl={sizeControl}
      textAlign={textAlign}
      fontSize={fontSize}
      lineHeight={lineHeight}
      ref={reference}>
      {expText && Test(expText, sizeControl, fontSize)}
    </ExpText>
  );
}
