import React from "react";
import GeneratedImageWrapper from "./GeneratedImageWrapper";
import DraggableText from "../comps/DraggableText";

export default function ExpImageWrapper({ refNode, edit }) {
  return (
    <GeneratedImageWrapper refNode={refNode}>
      <DraggableText></DraggableText>
    </GeneratedImageWrapper>
  );
}
