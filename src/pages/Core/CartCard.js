import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import { AddItemCart } from "../../hellper/cartHellper.js";

import {
  getTotalItemInCart,
  removeItem,
  updateItem,
} from "../../hellper/cartHellper";
import ShowCartImage from "../ecommerce/ShowCartImage.js";
import CheckOut from "../ecommerce/CheckOut.js";
const CartCard = ({
  product,
  setRun = (f) => f, // default value of function
  run = undefined,
}) => {
  const [count, setCount] = useState(product.count);
  const [total, setTotal] = useState(product.price);

  const handleChange = (productId, price) => (event) => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
    if (event.target.value >= 1) {
      setTotal(event.target.value * price);
    }
  };

  return (
    <>
      <tr>
        <td className="image product-thumbnail">
          {/* <img src={ImgProduct_1_1} alt="#" /> */}
          <ShowCartImage item={product} url="product" />
        </td>
        <td className="product-des product-name">
          <h5 className="product-name">
            <a href="shop-product-right.html">
              {product.name} <br />
              {product.subCategory.name}
            </a>
          </h5>
          <p className="font-xs">{product.discription.substring(0, 100)} </p>
        </td>
        <td className="price" data-title="Price">
          <span>Rs {product.price} </span>
        </td>
        <td className="text-center" data-title="Stock">
          <div>
            {/* <a href="#" className="qty-down">
                                <i className="fi-rs-angle-small-down"></i>
                              </a> */}
            <input
              type="number"
              className="detail-qty border radius  m-auto"
              value={count}
              onChange={handleChange(product._id, product.price)}
            />
            {/* <a className="qty-up">
                                <i className="fi-rs-angle-small-up"></i>
                              </a> */}
          </div>
        </td>
        <td className="text-right" data-title="Cart">
          <span> PKR {total} </span>
        </td>
        <td className="action" data-title="Remove">
          <a className="text-muted">
            <i
              onClick={() => {
                removeItem(product._id);
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
export default CartCard;
