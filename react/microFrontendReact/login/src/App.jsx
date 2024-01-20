import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Login from "./Login";
import Register from "./Register";

const App = () => (
  <>
    {/* <Login /> */}
    <Register />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
