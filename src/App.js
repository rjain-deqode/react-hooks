import React from "react";
import "./App.css";
import { UseStateArray } from "./components/UseStateArray";
import { UseStateBasics } from "./components/UseStateBasics";
import { UseStateCounter } from "./components/UseStateCounter";
import { UseStateObject } from "./components/UseStateObject";

function App() {
  return (
    <div className="container">
     <UseStateBasics />
     <UseStateArray />
     <UseStateObject />
     <UseStateCounter />
    </div>
  );
}

export default App;
