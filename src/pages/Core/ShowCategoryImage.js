import React from "react";
import { API } from "../../config";
import { Link } from "react-router-dom";

const ShowCategoryImage = ({ item, url }) => (
  <figure className=" img-hover-scale overflow-hidden">
    <Link to={"/"}>
      <img src={`${API}/${url}/photo/${item._id}`} alt="" />
    </Link>
  </figure>
);
export default ShowCategoryImage;
