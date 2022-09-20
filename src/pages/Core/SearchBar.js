import React, { useState, useEffect } from "react";
import {
  getpopularsubcategories,
  searchProductsLists,
} from "../../api's/ecommerceApi/productApi.js";
import Layout from "../../Layouts/ParentLayout.js";
import Card from "./Card.js";
import Shop from "./Shop.js";

const Search = () => {
  const [data, setData] = useState({
    subCategories: [],
    subCategory: "",
    seach: "",
    results: [],
    searched: false,
  });

  const { subCategories, subCategory, search, results, searched } = data;
  const loadsubCategories = () => {
    getpopularsubcategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setData({ ...data, subCategories: data });
      }
    });
  };

  useEffect(() => {
    loadsubCategories();
  }, []);

  const searchData = () => {
    //  console.log(search, subCategory);
    if (search) {
      searchProductsLists({
        search: search || undefined,
        subCategory: subCategory,
      }).then((response) => {
        if (response.error) {
          console.log(response.error);
        } else {
          setData({ ...data, results: response, searched: true });
        }
      });
    }
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    searchData();
  };
  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value, searched: false });
  };
  const searchMessege = (searched, results) => {
    if (searched && results.length > 0) {
      // return `Found ${results.length} Products`;
      return (
        <div className="py-4 text-center">
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/msoeawqm.json"
              trigger="loop"
              colors="primary:#405189,secondary:#0ab39c"
              style={{ width: "72px", height: "72px" }}
            ></lord-icon>
          </div>

          <div className="mt-4">We Found {results.length} Results For You</div>
        </div>
      );
    }
    if (searched && results.length < 1) {
      return (
        <div className="py-4 text-center">
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/msoeawqm.json"
              trigger="loop"
              colors="primary:#405189,secondary:#0ab39c"
              style={{ width: "72px", height: "72px" }}
            ></lord-icon>
          </div>

          <div className="mt-4">
            <h5>Sorry! No Result Found</h5>
          </div>
        </div>
      );
    }
  };
  const searchedProducts = (results = []) => {
    return (
      <div>
        <h2 className="mt-4 mb-4">{searchMessege(searched, results)}</h2>
        <div className="row">
          <div className="row product-grid-4">
            {bestProducts(searched, results)}
            {results.map((product, i) => (
              <div key={i} className="col-lg-4 col-md-4 col-12 col-sm-6">
                <Card product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  const bestProducts = (searched, results) => {
    return !searched && !results.length ? <Shop /> : "";
  };
  const searchForm = () => (
    <form onSubmit={searchSubmit}>
      <span className="input-group-text mt-3">
        <div className="input-group input-group-lg">
          <div className="input-group-prepend  ">
            <select
              className=" btn  "
              style={{ marginRight: "10px" }}
              onChange={handleChange("subCategory")}
            >
              <option className=" bg-dark " value="All">
                Pic Category
              </option>
              {subCategories &&
                subCategories.map((c, i) => (
                  <option className=" bg-dark " key={i} value={c._id}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>
          <input
            type="search"
            className="form-control pl-3"
            onChange={handleChange("search")}
            placeholder="Search by name"
          />
        </div>
        <div className="btn input-group-append" border={{ border: "none" }}>
          <button className=" input-group-text ">Search </button>
        </div>
      </span>
    </form>
  );

  return (
    <Layout title="" discription="" className="">
      <div className="mt-40  ">
        <div className="container  ">{searchForm()}</div>
        <div className="container ">{searchedProducts(results)}</div>
      </div>
      {/* <div className="row">
        <div className="container  ml-5">{searchForm()}</div>
        <div className="container mb-3">{searchedProducts(results)}</div>
      </div> */}
    </Layout>
  );
};

export default Search;
