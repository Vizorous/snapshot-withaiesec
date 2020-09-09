import React, { useRef } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Moment from "./pages/Moment";
import StateContainer from "./StateContainer";
export default function App() {
  const expNode = useRef(null);
  const momentNode = useRef(null);
  return (
    <div className="App">
      <StateContainer>
        <Switch>
          {/* <Route exact path="/" component={HomeComponent}></Route> */}
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/">
            <Redirect to="home"></Redirect>
          </Route>
          <Route
            exact
            path="/experience"
            render={() => <Experience refNode={expNode}></Experience>}></Route>
          <Route
            exact
            path="/moment"
            render={() => <Moment refNode={momentNode}></Moment>}></Route>
        </Switch>
      </StateContainer>
    </div>
  );
}
