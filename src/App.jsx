import React, { useRef } from "react";
import OGT from "./pages/OGT";
import StateContainer from "./StateContainer";
export default function App() {
  const ogtNode = useRef(null);
  return (
    <div className="App">
      <StateContainer>
        <OGT refNode={ogtNode}></OGT>
      </StateContainer>
    </div>
  );
}
