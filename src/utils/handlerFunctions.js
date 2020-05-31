import { initialState } from "./defaults";
// *image generator imports
import dti from "dom-to-image";
import { saveAs } from "file-saver";

export function handleDrag(e, position) {
  const { x, y } = position;
  this.setState({ controlledPosition: { x, y } });
}
export function clearState() {
  this.setState(initialState, () => {
    this.setState({ clearState: true });
  });
}
export function handleChange(type) {
  return (value) => {
    const finalVal = value
      ? value.currentTarget
        ? value.currentTarget.value
        : value
      : null;
    this.setState({ [type]: finalVal });
  };
}
export function handleSwitch(type) {
  return (value) => {
    const finalBool = value
      ? value.currentTarget
        ? value.currentTarget.checked
        : value
      : null;
    this.setState({ [type]: finalBool });
  };
}
export function handleGenerate(refNode) {
  return (event) => {
    event.preventDefault();
    this.setState({ render: true, whiteBoxEraser: false }, () => {
      dti.toJpeg(refNode.current, { quality: 0.9 }).then((blob) => {
        window.saveAs(blob, `${this.state.campaign}-${Date.now()}.jpg`);
        this.setState({ render: false });
      });
    });
  };
}
