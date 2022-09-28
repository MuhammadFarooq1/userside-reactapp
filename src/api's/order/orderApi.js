import { API } from "../../config";
// export const creatOrder = async (userId, token, creatOrderData) => {
//   console.log("Create Order", creatOrderData);
//   try {
//     const response = await fetch(`${API}/order/creat/${userId}`, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ order: creatOrderData }),
//     });
//     return await response.json();
//   } catch (error) {
//     return console.log(error);
//   }
// };

// export const creatOrder = async (userId, token, creatOrderData) => {
//   try {
//     const response = await fetch(
//       `http://localhost:8000/likenAdmin/order/create/${userId}`,
//       {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           authorization: `Bearer ${token}`,
//         },
//         body: userId,
//       }
//     );
//     return await response.json();
//   } catch (error) {
//     return error;
//   }
// };
