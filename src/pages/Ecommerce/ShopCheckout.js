import React, { useState, useEffect } from "react";
import { emptyCart } from "../../hellper/cartHellper.js";
import DropIn from "braintree-web-drop-in-react";
import ShowCartImage from "./ShowCartImage.js";
import { isAuthenticated } from "../../api's/auth/index.js";
import {
  getBraintreeClientToken,
  processPayment,
  createUserOrder,
} from "../../api's/braintree/braintreeApi.js";
import { Link } from "react-router-dom";

const ShopCheckOut = ({
  checkOutProducts,
  setRun = (f) => f, // default value of function
  run = undefined,
}) => {
  const [mydata, setData] = useState({
    success: false,
    clientToken: null,
    error: "",
    instance: {},
    address: "",
    phonNo: "",
    postalCode: "",
  });

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  const getToken = (userId, token) => {
    getBraintreeClientToken(userId, token).then((data) => {
      if (data.error) {
        setData({ ...mydata, error: data.error });
      } else {
        setData({ ...mydata, clientToken: data.clientToken });
      }
    });
  };
  useEffect(() => {
    getToken(userId, token);
  }, []);
  const getTotal = () => {
    return checkOutProducts.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };
  // hadle field change
  const handleAdress = (event) => {
    setData({ ...mydata, address: event.target.value });
  };
  const handlePostalCode = (event) => {
    setData({ ...mydata, postalCode: event.target.value });
  };
  const handlePhoneNo = (event) => {
    setData({ ...mydata, phonNo: event.target.value });
  };

  const Buy = () => {
    // send nonce to our server
    //nonce is  nouce = data.instance.requestMethode()
    let nonce;
    let getNonce = mydata.instance
      .requestPaymentMethod()
      .then((data) => {
        //console.log(data);
        nonce = data.nonce;
        //once we have nonce( card Type ,card number ) send nnce as paymentMethode()
        // and also total to be charged
        // console.log(
        //   "send nonce and total to process:",
        //   nonce,
        //   getTotal(checkOutProducts)
        // );
        const paymentData = {
          paymentMethodNonce: nonce,
          amount: getTotal(checkOutProducts),
        };

        processPayment(userId, token, paymentData)
          .then((responce) => {
            // console.log(responce);
            let products = [];
            products = checkOutProducts.map((checkProducts) => ({
              _id: checkProducts._id,
              name: checkProducts.name,
              price: checkProducts.price,
              discription: checkProducts.discription,
              subCategory: checkProducts.subCategory._id,
              userID: checkProducts.userID._id,
              quantity: checkProducts.quantity,
              count: checkProducts.count,
            }));
            // products.push({
            //   _id: checkOutProducts._id,
            //   name: checkOutProducts.name,
            //   price: checkOutProducts.price,
            //   quantity: checkOutProducts.quantity,
            //   //  userID: checkOutProducts.userID.id,
            //   // subCategory: checkOutProducts.subCategory.id,
            //   count: checkOutProducts.count,
            // });
            // creat order
            const creatOrderData = {
              products: products,
              transaction_id: responce.transaction.id,
              amount: responce.transaction.amount,
              address: mydata.address,
              postalCode: mydata.postalCode,
              phone: mydata.phonNo,
            };

            //   console.log("orderData", creatOrderData);
            createUserOrder(userId, token, creatOrderData)
              .then((responce) => {
                setData({ ...mydata, success: responce.success });
                //  emptyCart;
                emptyCart(() => {
                  console.log("payment sucesss cart is empty");
                  setRun(!run);
                });
              })
              .catch((error) => {
                console.log("payment error ", error);
                //setData({ ...data, error: error.message });
              });
          })
          .catch((error) => {
            console.log("payment error ", error);
            //setData({ ...data, error: error.message });
          });
      })
      .catch((error) => {
        // console.log("dropin error ", error);
        setData({ ...mydata, error: error.message });
      });
  };

  const showDropIn = () => (
    <div onBlur={() => setData({ ...mydata, success: false, error: "" })}>
      {mydata.clientToken !== null && checkOutProducts.length > 0 ? (
        <div>
          <div className="mb-25">
            <h4>Billing Details</h4>
          </div>

          <div className="form-group">
            <input
              onChange={handleAdress}
              type="text"
              name="billing_address"
              placeholder="Address *"
            />
          </div>
          <div className="form-group">
            <input
              onChange={handlePostalCode}
              type="text"
              name="zipcode"
              placeholder="Postcode / ZIP *"
            />
          </div>
          <div className="form-group">
            <input
              onChange={handlePhoneNo}
              type="phone"
              name="phone"
              placeholder="Phone *"
            />
          </div>

          <DropIn
            options={{
              authorization: mydata.clientToken,
              // paypal: {
              //   flow: "vault",
              // },
            }}
            onInstance={(instance) => (mydata.instance = instance)}
          />
          <button onClick={Buy} className="payment_btn">
            <span id="button-text">Pay now</span>
          </button>
        </div>
      ) : null}
    </div>
  );
  const showError = (error) => (
    <h2 className="alert alert-danger" style={{ display: error ? "" : "none" }}>
      {error}
    </h2>
  );
  const showSuccess = (success) => (
    <h2
      className="text-success alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      <p> Thanks! Your payment was successful!</p>
    </h2>
  );
  const showCheckout = () => {
    return isAuthenticated() ? (
      // <div>{showDropIn()} </div>
      <section className="mt-50 mb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* <CheckOut /> */}
              {showError(mydata.error)}
              {showSuccess(mydata.success)}
              {showDropIn()}

              {/* {JSON.stringify(checkOutProducts)} */}
              {/* <div className="mb-25">
                <h4>Billing Details</h4>
              </div>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    required=""
                    name="fname"
                    placeholder=" name *"
                  />
                </div>
                <div className="form-group">
                  <input
                    required=""
                    type="text"
                    name="phone"
                    placeholder="Phone *"
                  />
                </div>
                <div className="form-group">
                  <input
                    required=""
                    type="text"
                    name="email"
                    placeholder="Email address *"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="billing_address"
                    required=""
                    placeholder="Address *"
                  />
                </div>

                <div className="form-group">
                  <input
                    required=""
                    type="text"
                    name="city"
                    placeholder="City / Town *"
                  />
                </div>
                <div className="form-group">
                  <input
                    required=""
                    type="text"
                    name="state"
                    placeholder="State / County *"
                  />
                </div>
                <div className="form-group">
                  <input
                    required=""
                    type="text"
                    name="zipcode"
                    placeholder="Postcode / ZIP *"
                  />
                </div>
              </form> */}
            </div>
            <div className="col-md-6">
              <div className="order_review">
                <div className="mb-20">
                  <h4>Your Orders</h4>
                </div>
                <div className="table-responsive order_table text-center">
                  <table className="table">
                    <thead>
                      <tr>
                        <th colSpan="2">Product</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {checkOutProducts.map((product, productscheckoutkey) => (
                        <tr key={productscheckoutkey}>
                          <td className="image product-thumbnail">
                            <ShowCartImage item={product} url="product" />
                          </td>
                          <td>
                            <h5>
                              <a>{product.name}</a>
                            </h5>
                            <span className="product-qty">
                              {product.subCategory.name}
                            </span>
                          </td>
                          <td>{product.count} </td>
                        </tr>
                      ))}
                      <tr>
                        <th>SubTotal</th>
                        <td className="product-subtotal" colSpan="2">
                          PKR {getTotal()}
                        </td>
                      </tr>
                      <tr>
                        <th>Shipping</th>
                        <td colSpan="2">
                          <em>Free Shipping</em>
                        </td>
                      </tr>
                      <tr>
                        <th>Total</th>
                        <td colSpan="2" className="product-subtotal">
                          <span className="font-xl text-brand fw-900">
                            PKR {getTotal()}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bt-1 border-color-1 mt-30 mb-30"></div>
                {/* <div className="payment_method">
                  <div className="mb-25">
                    <h5>Payment</h5>
                  </div>
                  <div className="payment_option">
                    <div className="custome-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="payment_option"
                        id="exampleRadios3"
                      />
                      <label
                        className="form-check-label"
                        hmtlfor="exampleRadios3"
                        data-bs-toggle="collapse"
                      >
                        Direct Bank Transfer
                      </label>
                      <div className="form-group collapse in" id="bankTranfer">
                        <p className="text-muted mt-5">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="custome-radio">
                      <input
                        className="form-check-input"
                        required=""
                        type="radio"
                        name="payment_option"
                      />
                      <label
                        className="form-check-label"
                        hmtlfor="exampleRadios4"
                        data-bs-toggle="collapse"
                        data-target="#checkPayment"
                        aria-controls="checkPayment"
                      >
                        Check Payment
                      </label>
                      <div className="form-group collapse in" id="checkPayment">
                        <p className="text-muted mt-5">
                          Please send your cheque to Store Name, Store Street,
                          Store Town, Store State / County, Store Postcode.{" "}
                        </p>
                      </div>
                      <button className="payment_btn">
                        <span id="button-text">Pay now</span>
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    ) : (
      <Link to="/login">
        <button className="payment_btn">Login</button>
      </Link>
    );
  };

  return <div>{showCheckout()}</div>;
};

export default ShopCheckOut;
