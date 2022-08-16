import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { Link } from "react-router-dom";
import ShowProductImageByArrival from "../core/ShowProductImageByArrival";

const ProductByArrivalCarousel = ({ ProductByArrivalSlider }) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 5,
    arrows: true,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <Slider {...settings}>
        {ProductByArrivalSlider.map((ProductByArrival, keyProductByArrival) => (
          <div
            key={keyProductByArrival}
            className="product-cart-wrap small hover-up"
          >
            <div className="product-img-action-wrap">
              <div className="product-img product-img-zoom">
                <ShowProductImageByArrival
                  item={ProductByArrival}
                  url="product"
                />
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
                  tabIndex="0"
                >
                  <i className="fi-rs-heart"></i>
                </a>
                <a
                  aria-label="Compare"
                  className="action-btn small hover-up"
                  tabIndex="0"
                >
                  <i className="fi-rs-shuffle"></i>
                </a>
              </div>
              <div className="product-badges product-badges-position product-badges-mrg">
                <span className="hot">Hot</span>
              </div>
            </div>
            <div className="product-content-wrap">
              <h2>
                <a>{ProductByArrival.name}</a>
              </h2>
              <div className="rating-result" title="90%">
                <span></span>
              </div>
              <div className="product-price">
                <span> Rs {ProductByArrival.price} </span>
                <span className="old-price">
                  Rs {ProductByArrival.discount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};
export default ProductByArrivalCarousel;
