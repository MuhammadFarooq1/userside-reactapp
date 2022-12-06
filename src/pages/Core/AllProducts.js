import React, { useState, useEffect } from "react";
import Layout from "../../Layouts/ParentLayout";
import { getAllProductsByHome } from "../../api's/ecommerceApi/productApi";

import Card from "./Card";
const AllProducts = () => {
  const [error, setError] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  const init = () => {
    getAllProductsByHome().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setAllProducts(data);
      }
    });
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <Layout title="" discription="" className="">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <a rel="nofollow">Home</a>
            <span></span> Pages
            <span></span> All Products
          </div>
        </div>
      </div>
      <div className="row product-grid-4 m-5">
        {allProducts &&
          allProducts.map((product, i) => (
            <div key={i} className="col-lg-4 col-md-4 col-12 col-sm-6">
              <Card product={product} />
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default AllProducts;
