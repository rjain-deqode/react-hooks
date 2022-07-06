import React, { useState } from "react";

export const UseStateBasics = () => {
  // 1. whith toggle state

  // const [state, setState] = useState("");
  // return (
  //   <div>
  //     <h3>{`${state ? "Random title" : "Hello People"}`}</h3>
  //     <button type="button" onClick={() => setState(!state)}>
  //       Change title
  //     </button>
  //   </div>
  // );

  // 2. whithout toggle state
  const [text, setText] = useState("Random Text");
  const handleChange = () => {
    if (text === "Random Text") {
      setText("Hello people");
    } else {
      setText("Random Text");
    }
  };
  return (
    <>
      <h1>{text}</h1>
      <button onClick={handleChange}>Change Text</button>
    </>
  );
};
