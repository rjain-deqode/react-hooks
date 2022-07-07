import React, { useState } from "react";
import { toursDetails } from "./data";

export const Tour = () => {
  const [tour, setTour] = useState(toursDetails);
  const [readmore, setReadmore] = useState("");

  const removeItems = (id) => {
    let removeCard = tour.filter((tour) => tour.id !== id);
    setTour(removeCard);
  };
  return (
    <>
      {tour.length > 0 ? (
        <>
          <div className="card_wrapper">
            {tour.map((tourContent) => {
              const { id, name, info, image, price } = tourContent;
              return (
                <div className="card" key={id}>
                  <div className="thumbnail">
                    <img src={image} alt={name} />
                  </div>
                  <div className="details">
                    <h4>{name}</h4>
                    <p>{price}</p>
                  </div>
                  <p>
                    {readmore ? info : `${info.substring(0, 120)}...`}{" "}
                    <span
                      className="btn-link"
                      onClick={() => setReadmore(!readmore)}
                    >
                      {readmore ? "Read less" : "Read more"}
                    </span>
                  </p>

                  <button className="btn" onClick={() => removeItems(id)}>
                    Not Intrested
                  </button>
                </div>
              );
            })}
          </div>{" "}
        </>
      ) : (
        <>
          <h1>No data found</h1>
          <button className="btn" onClick={() => setTour(toursDetails)}>Refresh</button>
        </>
      )}
    </>
  );
};