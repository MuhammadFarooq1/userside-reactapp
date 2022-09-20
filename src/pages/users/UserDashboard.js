import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated, userPurchaseHistory } from "../../api's/auth";
import Layout from "../../Layouts/ParentLayout";
import moment from "moment";
const UserDashboard = () => {
  const [userHistory, setHistory] = useState([]);
  const {
    user: { _id, username, email, role },
  } = isAuthenticated();
  const { token } = isAuthenticated();

  const init = (userId, token) => {
    userPurchaseHistory(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
        //  setValues({ ...values, error: true });
      } else {
        setHistory(data);
      }
    });
  };
  useEffect(() => {
    init(_id, token);
  }, []);

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
            <Link className="nav-link" to={`/user/profile/${_id}`}>
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
            Role : {role === 0 ? "Admin" : "Registered User"}
          </li>
        </ul>
      </div>
    );
  };

  // const PurchaseHistory = (userHistory) => {
  //   return (
  //     <div className="card mb-5">
  //       <h3 className="card-header">Purchase History</h3>
  //       <ul className="list-group">
  //         <li className="list-group-item"> {JSON.stringify(userHistory)}</li>
  //       </ul>
  //     </div>
  //   );
  // };
  const PurchaseHistory = (userHistory) => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Purchase history</h3>
        <ul className="list-group">
          <li className="list-group-item">
            {userHistory &&
              userHistory.map((h, i) => {
                return (
                  <div key={i}>
                    <hr />
                    {h.products.map((p, i) => {
                      return (
                        <div key={i}>
                          <h6>Product name: {p.name}</h6>
                          <h6>Product price: ${p.price}</h6>
                          <h6>
                            Purchased date: {moment(p.createdAt).fromNow()}
                          </h6>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </li>
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
            {PurchaseHistory(userHistory)}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
