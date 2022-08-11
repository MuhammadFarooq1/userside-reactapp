import { API } from "../../config";
import querystring from "query-string";
export const getAllProducts = async () => {
  try {
    const response = await fetch(`${API}/getallproducts`, {
      method: "GET",
    });
    return await response.json();
  } catch (error) {
    return console.log(error);
  }
};

export const getProductsBySellByArrival = (sortBy) => {
  return fetch(
    `${API}/productbyarrivalBysell?sortBy=${sortBy}&order=desc&limit=6`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

//getproducts by arrival limit 20
export const getProductsByArrival = (sortBy) => {
  return fetch(
    `${API}/productbyarrivalBysell?sortBy=${sortBy}&order=desc&limit=20`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};
export const getPopularCategories = (sortBy) => {
  return fetch(
    `${API}/popularcategories?sortBy=${sortBy}&order=desc&limit=10`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

// get popular sub categories to filter products
export const getpopularsubcategories = (sortBy) => {
  return fetch(
    `${API}/popularsubcategories?sortBy=${sortBy}&order=desc&limit=10`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

// get filterred product based on price and category
export const getFilteredProducts = (skip, limit, filters = {}) => {
  const data = {
    skip,
    limit,
    filters,
  };
  return fetch(`${API}/products/by/Filterr/search`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

// getting list of products by serach in search baar

export const searchProductsLists = (params) => {
  const query = querystring.stringify(params);
  console.log("query", query);
  return fetch(`${API}/products/by/search?${query}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};
