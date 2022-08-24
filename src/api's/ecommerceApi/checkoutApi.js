import { API } from "../../config";
import querystring from "query-string";

// product by id
export const creatSession = () => {
  return fetch(`${API}/create-payment-intent`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const creatCheckout = (token, total) => {
  const body = {
    token,
    total,
  };
  return fetch(`${API}/payment`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      console.log("Responce", response);
      console.log("status", response.status);
      return response.json();
    })
    .catch((error) => console.log(error));
};
