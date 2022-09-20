import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  isAuthenticated,
  readProfile,
  updateUserProfile,
  updateUserInLocalStorage,
} from "../../api's/auth";
import Layout from "../../Layouts/ParentLayout";

import { useParams, Redirect } from "react-router-dom";
import { data, event } from "jquery";
const UserProfile = () => {
  // for cat param id in rout
  const param = useParams();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    error: false,
    success: false,
  });
  const { token } = isAuthenticated();

  const { username, email, password, error, success } = values;
  const init = (userId) => {
    readProfile(userId, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: true });
      } else {
        setValues({ ...values, username: data.username, email: data.email });
      }
    });
  };

  useEffect(() => {
    init(param.userId);
  }, []);

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };
  const clickSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(param.userId, token, { username, email, password }).then(
      (data) => {
        if (data.error) {
          setValues({ ...values, error: true });
        } else {
          updateUserInLocalStorage(data, () => {
            setValues({
              ...values,
              username: data.username,
              email: data.email,
              success: true,
            });
          });
        }
      }
    );
  };
  const showError = () => (
    <h2 className="alert alert-danger" style={{ display: error ? "" : "none" }}>
      {error}
    </h2>
  );
  const redirectUser = (success) => {
    if (success) {
      return <Navigate to="/user/dashboard" />;
    }
  };
  const profileUpdate = (username, email, password) => (
    <form className=" container mb-10  ">
      <div className="form-group">
        <label className="text-muted">User Name</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange("username")}
          value={username}
        ></input>
      </div>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange("email")}
          value={email}
        ></input>
      </div>{" "}
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange("password")}
          value={password}
        ></input>
      </div>
      <button onClick={clickSubmit} className=" btn btn-primary  ">
        Submit{" "}
      </button>
    </form>
  );

  return (
    <Layout title="" discription="" className="">
      <h2 className="mb-4 mt-25  ml-10">Profile Update</h2>
      {/* {showError} */}
      {profileUpdate(username, email, password)}
      {redirectUser(success)}
    </Layout>
  );
};
export default UserProfile;
