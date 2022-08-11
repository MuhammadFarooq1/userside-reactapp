import React, { useState, useEffect, Fragment } from "react";
import { API } from "../../config";
import { Link } from "react-router-dom";
import ShowImage from "./ShowProductImage.js";
import {
  getpopularsubcategories,
  getFilteredProducts,
} from "../../api's/ecommerceApi/productApi";
import CheckBox from "./CheckBox";
import { Prices } from "./fixedPrices";
import RadioBox from "./RadioBox";

const Shop = () => {
  const [myFilters, setMyFilters] = useState({
    filters: { subCategory: [], price: [] },
  });
  const [popularsubCategoies, setPopularSubcategoires] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [filteredResult, setFilteredResults] = useState([]);

  const loadPopularSubCategories = () => {
    getpopularsubcategories("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setPopularSubcategoires(data);
      }
    });
  };

  const loadFilteredResults = (newFilters) => {
    // console.log(newFilters);
    getFilteredProducts(skip, limit, newFilters).then((data) => {
      console.log(typeof data.error);
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults(data.data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };
  useEffect(() => {
    loadPopularSubCategories();
    loadFilteredResults(skip, limit, myFilters.filters);
  }, []);

  const handleFilters = (filters, filterBy) => {
    //console.log("Shop", filters, filterBy);
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;

    if (filterBy === "price") {
      let priceValues = handlePrice(filters);

      newFilters.filters[filterBy] = priceValues;
    }
    loadFilteredResults(myFilters.filters);
    setMyFilters(newFilters);
  };

  const handlePrice = (value) => {
    const data = Prices;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array;
      }
    }
    return array;
  };

  const loadMore = () => {
    let toSkip = skip + limit;
    // console.log(newFilters);
    getFilteredProducts(toSkip, limit, myFilters.filters).then((data) => {
      console.log(typeof data.error);
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults([...filteredResult, ...data.data]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className="btn btn-warning mb-5">
          Load More
        </button>
      )
    );
  };

  return (
    <Fragment>
      <div className="page-header container breadcrumb-wrap">
        <div className="container">
          <div>
            <span> Shop</span>
          </div>
        </div>
      </div>
      <section className="mt-50 mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="shop-product-fillter">
                <div className="totall-product">
                  <p>
                    We found{" "}
                    <strong className="text-brand">
                      {`${filteredResult.length}`}
                    </strong>{" "}
                    Products For you!
                  </p>
                </div>
              </div>
              <div className="row product-grid-3">
                {filteredResult.map((filtterProducts, keyfilterProduct) => (
                  <div
                    key={keyfilterProduct}
                    className="col-lg-4 col-md-4 col-12 col-sm-6"
                  >
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <ShowImage item={filtterProducts} url="product" />

                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-search"></i>
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
                            {filtterProducts.subCategory.name}
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html">
                            {filtterProducts.name}
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>90%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span> Rs {filtterProducts.price} </span>
                          <span className="old-price">
                            RS {filtterProducts.discount}
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
                    </div>
                  </div>
                ))}
              </div>
              {/* <!--pagination--> */}
              {/* <div className="pagination-area mt-15 mb-sm-5 mb-lg-0">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-start">
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        01
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        03
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link dot" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        16
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="fi-rs-angle-double-small-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div> */}
              <hr />
              {loadMoreButton()}
            </div>
            <div className="col-lg-3 primary-sidebar sticky-sidebar">
              <div className="row">
                <div className="col-lg-12 col-mg-6"></div>
                <div className="col-lg-12 col-mg-6"></div>
              </div>
              <CheckBox
                subCategories={popularsubCategoies}
                handleFilters={(filters) =>
                  handleFilters(filters, "subCategory")
                }
              />
              {/* <!-- Fillter By Price --> */}
              <RadioBox
                prices={Prices}
                handleFilters={(filters) => handleFilters(filters, "price")}
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Shop;
