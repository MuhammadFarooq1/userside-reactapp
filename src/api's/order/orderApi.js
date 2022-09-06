import { API } from "../../config";
export const creatOrder = (userId, token, creatOrderData) => {
  return fetch(`${API}/order/creat/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ order: creatOrderData }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};
