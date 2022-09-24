import React, { useState, useEffect, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImgBrandBanner_9 from "../../assets/imgs/banner/banner-9.jpg";
import ImgCommon from "../../assets/imgs/shop/product-1-1.jpg";

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
import { isAuthenticated } from "../../api's/auth";

import { bestProductbySold } from "../../api's/ecommerceApi/productApi";
import Layout from "../../Layouts/ParentLayout";

const BestSelingProduct = () => {
  const Navigate = useNavigate();
  const [redirect, setRedirect] = useState(0);
  const [productName, setProductName] = useState("");
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);

  const loadbestProductbySold = () => {
    bestProductbySold().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
      }
    });
  };

  useEffect(() => {
    loadbestProductbySold();
  }, []);
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
    if (redirect === 3) {
      Navigate("/wishlist");
    }
  };

  return (
    <section class="bg-grey-9 section-padding">
      <div class="container pt-25 pb-25">
        <div class="heading-tab d-flex">
          <div class="heading-tab-left wow fadeIn animated">
            <h3 class="section-title mb-20">
              <span>Monthly</span> Best Sell
            </h3>
          </div>
          <div class="heading-tab-right wow fadeIn animated">
            <ul
              class="nav nav-tabs right no-border"
              id="myTab-1"
              role="tablist"
            >
              {/* <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="nav-tab-one-1"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-one-1"
                  type="button"
                  role="tab"
                  aria-controls="tab-one"
                  aria-selected="true"
                >
                  Featured
                </button>
              </li> */}
              {/* <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="nav-tab-two-1"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-two-1"
                  type="button"
                  role="tab"
                  aria-controls="tab-two"
                  aria-selected="false"
                >
                  Popular
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="nav-tab-three-1"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-three-1"
                  type="button"
                  role="tab"
                  aria-controls="tab-three"
                  aria-selected="false"
                >
                  New added
                </button>
              </li> */}
            </ul>
          </div>
        </div>
        <div class="row">
          <div className="col-lg-3 d-none d-lg-flex">
            <div className="banner-img style-2 wow fadeIn animated">
              <img src={ImgBrandBanner_9} alt="" />
              <div className="banner-text">
                <span>Woman Area</span>
                <h4 className="mt-5">
                  Save 17% on <br />
                  Clothing
                </h4>
                <a className="text-white">
                  Shop Now <i className="fi-rs-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-md-12">
            <div class="tab-content wow fadeIn animated" id="myTabContent-1">
              <div
                class="tab-pane fade show active"
                id="tab-one-1"
                role="tabpanel"
                aria-labelledby="tab-one-1"
              >
                <div class="carausel-4-columns-cover arrow-center position-relative">
                  <div
                    class="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                    id="carausel-4-columns-arrows"
                  ></div>
                  <div
                    class="carausel-4-columns carausel-arrow-center"
                    id="carausel-4-columns"
                  >
                    <div class="product-cart-wrap">
                      <div class="product-img-action-wrap">
                        <div class="product-img product-img-zoom">
                          <a>
                            <img
                              class="default-img"
                              src="assets/imgs/shop/product-1-1.jpg"
                              alt=""
                            />
                            <img
                              class="hover-img"
                              src="assets/imgs/shop/product-1-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="product-action-1">
                          <a
                            aria-label="Quick view"
                            class="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i class="fi-rs-eye"></i>
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            class="action-btn small hover-up"
                            href="shop-wishlist.html"
                          >
                            <i class="fi-rs-heart"></i>
                          </a>
                          <a
                            aria-label="Compare"
                            class="action-btn small hover-up"
                            href="shop-compare.html"
                          >
                            <i class="fi-rs-shuffle"></i>
                          </a>
                        </div>
                        <div class="product-badges product-badges-position product-badges-mrg">
                          <span class="hot">Hot</span>
                        </div>
                      </div>
                      <div class="product-content-wrap">
                        <div class="product-category">
                          <a> {product.name} </a>
                          {/* <a>{bestProduct.name} name</a> */}
                        </div>
                        <h2>
                          <a>{product.subCategory.name}</a>
                        </h2>
                        <div class="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div class="product-price">
                          <span>$238.85 </span>
                          <span class="old-price">$245.8</span>
                        </div>
                        <div class="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            class="action-btn hover-up"
                            href="shop-cart.html"
                          >
                            <i class="fi-rs-shopping-bag-add"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--End tab-pane--> */}
              {/* <div
                class="tab-pane fade"
                id="tab-two-1"
                role="tabpanel"
                aria-labelledby="tab-two-1"
              >
                <div class="carausel-4-columns-cover arrow-center position-relative">
                  <div
                    class="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                    id="carausel-4-columns-2-arrows"
                  ></div>
                  <div
                    class="carausel-4-columns carausel-arrow-center"
                    id="carausel-4-columns-2"
                  >
                    <div class="product-cart-wrap">
                      <div class="product-img-action-wrap">
                        <div class="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img
                              class="default-img"
                              src="assets/imgs/shop/product-6-1.jpg"
                              alt=""
                            />
                            <img
                              class="hover-img"
                              src="assets/imgs/shop/product-6-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="product-action-1">
                          <a
                            aria-label="Quick view"
                            class="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i class="fi-rs-eye"></i>
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            class="action-btn small hover-up"
                            href="shop-wishlist.html"
                          >
                            <i class="fi-rs-heart"></i>
                          </a>
                          <a
                            aria-label="Compare"
                            class="action-btn small hover-up"
                            href="shop-compare.html"
                          >
                            <i class="fi-rs-shuffle"></i>
                          </a>
                        </div>
                        <div class="product-badges product-badges-position product-badges-mrg">
                          <span class="hot">Hot</span>
                        </div>
                      </div>
                      <div class="product-content-wrap">
                        <div class="product-category">
                          <a href="shop-grid-right.html">Watch</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">
                            Cotton Leaf Printed 2
                          </a>
                        </h2>
                        <div class="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div class="product-price">
                          <span>$238.85 </span>
                          <span class="old-price">$245.8</span>
                        </div>
                        <div class="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            class="action-btn hover-up"
                            href="shop-cart.html"
                          >
                            <i class="fi-rs-shopping-bag-add"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="product-cart-wrap">
                      <div class="product-img-action-wrap">
                        <div class="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img
                              class="default-img"
                              src="assets/imgs/shop/product-7-1.jpg"
                              alt=""
                            />
                            <img
                              class="hover-img"
                              src="assets/imgs/shop/product-7-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="product-action-1">
                          <a
                            aria-label="Quick view"
                            class="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i class="fi-rs-eye"></i>
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            class="action-btn small hover-up"
                            href="shop-wishlist.html"
                          >
                            <i class="fi-rs-heart"></i>
                          </a>
                          <a
                            aria-label="Compare"
                            class="action-btn small hover-up"
                            href="shop-compare.html"
                          >
                            <i class="fi-rs-shuffle"></i>
                          </a>
                        </div>
                        <div class="product-badges product-badges-position product-badges-mrg">
                          <span class="new">New</span>
                        </div>
                      </div>
                      <div class="product-content-wrap">
                        <div class="product-category">
                          <a href="shop-grid-right.html">Watch</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Smart Speaker</a>
                        </h2>
                        <div class="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div class="product-price">
                          <span>$138.85 </span>
                          <span class="old-price">$145.8</span>
                        </div>
                        <div class="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            class="action-btn hover-up"
                            href="shop-cart.html"
                          >
                            <i class="fi-rs-shopping-bag-add"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="product-cart-wrap">
                      <div class="product-img-action-wrap">
                        <div class="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img
                              class="default-img"
                              src="assets/imgs/shop/product-5-1.jpg"
                              alt=""
                            />
                            <img
                              class="hover-img"
                              src="assets/imgs/shop/product-5-1.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="product-action-1">
                          <a
                            aria-label="Quick view"
                            class="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i class="fi-rs-eye"></i>
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            class="action-btn small hover-up"
                            href="shop-wishlist.html"
                          >
                            <i class="fi-rs-heart"></i>
                          </a>
                          <a
                            aria-label="Compare"
                            class="action-btn small hover-up"
                            href="shop-compare.html"
                          >
                            <i class="fi-rs-shuffle"></i>
                          </a>
                        </div>
                        <div class="product-badges product-badges-position product-badges-mrg">
                          <span class="best">Best Sell</span>
                        </div>
                      </div>
                      <div class="product-content-wrap">
                        <div class="product-category">
                          <a href="shop-grid-right.html">Watch</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Hugy Speaker</a>
                        </h2>
                        <div class="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div class="product-price">
                          <span>$152.85 </span>
                          <span class="old-price">$156.8</span>
                        </div>
                        <div class="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            class="action-btn hover-up"
                            href="shop-cart.html"
                          >
                            <i class="fi-rs-shopping-bag-add"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="product-cart-wrap">
                      <div class="product-img-action-wrap">
                        <div class="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img
                              class="default-img"
                              src="assets/imgs/shop/product-10-1.jpg"
                              alt=""
                            />
                            <img
                              class="hover-img"
                              src="assets/imgs/shop/product-10-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="product-action-1">
                          <a
                            aria-label="Quick view"
                            class="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i class="fi-rs-eye"></i>
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            class="action-btn small hover-up"
                            href="shop-wishlist.html"
                          >
                            <i class="fi-rs-heart"></i>
                          </a>
                          <a
                            aria-label="Compare"
                            class="action-btn small hover-up"
                            href="shop-compare.html"
                          >
                            <i class="fi-rs-shuffle"></i>
                          </a>
                        </div>
                        <div class="product-badges product-badges-position product-badges-mrg">
                          <span class="hot">-12%</span>
                        </div>
                      </div>
                      <div class="product-content-wrap">
                        <div class="product-category">
                          <a href="shop-grid-right.html">Watch</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Smart Speaker</a>
                        </h2>
                        <div class="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div class="product-price">
                          <span>$238.85 </span>
                          <span class="old-price">$245.8</span>
                        </div>
                        <div class="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            class="action-btn hover-up"
                            href="shop-cart.html"
                          >
                            <i class="fi-rs-shopping-bag-add"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="product-cart-wrap">
                      <div class="product-img-action-wrap">
                        <div class="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img
                              class="default-img"
                              src="assets/imgs/shop/product-12-1.jpg"
                              alt=""
                            />
                            <img
                              class="hover-img"
                              src="assets/imgs/shop/product-12-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="product-action-1">
                          <a
                            aria-label="Quick view"
                            class="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i class="fi-rs-eye"></i>
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            class="action-btn small hover-up"
                            href="shop-wishlist.html"
                          >
                            <i class="fi-rs-heart"></i>
                          </a>
                          <a
                            aria-label="Compare"
                            class="action-btn small hover-up"
                            href="shop-compare.html"
                          >
                            <i class="fi-rs-shuffle"></i>
                          </a>
                        </div>
                        <div class="product-badges product-badges-position product-badges-mrg">
                          <span class="sale">Sale</span>
                        </div>
                      </div>
                      <div class="product-content-wrap">
                        <div class="product-category">
                          <a href="shop-grid-right.html">Watch</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">
                            Cotton Leaf Printed
                          </a>
                        </h2>
                        <div class="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div class="product-price">
                          <span>$238.85 </span>
                          <span class="old-price">$245.8</span>
                        </div>
                        <div class="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            class="action-btn hover-up"
                            href="shop-cart.html"
                          >
                            <i class="fi-rs-shopping-bag-add"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="tab-three-1"
                role="tabpanel"
                aria-labelledby="tab-three-1"
              >
                <div class="carausel-4-columns-cover arrow-center position-relative">
                  <div
                    class="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                    id="carausel-4-columns-3-arrows"
                  ></div>
                  <div
                    class="carausel-4-columns carausel-arrow-center"
                    id="carausel-4-columns-3"
                  >
                    <div class="product-cart-wrap">
                      <div class="product-img-action-wrap">
                        <div class="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img
                              class="default-img"
                              src="assets/imgs/shop/product-8-1.jpg"
                              alt=""
                            />
                            <img
                              class="hover-img"
                              src="assets/imgs/shop/product-8-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="product-action-1">
                          <a
                            aria-label="Quick view"
                            class="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i class="fi-rs-eye"></i>
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            class="action-btn small hover-up"
                            href="shop-wishlist.html"
                          >
                            <i class="fi-rs-heart"></i>
                          </a>
                          <a
                            aria-label="Compare"
                            class="action-btn small hover-up"
                            href="shop-compare.html"
                          >
                            <i class="fi-rs-shuffle"></i>
                          </a>
                        </div>
                        <div class="product-badges product-badges-position product-badges-mrg">
                          <span class="hot">Hot</span>
                        </div>
                      </div>
                      <div class="product-content-wrap">
                        <div class="product-category">
                          <a href="shop-grid-right.html">Watch</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">
                            Cotton Leaf Printed
                          </a>
                        </h2>
                        <div class="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div class="product-price">
                          <span>$238.85 </span>
                          <span class="old-price">$245.8</span>
                        </div>
                        <div class="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            class="action-btn hover-up"
                            href="shop-cart.html"
                          >
                            <i class="fi-rs-shopping-bag-add"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="product-cart-wrap">
                      <div class="product-img-action-wrap">
                        <div class="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img
                              class="default-img"
                              src="assets/imgs/shop/product-13-1.jpg"
                              alt=""
                            />
                            <img
                              class="hover-img"
                              src="assets/imgs/shop/product-13-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="product-action-1">
                          <a
                            aria-label="Quick view"
                            class="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i class="fi-rs-eye"></i>
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            class="action-btn small hover-up"
                            href="shop-wishlist.html"
                          >
                            <i class="fi-rs-heart"></i>
                          </a>
                          <a
                            aria-label="Compare"
                            class="action-btn small hover-up"
                            href="shop-compare.html"
                          >
                            <i class="fi-rs-shuffle"></i>
                          </a>
                        </div>
                        <div class="product-badges product-badges-position product-badges-mrg">
                          <span class="new">New</span>
                        </div>
                      </div>
                      <div class="product-content-wrap">
                        <div class="product-category">
                          <a href="shop-grid-right.html">Watch</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Smart Speaker</a>
                        </h2>
                        <div class="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div class="product-price">
                          <span>$138.85 </span>
                          <span class="old-price">$145.8</span>
                        </div>
                        <div class="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            class="action-btn hover-up"
                            href="shop-cart.html"
                          >
                            <i class="fi-rs-shopping-bag-add"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="product-cart-wrap">
                      <div class="product-img-action-wrap">
                        <div class="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img
                              class="default-img"
                              src="assets/imgs/shop/product-14-1.jpg"
                              alt=""
                            />
                            <img
                              class="hover-img"
                              src="assets/imgs/shop/product-14-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="product-action-1">
                          <a
                            aria-label="Quick view"
                            class="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i class="fi-rs-eye"></i>
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            class="action-btn small hover-up"
                            href="shop-wishlist.html"
                          >
                            <i class="fi-rs-heart"></i>
                          </a>
                          <a
                            aria-label="Compare"
                            class="action-btn small hover-up"
                            href="shop-compare.html"
                          >
                            <i class="fi-rs-shuffle"></i>
                          </a>
                        </div>
                        <div class="product-badges product-badges-position product-badges-mrg">
                          <span class="best">Best Sell</span>
                        </div>
                      </div>
                      <div class="product-content-wrap">
                        <div class="product-category">
                          <a href="shop-grid-right.html">Watch</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Hugy Speaker</a>
                        </h2>
                        <div class="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div class="product-price">
                          <span>$152.85 </span>
                          <span class="old-price">$156.8</span>
                        </div>
                        <div class="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            class="action-btn hover-up"
                            href="shop-cart.html"
                          >
                            <i class="fi-rs-shopping-bag-add"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="product-cart-wrap">
                      <div class="product-img-action-wrap">
                        <div class="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img
                              class="default-img"
                              src="assets/imgs/shop/product-15-1.jpg"
                              alt=""
                            />
                            <img
                              class="hover-img"
                              src="assets/imgs/shop/product-15-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="product-action-1">
                          <a
                            aria-label="Quick view"
                            class="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i class="fi-rs-eye"></i>
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            class="action-btn small hover-up"
                            href="shop-wishlist.html"
                          >
                            <i class="fi-rs-heart"></i>
                          </a>
                          <a
                            aria-label="Compare"
                            class="action-btn small hover-up"
                            href="shop-compare.html"
                          >
                            <i class="fi-rs-shuffle"></i>
                          </a>
                        </div>
                        <div class="product-badges product-badges-position product-badges-mrg">
                          <span class="hot">-12%</span>
                        </div>
                      </div>
                      <div class="product-content-wrap">
                        <div class="product-category">
                          <a href="shop-grid-right.html">Watch</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">Smart Speaker</a>
                        </h2>
                        <div class="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div class="product-price">
                          <span>$238.85 </span>
                          <span class="old-price">$245.8</span>
                        </div>
                        <div class="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            class="action-btn hover-up"
                            href="shop-cart.html"
                          >
                            <i class="fi-rs-shopping-bag-add"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="product-cart-wrap">
                      <div class="product-img-action-wrap">
                        <div class="product-img product-img-zoom">
                          <a href="shop-product-right.html">
                            <img
                              class="default-img"
                              src="assets/imgs/shop/product-11-1.jpg"
                              alt=""
                            />
                            <img
                              class="hover-img"
                              src="assets/imgs/shop/product-11-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="product-action-1">
                          <a
                            aria-label="Quick view"
                            class="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i class="fi-rs-eye"></i>
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            class="action-btn small hover-up"
                            href="shop-wishlist.html"
                          >
                            <i class="fi-rs-heart"></i>
                          </a>
                          <a
                            aria-label="Compare"
                            class="action-btn small hover-up"
                            href="shop-compare.html"
                          >
                            <i class="fi-rs-shuffle"></i>
                          </a>
                        </div>
                        <div class="product-badges product-badges-position product-badges-mrg">
                          <span class="sale">Sale</span>
                        </div>
                      </div>
                      <div class="product-content-wrap">
                        <div class="product-category">
                          <a href="shop-grid-right.html">Watch</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">
                            Cotton Leaf Printed
                          </a>
                        </h2>
                        <div class="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div class="product-price">
                          <span>$238.85 </span>
                          <span class="old-price">$245.8</span>
                        </div>
                        <div class="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            class="action-btn hover-up"
                            href="shop-cart.html"
                          >
                            <i class="fi-rs-shopping-bag-add"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            {/* <!--End tab-content--> */}
          </div>
          {/* <!--End Col-lg-9--> */}
        </div>
      </div>
    </section>
  );
};

export default BestSelingProduct;
