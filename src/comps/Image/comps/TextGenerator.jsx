import React from "react";
import RSR from "react-string-replace";
import styled from "styled-components";
// import _ from "lodash";
const Text = styled.p`
  pointer-events: ${(props) => (props.enableDrag ? `all` : `none`)};
  display: inline-block;
  font-family: Lato;
  font-weight: 700;
  font-size: ${(props) => props.fontSize}px;
  color: white;
  user-select: none;
  white-space: pre-line;
  text-align: ${(props) => props.textAlign};
  line-height: ${(props) => props.lineHeight};
`;
const BigSpan = styled.span`
  font-size: ${(props) => props.fontSize * 1.1}px;
`;
const ColoredSpan = styled.span`
  color: ${(props) => props.accentColor};
`;

const TextStyler = (text, fontSize, accentColor) => {
  const bigText = RSR(text, /\*(.*?)\*/g, (match, i) => (
    <BigSpan fontSize={fontSize} key={i}>
      {match}
    </BigSpan>
  ));
  const accentedBigText = RSR(bigText, /\^(.*?)\^/g, (match, i) => (
    <ColoredSpan accentColor={accentColor} key={i}>
      {match}
    </ColoredSpan>
  ));
  const finalText = accentedBigText;
  return finalText;
};

export default function ExperienceText({
  reference,
  text,
  accentColor,
  textAlign,
  fontSize,
  lineHeight,
  enableDrag,
}) {
  return (
    <Text
      ref={reference}
      textAlign={textAlign}
      fontSize={fontSize}
      lineHeight={lineHeight}
      enableDrag={enableDrag}>
      {text && TextStyler(text, fontSize, accentColor)}
    </Text>
  );
}
