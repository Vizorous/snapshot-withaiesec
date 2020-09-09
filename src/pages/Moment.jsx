import React from "react";
import { getMomLockInfo, getMomControlInfo } from "../info";
import Controls from "../comps/Controls";
import MomImageWrapper from "../comps/Image/Wrappers/MomImageWrapper";
import { useRef } from "react";
const val = getMomControlInfo();
const val2 = getMomLockInfo();
export default function Moment({ refNode }) {
  const momControlInfo = useRef(getMomControlInfo());
  const momLockInfo = useRef(getMomLockInfo());
  return (
    <>
      <Controls controlInfo={val} refNode={refNode} lockInfo={val2}></Controls>
      <MomImageWrapper refNode={refNode}></MomImageWrapper>
    </>
  );
}
