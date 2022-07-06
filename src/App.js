import React from "react";
import "./App.css";
import { UseStateArray } from "./components/UseStateArray";
import { UseStateBasics } from "./components/UseStateBasics";

function App() {
  return (
    <div className="container">
     <UseStateBasics />
     <UseStateArray />
    </div>
  );
}

export default App;
