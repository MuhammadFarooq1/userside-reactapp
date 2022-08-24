import React, { useState, useEffect, Fragment } from "react";
import Layout from "../../Layouts/ParentLayout";
import ImgProduct_1_1 from "../../assets/imgs/shop/product-1-2.jpg";
import ImgProduct_1_2 from "../../assets/imgs/shop/product-11-2.jpg";
import ImgProduct_1_3 from "../../assets/imgs/shop/product-6-1.jpg";
import ShowCartImage from "./ShowCartImage";
import StripeCheckout from "react-stripe-checkout";
import { getTotalItemInCart } from "../../hellper/cartHellper";

import { Link } from "react-router-dom";
import CartCard from "../core/CartCard";
import CheckOut from "./CheckOut";
import ShopCheckOut from "./ShopCheckout";
const Cart = () => {
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);

  useEffect(() => {
    setItems(getTotalItemInCart());
  }, [run]);

  const ShowItems = () => {
    return (
      <div>
        <h2>
          Your Cart has <span> {`${items.length}`} </span> items{" "}
        </h2>
      </div>
    );
  };

  const noItemMessege = () => {
    <h2>
      Your cart is empty. <br /> <Link to="/shop">Continue shoping </Link>
    </h2>;
  };

  // const showCartUpdate = () => {
  //   return (
  //     <div className="detail-qty border radius  m-auto">
  //       <a href="#" className="qty-down">
  //         <i className="fi-rs-angle-small-down"></i>
  //       </a>
  //       <span className="qty-val" value={items.quantity}>
  //         1
  //       </span>
  //       <a href="#" className="qty-up">
  //         <i className="fi-rs-angle-small-up"></i>
  //       </a>
  //     </div>
  //   );
  // };

  return (
    <Layout title="" discription="" className="">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <a href="index.html" rel="nofollow">
              Home
            </a>
            <span></span> Shop
            <span></span> Your Cart
          </div>
        </div>
      </div>
      <section className="mt-50 mb-50">
        <div className="container">
          {items ? ShowItems(items) : noItemMessege()}
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table shopping-summery text-center clean">
                  <thead>
                    <tr className="main-heading">
                      <th scope="col">Image</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Subtotal</th>
                      <th scope="col">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((products, productscartkey) => (
                      <CartCard
                        key={productscartkey}
                        product={products}
                        setRun={setRun}
                        run={run}
                      />
                    ))}

                    <tr>
                      <td colSpan="6" className="text-end">
                        <a href="#" className="text-muted">
                          <i className="fi-rs-cross-small"></i> Clear Cart
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="cart-action text-end">
                <a className="btn  mr-10 mb-sm-15">
                  <i className="fi-rs-shuffle mr-10"></i>Update Cart
                </a>
                <Link to="/checkout" className="btn ">
                  <i className="fi-rs-shopping-bag mr-10"></i>Continue Shopping
                </Link>
              </div>
              <div className="divider center_icon mt-50 mb-50">
                <i className="fi-rs-fingerprint"></i>
              </div>

              {/* cart checkout . */}
              {/* <CheckOut checkOutProducts={items} /> */}
              <ShopCheckOut checkOutProducts={items} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
