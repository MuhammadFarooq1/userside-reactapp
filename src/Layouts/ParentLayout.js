import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/css/main.css";

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
