import React from "react";
import { API } from "../../config";
import { Link } from "react-router-dom";

const ShowSingalProductImage = ({ item, url }) => (
  
      <img src={`${API}/${url}/photo/${item._id}`} alt="" />
    
);
export default ShowSingalProductImage;
