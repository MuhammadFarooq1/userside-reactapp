export function AddItemwishList(item, next) {
  let mywishList = [];

  if (typeof window !== "undefined") {
    if (localStorage.getItem("wishList")) {
      mywishList = JSON.parse(localStorage.getItem("wishList"));
    }
    mywishList.push({
      ...item,
      count: 1,
    });

    mywishList = Array.from(new Set(mywishList.map((p) => p._id))).map((id) => {
      return mywishList.find((p) => p._id === id);
    });
    localStorage.setItem("wishList", JSON.stringify(mywishList));
    next();
  }
}

// count the total item in the mywishList
export const countTotalAddItemInWishList = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("wishList")) {
      return JSON.parse(localStorage.getItem("wishList")).length;
    }
  }
  return 0;
};

export const getTotalItemInwishList = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("wishList")) {
      return JSON.parse(localStorage.getItem("wishList"));
    }
  }
  return [];
};

export const updateItemwishList = (productId, count) => {
  let mywishList = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("wishList")) {
      mywishList = JSON.parse(localStorage.getItem("wishList"));
    }
    mywishList.map((product, i) => {
      if (product._id === productId) {
        mywishList[i].count = count;
      }
    });
    localStorage.setItem("wishList", JSON.stringify(mywishList));
  }
};

export const removeItemwishList = (productId) => {
  let mywishList = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("wishList")) {
      mywishList = JSON.parse(localStorage.getItem("wishList"));
    }
    mywishList.map((product, i) => {
      if (product._id === productId) {
        mywishList.splice(i, 1);
      }
    });
    localStorage.setItem("wishList", JSON.stringify(mywishList));
  }
  return mywishList;
};
