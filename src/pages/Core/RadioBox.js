import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";

const RadioBox = ({ prices, handleFilters }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    handleFilters(event.target.value);
    setValue(event.target.value);
  };
  return (
    <Fragment>
      <div className="widget-category mb-30">
        <h5 className="section-title style-1 mb-30 wow fadeIn animated">
          Category
        </h5>
        <ul className="categories">
          {prices.map((p, i) => (
            <li key={i}>
              <input
                onChange={handleChange}
                value={`${p._id}`}
                name={p}
                type="radio"
                className="form-check-input mr-20"
              />
              <Link to={"/"}> {p.name} </Link>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default RadioBox;
