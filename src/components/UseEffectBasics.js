import React, { useEffect, useState } from "react";

// by default run afte every re-render
// cleanup function
// second parameter
export const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
    document.title = `New message(${value})`
  });
  console.log("render component");
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Click me</button>
    </div>
  );
};
