import React, { useRef } from "react";
import { getExpLockInfo, useGetExpControlInfo } from "../info";
import Controls from "../comps/Controls";
import ExpImageWrapper from "../comps/Image/Wrappers/ExpImageWrapper";

export default function Experience({ refNode }) {
  //use this pattern if control info are not reliant on state
  const expLockInfo = useRef(getExpLockInfo());

  return (
    <>
      <Controls
        controlInfo={useGetExpControlInfo()}
        refNode={refNode}
        lockInfo={expLockInfo.current}></Controls>
      <ExpImageWrapper refNode={refNode}></ExpImageWrapper>
    </>
  );
}
