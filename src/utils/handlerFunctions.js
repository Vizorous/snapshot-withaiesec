import { initialState } from "./defaults";
// *image generator imports
import dti from "dom-to-image";
import { saveAs } from "file-saver";

export function clearState() {
  this.setState(initialState);
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
    const finalBool =
      value && value.currentTarget && value.currentTarget.checked;
    this.setState({ [type]: finalBool });
  };
}

export function setControlledPos(
  controlledPosition,
  sizeControl,
  before = true
) {
  let xVal = 0;
  let yVal = 0;
  if (before === true) {
    xVal = parseInt(controlledPosition.x / sizeControl);
    yVal = parseInt(controlledPosition.y / sizeControl);
  } else {
    xVal = parseInt(controlledPosition.x * sizeControl);
    yVal = parseInt(controlledPosition.y * sizeControl);
  }
  return { x: xVal, y: yVal };
}

export function handleGenerate(refNode) {
  return (event) => {
    const holdSizeControl = this.state.sizeControl;
    event.preventDefault();

    this.setState(
      {
        controlledPosition: this.setControlledPos(
          this.state.controlledPosition,
          this.state.sizeControl
        ),
        sizeControl: 1,
      },
      () => {
        dti.toJpeg(refNode.current, { quality: 0.9 }).then((blob) => {
          window.saveAs(blob, `${this.state.campaign}-${Date.now()}.jpg`);
          const sizeControl =
            window.innerWidth <= 600
              ? (window.innerWidth / 2000) * 0.9
              : holdSizeControl;

          // setTimeout(() => {
          this.setState({
            sizeControl: sizeControl,
            controlledPosition: this.setControlledPos(
              this.state.controlledPosition,
              sizeControl,
              false
            ),
          });
        });
      }
    );
  };
}
