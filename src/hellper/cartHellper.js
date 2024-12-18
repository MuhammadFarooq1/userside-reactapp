// export function AddItemCart(item, next) {
//   let cart = [];

//   if (typeof window !== "undefined") {
//     if (localStorage.getItem("cart")) {
//       cart = JSON.parse(localStorage.getItem("cart"));
//     }
//     cart.push({
//       _id: item._id,
//       image: item.image,
//       name: item.name,
//       userID: item.userID._id,
//       discription: item.discription,
//       price: item.price,
//       quantity: item.quantity,
//       subCategory: item.subCategory._id,
//       count: 1,
//     });

//     cart = Array.from(new Set(cart.map((p) => p._id))).map((id) => {
//       return cart.find((p) => p._id === id);
//     });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     next();
//   }
// }
export function AddItemCart(item, next) {
  let cart = [];

  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.push({
      ...item,
      count: 1,
    });

    cart = Array.from(new Set(cart.map((p) => p._id))).map((id) => {
      return cart.find((p) => p._id === id);
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
}
// add bid item to cart
// count the total item in the cart
export const countTotalAddItemInCart = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart")).length;
    }
  }
  return 0;
};

export const getTotalItemInCart = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart"));
    }
  }
  return [];
};

export const updateItem = (productId, count) => {
  let cart = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.map((product, i) => {
      if (product._id === productId) {
        cart[i].count = count;
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const removeItem = (productId) => {
  let cart = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.map((product, i) => {
      if (product._id === productId) {
        cart.splice(i, 1);
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  return cart;
};

export const emptyCart = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("cart");
    next();
  }
};
