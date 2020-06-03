import React, { Component } from "react";

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
  setControlledPos,
} from "./utils/handlerFunctions";
import { Switch, Route, Redirect } from "react-router-dom";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Moment from "./pages/Moment";

export const StateContext = React.createContext(null);
export const FunctionContext = React.createContext(null);

export default class App extends Component {
  constructor(props) {
    super(props);
    // *refs
    this.expNode = React.createRef();
    this.momentNode = React.createRef();
    this.refNode = React.createRef();

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
        this.setState({ whiteBoxEraser: true });
        this.setState({ whiteBoxZoom: false });
      } else if (this.state.whiteBoxControlMode === "zoom") {
        this.setState({ whiteBoxEraser: false });
        this.setState({ whiteBoxZoom: true });
      } else {
        this.setState({ whiteBoxEraser: false });
        this.setState({ whiteBoxZoom: false });
      }
      if (this.state.render === true) {
        this.setState({ whiteBoxControlMode: "none" });
      }
    }
  }

  render() {
    // const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

    return (
      <div className="App">
        <StateContext.Provider value={this.state}>
          <FunctionContext.Provider
            value={{
              clearState: this.clearState,
              handleSwitch: this.handleSwitch,
              handleChange: this.handleChange,
              handleGenerate: this.handleGenerate,
              handleDrag: this.handleDrag,
            }}>
            <Switch>
              {/* <Route exact path="/" component={HomeComponent}></Route> */}
              <Route exact path="/home" component={Home}></Route>
              <Route exact path="/">
                <Redirect to="home"></Redirect>
              </Route>
              <Route
                exact
                path="/experience"
                render={() => (
                  <Experience refNode={this.expNode}></Experience>
                )}></Route>
              <Route
                exact
                path="/moment"
                render={() => (
                  <Moment refNode={this.momentNode}></Moment>
                )}></Route>
            </Switch>
          </FunctionContext.Provider>
        </StateContext.Provider>
      </div>
    );
  }
}
