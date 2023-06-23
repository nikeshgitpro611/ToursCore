import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTours }) => {
  return (
    <section>
      <div className="title">
        <h2>Ours Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((details) => {
          return <Tour key={details.id} {...details} removeTours = {removeTours}/>;
        })}
      </div>
    </section>
  );
};

export default Tours;
