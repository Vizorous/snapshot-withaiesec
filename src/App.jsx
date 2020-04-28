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
  handleDrag,
  handleGenerate,
  handleSwitch,
  setControlledPos,
} from "./utils/handlerFunctions";
import { Switch, Route, Redirect } from "react-router-dom";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Moment from "./pages/Moment";

export const StateContext = React.createContext(null);
export const ControlContext = React.createContext(null);

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
    this.handleDrag = handleDrag.bind(this);
    this.handleDrag = handleDrag.bind(this);
    this.handleGenerate = handleGenerate.bind(this);
    this.handleSwitch = handleSwitch.bind(this);
    this.setControlledPos = setControlledPos.bind(this);

    // *state
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

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

    return (
      <div className="App">
        <StateContext.Provider value={this.state}>
          <ControlContext.Provider
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
          </ControlContext.Provider>
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
