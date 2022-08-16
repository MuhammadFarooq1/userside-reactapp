import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import React from "react";

const ImageSlider = ({ images }) => {
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
        {images.map((item) => (
          <div key={item.id}>
            <img className="animated" src={item.src} alt={item.alt} />
          </div>
        ))}
      </Slider>
    </>
  );
};
export default ImageSlider;
