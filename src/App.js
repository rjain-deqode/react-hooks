import React from "react";
import "./App.css";
import { UseeffectFetchData } from "./components/UseeffecFetchData";
import { UseEffectBasics } from "./components/UseEffectBasics";
import { UseEffectCleanup } from "./components/UseEffectCleanup";


function App() {
  return (
    <div className="container">
      <UseEffectBasics />
      <UseEffectCleanup />
      <UseeffectFetchData />
    </div>
  );
}

export default App;
