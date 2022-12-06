import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../src/components/SignUp";
import SignIn from "../src/components/SignIn";
import Home from "../src/pages/core/Home";
import AllProducts from "../src/pages/core/AllProducts";
import Wishlist from "../src/pages/ecommerce/Wishlist";
import Cart from "../src/pages/ecommerce/Cart";
import BidCart from "../src/pages/ecommerce/BidCart";
import CheckOut from "../src/pages/ecommerce/CheckOut";
import ShopCheckOut from "../src/pages/ecommerce/ShopCheckout";
import AboutUs from "../src/pages/social/AboutUs";
import ContacUs from "../src/pages/social/ContactUs";
import Account from "../src/pages/social/Account";
import FourOfour from "../src/pages/Authentication/Four_O_Four";
import Shop from "./pages/core/Shop";
import ProductDetaile from "./pages/core/ProductDetail";
import ProductByCategory from "./pages/core/ProductsByCategory";
import ProductByUserID from "./pages/core/ProductsByuserID";
import UserDashboard from "./pages/users/UserDashboard";
import SearchBar from "./pages/core/SearchBar";
import UserProfile from "./pages/users/UserProfile";

const MyRoutes = () => {
  return (
    <Router>
      {/* <Menu /> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/allProducts" exact element={<AllProducts />} />
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/user/dashboard" exact element={<UserDashboard />} />
        <Route path="/user/search" exact element={<SearchBar />} />
        <Route path="/user/profile/:userId" exact element={<UserProfile />} />
        <Route path="/wishlist" exact element={<Wishlist />} />
        <Route path="/shop" exact element={<Shop />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/bidd/cart" exact element={<BidCart />} />
        <Route path="/checkout" exact element={<CheckOut />} />
        <Route path="/shop/checkout" exact element={<ShopCheckOut />} />
        <Route path="/aboutus" exact element={<AboutUs />} />
        <Route
          path="/productdetail/:productId"
          exact
          element={<ProductDetaile />}
        />
        <Route
          path="/products-in-category/:categoryId"
          exact
          element={<ProductByCategory />}
        />
        <Route
          path="/user/products/:userId"
          exact
          element={<ProductByUserID />}
        />
        <Route path="/contactus" exact element={<ContacUs />} />
        <Route path="/account" exact element={<Account />} />
        <Route path="/404" exact element={<FourOfour />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
