import React, { useEffect, useState } from "react";

// by default run afte every re-render
// cleanup function
// second parameter
// dependancy[] only run in intial render
export const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
    // use state condition
    if (value >= 1) {
      document.title = `New message(${value})`;
    }
  }, [value]);

//   Dependency arrary
  useEffect(() => {
    console.log(" Hello world");
  }, []);

  console.log("render component");
  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </div>
  );
};
