import React, { useState, useEffect, Fragment } from "react";
import { Button } from "reactstrap";
import CheckOut from "./CheckOut.js";
import DropIn from "braintree-web-drop-in-react";
import ShowCartImage from "./ShowCartImage.js";
import { isAuthenticated } from "../../api's/auth/index.js";
import { getBraintreeClientToken } from "../../api's/braintree/braintreeApi.js";
import { Link } from "react-router-dom";

const ShopCheckOut = ({ checkOutProducts }) => {
  const [data, setData] = useState({
    success: false,
    clientToken: null,
    error: "",
    instance: {},
    address: "",
  });

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  const getToken = (userId, token) => {
    getBraintreeClientToken(userId, token).then((data) => {
      if (data.error) {
        setData({ ...data, error: data.error });
      } else {
        setData({ ...data, clientToken: data.clientToken });
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

  const showDropIn = () => (
    <div>
      {data.clientToken !== null && checkOutProducts.length > 0 ? (
        <div>
          <DropIn
            options={{
              authorization: data.clientToken,
            }}
            onInstance={(instance) => (data.instance = instance)}
          />
          <button>Pay now</button>
        </div>
      ) : (
        "fdfsddf"
      )}
    </div>
  );

  const showCheckout = () => {
    return isAuthenticated() ? (
      <div>{showDropIn()} </div>
    ) : (
      <Link to="/login">
        <button className="payment_btn">Login</button>
      </Link>
    );
  };

  return <div>{showCheckout()}</div>;
};

export default ShopCheckOut;
