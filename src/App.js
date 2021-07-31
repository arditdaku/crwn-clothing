import React from "react";
import { Switch, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/homepage/homepage.component";
const HatsPage = () => (
  <div className="flex justify-center items-center ">
    <h1 className="font-bold text-2xl">Hats page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
