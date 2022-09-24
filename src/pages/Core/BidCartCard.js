import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

import { removeItem } from "../../hellper/cartHellper";
import ShowCartImage from "../ecommerce/ShowCartImage.js";
import CheckOut from "../ecommerce/CheckOut.js";
const BidCartCard = ({
  Bidproduct,
  setRun = (f) => f, // default value of function
  run = undefined,
}) => {
  const [count, setCount] = useState(Bidproduct.product.count);
  const [total, setTotal] = useState(Bidproduct.biddingAmount);

  return (
    <>
      <tr>
        <td className="image product-thumbnail">
          {/* <img src={ImgProduct_1_1} alt="#" /> */}
          <ShowCartImage item={Bidproduct.product} url="product" />
        </td>
        <td className="product-des product-name">
          <h5 className="product-name">
            <a href="shop-product-right.html">
              {Bidproduct.product.name} <br />
              {/* {Bidproduct.product.subCategory.name} */}
            </a>
          </h5>
          <p className="font-xs">
            {Bidproduct.product.discription.substring(0, 100)}{" "}
          </p>
        </td>
        <td className="price" data-title="Price">
          <span>Rs {Bidproduct.biddingAmount} </span>
        </td>
        <td className="text-center" data-title="Stock">
          <p className="font-xs">{Bidproduct.bidQuantity}</p>
        </td>
        <td className="text-right" data-title="Cart">
          <span> PKR {Bidproduct.bidTotal} </span>
        </td>
        <td className="action" data-title="Remove">
          <a className="text-muted">
            <i
              onClick={() => {
                removeItem(Bidproduct.product._id);
                setRun(!run);
              }}
              className="fi-rs-trash"
            ></i>
          </a>
        </td>
      </tr>

      {/* <CheckOut amount={total} /> */}
    </>
  );
};
export default BidCartCard;
