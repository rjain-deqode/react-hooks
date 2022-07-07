import React, { useEffect, useState } from "react";

// cleanup function
// second argument
export const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("Hello world");
    window.addEventListener("Resize", checkSize);

    // cleanup function
    return () => {
      console.log("Cleanup");
      window.removeEventListener("Resize", checkSize);
    };
  }, []);
  console.log("Render")
  return (
    <div>
      <h1>Window</h1>
      <h3>{size}</h3>
    </div>
  );
};
