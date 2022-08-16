import React, { useState, useEffect, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import { AddItemCart } from "../../hellper/cartHellper.js";

import { removeItemwishList } from "../../hellper/wishListHellper";
import ShowCartImage from "../ecommerce/ShowCartImage.js";
const WishListCard = ({
  wishlistproduct,
  setRunWishList = (f) => f, // default value of function
  runwishlist = undefined,
}) => {
  const Navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);

  const AddToCart = () => {
    AddItemCart(wishlistproduct, () => {
      setRedirect(true);
    });
  };
  const redirectUser = (redirect) => {
    if (redirect) {
      Navigate("/cart");
    }
  };
  return (
    <Fragment>
      {redirectUser(redirect)}
      <tr>
        <td className="image product-thumbnail">
          <ShowCartImage item={wishlistproduct} url="product" />
        </td>
        <td className="product-des product-name">
          <h5 className="product-name">
            <a href="shop-product-right.html">
              {wishlistproduct.name}
              <br /> {wishlistproduct.subCategory.name}
            </a>
          </h5>
          <p className="font-xs">{wishlistproduct.discription}</p>
        </td>
        <td className="price" data-title="Price">
          <span> PKR {wishlistproduct.price} </span>
        </td>
        <td className="text-center" data-title="Stock">
          <span className="color3 font-weight-bold">In Stock</span>
        </td>
        <td className="text-right" data-title="Cart">
          <button className="btn btn-sm" onClick={AddToCart}>
            <i className="fi-rs-shopping-bag mr-5"></i>
            Add to cart
          </button>
        </td>
        <td className="action" data-title="Remove">
          <a
            onClick={() => {
              removeItemwishList(wishlistproduct._id);
              setRunWishList(!runwishlist);
            }}
          >
            <i className="fi-rs-trash"></i>
          </a>
        </td>
      </tr>
    </Fragment>
  );
};
export default WishListCard;
