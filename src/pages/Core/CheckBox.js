import React, { useState, useEffect, Fragment } from "react";
import { API } from "../../config";
import { Link } from "react-router-dom";
import { getpopularsubcategories } from "../../api's/ecommerceApi/productApi";

const CheckBox = ({ subCategories }) => {
  const [checked, setChecked] = useState([]);
  const handleToggle = (c) => () => {
    // return the first index or -1
    const currentCategoryId = checked.indexOf(c);
    const newCheckedCategoryId = [...checked];
    // if cuurently checked was not already in checked state > push
    // pul take-off
    if (currentCategoryId === -1) {
      newCheckedCategoryId.push(c);
    } else {
      newCheckedCategoryId.splice(currentCategoryId, 1);
    }
    console.log(newCheckedCategoryId);
    setChecked(newCheckedCategoryId);
    // handleFilters(newCheckedCategoryId);
  };
  return (
    <Fragment>
      <div className="widget-category mb-30">
        <h5 className="section-title style-1 mb-30 wow fadeIn animated">
          Category
        </h5>
        <ul className="categories">
          {subCategories.map((subcategory, keysubcategory) => (
            <li key={keysubcategory}>
              <input
                type="checkbox"
                onChange={handleToggle(subcategory._id)}
                value={checked.indexOf(subcategory._id === -1)}
                className="form-check-input mr-20"
              />
              <Link to={"/"}>{subcategory.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};
export default CheckBox;
