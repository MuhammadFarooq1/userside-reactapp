import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// pligins css files starts here
import "../assets/css/plugins/jquery-ui.css";
import "../assets/css/plugins/magnific-popup.css";
import "../assets/css/plugins/perfect-scrollbar.css";
import "../assets/css/plugins/select2.min.css";
import "../assets/css/plugins/slick.css";
// pligins css files ends here

// vender css files starts here
import "../assets/css/vendors/bootstrap.min.css";
import "../assets/css/vendors/evara-font.css";
import "../assets/css/vendors/normalize.css";
import "../assets/css/vendors/uicons-regular-straight.css";
// vender css files end here

import "../assets/css/main.css";

//import "../assets/js/main.js";
//import "../assets/js/shop";
//jquery
import "../assets/js/plugins/counterup";
import "../assets/js/plugins/isotope";
import "../assets/js/plugins/jquery-ui";
import "../assets/js/plugins/jquery.countdown.min";
import "../assets/js/plugins/jquery.elevatezoom";
import "../assets/js/plugins/jquery.syotimer.min";
import "../assets/js/plugins/jquery.theia.sticky";
import "../assets/js/plugins/jquery.vticker-min";
import "../assets/js/plugins/leaflet";
import "../assets/js/plugins/magnific-popup";
import "../assets/js/plugins/perfect-scrollbar";
import "../assets/js/plugins/scrollup";
import "../assets/js/plugins/select2.min";
import "../assets/js/plugins/slick";
import "../assets/js/plugins/waypoints";
import "../assets/js/plugins/wow";

import "../assets/js/vendor/bootstrap.bundle.min";
import "../assets/js/vendor/jquery-3.6.0.min";
import "../assets/js/vendor/jquery-migrate-3.3.0.min";
import "../assets/js/vendor/modernizr-3.6.0.min";

const Layout = ({
  title = "Title",
  discription = "Discription",
  className,
  children,
}) => (
  <div>
    <Header />
    <div>
      <h2>{title} </h2>
      <p>{discription}</p>
    </div>
    <div className={className}>{children}</div>
    <Footer />
  </div>
);

export default Layout;
