import React from "react";
import { API } from "../../config";
import { Link } from "react-router-dom";

const ShowProductImageByArrival = ({ item, url }) => (
  <Link to={"/"}>
    <img
      className="default-img"
      src={`${API}/${url}/photo/${item._id}`}
      alt=""
    />
    <img
      className="hover-img"
      src={`${API}/${url}/photo/${item._id}`}
      // src={ImgFeatur_1}
      alt=""
    />
  </Link>
);

export default ShowProductImageByArrival;
