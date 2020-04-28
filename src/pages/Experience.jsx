import React, { useContext } from "react";
import { expControlInfo, expControlList } from "../info";
import { ControlContext } from "../App";
import Controls from "../comps/Controls";
import ExpImageWrapper from "../comps/ExpImageWrapper";
import { Container } from "react-bootstrap";
export default function Experience({ refNode }) {
  console.log(expControlList);

  return (
    <>
      <Container>
        <Controls
          controlInfo={expControlInfo}
          refNode={refNode}
          ControlList={expControlList}></Controls>
        <ExpImageWrapper refNode={refNode}></ExpImageWrapper>
      </Container>
    </>
  );
}
