import React, { Component } from "react";
import Controls from "./comps/Controls";
import { v4 } from "uuid";
import GeneratedImage from "./comps/GeneratedImage";
import dti from "dom-to-image";
import { saveAs } from "file-saver";
import cover from "./assets/cover1.png";
import GVwm from "./assets/GVwm.png";
import GTwm from "./assets/GTwm.png";
import GEwm from "./assets/GEwm.png";
import "./App.css";
const tagImages = {
  GV: GVwm,
  GE: GEwm,
  GT: GTwm,
};
const colors = {
  GV: "#F85A40",
  GE: "#30C39E",
  GT: "#0A8EA0",
};
const ImgInfo = {
  width: 2000,
  height: 2000,
  sizeControl:
    window.innerWidth <= 600 ? (window.innerWidth / 2000) * 0.9 : 0.4,
};
const CONTROL_INFO = [
  {
    compName: "FunctionControl",
    headline: "Select your Function",
    controlData: [
      {
        label: "Global Volunteer",
        value: "GV",
        buttonKey: v4(),
      },
      {
        label: "Global Entrepreneur",
        value: "GE",
        buttonKey: v4(),
      },
      {
        label: "Global Talent",
        value: "GT",
        buttonKey: v4(),
      },
    ],
  },
  {
    compName: "TextInputControl",
    headline: "Text Inputs",
    controlData: [
      {
        label: "Text",
        placeholder: "Enter the text",
        id: "expText",
        as: "textarea",
        desc: {
          text:
            "Use *Text* syntax to create Colored Text. ex. Normal Text *Colored Text* Normal Text",
          key: v4(),
        },
        groupKey: v4(),
        labelKey: v4(),
        controlKey: v4(),
      },
    ],
  },
  {
    compName: "TextAlignmentControl",
    headline: "Text Align",
    controlData: [
      {
        label: "Left",
        value: "left",
        buttonKey: v4(),
      },
      {
        label: "Center",
        value: "center",
        buttonKey: v4(),
      },
      {
        label: "Right",
        value: "right",
        buttonKey: v4(),
      },
    ],
  },
  {
    compName: "RangeControl",
    headline: "Font Size Adjustment",
    controlData: [
      {
        label: "Adjust the font size",
        id: "fontSize",
        min: 40,
        max: 200,

        groupKey: v4(),
        labelKey: v4(),
        controlKey: v4(),
      },
      {
        label: "Adjust the line height",
        id: "lineHeight",
        min: 1,
        max: 2,
        step: "0.1",
        groupKey: v4(),
        labelKey: v4(),
        controlKey: v4(),
      },
    ],
  },
];
export const StateContext = React.createContext(null);
export const initialState = {
  expText: "We have just opened",
  sizeControl: ImgInfo.sizeControl,
  height: ImgInfo.height,
  width: ImgInfo.width,
  image: cover,
  overlayOpacity: 0.4,
  accentColor: colors.GV,
  textAlign: "left",
  function: "GV",
  tagImage: tagImages.GV,
  controlledPosition: {
    x: ImgInfo.sizeControl * 500,
    y: ImgInfo.sizeControl * 500,
  },
  fontSize: 70,
  lineHeight: 1.2,
};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.refNode = React.createRef();

    this.state = initialState;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.function !== prevState.function) {
      this.setState({
        accentColor: colors[this.state.function],
        tagImage: tagImages[this.state.function],
      });
    }
  }
  handleDrag = (e, position) => {
    console.log(position);

    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  };
  clearState = (initialState) => () => {
    this.setState(initialState);
  };
  handleChange = (type) => (value) => {
    const finalVal = value
      ? value.currentTarget
        ? value.currentTarget.value
        : value
      : null;
    this.setState({ [type]: finalVal });
  };
  handleSwitch = (type) => (value) => {
    const finalBool =
      value && value.currentTarget && value.currentTarget.checked;
    this.setState({ [type]: finalBool });
  };

  setControlledPos = (controlledPosition, sizeControl, before = true) => {
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
  };

  handleGenerate = (refNode) => (event) => {
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
          window.saveAs(blob, `Testing.jpg`);
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

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

    return (
      <div className="App">
        <StateContext.Provider value={this.state}>
          <Controls
            clearState={this.clearState}
            handleSwitch={this.handleSwitch}
            handleChange={this.handleChange}
            handleGenerate={this.handleGenerate}
            CONTROL_INFO={CONTROL_INFO}
            refNode={this.refNode}></Controls>
          <GeneratedImage
            refNode={this.refNode}
            handleDrag={this.handleDrag}></GeneratedImage>
        </StateContext.Provider>
      </div>
    );
  }
}

// const CONTROL_INFO = [
//   {
//     compName: "TextInputControl",
//     headline: "Text Inputs",
//     controlData: [
//       {
//         label: "Country",
//         placeholder: "Enter the Country",
//         id: "country",
//         as: "textarea",
//         desc: {
//           text: "Testing",
//           key: v4(),
//         },
//         groupKey: v4(),
//         labelKey: v4(),
//         controlKey: v4(),
//       },
//       {
//         label: "Salary",
//         placeholder: "Enter the Salary",
//         id: "salary",
//         as: "",
//         type: "text",
//         groupKey: v4(),
//         labelKey: v4(),
//         controlKey: v4(),
//       },
//       {
//         label: "Opp. Name",
//         placeholder: "Enter the Opp. Name",
//         id: "oppName",
//         as: "textarea",
//         groupKey: v4(),
//         labelKey: v4(),
//         controlKey: v4(),
//       },
//     ],
//   },
// ];
