import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../api's/auth";
import Layout from "../../Layouts/ParentLayout";

const UserDashboard = () => {
  const {
    user: { username, email, role },
  } = isAuthenticated();

  const userLinks = () => {
    return (
      <div className="ml-5 card mt-5 mb-5">
        <h4 className="card-header">User Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/cart">
              My Cart
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="profile/update">
              Update Profile
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  const userHello = () => {
    return (
      <div className="card-header  ml-10 card mt-5 mb-5">
        <h3 className="mt-1 ml-10">Dash Board</h3>
        <h4 className=" mt-1 ml-160  ">{`G'Day ${username}!`}</h4>
      </div>
    );
  };
  const userInfo = () => {
    return (
      <div className=" card mb-5 mt-5">
        <h3 className="card-header"> User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">Name : {username}</li>
          <li className="list-group-item">Email : {email}</li>
          <li className="list-group-item">
            Role : {role === 1 ? "Admin" : "Registered User"}
          </li>
        </ul>
      </div>
    );
  };

  const userPurchaseHistory = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Purchase History</h3>
        <ul className="list-group">
          <li className="list-group-item">History</li>
        </ul>
      </div>
    );
  };

  return (
    <Layout title="" discription="" className="">
      <div className="container-fluid mt-5">
        <div className="row">
          {userHello()}
          <div className="col-3">{userLinks()}</div>

          <div className="col-9">
            {userInfo()}
            {userPurchaseHistory()}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
