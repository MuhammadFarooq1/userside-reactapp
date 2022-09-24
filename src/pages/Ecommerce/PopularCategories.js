import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { Link } from "react-router-dom";
import ShowCategoryImage from "../core/ShowCategoryImage";

const PopularCategoriesCarousel = ({ PopularCategoriesSlider }) => {
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
        {PopularCategoriesSlider.map((popularCategory, keyPopularCategory) => (
          <div key={keyPopularCategory} className="card-1   ">
            <ShowCategoryImage item={popularCategory} url="subCategory" />
            <h5>
              <Link to={`/products-in-category/${popularCategory._id}`}>
                {popularCategory.name}
              </Link>
            </h5>
          </div>
        ))}
      </Slider>
    </>
  );
};
export default PopularCategoriesCarousel;
