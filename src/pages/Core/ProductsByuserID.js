import React, { useState, useEffect, Fragment } from "react";

import Layout from "../../Layouts/ParentLayout";
import { isAuthenticated } from "../../api's/auth";
import { listOfProductsInUserID } from "../../api's/ecommerceApi/productApi";
import { useParams } from "react-router-dom";
import Card from "./Card";
const ProductByUserID = () => {
  const user = useParams();

  const [error, setError] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const init = (userID) => {
    listOfProductsInUserID(userID).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setRelatedProducts(data);
      }
    });
  };
  useEffect(() => {
    const userID = user.userId;
    init(userID);
  }, []);

  return (
    <Layout title="" discription="" className="">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <a rel="nofollow">Home</a>
            <span></span> Pages
            <span></span> User Products
          </div>
        </div>
      </div>
      <div className="row product-grid-4 m-5">
        {relatedProducts.map((product, i) => (
          <div key={i} className="col-lg-4 col-md-4 col-12 col-sm-6">
            <Card product={product} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ProductByUserID;
