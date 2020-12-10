import React, { useRef } from "react";
import { getExpLockInfo, useGetExpControlInfo } from "../info";
import Controls from "../comps/Controls";
import ExpImageWrapper from "../comps/Wrappers/ExpImageWrapper";

export default function OGT({ refNode }) {
  //use this pattern if control info are not reliant on state

  return (
    <>
      <Controls refNode={refNode}></Controls>
      <ExpImageWrapper refNode={refNode}></ExpImageWrapper>
    </>
  );
}
