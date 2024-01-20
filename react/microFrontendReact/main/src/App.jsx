import ReactDOM from "react-dom";
import "./index.scss";
import Router from "./Router";

const App = () => {
  return (
    <>
      <Router />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
