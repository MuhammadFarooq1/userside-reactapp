import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { apiSignup } from "../api's/auth";
import Layout from "../Layouts/ParentLayout";

const SignUp = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { username, email, password, success, error } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    apiSignup({ username, email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          username: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };
  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );
  const showSuccess = () => (
    <div
      className="alert alert-success"
      style={{ display: success ? "" : "none" }}
    >
      New Account. is created please <Link to={"/signin"}>Signin </Link>
    </div>
  );
  const SignUpForm = () => (
    <Fragment>
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <a href="index.html" rel="nofollow">
              Home
            </a>
            <span></span> Pages
            <span></span> Register
          </div>
        </div>
      </div>
      <section className="pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-6">
                  <div className="login_wrap widget-taber-content p-30 background-white border-radius-5">
                    <div className="padding_eight_all bg-white">
                      <div className="heading_s1">
                        <h3 className="mb-30">Create an Account</h3>
                        {showError()}
                        {showSuccess()}
                      </div>
                      <p className="mb-50 font-sm">
                        Your personal data will be used to support your
                        experience throughout this website, to manage access to
                        your account, and for other purposes described in our
                        privacy policy
                      </p>
                      <form>
                        <div className="form-group">
                          <input
                            type="text"
                            onChange={handleChange("username")}
                            required=""
                            placeholder="Username"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={handleChange("email")}
                            type="text"
                            required=""
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            required=""
                            onChange={handleChange("password")}
                            type="password"
                            username="password"
                            placeholder="Password"
                          />
                        </div>
                        {/* <div className="form-group">
                          <input
                            required=""
                            type="password"
                            onChange={handleChange("confirmPassword")}
                            placeholder="Confirm password"
                          />
                        </div> */}
                        <div className="login_footer form-group">
                          <div className="chek-form">
                            <div className="custome-checkbox">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                username="checkbox"
                                id="exampleCheckbox12"
                                value=""
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheckbox12"
                              >
                                <span>I agree to terms &amp; Policy.</span>
                              </label>
                            </div>
                          </div>
                          <a href="page-privacy-policy.html">
                            <i className="fi-rs-book-alt mr-5 text-muted"></i>
                            Lean more
                          </a>
                        </div>
                        <div className="form-group">
                          <button
                            onClick={clickSubmit}
                            type="submit"
                            className="btn btn-fill-out btn-block hover-up"
                          >
                            Submit &amp; Register
                          </button>
                        </div>
                      </form>
                      <div className="divider-text-center mt-15 mb-15">
                        <span> or</span>
                      </div>
                      <ul className="btn-login list_none text-center mb-15">
                        <li>
                          <a
                            href="#"
                            className="btn btn-facebook hover-up mb-lg-0 mb-sm-4"
                          >
                            Login With Facebook
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn btn-google hover-up">
                            Login With Google
                          </a>
                        </li>
                      </ul>
                      <div className="text-muted text-center">
                        Already have an account? <a href="#">Sign in now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
  return (
    <Layout title="" discription="" className="">
      {SignUpForm()}
      {/* {JSON.stringify(values)} */}
    </Layout>
  );
};

export default SignUp;
