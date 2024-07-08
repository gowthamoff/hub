import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RespFlex from "./components/RespFlex";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RespFlex />
    </>
  );
}

export default App;
