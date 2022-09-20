import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import React from "react";
import { Link } from "react-router-dom";

const ImageSlider = ({ sliders }) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <Slider {...settings}>
        {sliders.map((item, i) => (
          <div key={i} className="container">
            <div className="row align-items-center slider-animated-1">
              <div className="col-lg-5 col-md-6">
                <div className="hero-slider-content-2">
                  {/* <h4 className="animated">Trade-In Offer</h4> */}
                  <h4 className="animated">{item.name}</h4>
                  {/* <h3 className="animated fw-900">Supper Value Deals</h3> */}
                  <h3 className="animated fw-900">{item.about}</h3>
                  {/* <h2 className="animated fw-900 text-brand">
                    On All Products
                  </h2> */}
                  <h2 className="animated fw-900 text-brand">
                    {item.discription}
                  </h2>
                  <p className="animated">up to {item.discount}% off</p>
                  <Link
                    to="/"
                    className="animated btn btn-brush btn-brush-3"
                    tabIndex="0"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="single-slider-img single-slider-img-1">
                  <img
                    className="animated"
                    src={`http://localhost:8000/likenAdmin/slider/photo/${item._id}`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};
export default ImageSlider;
