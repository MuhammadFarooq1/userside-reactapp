import { API } from "../../config";
import querystring from "query-string";

// create review

export const createProductReview = async (productID, userID, token, review) => {
  try {
    const response = await fetch(
      `${API}/reviews/create/${productID}/user/${userID}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          authorization: `Bearer ${token}`,
        },
        body: review,
      }
    );
    return await response.json();
  } catch (error) {
    return error;
  }
};
// product by id
export const readProductDetail = (productId) => {
  return fetch(`${API}/product/${productId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};
export const listOfProductsInCategory = (categoryId) => {
  return fetch(`${API}/Products-incategory/${categoryId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const creatComplaints = async (userId, token, creatComplaintsData) => {
  try {
    const response = await fetch(
      `http://localhost:8000/likenAdmin/complain/create/${userId}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        // body: creatComplaintsData,
        body: JSON.stringify(creatComplaintsData),
      }
    );
    return await response.json();
  } catch (error) {
    return error;
  }
};
export const listOfProductsInUserID = (userId) => {
  return fetch(`${API}/product/userProducts/${userId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};
export const bestProductbySold = () => {
  return fetch(`${API}/home/best-product/sold`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};
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
export const getBiddONProducts = async () => {
  try {
    const response = await fetch(`${API}/product/bidd/on`, {
      method: "GET",
    });
    return await response.json();
  } catch (error) {
    return console.log(error);
  }
};

export const getProductshome = async () => {
  try {
    const response = await fetch(`${API}/home/productlists`, {
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
    `${API}/popular-subcategories?sortBy=${sortBy}&order=desc&limit=10`,
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
  // console.log("query", query);
  return fetch(`${API}/products/by/search?${query}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

// list of the related products
export const listOfRelatedProduct = (productId) => {
  return fetch(`${API}/relatedProducts/${productId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};
