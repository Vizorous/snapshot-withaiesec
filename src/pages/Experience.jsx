import React, { useContext } from "react";
import { TabbedExpControlInfo, expControlList, ExpLockInfo } from "../info";
import Controls from "../comps/Controls";
import ExpImageWrapper from "../comps/ExpImageWrapper";
import { Container } from "react-bootstrap";
export default function Experience({ refNode }) {
  return (
    <>
      <Controls
        controlInfo={TabbedExpControlInfo}
        refNode={refNode}
        lockInfo={ExpLockInfo}></Controls>
      <ExpImageWrapper refNode={refNode}></ExpImageWrapper>
    </>
  );
}
