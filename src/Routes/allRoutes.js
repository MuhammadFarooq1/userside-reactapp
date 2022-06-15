import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../Components/SignUp";
import SignIn from "../Components/SignIn";
import Home from "../pages/Core/Home";
import Wishlist from "../pages/Ecommerce/Wishlist";
import Cart from "../pages/Ecommerce/Cart";
import CheckOut from "../pages/Ecommerce/ChecjOut";
import AboutUs from "../pages/Social/AboutUs";
import ContacUs from "../pages/Social/ContactUs";
import Account from "../pages/Social/Account";
import FourOfour from "../pages/Authentication/Four_O_Four";

const MyRoutes = () => {
  return (
    <Router>
      {/* <Menu /> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/wishlist" exact element={<Wishlist />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/checkout" exact element={<CheckOut />} />
        <Route path="/aboutus" exact element={<AboutUs />} />
        <Route path="/contactus" exact element={<ContacUs />} />
        <Route path="/account" exact element={<Account />} />
        <Route path="/404" exact element={<FourOfour />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
