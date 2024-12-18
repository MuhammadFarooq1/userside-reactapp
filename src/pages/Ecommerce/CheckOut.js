import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { PUBLISHABLEKEY } from "../../config";

import "../../assets/css/checkout.css";
import CheckoutForm from "./CheckoutForm";
import { creatSession } from "../../api's/ecommerceApi/checkoutApi";
import { isAuthenticated } from "../../api's/auth";
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.

const stripePromise = loadStripe(
  "pk_test_51LWQItJfVhzhvN34ECE0MgDKmthCiskOMGHhlWYw68csL5zEN7mKZwC4s7vSAxLuILAhwZGfTsg4MS5XXdwjgSyO00YN5xnhzS"
);

const CheckOut = () => {
  const [clientSecret, setClientSecret] = useState("");

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;
  const [error, setError] = useState(false);
  const init = () => {
    creatSession().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setClientSecret(data.clientSecret);
      }
    });
  };
  //useEffect hooke
  useEffect(() => {
    init();
  }, []);

  const showError = () => (
    <h2 className="alert alert-danger" style={{ display: error ? "" : "none" }}>
      {error}
    </h2>
  );
  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <div className="App payment_App">
      <div>{showError()}</div>

      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};
export default CheckOut;
