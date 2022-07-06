import React from "react";
import "./App.css";
import { UseStateArray } from "./components/UseStateArray";
import { UseStateBasics } from "./components/UseStateBasics";
import { UseStateObject } from "./components/UseStateObject";

function App() {
  return (
    <div className="container">
     <UseStateBasics />
     <UseStateArray />
     <UseStateObject />
    </div>
  );
}

export default App;
