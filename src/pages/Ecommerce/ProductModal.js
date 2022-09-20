import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import moment from "moment";

import { AddItemCart } from "../../hellper/cartHellper.js";
import { AddItemwishList } from "../../hellper/wishListHellper";
import {
  Card,
  CardBody,
  Col,
  Container,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Input,
  Label,
} from "reactstrap";
import { isAuthenticated } from "../../api's/auth/index.js";

const ProductModal = ({
  setQuickView = (f) => f, // default value of function
  qiuckView,
  product,
}) => {
  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  const Navigate = useNavigate();
  const [redirect, setRedirect] = useState(0);
  const [error, setError] = useState("");

  const showError = () => (
    <h2 className="alert alert-danger" style={{ display: error ? "" : "none" }}>
      {error}
    </h2>
  );

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
    <>
      <Modal
        className="fade bd-example-modal-lg"
        show={qiuckView}
        onHide={qiuckView}
        size="lg"
      >
        <Modal.Header>
          <Modal.Title>Quick View </Modal.Title>
          {showError()}
          <button
            type="button"
            className="btn-close ml-500  "
            onClick={() => {
              setQuickView(false);
            }}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <div
          // aria-labelledby="quickViewModalLabel"
          // className="modal fade custom-modal"
          // id="quickViewModal"
          // tabIndex="-1"
          // aria-hidden="true"
          >
            {redirectUser(redirect)}
            <div className="">
              <div className="">
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                      <div className="detail-gallery">
                        {/* <span className="zoom-icon">
                          <i className="fi-rs-search"></i>
                        </span> */}
                        {/* <!-- MAIN SLIDES --> */}
                        <div className="product-image-slider">
                          <figure className="border-radius-10">
                            <img
                              src={`http://localhost:8000/likenAdmin/product/photo/${product._id}`}
                              alt="product image"
                            />
                          </figure>
                        </div>
                      </div>

                      {/* <!-- End Gallery --> */}
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                      <div className="detail-info">
                        <h3 className="title-detail mt-30">{product.name}</h3>
                        <div className="product-detail-rating">
                          <div className="pro-details-brand">
                            <span>
                              Brands:
                              <a>{product.brandName}</a>
                            </span>
                          </div>
                          <div className="product-rate-cover text-end">
                            <div className="product-rate d-inline-block">
                              <div
                                className="product-rating"
                                style={{ width: "90%" }}
                              ></div>
                            </div>
                            <span className="font-small ml-5 text-muted">
                              (25 reviews)
                            </span>
                          </div>
                        </div>
                        <div className="clearfix product-price-cover">
                          <div className="product-price primary-color float-left">
                            <ins>
                              <span className="text-brand">
                                RS {product.price}
                              </span>
                            </ins>
                            {/* <ins>
                              <span className="old-price font-md ml-15">
                                RS {product.discount}
                              </span>
                            </ins> */}
                            <span className="save-price font-md color3 ml-15">
                              {product.discount}% Off
                            </span>
                          </div>
                        </div>
                        <div className="bt-1 border-color-1 mt-15 mb-15"></div>
                        <div className="short-desc mb-30">
                          <p className="font-sm">{product.discription}</p>
                        </div>
                        {/* 
                        <div className="attr-detail attr-color mb-15">
                          <strong className="mr-10">Color</strong>
                          <ul className="list-filter color-filter">
                            <li>
                              <a href="#" data-color="Red">
                                <span className="product-color-red"></span>
                              </a>
                            </li>
                            <li>
                              <a href="#" data-color="Yellow">
                                <span className="product-color-yellow"></span>
                              </a>
                            </li>
                            <li className="active">
                              <a href="#" data-color="White">
                                <span className="product-color-white"></span>
                              </a>
                            </li>
                            <li>
                              <a href="#" data-color="Orange">
                                <span className="product-color-orange"></span>
                              </a>
                            </li>
                            <li>
                              <a href="#" data-color="Cyan">
                                <span className="product-color-cyan"></span>
                              </a>
                            </li>
                            <li>
                              <a href="#" data-color="Green">
                                <span className="product-color-green"></span>
                              </a>
                            </li>
                            <li>
                              <a href="#" data-color="Purple">
                                <span className="product-color-purple"></span>
                              </a>
                            </li>
                          </ul>
                        </div> */}
                        {/* <div className="attr-detail attr-size">
                          <strong className="mr-10">Size</strong>
                          <ul className="list-filter size-filter font-small">
                            <li>
                              <a href="#">S</a>
                            </li>
                            <li className="active">
                              <a href="#">M</a>
                            </li>
                            <li>
                              <a href="#">L</a>
                            </li>
                            <li>
                              <a href="#">XL</a>
                            </li>
                            <li>
                              <a href="#">XXL</a>
                            </li>
                          </ul>
                        </div> */}
                        <div className="bt-1 border-color-1 mt-30 mb-30"></div>
                        <div className="detail-extralink">
                          {/* <div className="detail-qty border radius">
                            <a href="#" className="qty-down">
                              <i className="fi-rs-angle-small-down"></i>
                            </a>
                            <span className="qty-val">1</span>
                            <a href="#" className="qty-up">
                              <i className="fi-rs-angle-small-up"></i>
                            </a>
                          </div> */}
                          <div className="product-extra-link2">
                            <button
                              onClick={AddToCart}
                              type="submit"
                              className="button button-add-to-cart"
                            >
                              Add to cart
                            </button>
                            <a
                              onClick={AddToWishList}
                              aria-label="Add To Wishlist"
                              className="action-btn hover-up"
                            >
                              <i
                                onClick={AddToWishList}
                                className="fi-rs-heart"
                              ></i>
                            </a>
                            <Link
                              to={`productdetail/${product._id}`}
                              aria-label="Detail"
                              className="action-btn hover-up"
                            >
                              <i className="fi-rs-shuffle"></i>
                            </Link>
                          </div>
                        </div>
                        <ul className="product-meta font-xs color-grey mt-50">
                          <li className="mb-5">
                            Sold: <a> {product.sold}</a>
                          </li>
                          <li>
                            Availability:
                            <span className="in-stock text-success ml-5">
                              {product.quantity} Items In Stock
                            </span>
                          </li>
                          <li className="mb-5">
                            Created Date:{" "}
                            <a>
                              {moment(product.createdAt).format("DD-MM-YYYY")}
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Detail Info --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ProductModal;
