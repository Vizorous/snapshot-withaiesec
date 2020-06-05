import React from "react";
import { getMomLockInfo, getMomControlInfo } from "../info";
import Controls from "../comps/Controls";
import MomImageWrapper from "../comps/Image/Wrappers/MomImageWrapper";
import { useRef } from "react";
export default function Moment({ refNode }) {
  const momControlInfo = useRef(getMomControlInfo());
  const momLockInfo = useRef(getMomLockInfo());
  return (
    <>
      <Controls
        controlInfo={momControlInfo.current}
        refNode={refNode}
        lockInfo={momLockInfo.current}></Controls>
      <MomImageWrapper refNode={refNode}></MomImageWrapper>
    </>
  );
}
