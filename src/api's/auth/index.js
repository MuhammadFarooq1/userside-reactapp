import { API } from "../../config";

export const apiSignup = (user) => {
  // console.log(name, email, password);
  return fetch(`${API}/auth/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const apiSignin = (user) => {
  // console.log(name, email, password);
  return fetch(`${API}/auth/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const authenticateToken = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("authToken", JSON.stringify(data));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem("authToken")) {
    return JSON.parse(localStorage.getItem("authToken"));
  } else {
    return false;
  }
};

export const logout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("authToken");
    next();
    return fetch(`${API}/logout`, {
      method: "GET",
    })
      .then((response) => {
        console.log("signout", response);
      })
      .catch((error) => console.log("error", error));
  }
};

export const readProfile = async (userId, token) => {
  try {
    const response = await fetch(`${API}/user/readProfile/${userId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {
    return console.log(error);
  }
};

export const updateUserProfile = (userId, token, user) => {
  return fetch(`${API}/user/profile/update/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const updateUserInLocalStorage = (user, next) => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("authToken")) {
      let auth = JSON.parse(localStorage.getItem("authToken"));
      auth.user = user;
      localStorage.setItem("authToken", JSON.stringify(auth));
      next();
    }
  }
};

export const userPurchaseHistory = async (userId, token) => {
  try {
    const response = await fetch(`${API}/user/puchase-history/${userId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {
    return console.log(error);
  }
};
