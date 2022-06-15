import React, { useState, useEffect } from "react";
import Layout from "../../Layouts/ParentLayout";
import Img404 from "../../assets/imgs/theme/404.png";
const FourOfour = () => {
  return (
    <Layout title="" discription="" className="">
      <main className="main page-404">
        <div className="container">
          <div className="row align-items-center height-100vh text-center">
            <div className="col-lg-8 m-auto">
              <p className="mb-50">
                <img src={Img404} alt="" className="hover-up" />
              </p>
              <h2 className="mb-30">Page Not Found</h2>
              <p className="font-lg text-grey-700 mb-30">
                The link you clicked may be broken or the page may have been
                removed.
                <br /> visit the{" "}
                <a href="index.html">
                  {" "}
                  <span> Homepage</span>
                </a>{" "}
                or{" "}
                <a href="page-contact.html">
                  <span>Contact us</span>
                </a>{" "}
                about the problem
              </p>
              <form
                className="contact-form-style text-center"
                id="contact-form"
                action="#"
                method="post"
              >
                <div className="row">
                  <div className="col-lg-6 m-auto">
                    <div className="input-style mb-20 hover-up">
                      <input name="name" placeholder="Search" type="text" />
                    </div>
                  </div>
                </div>
                <a
                  className="btn btn-default submit-auto-width font-xs hover-up"
                  href="index.html"
                >
                  Back To Home Page
                </a>
              </form>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- Preloader Start --> */}
      {/* <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="text-center">
              <h5 className="mb-5">Now Loading</h5>
              <div className="loader">
                <div className="bar bar1"></div>
                <div className="bar bar2"></div>
                <div className="bar bar3"></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
};

export default FourOfour;
