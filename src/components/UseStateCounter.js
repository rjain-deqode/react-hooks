import React, { useState } from "react";

export const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };
  return (
    <div>
      <h1>useState simple counter </h1>
      <h3>{value}</h3>
      <button style={{margin:'0 5px 0 0'}} className="btn" onClick={() => setValue(value + 1)}>
        Increase
      </button>
      <button style={{margin:'0 5px 0 0'}} className="btn" onClick={() => setValue(value - 1)}>
        Decrease
      </button>
      <button className="btn" onClick={reset}>
        Reset
      </button> 
    </div>
  );
};
