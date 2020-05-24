import React, { useReducer } from "react";
import { momLockInfo, momControlInfo } from "../info";
import Controls from "../comps/Controls";
import MomImageWrapper from "../comps/MomImageWrapper";
import { useState } from "react";
export const AddedLengthsContext = React.createContext(null);
const defaultAddedLengths = {
  addedTop: 0,
  addedLeft: 0,
  addedHeight: 0,
  addedWidth: 0,
};
function reducer(state, action) {
  let changedState = {};
  Object.keys(action).map((item) => {
    changedState[item] = action[item];
  });
  // console.log(changedState);

  return { ...state, ...changedState };
}
export default function Moment({ refNode }) {
  // const [addedLengths, setAddedLengths] = useReducer(
  //   reducer,
  //   defaultAddedLengths
  // );
  const [addedTop, setaddedTop] = useState(0);
  const [addedLeft, setaddedLeft] = useState(0);
  const [addedHeight, setaddedHeight] = useState(0);
  const [addedWidth, setaddedWidth] = useState(0);
  return (
    <>
      {/* <AddedLengthsContext.Provider value={{ setaddedLengths, addedLengths }}> */}
      <AddedLengthsContext.Provider
        value={{
          addedTop,
          addedLeft,
          addedWidth,
          addedHeight,
          setaddedLeft,
          setaddedHeight,
          setaddedTop,
          setaddedWidth,
        }}>
        <Controls
          controlInfo={momControlInfo}
          refNode={refNode}
          lockInfo={momLockInfo}></Controls>
        <MomImageWrapper refNode={refNode}></MomImageWrapper>
      </AddedLengthsContext.Provider>
    </>
  );
}
