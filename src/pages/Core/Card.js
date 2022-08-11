import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShowImage from "../core/ShowProductImage";
import moment from "moment";
import { AddItemCart } from "../../hellper/cartHellper.js";

const Card = ({ product }) => {
  const Navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);

  const AddToCart = () => {
    AddItemCart(product, () => {
      setRedirect(true);
    });
  };

  const redirectUser = (redirect) => {
    if (redirect) {
      Navigate("/cart");
    }
  };

  return (
    <div className="product-cart-wrap mb-30">
      <div className="product-img-action-wrap">
        {redirectUser(redirect)}
        <ShowImage item={product} url="product" />
        <div className="product-action-1">
          <a
            aria-label="Quick view"
            className="action-btn hover-up"
            data-bs-toggle="modal"
            data-bs-target="#quickViewModal"
          >
            <i className="fi-rs-eye"></i>
          </a>
          <a
            aria-label="Add To Wishlist"
            className="action-btn hover-up"
            href="shop-wishlist.html"
          >
            <i className="fi-rs-heart"></i>
          </a>
          <a
            aria-label="Compare"
            className="action-btn hover-up"
            href="shop-compare.html"
          >
            <i className="fi-rs-shuffle"></i>
          </a>
        </div>
        <div className="product-badges product-badges-position product-badges-mrg">
          <span className="hot">Hot</span>
        </div>
      </div>
      <div className="product-content-wrap">
        <div className="product-category">
          <a href="shop-grid-right.html">{product.subCategory.name}</a>
        </div>
        <h2>
          <a href="shop-product-right.html">{product.name}</a>
        </h2>
        <div className="rating-result" title="90%">
          <span>
            <span>90%</span>
          </span>
        </div>
        <div className="product-price">
          <span>RS {product.price} </span>
          <span className="old-price">RS {product.discount}</span>
        </div>
        <div className="product-action-1 show">
          <a aria-label="Add To Cart" className="action-btn hover-up">
            <i onClick={AddToCart} className="fi-rs-shopping-bag-add"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;
