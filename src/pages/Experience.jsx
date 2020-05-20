import React from "react";
import { expLockInfo, expControlInfo } from "../info";
import Controls from "../comps/Controls";
import ExpImageWrapper from "../comps/ExpImageWrapper";
export default function Experience({ refNode }) {
  return (
    <>
      <Controls
        controlInfo={expControlInfo}
        refNode={refNode}
        lockInfo={expLockInfo}></Controls>
      <ExpImageWrapper refNode={refNode}></ExpImageWrapper>
    </>
  );
}
