import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Header from "./Components/Header"; 

const App = () => (
  <div>
    <Header  />  
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
