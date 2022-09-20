import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShowImage from "../core/ShowProductImage";
import moment from "moment";

import QuickView from "../ecommerce/QuickView";
import { AddItemCart } from "../../hellper/cartHellper.js";
import { AddItemwishList } from "../../hellper/wishListHellper";
import ProductModal from "../ecommerce/ProductModal";
import Timer from "./Timer";
const Card = ({ product }) => {
  const Navigate = useNavigate();
  const [redirect, setRedirect] = useState(0);
  const [qiuckView, setQuickView] = useState(false);
  const AddToCart = () => {
    AddItemCart(product, () => {
      setRedirect(1);
    });
  };
  const AddToWishList = () => {
    AddItemwishList(product, () => {
      setRedirect(2);
    });
  };

  const redirectUser = (redirect) => {
    if (redirect === 1) {
      Navigate("/cart");
    }
    if (redirect === 2) {
      Navigate("/wishlist");
    }
  };

  return (
    <div className="product-cart-wrap mb-30">
      <ProductModal
        setQuickView={setQuickView}
        qiuckView={qiuckView}
        product={product}
      />
      <div className="product-img-action-wrap">
        {redirectUser(redirect)}
        <ShowImage item={product} url="product" />
        <div className="product-action-1">
          <a
            aria-label="Quick view"
            className="action-btn hover-up"
            // data-bs-toggle="modal"
            // data-bs-target="#quickViewModal"
          >
            <i
              onClick={() => {
                setQuickView(true);
              }}
              className="fi-rs-eye"
            ></i>
          </a>
          <a
            aria-label="Add To Wishlist"
            onClick={AddToWishList}
            className="action-btn hover-up"
          >
            <i className="fi-rs-heart"></i>
          </a>
          <Link
            to={`productdetail/${product._id}`}
            aria-label="Detail"
            className="action-btn hover-up"
          >
            <i className="fi-rs-shuffle"></i>
          </Link>
        </div>
        <div
          className="product-badges product-badges-position product-badges-mrg float-right"
          // style={{ color: "red" }}
        >
          {/* <span className="hot">Hot</span> */}
          {product.bidDays ?? product.bidDays > 0 ? (
            <span className="hot">
              <Timer delayResend={product.bidDays} />
            </span>
          ) : (
            ""
          )}
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
