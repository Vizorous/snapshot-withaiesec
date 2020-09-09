import React, { PureComponent } from "react";

// css import
import "./App.css";
import "./accordian.css";
// comp import
//data structure import
import { initialState, colors, tagImages } from "./utils/defaults";
import {
  clearState,
  handleChange,
  handleGenerate,
  handleSwitch,
  handleDrag,
} from "./utils/handlerFunctions";

export const StateContext = React.createContext(null);
export const FunctionContext = React.createContext(null);

export default class StateContainer extends PureComponent {
  constructor(props) {
    super(props);
    // *refs

    // *handlers
    this.clearState = clearState.bind(this);
    this.handleChange = handleChange.bind(this);
    this.handleGenerate = handleGenerate.bind(this);
    this.handleSwitch = handleSwitch.bind(this);
    this.handleDrag = handleDrag.bind(this);
    // *state
    this.state = initialState;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.product !== prevState.product) {
      this.setState({
        accentColor: colors[this.state.product],
        tagImage: tagImages[this.state.product],
      });
    }
    if (this.state.whiteBoxControlMode !== prevState.whiteBoxControlMode) {
      if (this.state.whiteBoxControlMode === "eraser") {
        this.setState({ whiteBoxEraser: true, whiteBoxZoom: false });
      } else if (this.state.whiteBoxControlMode === "zoom") {
        this.setState({ whiteBoxEraser: false, whiteBoxZoom: true });
      } else {
        this.setState({ whiteBoxEraser: false, whiteBoxZoom: false });
      }
    }
    if (this.state.render === true) {
      this.setState({ whiteBoxControlMode: "none" });
    }
  }

  render() {
    // const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

    return (
      <StateContext.Provider value={this.state}>
        <FunctionContext.Provider
          value={{
            clearState: this.clearState,
            handleSwitch: this.handleSwitch,
            handleChange: this.handleChange,
            handleGenerate: this.handleGenerate,
            handleDrag: this.handleDrag,
          }}>
          {this.props.children}
        </FunctionContext.Provider>
      </StateContext.Provider>
    );
  }
}
