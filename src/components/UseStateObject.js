import React, { useState } from "react";

export const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: "Peter",
    age: 24,
    message: "Random message",
  });
  const changeMessage = () => {
    setPeople({...people, message:"Hello People"})
  };
  return (
    <div>
      <h2>{people.name}</h2>
      <p>{people.age}</p>
      <p>{people.message}</p>
      <button onClick={changeMessage} className="btn">Change Message</button>
    </div>
  );
};
