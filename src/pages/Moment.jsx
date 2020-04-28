import React from "react";
import { Container } from "react-bootstrap";
import Controls from "../comps/Controls";
import {
  expControlInfo as momentControlInfo,
  expControlList as momentControlList,
} from "../info";
import MomentImageWrapper from "../comps/MomentImageWrapper";
export default function Moment({ refNode }) {
  return (
    <>
      <h1>Coming Soon</h1>
      {/* <Container>
        <Controls
          controlInfo={momentControlInfo}
          refNode={refNode}
          ControlList={momentControlList}></Controls>
        <MomentImageWrapper refNode={refNode}></MomentImageWrapper>
      </Container> */}
    </>
  );
}
