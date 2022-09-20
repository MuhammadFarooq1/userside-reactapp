import React, { useState, useEffect, Fragment } from "react";
import {
  getAllProducts,
  getProductshome,
  getProductsBySellByArrival,
  getPopularCategories,
} from "../../api's/ecommerceApi/productApi.js";

import { Link } from "react-router-dom";
import Layout from "../../Layouts/ParentLayout";
import QuickView from "../ecommerce/QuickView";
import ImgSlider_1 from "../../assets/imgs/slider/slider-6.png";
import ImgSlider_2 from "../../assets/imgs/slider/slider-7.png";
import ImgBanner_4 from "../../assets/imgs/banner/banner-4.png";
import ImgCat_1 from "../../assets/imgs/shop/category-thumb-1.jpg";
import ImgCat_2 from "../../assets/imgs/shop/category-thumb-2.jpg";
import ImgCat_3 from "../../assets/imgs/shop/category-thumb-3.jpg";
import ImgCat_4 from "../../assets/imgs/shop/category-thumb-4.jpg";
import ImgCat_5 from "../../assets/imgs/shop/category-thumb-5.jpg";
import ImgCat_6 from "../../assets/imgs/shop/category-thumb-6.jpg";
import ImgOferBanner_11 from "../../assets/imgs/banner/banner-11.jpg";
import ImgOferBanner_1 from "../../assets/imgs/banner/banner-1.png";
import ImgOferBanner_2 from "../../assets/imgs/banner/banner-2.png";
import ImgOferBanner_3 from "../../assets/imgs/banner/banner-3.png";
import Imgfeature_1 from "../../assets/imgs/theme/icons/feature-1.png";
import shopCategorypic_1 from "../../assets/imgs/shop/category-thumb-1.jpg";
// import ImgSlider_2 from "../../assets/imgs/slider/slider-2.png";
// import ImgSlider_3 from "../../assets/imgs/slider/slider-3.png";
import ImgFeatur_1 from "../../assets/imgs/shop/product-1-1.jpg";
import ImgFeatur_2 from "../../assets/imgs/theme/icons/feature-2.png";
import ImgFeatur_3 from "../../assets/imgs/theme/icons/feature-3.png";
import ImgFeatur_4 from "../../assets/imgs/theme/icons/feature-4.png";
import ImgFeatur_5 from "../../assets/imgs/theme/icons/feature-5.png";
import ImgFeatur_6 from "../../assets/imgs/theme/icons/feature-6.png";
import ImgCommon from "../../assets/imgs/shop/product-1-1.jpg";
import thumbnail_3 from "../../assets/imgs/shop/thumbnail-3.jpg";
import ImgmenyBanner_8 from "../../assets/imgs/banner/menu-banner-8.jpg";
import ImgmenyBanner_7 from "../../assets/imgs/banner/menu-banner-7.jpg";
import ImgBrandBanner_1 from "../../assets/imgs/banner/brand-2.png";
import ImgBrandBanner_3 from "../../assets/imgs/banner/brand-3.png";
import ImgBrandBanner_9 from "../../assets/imgs/banner/banner-9.jpg";
import ImgBrandBanner_10 from "../../assets/imgs/banner/banner-10.jpg";
import ImgBrandBanner_8Motherday from "../../assets/imgs/banner/banner-8.jpg";
import ImgBrandBanner_24_7 from "../../assets/imgs/theme/icons/feature-6.png";
import ImgBrandBanner_happy_sell from "../../assets/imgs/theme/icons/feature-5.png";
import ImgBrandBanner_permotion from "../../assets/imgs/theme/icons/feature-4.png";
import ImgBrandBanner_save_money from "../../assets/imgs/theme/icons/feature-3.png";
import ImgBrandBanner_onlin_order from "../../assets/imgs/theme/icons/feature-2.png";

import ShowImage from "./ShowProductImage.js";
import ShowCategoryImage from "./ShowCategoryImage.js";
import ShowProductImageByArrival from "./ShowProductImageByArrival.js";
import Shop from "./Shop.js";
import Search from "./SearchBar.js";
import { AddItemCart } from "../../hellper/cartHellper.js";
import Card from "./Card.js";
import Carousel from "../../Layouts/Carosusel.js";
import PopularCategoriesCarousel from "../ecommerce/PopularCategories.js";
import ProductByArrivalCarousel from "../ecommerce/ProductByArrivalSlider.js";
import { getAllSliders } from "../../api's/ecommerceApi/sliderApi.js";

const Home = () => {
  const [qiuckView, setQuickView] = useState(false);
  const [allProducts, setallProducts] = useState([]);
  const [allSliders, setallSliders] = useState([]);
  const [productBySell, setaProductBySell] = useState([]);
  const [popularCategoies, setPopularcategoires] = useState([]);
  const [ProductByArrival, setProductByArrival] = useState([]);

  const [error, setError] = useState(false);

  const getProducts = () => {
    getProductshome().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setallProducts(data);
      }
    });
  };
  const getSlider = () => {
    getAllSliders().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setallSliders(data);
      }
    });
  };
  const loadProductsBySell = () => {
    getProductsBySellByArrival("sold").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setaProductBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProductsBySellByArrival("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductByArrival(data);
      }
    });
  };
  const loadPopularCategories = () => {
    getPopularCategories("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setPopularcategoires(data);
      }
    });
  };

  useEffect(() => {
    getSlider();
    getProducts();
    loadProductsByArrival();
    loadProductsBySell();
    loadPopularCategories();
  }, []);
  return (
    <Layout title="" discription="" className="">
      <Fragment>
        {/* <Search /> */}
        {/* <!-- Quick view --> */}

        {/* <QuickView  /> */}

        {/* <section className="home-slider position-relative mb-30">
          <div className="container">
            <div className="home-slide-cover bg-grey-10 mt-30">
              <Carousel />
            </div>
          </div>
        </section> */}

        <section className="home-slider position-relative mb-30">
          <div className="container">
            <div className="home-slide-cover bg-grey-10 mt-30">
              <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                <div className="single-hero-slider single-animation-wrap">
                  <Carousel mysliders={allSliders} />
                </div>
              </div>
              {/* <div className="slider-arrow hero-slider-1-arrow"></div> */}
            </div>
          </div>
        </section>

        {/* <section className="home-slider position-relative mb-30">
          <div className="container">
            <div className="home-slide-cover bg-grey-10 mt-30">
              <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                <div className="single-hero-slider single-animation-wrap">
                  <div className="container">
                    <div className="row align-items-center slider-animated-1">
                      <div className="col-lg-5 col-md-6">
                        <div className="hero-slider-content-2">
                          <h4 className="animated">Trade-In Offer</h4>
                          <h3 className="animated fw-900">
                            Supper Value Deals
                          </h3>
                          <h2 className="animated fw-900 text-brand">
                            On All Products
                          </h2>
                          <p className="animated">
                            Save more with coupons & up to 70% off
                          </p>
                          <a
                            className="animated btn btn-brush btn-brush-3"
                            href="shop-product-right.html"
                            tabIndex="0"
                          >
                            {" "}
                            Shop Now{" "}
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-6">
                        <div className="single-slider-img single-slider-img-1">
                          <img className="animated" src={ImgSlider_1} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-hero-slider single-animation-wrap">
                  <div className="container">
                    <div className="row align-items-center slider-animated-1">
                      <div className="col-lg-5 col-md-6">
                        <div className="hero-slider-content-2">
                          <h4 className="animated">Hot promotions</h4>
                          <h3 className="animated fw-900">Fashion Trending</h3>
                          <h2 className="animated fw-900 text-brand">
                            Great Collection
                          </h2>
                          <p className="animated">
                            Save more with coupons & up to 20% off
                          </p>
                          <a
                            className="animated btn btn-brush btn-brush-1"
                            href="shop-product-right.html"
                            tabIndex="0"
                          >
                            {" "}
                            Get It Now{" "}
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-6">
                        <div className="single-slider-img single-slider-img-1">
                          <img className="animated" src={ImgSlider_2} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-arrow hero-slider-1-arrow"></div>
            </div>
          </div>
        </section> */}
        {/* <QuickView closeQuickView={qiuckView} product={"sdss"} /> */}
        <section className="banners mb-20">
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
                <div className="banner-img wow fadeIn animated  mb-sm-0">
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
        <div className="page-header container breadcrumb-wrap">
          <div className="container">
            <div>
              <span> Best Products </span>
            </div>
          </div>
        </div>
        <section className="product-tabs pt-25 pb-20 wow fadeIn animated">
          <div className="container">
            <div className="row">
              {/* <div className="col-lg-3">
                <div className="widget-category mb-30">
                  <h5 className="section-title style-1 mb-30 wow fadeIn animated">
                    Category
                  </h5>
                  <ul className="categories">
                    <li>
                      <a href="shop-grid-right.html">Shoes & Bags</a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">Blouses & Shirts</a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">Dresses</a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">Swimwear</a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">Beauty</a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">Jewelry & Watch</a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">Accessories</a>
                    </li>
                  </ul>
                </div>
                <div className="widget-category mb-30">
                  <h5 className="section-title style-1 mb-30 wow fadeIn animated">
                    Sort by
                  </h5>
                  <ul className="categories">
                    <li>
                      <a href="shop-grid-right.html">Popularity</a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">Average rating</a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">Price: Low to High</a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">Price: High to Low</a>
                    </li>
                  </ul>
                </div>
                <div className="widget-category mb-30">
                  <h5 className="section-title style-1 mb-30 wow fadeIn animated">
                    Price Range
                  </h5>
                  <ul className="categories">
                    <li>
                      <a href="shop-grid-right.html">$0-$200</a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">$200-$400</a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">$400-$600</a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">$600-$800</a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">800$+</a>
                    </li>
                  </ul>
                </div>
                <div className="banner-img wow fadeIn mb-45mb-lg-0 animated d-lg-block d-none">
                  <img src={ImgOferBanner_11} alt="" />
                  <div className="banner-text">
                    <span>Women Zone</span>
                    <h4>
                      Save 17% on <br />
                      Office Dress
                    </h4>
                    <a href="shop-grid-right.html">
                      Shop Now <i className="fi-rs-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-12 ">
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
                        Home
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
                      {allProducts.map((product, i) => (
                        <div
                          key={i}
                          className="col-lg-4 col-md-4 col-12 col-sm-6"
                        >
                          <Card product={product} />
                          {/* <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                              <ShowImage item={product} url="product" />

                              <div className="product-img product-img-zoom">
                                <a href="shop-product-right.html">
                                 <ShowImage item={ product  } url="product"/>
                                 <img
                                    className="default-img"
                                    src={`http://localhost:8000/likenAdmin/product/photo/${product._id}`}
                                    //src={ImgFeatur_1}
                                    //src={product.image.data}
                                    // src={`data:${
                                    //   product.image.contentType
                                    // };base64,${product.image.data.data.toString(
                                    //   "base64"
                                    // )}`}
                                    alt=""
                                  />
                                  <img
                                    className="hover-img"
                                    src={ImgFeatur_1}
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
                                <a href="shop-grid-right.html">
                                  {product.subCategory.name}
                                </a>
                              </div>
                              <h2>
                                <a href="shop-product-right.html">
                                  {product.name}
                                </a>
                              </h2>
                              <div className="rating-result" title="90%">
                                <span>
                                  <span>90%</span>
                                </span>
                              </div>
                              <div className="product-price">
                                <span>RS {product.price} </span>
                                <span className="old-price">
                                  RS {product.discount}
                                </span>
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
                          </div> */}
                        </div>
                      ))}
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
                      {productBySell.map((productbyselling, keyselling) => (
                        <div
                          key={keyselling}
                          className="col-lg-4 col-md-4 col-12 col-sm-6"
                        >
                          <Card product={productbyselling} />
                        </div>
                      ))}
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
                      {ProductByArrival.map(
                        (ProductByArrival, keyByArrival) => (
                          <div
                            key={keyByArrival}
                            className="col-lg-4 col-md-4 col-12 col-sm-6"
                          >
                            <Card product={ProductByArrival} />
                          </div>
                        )
                      )}
                    </div>
                    {/* <!--End product-grid-4--> */}
                  </div>
                  {/* <!--En tab three (New added)--> */}
                </div>
                {/* <!--End tab-content--> */}
              </div>
            </div>
          </div>
        </section>
        {/* shop cmponent where all shop fillter are available */}
        <div id="shopcat">
          <Shop />
        </div>
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

        <section className="popular-categories section-padding mt-15">
          <div className="container wow fadeIn animated">
            <h3 className="section-title mb-20">
              <span>Popular Categories</span>
            </h3>
            <div className=" position-relative">
              <div className="slider-arrow slider-arrow-2 carausel-6-columns-arrow"></div>
              <div className="carausel-6-columns  pr-5 pl-5">
                <PopularCategoriesCarousel
                  PopularCategoriesSlider={popularCategoies}
                />

                {/* {popularCategoies.map((popularCategory, keyPopularCategory) => (
                  <div key={keyPopularCategory} className="card-1">
                    <figure className=" img-hover-scale overflow-hidden">
                      <Link to={"/"}>
                        <ShowCategoryImage
                          item={popularCategory}
                          url="category"
                        />
                      </Link>
                    </figure>
                    <h5>
                      <Link to={"/"}>{popularCategory.name}</Link>
                    </h5>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </section>

        <section className="deals section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 deal-co">
                <div
                  className="deal wow fadeIn animated mb-md-4 mb-sm-4 mb-lg-0"
                  style={{
                    backgroundImage: `url(${ImgmenyBanner_7})`,
                  }}
                >
                  <div className="deal-top">
                    <h2 className="text-brand">Deal of the Day.</h2>
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
                    ></div>
                    <a href="shop-grid-right.html" className="btn hover-up">
                      Shop Now <i className="fi-rs-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 deal-co">
                <div
                  className="deal wow fadeIn animated"
                  style={{
                    backgroundImage: `url(${ImgmenyBanner_8})`,
                  }}
                >
                  <div className="deal-top">
                    <h2 className="text-success">Men Clothing</h2>
                    <h5>Shirt & Bag</h5>
                  </div>
                  <div className="deal-content">
                    <h6 className="product-title">
                      <a href="shop-product-right.html">
                        Try something new on vacation
                      </a>
                    </h6>
                    <div className="product-price">
                      <span className="new-price">$178.00</span>
                      <span className="old-price">$256.99</span>
                    </div>
                  </div>
                  <div className="deal-bottom">
                    <p>Hurry Up! Offer End In:</p>
                    <div
                      className="deals-countdown"
                      data-countdown="2026/03/25 00:00:00"
                    ></div>
                    <a href="shop-grid-right.html" className="btn hover-up">
                      Shop Now <i className="fi-rs-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-25 pb-15">
          <div className="container wow fadeIn animated">
            <h3 className="section-title mb-20">
              <span>New</span> Arrivals
            </h3>

            <div className="carausel-6-columns-cover position-relative">
              <div
                className="slider-arrow slider-arrow-2 carausel-6-columns-arrow"
                id="carausel-6-columns-2-arrows"
              ></div>

              <div
                className="carausel-6-columns carausel-arrow-center"
                id="carausel-6-columns-2"
              >
                <ProductByArrivalCarousel
                  ProductByArrivalSlider={ProductByArrival}
                />
              </div>
            </div>
          </div>
        </section>
        {/* Top Venders Will shown here */}
        {/* <section className="section-padding">
          <div className="container pb-20">
            <h3 className="section-title mb-20 wow fadeIn animated">
              <span>Featured</span> Brands
            </h3>
            <div className="carausel-6-columns-cover position-relative wow fadeIn animated">
              <div
                className="slider-arrow slider-arrow-2 carausel-6-columns-arrow"
                id="carausel-6-columns-3-arrows"
              ></div>
              <div
                className="carausel-6-columns text-center"
                id="carausel-6-columns-3"
              >
                <div className="brand-logo">
                  <img
                    className="img-grey-hover"
                    src={ImgBrandBanner_1}
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <img
                    className="img-grey-hover"
                    src={ImgBrandBanner_1}
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <img
                    className="img-grey-hover"
                    src={ImgBrandBanner_3}
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <img
                    className="img-grey-hover"
                    src="assets/imgs/banner/brand-4.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <img
                    className="img-grey-hover"
                    src="assets/imgs/banner/brand-5.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <img
                    className="img-grey-hover"
                    src="assets/imgs/banner/brand-6.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <img
                    className="img-grey-hover"
                    src="assets/imgs/banner/brand-3.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="bg-grey-9 section-padding">
          <div className="container pt-15 pb-25">
            <div className="heading-tab d-flex">
              <div className="heading-tab-left wow fadeIn animated">
                <h3 className="section-title mb-20">
                  <span>Monthly</span> Best Sell
                </h3>
              </div>
              <div className="heading-tab-right wow fadeIn animated">
                <ul
                  className="nav nav-tabs right no-border"
                  id="myTab-1"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
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
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
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
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
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
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 d-none d-lg-flex">
                <div className="banner-img style-2 wow fadeIn animated">
                  <img src={ImgBrandBanner_9} alt="" />
                  <div className="banner-text">
                    <span>Woman Area</span>
                    <h4 className="mt-5">
                      Save 17% on <br />
                      Clothing
                    </h4>
                    <a href="shop-grid-right.html" className="text-white">
                      Shop Now <i className="fi-rs-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-12">
                <div
                  className="tab-content wow fadeIn animated"
                  id="myTabContent-1"
                >
                  <div
                    className="tab-pane fade show active"
                    id="tab-one-1"
                    role="tabpanel"
                    aria-labelledby="tab-one-1"
                  >
                    <div className="carausel-4-columns-cover arrow-center position-relative">
                      <div
                        className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                        id="carausel-4-columns-arrows"
                      ></div>
                      <div
                        className="carausel-4-columns carausel-arrow-center"
                        id="carausel-4-columns"
                      >
                        <div className="product-cart-wrap">
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
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                              >
                                <i className="fi-rs-eye"></i>
                              </a>
                              <a
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                href="shop-wishlist.html"
                              >
                                <i className="fi-rs-heart"></i>
                              </a>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
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
                              <a href="shop-grid-right.html">Nulla</a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html">
                                Maecenas eget
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
                  </div>
                  {/* <!--End tab-pane--> */}
                  <div
                    className="tab-pane fade"
                    id="tab-two-1"
                    role="tabpanel"
                    aria-labelledby="tab-two-1"
                  >
                    <div className="carausel-4-columns-cover arrow-center position-relative">
                      <div
                        className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                        id="carausel-4-columns-2-arrows"
                      ></div>
                      <div
                        className="carausel-4-columns carausel-arrow-center"
                        id="carausel-4-columns-2"
                      >
                        <div className="product-cart-wrap">
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html">
                                <img
                                  className="default-img"
                                  src="assets/imgs/shop/product-6-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="assets/imgs/shop/product-6-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                              >
                                <i className="fi-rs-eye"></i>
                              </a>
                              <a
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                href="shop-wishlist.html"
                              >
                                <i className="fi-rs-heart"></i>
                              </a>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
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
                              <a href="shop-grid-right.html">Watch</a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html">
                                Cotton Leaf Printed 2
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
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab-three-1"
                    role="tabpanel"
                    aria-labelledby="tab-three-1"
                  >
                    <div className="carausel-4-columns-cover arrow-center position-relative">
                      <div
                        className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                        id="carausel-4-columns-3-arrows"
                      ></div>
                      <div
                        className="carausel-4-columns carausel-arrow-center"
                        id="carausel-4-columns-3"
                      >
                        <div className="product-cart-wrap">
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html">
                                <img
                                  className="default-img"
                                  src="assets/imgs/shop/product-8-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="assets/imgs/shop/product-8-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                              >
                                <i className="fi-rs-eye"></i>
                              </a>
                              <a
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                href="shop-wishlist.html"
                              >
                                <i className="fi-rs-heart"></i>
                              </a>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
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
                              <a href="shop-grid-right.html">Watch</a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html">
                                Cotton Leaf Printed
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
                  </div>
                </div>
                {/* <!--End tab-content--> */}
              </div>
              {/* <!--End Col-lg-9--> */}
            </div>
          </div>
        </section>
        <section className="mb-50">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  className="banner-bg wow fadeIn animated"
                  style={{
                    backgroundImage: `url(${ImgBrandBanner_8Motherday})`,
                  }}
                >
                  <div className="banner-content">
                    <h5 className="text-grey-4 mb-15">Shop Today’s Deals</h5>
                    <h2 className="fw-600">
                      Happy <span className="text-brand">Mother's Day</span>.
                      Big Sale Up to 40%
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-sm-5 mb-md-0">
                <div className="banner-img wow fadeIn animated mb-md-4 mb-lg-0">
                  <img src={ImgBrandBanner_10} alt="" />
                  <div className="banner-text">
                    <span>Shoes Zone</span>
                    <h4>
                      Save 17% on <br />
                      All Items
                    </h4>
                    <a href="shop-grid-right.html">
                      Shop Now <i className="fi-rs-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-sm-5 mb-md-0">
                <h4 className="section-title style-1 mb-30 wow fadeIn animated">
                  Deals & Outlet
                </h4>
                <div className="product-list-small wow fadeIn animated">
                  <article className="row align-items-center">
                    <figure className="col-md-4 mb-0">
                      <a href="shop-product-right.html">
                        <img src={thumbnail_3} alt="" />
                      </a>
                    </figure>
                    <div className="col-md-8 mb-0">
                      <h4 className="title-small">
                        <a href="shop-product-right.html">
                          Fish Print Patched T-shirt
                        </a>
                      </h4>
                      <div className="product-price">
                        <span>$238.85 </span>
                        <span className="old-price">$245.8</span>
                      </div>
                    </div>
                  </article>
                  <article className="row align-items-center">
                    <figure className="col-md-4 mb-0">
                      <a href="shop-product-right.html">
                        <img src="assets/imgs/shop/thumbnail-4.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="col-md-8 mb-0">
                      <h4 className="title-small">
                        <a href="shop-product-right.html">
                          Vintage Floral Print Dress
                        </a>
                      </h4>
                      <div className="product-price">
                        <span>$238.85 </span>
                        <span className="old-price">$245.8</span>
                      </div>
                    </div>
                  </article>
                  <article className="row align-items-center">
                    <figure className="col-md-4 mb-0">
                      <a href="shop-product-right.html">
                        <img src="assets/imgs/shop/thumbnail-5.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="col-md-8 mb-0">
                      <h4 className="title-small">
                        <a href="shop-product-right.html">
                          Multi-color Stripe Circle Print T-Shirt
                        </a>
                      </h4>
                      <div className="product-price">
                        <span>$238.85 </span>
                        <span className="old-price">$245.8</span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-sm-5 mb-md-0">
                <h4 className="section-title style-1 mb-30 wow fadeIn animated">
                  Top Selling
                </h4>
                <div className="product-list-small wow fadeIn animated">
                  <article className="row align-items-center">
                    <figure className="col-md-4 mb-0">
                      <a href="shop-product-right.html">
                        <img src="assets/imgs/shop/thumbnail-6.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="col-md-8 mb-0">
                      <h4 className="title-small">
                        <a href="shop-product-right.html">
                          Geometric Printed Long Sleeve Blosue
                        </a>
                      </h4>
                      <div className="product-price">
                        <span>$238.85 </span>
                        <span className="old-price">$245.8</span>
                      </div>
                    </div>
                  </article>
                  <article className="row align-items-center">
                    <figure className="col-md-4 mb-0">
                      <a href="shop-product-right.html">
                        <img src="assets/imgs/shop/thumbnail-7.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="col-md-8 mb-0">
                      <h4 className="title-small">
                        <a href="shop-product-right.html">
                          Print Patchwork Maxi Dress
                        </a>
                      </h4>
                      <div className="product-price">
                        <span>$238.85 </span>
                        <span className="old-price">$245.8</span>
                      </div>
                    </div>
                  </article>
                  <article className="row align-items-center">
                    <figure className="col-md-4 mb-0">
                      <a href="shop-product-right.html">
                        <img src="assets/imgs/shop/thumbnail-8.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="col-md-8 mb-0">
                      <h4 className="title-small">
                        <a href="shop-product-right.html">
                          Daisy Floral Print Straps Jumpsuit
                        </a>
                      </h4>
                      <div className="product-price">
                        <span>$238.85 </span>
                        <span className="old-price">$245.8</span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="section-title style-1 mb-30 wow fadeIn animated">
                  Hot Releases
                </h4>
                <div className="product-list-small wow fadeIn animated">
                  <article className="row align-items-center">
                    <figure className="col-md-4 mb-0">
                      <a href="shop-product-right.html">
                        <img src="assets/imgs/shop/thumbnail-9.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="col-md-8 mb-0">
                      <h4 className="title-small">
                        <a href="shop-product-right.html">
                          Floral Print Casual Cotton Dress
                        </a>
                      </h4>
                      <div className="product-price">
                        <span>$238.85 </span>
                        <span className="old-price">$245.8</span>
                      </div>
                    </div>
                  </article>
                  <article className="row align-items-center">
                    <figure className="col-md-4 mb-0">
                      <a href="shop-product-right.html">
                        <img src="assets/imgs/shop/thumbnail-1.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="col-md-8 mb-0">
                      <h4 className="title-small">
                        <a href="shop-product-right.html">
                          Ruffled Solid Long Sleeve Blouse
                        </a>
                      </h4>
                      <div className="product-price">
                        <span>$238.85 </span>
                        <span className="old-price">$245.8</span>
                      </div>
                    </div>
                  </article>
                  <article className="row align-items-center">
                    <figure className="col-md-4 mb-0">
                      <a href="shop-product-right.html">
                        <img src="assets/imgs/shop/thumbnail-2.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="col-md-8 mb-0">
                      <h4 className="title-small">
                        <a href="shop-product-right.html">
                          Multi-color Print V-neck T-Shirt
                        </a>
                      </h4>
                      <div className="product-price">
                        <span>$238.85 </span>
                        <span className="old-price">$245.8</span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="featured section-padding">
          <div className="container pb-25">
            <div className="row">
              <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
                <div className="banner-features wow fadeIn animated hover-up">
                  <img src={Imgfeature_1} alt="" />
                  <h4 className="bg-1">Free Shipping</h4>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
                <div className="banner-features wow fadeIn animated hover-up">
                  <img src={ImgBrandBanner_onlin_order} alt="" />
                  <h4 className="bg-3">Online Order</h4>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
                <div className="banner-features wow fadeIn animated hover-up">
                  <img src={ImgBrandBanner_save_money} alt="" />
                  <h4 className="bg-2">Save Money</h4>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
                <div className="banner-features wow fadeIn animated hover-up">
                  <img src={ImgBrandBanner_permotion} alt="" />
                  <h4 className="bg-4">Promotions</h4>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
                <div className="banner-features wow fadeIn animated hover-up">
                  <img src={ImgBrandBanner_happy_sell} alt="" />
                  <h4 className="bg-5">Happy Sell</h4>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
                <div className="banner-features wow fadeIn animated hover-up">
                  <img src={ImgBrandBanner_24_7} alt="" />
                  <h4 className="bg-6">24/7 Support</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </Layout>
  );
};

export default Home;
