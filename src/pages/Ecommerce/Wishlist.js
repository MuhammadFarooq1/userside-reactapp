import React, { useState, useEffect } from "react";
import Layout from "../../Layouts/ParentLayout";
import { Link } from "react-router-dom";
import ImgProduct_1 from "../../assets/imgs/shop/product-1-1.jpg";
import ImgProduct_2 from "../../assets/imgs/shop/product-2-1.jpg";
import ImgProduct_3 from "../../assets/imgs/shop/product-3-1.jpg";
import {
  getTotalItemInwishList,
  removeItemwishList,
} from "../../hellper/wishListHellper";

const WishList = () => {
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);
  useEffect(() => {
    setItems(getTotalItemInwishList());
  }, [run]);

  return (
    <Layout title="" discription="" className="">
      <main className="main">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <Link to={"/"}>Home</Link>
              <span></span> Shop
              <span></span> Wishlist
            </div>
          </div>
        </div>
        <section className="mt-50 mb-50">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="table-responsive">
                  <table className="table shopping-summery text-center">
                    <thead>
                      <tr className="main-heading">
                        <th scope="col" colSpan="2">
                          Product
                        </th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock Status</th>
                        <th scope="col">Action</th>
                        <th scope="col">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((products, productscartkey) => (
                        <tr>
                          <td className="image product-thumbnail">
                            <img src={ImgProduct_1} alt="#" />
                          </td>
                          <td className="product-des product-name">
                            <h5 className="product-name">
                              <a href="shop-product-right.html">
                                J.Crew Mercantile Women's Short-Sleeve
                              </a>
                            </h5>
                            <p className="font-xs">
                              Maboriosam in a tonto nesciung eget
                              <br /> distingy magndapibus.
                            </p>
                          </td>
                          <td className="price" data-title="Price">
                            <span>$65.00 </span>
                          </td>
                          <td className="text-center" data-title="Stock">
                            <span className="color3 font-weight-bold">
                              In Stock
                            </span>
                          </td>
                          <td className="text-right" data-title="Cart">
                            <button className="btn btn-sm">
                              <i className="fi-rs-shopping-bag mr-5"></i>Add to
                              cart
                            </button>
                          </td>
                          <td className="action" data-title="Remove">
                            <a href="#">
                              <i className="fi-rs-trash"></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default WishList;
