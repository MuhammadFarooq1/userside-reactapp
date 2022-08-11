import React, { useState, useEffect } from "react";
import {
  getpopularsubcategories,
  searchProductsLists,
} from "../../api's/ecommerceApi/productApi.js";
import ShowImage from "./ShowProductImage.js";

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
      return `Found ${results.length} Products`;
    }
    if (searched && results.length < 1) {
      return `No Products Found`;
    }
  };
  const searchedProducts = (results = []) => {
    return (
      <div>
        <h2 className="mt-4 mb-4">{searchMessege(searched, results)}</h2>
        <div className="row">
          <ShowImage item={results} url="product" />
        </div>
      </div>
    );
  };

  const searchForm = () => (
    <form onSubmit={searchSubmit}>
      <span className="input-group-text mt-3">
        <div className="input-group input-group-lg">
          <div className="input-group-prepend  ">
            <select
              className="btn "
              style={{ marginRight: "10px" }}
              onChange={handleChange("subCategory")}
            >
              <option value="All">Pic Category</option>
              {subCategories &&
                subCategories.map((c, i) => (
                  <option key={i} value={c._id}>
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
    <div className="row">
      <div className="container mb-3">{searchForm()}</div>
      <div className="container mb-3">{searchedProducts(results)}</div>
    </div>
  );
};

export default Search;
