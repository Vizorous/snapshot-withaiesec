import React, { useMemo } from "react";
import loadable from "@loadable/component";

const ControlAtom = loadable((props) =>
  import(`../ControlAtoms/${props.compType}`)
);
function stateChange(prevProps, nextProps) {
  if (prevProps.stateValue !== nextProps.stateValue) {
    return true;
  }
  return false;
}
export default React.memo(function ControlMiddleMan({
  data,
  stateValue,
  handleSwitch,
  handleChange,
}) {
  return (
    <ControlAtom
      {...data}
      value={stateValue}
      key={`${data.stateKey}-elem`}
      handleChange={handleChange}
      handleSwitch={handleSwitch}></ControlAtom>
  );
});
