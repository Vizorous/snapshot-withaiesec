import React, { useContext, useEffect, useState } from "react";
import GeneratedImageWrapper from "./GeneratedImageWrapper";
import DraggableText from "../comps/DraggableText";

export default function ExpImageWrapper({ refNode }) {
  return (
    <GeneratedImageWrapper refNode={refNode}>
      <DraggableText></DraggableText>
    </GeneratedImageWrapper>
  );
}
