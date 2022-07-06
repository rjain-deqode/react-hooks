import React, { useState } from "react";

export const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: "Peter",
    age: 24,
    message: "Random message",
  });

//   multiple state value
const [name, setName] = useState('Peter');
const [age, setAge] = useState(24);
const [message, setMessage] = useState('Random message');

  const changeMessage = () => {
    // setPeople({...people, message:"Hello People"})
    setMessage("Hello People")
  };
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{message}</p>
      <button onClick={changeMessage} className="btn">Change Message</button>
    </div>
  );
};
