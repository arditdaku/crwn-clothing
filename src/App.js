import React from "react";
import { Switch, Route,Link } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/homepage/homepage.component";
const HatsPage = (props) => {
        console.log(props)
   return <div className="flex flex-col justify-center items-center ">
       <Link to='/'>Home</Link>
        <h1 className="font-bold text-2xl">Hats page</h1>
       <h3 className="font-semibold text-xl">Hat number {props.match.params.id}</h3>
    </div>
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
