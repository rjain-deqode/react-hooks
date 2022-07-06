import React, { useState } from "react";
import { data } from "./data";

//  useState array
export const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItems = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div className="mt-space">
     <h1>List</h1>
      {people.length > 0 ? (
        <>
          {people.map((person) => {
            const { id, name } = person;
            return (
              <div key={id} className="items">
                <h4>{name}</h4>
                <button className="btn-link" onClick={() => removeItems(id)}>
                  Remove
                </button>
              </div>
            );
          })}
          <button className="btn" onClick={() => setPeople([])}>
            Clear Items
          </button>
        </>
      ) : (
        <>
          <h4>No data found</h4>
          <button className="btn" onClick={() => setPeople(data)}>
            Referesh
          </button>
        </>
      )}
    </div>
  );
};
