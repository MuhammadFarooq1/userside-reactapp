import React from "react";
import { API } from "../../config";

const ShowCartImage = ({ item, url }) => (
  <img src={`${API}/${url}/photo/${item._id}`} alt="cartImage" />
);
export default ShowCartImage;
