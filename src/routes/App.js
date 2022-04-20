import React from "react";
import MainMenu from "../components/Menu";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import "../../node_modules/antd/dist/antd.css";
import Home from "../containers/Home";

const App = () => {
  useScrollReveal(".Home");
  return (
    <div className="Main__Container">
      <MainMenu/>
      <BrowserRouter>
        <Switch>
          <Route path="/" children={<Home />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
