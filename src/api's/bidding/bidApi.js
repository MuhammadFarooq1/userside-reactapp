import { API } from "../../config";
export const creatBidProduct = (userId, token, creatBidData) => {
  // console.log("no bid in api ", creatBidData);
  return fetch(`${API}/bid/product/creat/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ productBid: creatBidData }),
    // body: JSON.stringify({ productBid: creatBidData }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const fetchUserBiddingProduct = async (productId, userId, token) => {
  try {
    const response = await fetch(
      `${API}/bid/product-bids/read/${productId}/${userId}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );
    return await response.json();
  } catch (error) {
    return error;
  }
};
//category update api
export const UpdateUserBidd = async (
  userId,
  bidProductId,
  token,
  updatedBidData
) => {
  try {
    const response = await fetch(
      `${API}/bid/user-bid/update/${bidProductId}/${userId}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedBidData),
        // body: updatedBidData,
      }
    );
    return await response.json();
  } catch (error) {
    return error;
  }
};
export const fetchUserPassedBiddingProducts = async (userId, token) => {
  try {
    const response = await fetch(
      `${API}/bid/product-bids/passed-by-seller/${userId}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );
    return await response.json();
  } catch (error) {
    return error;
  }
};
