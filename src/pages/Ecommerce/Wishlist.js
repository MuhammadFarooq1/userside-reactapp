import React, { useState, useEffect } from "react";
import Layout from "../../Layouts/ParentLayout";
import { Link } from "react-router-dom";
import { getTotalItemInwishList } from "../../hellper/wishListHellper";
import WishListCard from "../core/wishListCard";
const WishList = () => {
  const [wishlistitems, setWishListItems] = useState([]);
  const [runwishlist, setRunWishList] = useState(false);
  useEffect(() => {
    setWishListItems(getTotalItemInwishList());
  }, [runwishlist]);
  const ShowItems = () => {
    return (
      <div>
        <h2>
          Your wish List has <span> {`${wishlistitems.length}`} </span>{" "}
          wishlistitems{" "}
        </h2>
      </div>
    );
  };

  const noItemMessege = () => {
    <h2>
      Your wish List empty. <br /> <Link to="/shop">Continue shoping </Link>
    </h2>;
  };

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
          {wishlistitems ? ShowItems(wishlistitems) : noItemMessege()}
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
                      {wishlistitems.map(
                        (productsWishList, productscartkey) => (
                          <WishListCard
                            key={productscartkey}
                            wishlistproduct={productsWishList}
                            setRunWishList={setRunWishList}
                            runwishlist={runwishlist}
                          />
                        )
                      )}
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
