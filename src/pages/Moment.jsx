import React from "react";
import { momLockInfo, momControlInfo } from "../info";
import Controls from "../comps/Controls";
import MomImageWrapper from "../comps/MomImageWrapper";
export default function Moment({ refNode }) {
  return (
    <>
      <Controls
        controlInfo={momControlInfo}
        refNode={refNode}
        lockInfo={momLockInfo}></Controls>
      <MomImageWrapper refNode={refNode}></MomImageWrapper>
    </>
  );
}
