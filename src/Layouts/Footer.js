import ImgEmail from "../assets/imgs/theme/icons/icon-email.svg";
import ImgLogo from "../assets/imgs/theme/logo.svg";
import Imgfacebook from "../assets/imgs/theme/icons/icon-facebook.svg";
import ImgTwitter from "../assets/imgs/theme/icons/icon-twitter.svg";
import ImgLinkin from "../assets/imgs/theme/icons/icon-linkin.jpg";
import ImgInstagram from "../assets/imgs/theme/icons/icon-instagram.svg";
import ImgPinterest from "../assets/imgs/theme/icons/icon-pinterest.svg";
import ImgYoutube from "../assets/imgs/theme/icons/icon-youtube.svg";
import ImgApp from "../assets/imgs/theme/app-store.jpg";
import ImgGoogleplay from "../assets/imgs/theme/google-play.jpg";
import ImgPaymentmethod from "../assets/imgs/theme/payment-method.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main">
      <section className="newsletter p-30 text-white wow fadeIn animated">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-md-3 mb-lg-0">
              <div className="row align-items-center">
                <div className="col flex-horizontal-center">
                  <img className="icon-email" src={ImgEmail} alt="ImgEmail" />
                  <h4 className="font-size-20 mb-0 ml-3">
                    Sign up to Newsletter
                  </h4>
                </div>
                <div className="col my-4 my-md-0 des">
                  <h5 className="font-size-15 ml-4 mb-0">
                    ...and receive{" "}
                    <strong>Rs25 coupon for first shopping.</strong>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              {/* <!-- Subscribe Form --> */}
              <form className="form-subcriber d-flex wow fadeIn animated">
                <input
                  type="email"
                  className="form-control bg-white font-small"
                  placeholder="Enter your email"
                />
                <button className="btn bg-dark text-white" type="submit">
                  Subscribe
                </button>
              </form>
              {/* <!-- End Subscribe Form --> */}
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding footer-mid">
        <div className="container pt-15 pb-20">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="widget-about font-md mb-md-5 mb-lg-0">
                <div className="logo logo-width-1 wow fadeIn animated">
                  <a href="index.html">
                    <img />
                    {/* <img src={ImgLogo} alt="logo" /> */}
                  </a>
                </div>
                <h5 className="mt-20 mb-10 fw-600 text-grey-4 wow fadeIn animated">
                  Contact
                </h5>
                <p className="wow fadeIn animated">
                  <strong>Address: </strong>C-12 312 Joher Town Lahore
                </p>
                <p className="wow fadeIn animated">
                  <strong>Phone: </strong>+92 3008826610
                </p>
                <p className="wow fadeIn animated">
                  <strong>Hours: </strong>10:00 - 18:00, Mon - Sat
                </p>
                <h5 className="mb-10 mt-30 fw-600 text-grey-4 wow fadeIn animated">
                  Follow Us
                </h5>
                <div className="mobile-social-icon wow fadeIn animated mb-sm-5 mb-md-0">
                  <a
                    href="https://www.facebook.com/people/Farooq-Khan/100026270191414/"
                    target="_blank"
                  >
                    <img src={Imgfacebook} alt="" />
                  </a>
                  <a href="https://twitter.com/MFarooq42297968" target="_blank">
                    <img src={ImgTwitter} alt="" />
                  </a>
                  <a
                    href="https://www.instagram.com/farooqkhan574/"
                    target="_blank"
                  >
                    <img src={ImgInstagram} alt="test image not" />
                  </a>
                  <a href="#" target="_blank">
                    <img src={ImgPinterest} alt="" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammad-farooq-b54943215/"
                    target="_blank"
                  >
                    <img src={ImgLinkin} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3">
              <h5 className="widget-title wow fadeIn animated">About</h5>
              <ul className="footer-list wow fadeIn animated mb-sm-5 mb-md-0">
                <li>
                  <Link to={"/aboutus"}>About Us</Link>
                </li>
                <li>
                  <a href="#">Delivery Information</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <Link to={"/contactus"}>Contact Us</Link>
                </li>
                <li>
                  <a href="#">Support Center</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2  col-md-3">
              <h5 className="widget-title wow fadeIn animated">My Account</h5>
              <ul className="footer-list wow fadeIn animated">
                <li>
                  <Link to={"/signin"}>Sign In</Link>
                </li>
                <li>
                  <Link to={"/cart"}>View Cart</Link>
                </li>
                <li>
                  <Link to={"/wishlist"}>My Wishlist</Link>
                </li>
                <li>
                  <a href="#">Track My Order</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Order</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5 className="widget-title wow fadeIn animated">Install App</h5>
              <div className="row">
                <div className="col-md-8 col-lg-12">
                  <p className="wow fadeIn animated">
                    From App Store or Google Play
                  </p>
                  <div className="download-app wow fadeIn animated">
                    <a href="#" className="hover-up mb-sm-4 mb-lg-0">
                      <img className="active" src={ImgApp} alt="" />
                    </a>
                    <a href="#" className="hover-up">
                      <img src={ImgGoogleplay} alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-md-4 col-lg-12 mt-md-3 mt-lg-0">
                  <p className="mb-20 wow fadeIn animated">
                    Secured Payment Gateways
                  </p>
                  <img
                    className="wow fadeIn animated"
                    src={ImgPaymentmethod}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container pb-20 wow fadeIn animated">
        <div className="row">
          <div className="col-12 mb-20">
            <div className="footer-bottom"></div>
          </div>
          <div className="col-lg-6">
            <p className="float-md-left font-sm text-muted mb-0">
              &copy; 2022, <strong className="text-brand">Liken Store</strong>
            </p>
          </div>
          <div className="col-lg-6">
            <p className="text-lg-end text-start font-sm text-muted mb-0">
              Designed by{" "}
              <a
                href="https://www.linkedin.com/in/muhammad-farooq1/"
                target="_blank"
              >
                Mummad Farooq
              </a>
              . All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
