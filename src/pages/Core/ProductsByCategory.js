import React, { useState, useEffect, Fragment } from "react";

import Layout from "../../Layouts/ParentLayout";
import { isAuthenticated } from "../../api's/auth";
import { listOfProductsInCategory } from "../../api's/ecommerceApi/productApi";
import { useParams } from "react-router-dom";
import Card from "./Card";
const ProductByCategory = () => {
  const category = useParams();

  const [error, setError] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { user } = isAuthenticated();
  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  const init = (categoryID) => {
    listOfProductsInCategory(categoryID).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setRelatedProducts(data);
      }
    });
  };
  useEffect(() => {
    const categoryID = category.categoryId;
    init(categoryID);
  }, []);

  return (
    <Layout title="" discription="" className="">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <a href="index.html" rel="nofollow">
              Home
            </a>
            <span></span> Pages
            <span></span> Products By Category
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

export default ProductByCategory;
