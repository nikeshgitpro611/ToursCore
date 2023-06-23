import React, { useState } from "react";

const Tour = ({ id, name, info, price, image, removeTours }) => {
  const [readMore, setReadMore] = useState(false);
  console.log(info.substring(0, 10));
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readMore ? info : `${info.substring(0,200)}`}
        <button type="button" className="info-btn" onClick={()=> setReadMore(!readMore)}>{readMore ? 'show Less' : 'Read More'}</button>
        </p>
        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeTours(id)}
        >
          Not Intrested
        </button>
      </div>
    </article>
  );
};

export default Tour;
