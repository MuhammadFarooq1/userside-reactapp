import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layouts/ParentLayout";
import ImgSlider_1 from "../../assets/imgs/slider/slider-1.png";
import ImgBanner_4 from "../../assets/imgs/banner/banner-4.png";
import ImgCat_1 from "../../assets/imgs/shop/category-thumb-1.jpg";
import ImgCat_2 from "../../assets/imgs/shop/category-thumb-2.jpg";
import ImgCat_3 from "../../assets/imgs/shop/category-thumb-3.jpg";
import ImgCat_4 from "../../assets/imgs/shop/category-thumb-4.jpg";
import ImgCat_5 from "../../assets/imgs/shop/category-thumb-5.jpg";
import ImgCat_6 from "../../assets/imgs/shop/category-thumb-6.jpg";
import ImgOferBanner_1 from "../../assets/imgs/banner/banner-1.png";
import ImgOferBanner_2 from "../../assets/imgs/banner/banner-2.png";
import ImgOferBanner_3 from "../../assets/imgs/banner/banner-3.png";
// import ImgSlider_2 from "../../assets/imgs/slider/slider-2.png";
// import ImgSlider_3 from "../../assets/imgs/slider/slider-3.png";
import ImgFeatur_1 from "../../assets/imgs/theme/icons/feature-1.png";
import ImgFeatur_2 from "../../assets/imgs/theme/icons/feature-2.png";
import ImgFeatur_3 from "../../assets/imgs/theme/icons/feature-3.png";
import ImgFeatur_4 from "../../assets/imgs/theme/icons/feature-4.png";
import ImgFeatur_5 from "../../assets/imgs/theme/icons/feature-5.png";
import ImgFeatur_6 from "../../assets/imgs/theme/icons/feature-6.png";
import ImgCommon from "../../assets/imgs/shop/product-1-1.jpg";

const Home = () => {
  return (
    <Layout title="" discription="" className="">
      <Fragment>
        {/* <div
          className="modal fade custom-modal"
          id="onloadModal"
          tabindex="-1"
          aria-labelledby="onloadModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="modal-body">
                <div
                  className="deal"
                  style="background-image: url('assets/imgs/banner/menu-banner-7.png')"
                >
                  <div className="deal-top">
                    <h2 className="text-brand">Deal of the Day</h2>
                    <h5>Limited quantities.</h5>
                  </div>
                  <div className="deal-content">
                    <h6 className="product-title">
                      <a href="shop-product-right.html">
                        Summer Collection New Morden Design
                      </a>
                    </h6>
                    <div className="product-price">
                      <span className="new-price">$139.00</span>
                      <span className="old-price">$160.99</span>
                    </div>
                  </div>
                  <div className="deal-bottom">
                    <p>Hurry Up! Offer End In:</p>
                    <div
                      className="deals-countdown"
                      data-countdown="2025/03/25 00:00:00"
                    >
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">03</span>
                        <span className="countdown-period"> days </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">02</span>
                        <span className="countdown-period"> hours </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">43</span>
                        <span className="countdown-period"> mins </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">29</span>
                        <span className="countdown-period"> sec </span>
                      </span>
                    </div>
                    <a href="shop-grid-right.html" className="btn hover-up">
                      Shop Now <i className="fi-rs-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <!-- Quick view --> */}

        {/* <div
          className="modal fade custom-modal"
          id="quickViewModal"
          tabindex="-1"
          aria-labelledby="quickViewModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="detail-gallery">
                      <span className="zoom-icon">
                        <i className="fi-rs-search"></i>
                      </span>

                      <div className="product-image-slider">
                        <figure className="border-radius-10">
                          <img
                            src="assets/imgs/shop/product-16-2.jpg"
                            alt="product image"
                          />
                        </figure>
                        <figure className="border-radius-10">
                          <img
                            src="assets/imgs/shop/product-16-1.jpg"
                            alt="product image"
                          />
                        </figure>
                        <figure className="border-radius-10">
                          <img
                            src="assets/imgs/shop/product-16-3.jpg"
                            alt="product image"
                          />
                        </figure>
                        <figure className="border-radius-10">
                          <img
                            src="assets/imgs/shop/product-16-4.jpg"
                            alt="product image"
                          />
                        </figure>
                        <figure className="border-radius-10">
                          <img
                            src="assets/imgs/shop/product-16-5.jpg"
                            alt="product image"
                          />
                        </figure>
                        <figure className="border-radius-10">
                          <img
                            src="assets/imgs/shop/product-16-6.jpg"
                            alt="product image"
                          />
                        </figure>
                        <figure className="border-radius-10">
                          <img
                            src="assets/imgs/shop/product-16-7.jpg"
                            alt="product image"
                          />
                        </figure>
                      </div>
                      <div className="slider-nav-thumbnails pl-15 pr-15">
                        <div>
                          <img
                            src="assets/imgs/shop/thumbnail-3.jpg"
                            alt="product image"
                          />
                        </div>
                        <div>
                          <img
                            src="assets/imgs/shop/thumbnail-4.jpg"
                            alt="product image"
                          />
                        </div>
                        <div>
                          <img
                            src="assets/imgs/shop/thumbnail-5.jpg"
                            alt="product image"
                          />
                        </div>
                        <div>
                          <img
                            src="assets/imgs/shop/thumbnail-6.jpg"
                            alt="product image"
                          />
                        </div>
                        <div>
                          <img
                            src="assets/imgs/shop/thumbnail-7.jpg"
                            alt="product image"
                          />
                        </div>
                        <div>
                          <img
                            src="assets/imgs/shop/thumbnail-8.jpg"
                            alt="product image"
                          />
                        </div>
                        <div>
                          <img
                            src="assets/imgs/shop/thumbnail-9.jpg"
                            alt="product image"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="social-icons single-share">
                      <ul className="text-grey-5 d-inline-block">
                        <li>
                          <strong className="mr-10">Share this:</strong>
                        </li>
                        <li className="social-facebook">
                          <a href="#">
                            <img
                              src="assets/imgs/theme/icons/icon-facebook.svg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li className="social-twitter">
                          {" "}
                          <a href="#">
                            <img
                              src="assets/imgs/theme/icons/icon-twitter.svg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li className="social-instagram">
                          <a href="#">
                            <img
                              src="assets/imgs/theme/icons/icon-instagram.svg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li className="social-linkedin">
                          <a href="#">
                            <img
                              src="assets/imgs/theme/icons/icon-pinterest.svg"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="detail-info">
                      <h3 className="title-detail mt-30">
                        Colorful Pattern Shirts HD450
                      </h3>
                      <div className="product-detail-rating">
                        <div className="pro-details-brand">
                          <span>
                            {" "}
                            Brands: <a href="shop-grid-right.html">Bootstrap</a>
                          </span>
                        </div>
                        <div className="product-rate-cover text-end">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style="width:90%"
                            ></div>
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (25 reviews)
                          </span>
                        </div>
                      </div>
                      <div className="clearfix product-price-cover">
                        <div className="product-price primary-color float-left">
                          <ins>
                            <span className="text-brand">$120.00</span>
                          </ins>
                          <ins>
                            <span className="old-price font-md ml-15">
                              $200.00
                            </span>
                          </ins>
                          <span className="save-price  font-md color3 ml-15">
                            25% Off
                          </span>
                        </div>
                      </div>
                      <div className="bt-1 border-color-1 mt-15 mb-15"></div>
                      <div className="short-desc mb-30">
                        <p className="font-sm">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Aliquam rem officia, corrupti reiciendis minima
                          nisi modi,!
                        </p>
                      </div>

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
                      </div>
                      <div className="attr-detail attr-size">
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
                      </div>
                      <div className="bt-1 border-color-1 mt-30 mb-30"></div>
                      <div className="detail-extralink">
                        <div className="detail-qty border radius">
                          <a href="#" className="qty-down">
                            <i className="fi-rs-angle-small-down"></i>
                          </a>
                          <span className="qty-val">1</span>
                          <a href="#" className="qty-up">
                            <i className="fi-rs-angle-small-up"></i>
                          </a>
                        </div>
                        <div className="product-extra-link2">
                          <button
                            type="submit"
                            className="button button-add-to-cart"
                          >
                            Add to cart
                          </button>
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
                      </div>
                      <ul className="product-meta font-xs color-grey mt-50">
                        <li className="mb-5">
                          SKU: <a href="#">FWM15VKT</a>
                        </li>
                        <li className="mb-5">
                          Tags:{" "}
                          <a href="#" rel="tag">
                            Cloth
                          </a>
                          ,{" "}
                          <a href="#" rel="tag">
                            Women
                          </a>
                          ,{" "}
                          <a href="#" rel="tag">
                            Dress
                          </a>{" "}
                        </li>
                        <li>
                          Availability:
                          <span className="in-stock text-success ml-5">
                            8 Items In Stock
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <main className="main">
          <section className="home-slider position-relative pt-50">
            <div className="hero-slider-1 dot-style-1 dot-style-1-position-1">
              <div className="single-hero-slider single-animation-wrap">
                <div className="container">
                  <div className="row align-items-center slider-animated-1">
                    <div className="col-lg-5 col-md-6">
                      <div className="hero-slider-content-2">
                        <h4 className="animated">Trade-in offer</h4>
                        <h2 className="animated fw-900">Supper value deals</h2>
                        <h1 className="animated fw-900 text-brand">
                          On all products
                        </h1>
                        <p className="animated">
                          Save more with coupons & up to 70% off
                        </p>
                        <a
                          className="animated btn btn-brush btn-brush-3"
                          href="shop-product-right.html"
                        >
                          {" "}
                          Shop Now{" "}
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                      <div className="single-slider-img single-slider-img-1">
                        <img
                          className="animated slider-1-1"
                          src={ImgSlider_1}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="single-hero-slider single-animation-wrap">
                <div className="container">
                  <div className="row align-items-center slider-animated-1">
                    <div className="col-lg-5 col-md-6">
                      <div className="hero-slider-content-2">
                        <h4 className="animated">Hot promotions</h4>
                        <h2 className="animated fw-900">Fashion Trending</h2>
                        <h1 className="animated fw-900 text-7">
                          Great Collection
                        </h1>
                        <p className="animated">
                          Save more with coupons & up to 20% off
                        </p>
                        <a
                          className="animated btn btn-brush btn-brush-2"
                          href="shop-product-right.html"
                        >
                          {" "}
                          Discover Now{" "}
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                      <div className="single-slider-img single-slider-img-1">
                        <img
                          className="animated slider-1-2"
                          src=""
                          // src={ImgSlider_2}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="single-hero-slider single-animation-wrap">
                <div className="container">
                  <div className="row align-items-center slider-animated-1">
                    <div className="col-lg-5 col-md-6">
                      <div className="hero-slider-content-2">
                        <h4 className="animated">Upcoming Offer</h4>
                        <h2 className="animated fw-900">Big Deals From</h2>
                        <h1 className="animated fw-900 text-8">Manufacturer</h1>
                        <p className="animated">
                          Clothing, Shoes, Bags, Wallets...
                        </p>
                        <a
                          className="animated btn btn-brush btn-brush-1"
                          href="shop-product-right.html"
                        >
                          {" "}
                          Shop Now{" "}
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                      <div className="single-slider-img single-slider-img-1">
                        <img
                          className="animated slider-1-3"
                          src=""
                          // src={ImgSlider_3}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="slider-arrow hero-slider-1-arrow"></div>
          </section>

          <section className="featured section-padding position-relative">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
                  <div className="banner-features wow fadeIn animated hover-up">
                    <img src={ImgFeatur_1} alt="" />
                    <h4 className="bg-1">Free Shipping</h4>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
                  <div className="banner-features wow fadeIn animated hover-up">
                    <img src={ImgFeatur_2} alt="" />
                    <h4 className="bg-3">Online Order</h4>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
                  <div className="banner-features wow fadeIn animated hover-up">
                    <img src={ImgFeatur_3} alt="" />
                    <h4 className="bg-2">Save Money</h4>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
                  <div className="banner-features wow fadeIn animated hover-up">
                    <img src={ImgFeatur_4} alt="" />
                    <h4 className="bg-4">Promotions</h4>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
                  <div className="banner-features wow fadeIn animated hover-up">
                    <img src={ImgFeatur_5} alt="" />
                    <h4 className="bg-5">Happy Sell</h4>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
                  <div className="banner-features wow fadeIn animated hover-up">
                    <img src={ImgFeatur_6} alt="" />
                    <h4 className="bg-6">24/7 Support</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="product-tabs section-padding position-relative wow fadeIn animated">
            <div className="bg-square"></div>
            <div className="container">
              <div className="tab-header">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="nav-tab-one"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-one"
                      type="button"
                      role="tab"
                      aria-controls="tab-one"
                      aria-selected="true"
                    >
                      Featured
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="nav-tab-two"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-two"
                      type="button"
                      role="tab"
                      aria-controls="tab-two"
                      aria-selected="false"
                    >
                      Popular
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="nav-tab-three"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-three"
                      type="button"
                      role="tab"
                      aria-controls="tab-three"
                      aria-selected="false"
                    >
                      New added
                    </button>
                  </li>
                </ul>
                <a href="#" className="view-more d-none d-md-flex">
                  View More<i className="fi-rs-angle-double-small-right"></i>
                </a>
              </div>
              {/* <!--End nav-tabs--> */}
              <div
                className="tab-content wow fadeIn animated"
                id="myTabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="tab-one"
                  role="tabpanel"
                  aria-labelledby="tab-one"
                >
                  <div className="row product-grid-4">
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                              <img className="default-img" src={ImgCommon} />
                              <img
                                className="hover-img"
                                src={ImgCommon}
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="product-action-1">
                            <a
                              aria-label="Quick view"
                              className="action-btn hover-up"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="fi-rs-eye"></i>
                            </a>

                            <Link
                              aria-label="Add To Wishlist"
                              className="action-btn hover-up"
                              to={"/wishlist"}
                            >
                              <i className="fi-rs-heart"></i>
                            </Link>

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
                            <a href="shop-grid-right.html">Clothing</a>
                          </div>
                          <h2>
                            <a href="shop-product-right.html">
                              Colorful Pattern Shirts
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span>
                              <span>90%</span>
                            </span>
                          </div>
                          <div className="product-price">
                            <span>Rs238.85 </span>
                            <span className="old-price">$245.8</span>
                          </div>
                          <div className="product-action-1 show">
                            <a
                              aria-label="Add To Cart"
                              className="action-btn hover-up"
                              href="shop-cart.html"
                            >
                              <i className="fi-rs-shopping-bag-add"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                              <img
                                className="default-img"
                                src={ImgCommon}
                                alt=""
                              />
                              <img
                                className="hover-img"
                                src={ImgCommon}
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="product-action-1">
                            <a
                              aria-label="Quick view"
                              className="action-btn hover-up"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="fi-rs-eye"></i>
                            </a>
                            <Link
                              aria-label="Add To Wishlist"
                              className="action-btn hover-up"
                              to={"/wishlist"}
                            >
                              <i className="fi-rs-heart"></i>
                            </Link>
                            <a
                              aria-label="Compare"
                              className="action-btn hover-up"
                              href="shop-compare.html"
                            >
                              <i className="fi-rs-shuffle"></i>
                            </a>
                          </div>
                          <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="new">New</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <a href="shop-grid-right.html">Clothing</a>
                          </div>
                          <h2>
                            <a href="shop-product-right.html">
                              Plain Color Pocket Shirts
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span>
                              <span>50%</span>
                            </span>
                          </div>
                          <div className="product-price">
                            <span>Rs138.85 </span>
                            <span className="old-price">$255.8</span>
                          </div>
                          <div className="product-action-1 show">
                            <a
                              aria-label="Add To Cart"
                              className="action-btn hover-up"
                              href="shop-cart.html"
                            >
                              <i className="fi-rs-shopping-bag-add"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                              <img
                                className="default-img"
                                src={ImgCommon}
                                alt=""
                              />
                              <img
                                className="hover-img"
                                src={ImgCommon}
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="product-action-1">
                            <a
                              aria-label="Quick view"
                              className="action-btn hover-up"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="fi-rs-eye"></i>
                            </a>
                            <Link
                              aria-label="Add To Wishlist"
                              className="action-btn hover-up"
                              to={"/wishlist"}
                            >
                              <i className="fi-rs-heart"></i>
                            </Link>
                            <a
                              aria-label="Compare"
                              className="action-btn hover-up"
                              href="shop-compare.html"
                            >
                              <i className="fi-rs-shuffle"></i>
                            </a>
                          </div>
                          <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="best">Best Sell</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <a href="shop-grid-right.html">Shirts</a>
                          </div>
                          <h2>
                            <a href="shop-product-right.html">
                              Vintage Floral Oil Shirts
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span>
                              <span>95%</span>
                            </span>
                          </div>
                          <div className="product-price">
                            <span>Rs338.85 </span>
                            <span className="old-price">$445.8</span>
                          </div>
                          <div className="product-action-1 show">
                            <a
                              aria-label="Add To Cart"
                              className="action-btn hover-up"
                              href="shop-cart.html"
                            >
                              <i className="fi-rs-shopping-bag-add"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                              <img
                                className="default-img"
                                src={ImgCommon}
                                alt=""
                              />
                              <img
                                className="hover-img"
                                src={ImgCommon}
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="product-action-1">
                            <a
                              aria-label="Quick view"
                              className="action-btn hover-up"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="fi-rs-eye"></i>
                            </a>
                            <Link
                              aria-label="Add To Wishlist"
                              className="action-btn hover-up"
                              to={"/wishlist"}
                            >
                              <i className="fi-rs-heart"></i>
                            </Link>
                            <a
                              aria-label="Compare"
                              className="action-btn hover-up"
                              href="shop-compare.html"
                            >
                              <i className="fi-rs-shuffle"></i>
                            </a>
                          </div>
                          <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="sale">Sale</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <a href="shop-grid-right.html">Clothing</a>
                          </div>
                          <h2>
                            <a href="shop-product-right.html">
                              Colorful Hawaiian Shirts
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span>
                              <span>70%</span>
                            </span>
                          </div>
                          <div className="product-price">
                            <span>Rs123.85 </span>
                            <span className="old-price">$235.8</span>
                          </div>
                          <div className="product-action-1 show">
                            <a
                              aria-label="Add To Cart"
                              className="action-btn hover-up"
                              href="shop-cart.html"
                            >
                              <i className="fi-rs-shopping-bag-add"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--End product-grid-4--> */}
                </div>
                {/* <!--En tab one (Featured)--> */}
                <div
                  className="tab-pane fade"
                  id="tab-two"
                  role="tabpanel"
                  aria-labelledby="tab-two"
                >
                  <div className="row product-grid-4">
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                              <img
                                className="default-img"
                                src="assets/imgs/shop/product-9-1.jpg"
                                alt=""
                              />
                              <img
                                className="hover-img"
                                src="assets/imgs/shop/product-9-2.jpg"
                                alt=""
                              />
                            </a>
                          </div>
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
                            <a href="shop-grid-right.html">Donec </a>
                          </div>
                          <h2>
                            <a href="shop-product-right.html">
                              Lorem ipsum dolor
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span>
                              <span>90%</span>
                            </span>
                          </div>
                          <div className="product-price">
                            <span>Rs238.85 </span>
                            <span className="old-price">$245.8</span>
                          </div>
                          <div className="product-action-1 show">
                            <a
                              aria-label="Add To Cart"
                              className="action-btn hover-up"
                              href="shop-cart.html"
                            >
                              <i className="fi-rs-shopping-bag-add"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                              <img
                                className="default-img"
                                src="assets/imgs/shop/product-10-1.jpg"
                                alt=""
                              />
                              <img
                                className="hover-img"
                                src="assets/imgs/shop/product-10-2.jpg"
                                alt=""
                              />
                            </a>
                          </div>
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
                            <span className="new">New</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <a href="shop-grid-right.html">Music</a>
                          </div>
                          <h2>
                            <a href="shop-product-right.html">
                              Sed tincidunt interdum
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span>
                              <span>50%</span>
                            </span>
                          </div>
                          <div className="product-price">
                            <span>Rs138.85 </span>
                            <span className="old-price">$255.8</span>
                          </div>
                          <div className="product-action-1 show">
                            <a
                              aria-label="Add To Cart"
                              className="action-btn hover-up"
                              href="shop-cart.html"
                            >
                              <i className="fi-rs-shopping-bag-add"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                              <img
                                className="default-img"
                                src="assets/imgs/shop/product-11-1.jpg"
                                alt=""
                              />
                              <img
                                className="hover-img"
                                src="assets/imgs/shop/product-11-2.jpg"
                                alt=""
                              />
                            </a>
                          </div>
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
                            <span className="best">Best Sell</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <a href="shop-grid-right.html">Watch</a>
                          </div>
                          <h2>
                            <a href="shop-product-right.html">
                              Fusce metus orci
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span>
                              <span>95%</span>
                            </span>
                          </div>
                          <div className="product-price">
                            <span>Rs338.85 </span>
                            <span className="old-price">$445.8</span>
                          </div>
                          <div className="product-action-1 show">
                            <a
                              aria-label="Add To Cart"
                              className="action-btn hover-up"
                              href="shop-cart.html"
                            >
                              <i className="fi-rs-shopping-bag-add"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                              <img
                                className="default-img"
                                src="assets/imgs/shop/product-12-1.jpg"
                                alt=""
                              />
                              <img
                                className="hover-img"
                                src="assets/imgs/shop/product-12-2.jpg"
                                alt=""
                              />
                            </a>
                          </div>
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
                            <span className="sale">Sale</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <a href="shop-grid-right.html">Music</a>
                          </div>
                          <h2>
                            <a href="shop-product-right.html">
                              Integer venenatis libero
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span>
                              <span>70%</span>
                            </span>
                          </div>
                          <div className="product-price">
                            <span>Rs123.85 </span>
                            <span className="old-price">$235.8</span>
                          </div>
                          <div className="product-action-1 show">
                            <a
                              aria-label="Add To Cart"
                              className="action-btn hover-up"
                              href="shop-cart.html"
                            >
                              <i className="fi-rs-shopping-bag-add"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                              <img
                                className="default-img"
                                src="assets/imgs/shop/product-13-1.jpg"
                                alt=""
                              />
                              <img
                                className="hover-img"
                                src="assets/imgs/shop/product-13-2.jpg"
                                alt=""
                              />
                            </a>
                          </div>
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
                            <span className="hot">-30%</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <a href="shop-grid-right.html">Speaker</a>
                          </div>
                          <h2>
                            <a href="shop-product-right.html">
                              Cras tempor orci id
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span>
                              <span>70%</span>
                            </span>
                          </div>
                          <div className="product-price">
                            <span>Rs28.85 </span>
                            <span className="old-price">$45.8</span>
                          </div>
                          <div className="product-action-1 show">
                            <a
                              aria-label="Add To Cart"
                              className="action-btn hover-up"
                              href="shop-cart.html"
                            >
                              <i className="fi-rs-shopping-bag-add"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                              <img
                                className="default-img"
                                src="assets/imgs/shop/product-14-1.jpg"
                                alt=""
                              />
                              <img
                                className="hover-img"
                                src="assets/imgs/shop/product-14-2.jpg"
                                alt=""
                              />
                            </a>
                          </div>
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
                            <span className="hot">-22%</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <a href="shop-grid-right.html">Camera</a>
                          </div>
                          <h2>
                            <a href="shop-product-right.html">
                              Nullam cursus mi qui
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span>
                              <span>70%</span>
                            </span>
                          </div>
                          <div className="product-price">
                            <span>Rs238.85 </span>
                            <span className="old-price">$245.8</span>
                          </div>
                          <div className="product-action-1 show">
                            <a
                              aria-label="Add To Cart"
                              className="action-btn hover-up"
                              href="shop-cart.html"
                            >
                              <i className="fi-rs-shopping-bag-add"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                              <img
                                className="default-img"
                                src="assets/imgs/shop/product-15-1.jpg"
                                alt=""
                              />
                              <img
                                className="hover-img"
                                src="assets/imgs/shop/product-15-2.jpg"
                                alt=""
                              />
                            </a>
                          </div>
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
                            <span className="new">New</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <a href="shop-grid-right.html">Phone</a>
                          </div>
                          <h2>
                            <a href="shop-product-right.html">
                              Fusce fringilla ultrices
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span>
                              <span>98%</span>
                            </span>
                          </div>
                          <div className="product-price">
                            <span>Rs1275.85 </span>
                          </div>
                          <div className="product-action-1 show">
                            <a
                              aria-label="Add To Cart"
                              className="action-btn hover-up"
                              href="shop-cart.html"
                            >
                              <i className="fi-rs-shopping-bag-add"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                              <img
                                className="default-img"
                                src="assets/imgs/shop/product-1-1.jpg"
                                alt=""
                              />
                              <img
                                className="hover-img"
                                src="assets/imgs/shop/product-1-2.jpg"
                                alt=""
                              />
                            </a>
                          </div>
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
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <a href="shop-grid-right.html">Accessories </a>
                          </div>
                          <h2>
                            <a href="shop-product-right.html">
                              Sed sollicitudin est
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span>
                              <span>70%</span>
                            </span>
                          </div>
                          <div className="product-price">
                            <span>Rs238.85 </span>
                            <span className="old-price">$245.8</span>
                          </div>
                          <div className="product-action-1 show">
                            <a
                              aria-label="Add To Cart"
                              className="action-btn hover-up"
                              href="shop-cart.html"
                            >
                              <i className="fi-rs-shopping-bag-add"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--End product-grid-4--> */}
                </div>
                {/* <!--En tab two (Popular)--> */}
                <div
                  className="tab-pane fade"
                  id="tab-three"
                  role="tabpanel"
                  aria-labelledby="tab-three"
                >
                  <div className="row product-grid-4">
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                              <img
                                className="default-img"
                                src="assets/imgs/shop/product-2-1.jpg"
                                alt=""
                              />
                              <img
                                className="hover-img"
                                src="assets/imgs/shop/product-2-2.jpg"
                                alt=""
                              />
                            </a>
                          </div>
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
                            <a href="shop-grid-right.html">Music</a>
                          </div>
                          <h2>
                            <a href="shop-product-right.html">
                              Donec ut nisl rutrum
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span>
                              <span>90%</span>
                            </span>
                          </div>
                          <div className="product-price">
                            <span>Rs238.85 </span>
                            <span className="old-price">$245.8</span>
                          </div>
                          <div className="product-action-1 show">
                            <a
                              aria-label="Add To Cart"
                              className="action-btn hover-up"
                              href="shop-cart.html"
                            >
                              <i className="fi-rs-shopping-bag-add"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                              <img
                                className="hover-img"
                                src="assets/imgs/shop/product-3-1.jpg"
                                alt=""
                              />
                              <img
                                className="default-img"
                                src="assets/imgs/shop/product-3-2.jpg"
                                alt=""
                              />
                            </a>
                          </div>
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
                            <span className="new">New</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <a href="shop-grid-right.html">Music</a>
                          </div>
                          <h2>
                            <a href="shop-product-right.html">
                              Nullam dapibus pharetra
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span>
                              <span>50%</span>
                            </span>
                          </div>
                          <div className="product-price">
                            <span>Rs138.85 </span>
                            <span className="old-price">$255.8</span>
                          </div>
                          <div className="product-action-1 show">
                            <a
                              aria-label="Add To Cart"
                              className="action-btn hover-up"
                              href="shop-cart.html"
                            >
                              <i className="fi-rs-shopping-bag-add"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                              <img
                                className="hover-img"
                                src={ImgCommon}
                                alt=""
                              />
                              <img
                                className="default-img"
                                src={ImgCommon}
                                alt=""
                              />
                            </a>
                          </div>
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
                            <span className="best">Best Sell</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <a href="shop-grid-right.html">Watch</a>
                          </div>
                          <h2>
                            <a href="shop-product-right.html">
                              Morbi dictum finibus
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span>
                              <span>95%</span>
                            </span>
                          </div>
                          <div className="product-price">
                            <span>Rs338.85 </span>
                            <span className="old-price">$445.8</span>
                          </div>
                          <div className="product-action-1 show">
                            <a
                              aria-label="Add To Cart"
                              className="action-btn hover-up"
                              href="shop-cart.html"
                            >
                              <i className="fi-rs-shopping-bag-add"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                              <img
                                className="hover-img"
                                src="assets/imgs/shop/product-5-1.jpg"
                                alt=""
                              />
                              <img
                                className="default-img"
                                src={ImgCommon}
                                alt=""
                              />
                            </a>
                          </div>
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
                            <span className="sale">Sale</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <a href="shop-grid-right.html">Music</a>
                          </div>
                          <h2>
                            <a href="shop-product-right.html">
                              Nunc volutpat massa
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span>
                              <span>70%</span>
                            </span>
                          </div>
                          <div className="product-price">
                            <span>$123.85 </span>
                            <span className="old-price">$235.8</span>
                          </div>
                          <div className="product-action-1 show">
                            <a
                              aria-label="Add To Cart"
                              className="action-btn hover-up"
                              href="shop-cart.html"
                            >
                              <i className="fi-rs-shopping-bag-add"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                              <img
                                className="hover-img"
                                src={ImgCommon}
                                alt=""
                              />
                              <img
                                className="default-img"
                                src={ImgCommon}
                                alt=""
                              />
                            </a>
                          </div>
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
                            <span className="hot">-30%</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <a href="shop-grid-right.html">Speaker</a>
                          </div>
                          <h2>
                            <a href="shop-product-right.html">
                              Nullam ultricies luctus
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span>
                              <span>70%</span>
                            </span>
                          </div>
                          <div className="product-price">
                            <span>$28.85 </span>
                            <span className="old-price">$45.8</span>
                          </div>
                          <div className="product-action-1 show">
                            <a
                              aria-label="Add To Cart"
                              className="action-btn hover-up"
                              href="shop-cart.html"
                            >
                              <i className="fi-rs-shopping-bag-add"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                              <img
                                className="hover-img"
                                src={ImgCommon}
                                alt=""
                              />
                              <img
                                className="default-img"
                                src={ImgCommon}
                                alt=""
                              />
                            </a>
                          </div>
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
                            <span className="hot">-22%</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <a href="shop-grid-right.html">Camera</a>
                          </div>
                          <h2>
                            <a href="shop-product-right.html">
                              Nullam mattis enim
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span>
                              <span>70%</span>
                            </span>
                          </div>
                          <div className="product-price">
                            <span>$238.85 </span>
                            <span className="old-price">$245.8</span>
                          </div>
                          <div className="product-action-1 show">
                            <a
                              aria-label="Add To Cart"
                              className="action-btn hover-up"
                              href="shop-cart.html"
                            >
                              <i className="fi-rs-shopping-bag-add"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                              <img
                                className="hover-img"
                                src={ImgCommon}
                                alt=""
                              />
                              <img
                                className="default-img"
                                src={ImgCommon}
                                alt=""
                              />
                            </a>
                          </div>
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
                            <span className="new">New</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <a href="shop-grid-right.html">Phone</a>
                          </div>
                          <h2>
                            <a href="shop-product-right.html">
                              Vivamus sollicitudin
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span>
                              <span>98%</span>
                            </span>
                          </div>
                          <div className="product-price">
                            <span>$1275.85 </span>
                          </div>
                          <div className="product-action-1 show">
                            <a
                              aria-label="Add To Cart"
                              className="action-btn hover-up"
                              href="shop-cart.html"
                            >
                              <i className="fi-rs-shopping-bag-add"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                              <img
                                className="hover-img"
                                src={ImgCommon}
                                alt=""
                              />
                              <img
                                className="default-img"
                                src={ImgCommon}
                                alt=""
                              />
                            </a>
                          </div>
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
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <a href="shop-grid-right.html">Accessories </a>
                          </div>
                          <h2>
                            <a href="shop-product-right.html">
                              {" "}
                              Donec ut nisl rutrum
                            </a>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span>
                              <span>70%</span>
                            </span>
                          </div>
                          <div className="product-price">
                            <span>$238.85 </span>
                            <span className="old-price">$245.8</span>
                          </div>
                          <div className="product-action-1 show">
                            <a
                              aria-label="Add To Cart"
                              className="action-btn hover-up"
                              href="shop-cart.html"
                            >
                              <i className="fi-rs-shopping-bag-add"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--End product-grid-4--> */}
                </div>
                {/* <!--En tab three (New added)--> */}
              </div>
              {/* <!--End tab-content--> */}
            </div>
          </section>

          <section className="banner-2 section-padding pb-0">
            <div className="container">
              <div className="banner-img banner-big wow fadeIn animated f-none">
                <img src={ImgBanner_4} alt="" />
                <div className="banner-text d-md-block d-none">
                  <h4 className="mb-15 mt-40 text-brand">Repair Services</h4>
                  <h1 className="fw-600 mb-20">
                    We're an Apple <br />
                    Authorised Service Provider
                  </h1>
                  <a href="shop-grid-right.html" className="btn">
                    Learn More <i className="fi-rs-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="popular-categories section-padding mt-15 mb-25">
            <div className="container wow fadeIn animated">
              <h3 className="section-title mb-20">
                <span>Popular</span> Categories
              </h3>
              <div className="carausel-6-columns-cover position-relative">
                <div
                  className="slider-arrow slider-arrow-2 carausel-6-columns-arrow"
                  id="carausel-6-columns-arrows"
                ></div>
                <div className="carausel-6-columns" id="carausel-6-columns">
                  <div className="card-1">
                    <figure className="img-hover-scale overflow-hidden">
                      <a href="shop-grid-right.html">
                        <img src={ImgCat_1} alt="" />
                      </a>
                    </figure>
                    <h5>
                      <a href="shop-grid-right.html">T-Shirt</a>
                    </h5>
                  </div>
                  <div className="card-1">
                    <figure className="img-hover-scale overflow-hidden">
                      <a href="shop-grid-right.html">
                        <img src={ImgCat_2} alt="" />
                      </a>
                    </figure>
                    <h5>
                      <a href="shop-grid-right.html">Bags</a>
                    </h5>
                  </div>
                  <div className="card-1">
                    <figure className="img-hover-scale overflow-hidden">
                      <a href="shop-grid-right.html">
                        <img src={ImgCat_3} alt="" />
                      </a>
                    </figure>
                    <h5>
                      <a href="shop-grid-right.html">Sandan</a>
                    </h5>
                  </div>
                  <div className="card-1">
                    <figure className="img-hover-scale overflow-hidden">
                      <a href="shop-grid-right.html">
                        <img src={ImgCat_4} alt="" />
                      </a>
                    </figure>
                    <h5>
                      <a href="shop-grid-right.html">Scarf Cap</a>
                    </h5>
                  </div>
                  <div className="card-1">
                    <figure className="img-hover-scale overflow-hidden">
                      <a href="shop-grid-right.html">
                        <img src={ImgCat_5} alt="" />
                      </a>
                    </figure>
                    <h5>
                      <a href="shop-grid-right.html">Shoes</a>
                    </h5>
                  </div>
                  <div className="card-1">
                    <figure className="img-hover-scale overflow-hidden">
                      <a href="shop-grid-right.html">
                        <img src={ImgCat_6} alt="" />
                      </a>
                    </figure>
                    <h5>
                      <a href="shop-grid-right.html">Pillowcase</a>
                    </h5>
                  </div>
                  <div className="card-1">
                    <figure className="img-hover-scale overflow-hidden">
                      <a href="shop-grid-right.html">
                        <img src={ImgCat_2} alt="" />
                      </a>
                    </figure>
                    <h5>
                      <a href="shop-grid-right.html">Jumpsuits</a>
                    </h5>
                  </div>
                  <div className="card-1">
                    <figure className="img-hover-scale overflow-hidden">
                      <a href="shop-grid-right.html">
                        <img src={ImgCat_1} alt="" />
                      </a>
                    </figure>
                    <h5>
                      <a href="shop-grid-right.html">Hats</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          <section className="banners mb-15">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="banner-img wow fadeIn animated">
                    <img src={ImgOferBanner_1} alt="" />
                    <div className="banner-text">
                      <span>Smart Offer</span>
                      <h4>
                        Save 20% on <br />
                        Woman Bag
                      </h4>
                      <a href="shop-grid-right.html">
                        Shop Now <i className="fi-rs-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="banner-img wow fadeIn animated">
                    <img src={ImgOferBanner_2} alt="" />
                    <div className="banner-text">
                      <span>Sale off</span>
                      <h4>
                        Great Summer <br />
                        Collection
                      </h4>
                      <a href="shop-grid-right.html">
                        Shop Now <i className="fi-rs-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-md-none d-lg-flex">
                  <div className="banner-img wow fadeIn animated mb-sm-0">
                    <img src={ImgOferBanner_3} alt="" />
                    <div className="banner-text">
                      <span>New Arrivals</span>
                      <h4>
                        Shop Today’s <br />
                        Deals & Offers
                      </h4>
                      <a href="shop-grid-right.html">
                        Shop Now <i className="fi-rs-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Fragment>
    </Layout>
  );
};

export default Home;
