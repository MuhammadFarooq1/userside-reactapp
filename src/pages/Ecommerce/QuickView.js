import Layout from "../../Layouts/ParentLayout";
import { Link } from "react-router-dom";
import ImgProduct_1 from "../../assets/imgs/shop/product-1-1.jpg";
import ImgProduct_2 from "../../assets/imgs/shop/product-2-1.jpg";
import ImgProduct_3 from "../../assets/imgs/shop/product-3-1.jpg";
const QuickView = ({ closeQuickView , product }) => {
  return (
    <div
      //className="modal fade custom-modal"
      //  id="quickViewModal"
      tabIndex="-1"
      aria-labelledby="quickViewModalLabel"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            onClick={() => {
              closeQuickView(false);
            }}
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
                          style={{ width: "90" }}
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
                        <span className="old-price font-md ml-15">$200.00</span>
                      </ins>
                      <span className="save-price  font-md color3 ml-15">
                        25% Off
                      </span>
                    </div>
                  </div>
                  <div className="bt-1 border-color-1 mt-15 mb-15"></div>
                  <div className="short-desc mb-30">
                    <p className="font-sm">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aliquam rem officia, corrupti reiciendis minima nisi
                      modi,!
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
    </div>
  );
};


export default QuickView;
