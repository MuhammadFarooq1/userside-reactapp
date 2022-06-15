import React, { useState, useEffect } from "react";
import Layout from "../../Layouts/ParentLayout";
import ImgAvataar_1 from "../../assets/imgs/page/avatar-1.jpg";
import ImgAvataar_2 from "../../assets/imgs/page/avatar-2.jpg";
import ImgAvataar_3 from "../../assets/imgs/page/avatar-3.jpg";
import ImgAvataar_4 from "../../assets/imgs/page/avatar-4.jpg";
import ImgAbout_1 from "../../assets/imgs/page/about-1.png";
const AboutUs = () => {
  return (
    <Layout title="" discription="" className="">
      <main className="main single-page">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <a href="index.html" rel="nofollow">
                Home
              </a>
              <span></span> Pages
              <span></span> About us
            </div>
          </div>
        </div>
        <section className="section-padding">
          <div className="container pt-25">
            <div className="row">
              <div className="col-lg-6 align-self-center mb-lg-0 mb-4">
                <h6 className="mt-0 mb-15 text-uppercase font-sm text-brand wow fadeIn animated">
                  Our Company
                </h6>
                <h1 className="font-heading mb-40">
                  We are Building The Destination For Getting Things Done
                </h1>
                <p>
                  Tempus ultricies augue luctus et ut suscipit. Morbi arcu,
                  ultrices purus dolor erat bibendum sapien metus.
                </p>
                <p>
                  Tempus ultricies augue luctus et ut suscipit. Morbi arcu,
                  ultrices purus dolor erat bibendum sapien metus. Sit mi,
                  pharetra, morbi arcu id. Pellentesque dapibus nibh augue
                  senectus.{" "}
                </p>
              </div>
              <div className="col-lg-6">
                <img src={ImgAbout_1} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section id="team" className="pt-25 wow fadeIn animated">
          <div className="container">
            <div className="row mb-50 align-items-center">
              <div className="col-md-6">
                <h6 className="mt-0 mb-15 text-uppercase font-sm text-brand wow fadeIn animated">
                  Our Team
                </h6>
                <h2 className="mb-15 wow fadeIn animated">
                  Top team of experts
                </h2>
                <p className="text-grey-3 wow fadeIn animated">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione optio perferendis sequi mollitia quis autem ea
                  cupiditate possimus!
                </p>
              </div>
              <div className="col-md-6 text-md-end mt-30">
                <a className="btn btn-outline btn-lg btn-brand-outline font-weight-bold text-brand text-hover-white border-radius-5 btn-shadow-brand hover-up">
                  All Members
                </a>
              </div>
            </div>
            <div className="position-relative">
              <div className="row wow fadeIn animated">
                <div className="col-lg-3 col-md-6">
                  <div className="blog-card border-radius-10 overflow-hidden text-center">
                    <img
                      src={ImgAvataar_1}
                      alt=""
                      className="border-radius-10 mb-30 hover-up"
                    />
                    <h4 className="fw-500 mb-0">Patric Adams</h4>
                    <p className="fw-400 text-brand mb-10">CEO & Co-Founder</p>
                    <div className="mobile-social-icon wow fadeIn animated mb-sm-5 mb-md-0 animated">
                      <a href="#">
                        <img
                          src="assets/imgs/theme/icons/icon-facebook.svg"
                          alt=""
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/imgs/theme/icons/icon-twitter.svg"
                          alt=""
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/imgs/theme/icons/icon-instagram.svg"
                          alt=""
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/imgs/theme/icons/icon-pinterest.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!--col--> */}
                <div className="col-lg-3 col-md-6">
                  <div className="blog-card border-radius-10 overflow-hidden text-center">
                    <img
                      src={ImgAvataar_2}
                      alt=""
                      className="border-radius-10 mb-30 hover-up"
                    />
                    <h4 className="fw-500 mb-0">Dilan Specter</h4>
                    <p className="fw-400 text-brand mb-10">Head Engineer</p>
                    <div className="mobile-social-icon wow fadeIn animated mb-sm-5 mb-md-0 animated">
                      <a href="#">
                        <img
                          src="assets/imgs/theme/icons/icon-facebook.svg"
                          alt=""
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/imgs/theme/icons/icon-twitter.svg"
                          alt=""
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/imgs/theme/icons/icon-instagram.svg"
                          alt=""
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/imgs/theme/icons/icon-pinterest.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!--col--> */}
                <div className="col-lg-3 col-md-6">
                  <div className="blog-card border-radius-10 overflow-hidden text-center">
                    <img
                      src={ImgAvataar_3}
                      alt=""
                      className="border-radius-10 mb-30 hover-up"
                    />
                    <h4 className="fw-500 mb-0">Tomas Baker</h4>
                    <p className="fw-400 text-brand mb-10">Senior Planner</p>
                    <div className="mobile-social-icon wow fadeIn animated mb-sm-5 mb-md-0 animated">
                      <a href="#">
                        <img
                          src="assets/imgs/theme/icons/icon-facebook.svg"
                          alt=""
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/imgs/theme/icons/icon-twitter.svg"
                          alt=""
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/imgs/theme/icons/icon-instagram.svg"
                          alt=""
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/imgs/theme/icons/icon-pinterest.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!--col--> */}
                <div className="col-lg-3 col-md-6">
                  <div className="blog-card border-radius-10 overflow-hidden text-center">
                    <img
                      src={ImgAvataar_4}
                      alt=""
                      className="border-radius-10 mb-30 hover-up"
                    />
                    <h4 className="fw-500 mb-0">Norton Mendos</h4>
                    <p className="fw-400 text-brand mb-10">Project Manager</p>
                    <div className="mobile-social-icon wow fadeIn animated mb-sm-5 mb-md-0 animated" />
                    <a href="#">
                      <img
                        src="assets/imgs/theme/icons/icon-facebook.svg"
                        alt=""
                      />
                    </a>
                    <a href="#">
                      <img
                        src="assets/imgs/theme/icons/icon-twitter.svg"
                        alt=""
                      />
                    </a>
                    <a href="#">
                      <img
                        src="assets/imgs/theme/icons/icon-instagram.svg"
                        alt=""
                      />
                    </a>
                    <a href="#">
                      <img
                        src="assets/imgs/theme/icons/icon-pinterest.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* <!--col--> */}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section-padding">
          <div className="container pt-25">
            <div className="row mb-50">
              <div className="col-lg-12 col-md-12 text-center">
                <h6 className="mt-0 mb-10 text-uppercase  text-brand font-sm wow fadeIn animated">
                  some facts
                </h6>
                <h2 className="mb-15 text-grey-1 wow fadeIn animated">
                  Take a look what
                  <br /> our clients say about us
                </h2>
                <p className="w-50 m-auto text-grey-3 wow fadeIn animated">
                  At vero eos et accusamus et iusto odio dignissimos ducimus
                  quiblanditiis praesentium. ebitis nesciunt voluptatum dicta
                  reprehenderit accusamus
                </p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-4">
                <div className="hero-card box-shadow-outer-6 wow fadeIn animated mb-30 hover-up d-flex">
                  <div className="hero-card-icon icon-left-2 hover-up ">
                    <img
                      className="btn-shadow-brand hover-up border-radius-5 bg-brand-muted"
                      src="assets/imgs/page/avatar-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="pl-30">
                    <h5 className="mb-5 fw-500">J. Bezos</h5>
                    <p className="font-sm text-grey-5">Adobe Jsc</p>
                    <p className="text-grey-3">
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Debitis nesciunt voluptatum dicta reprehenderit accusamus
                      voluptatibus voluptas."
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="hero-card box-shadow-outer-6 wow fadeIn animated mb-30 hover-up d-flex">
                  <div className="hero-card-icon icon-left-2 hover-up ">
                    <img
                      className="btn-shadow-brand hover-up border-radius-5 bg-brand-muted"
                      src="assets/imgs/page/avatar-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="pl-30">
                    <h5 className="mb-5 fw-500">B.Gates</h5>
                    <p className="font-sm text-grey-5">Adobe Jsc</p>
                    <p className="text-grey-3">
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Debitis nesciunt voluptatum dicta reprehenderit accusamus
                      voluptatibus voluptas."
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="hero-card box-shadow-outer-6 wow fadeIn animated mb-30 hover-up d-flex">
                  <div className="hero-card-icon icon-left-2 hover-up ">
                    <img
                      className="btn-shadow-brand hover-up border-radius-5 bg-brand-muted"
                      src="assets/imgs/page/avatar-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="pl-30">
                    <h5 className="mb-5 fw-500">B. Meyers</h5>
                    <p className="font-sm text-grey-5">Adobe Jsc</p>
                    <p className="text-grey-3">
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Debitis nesciunt voluptatum dicta reprehenderit accusamus
                      voluptatibus voluptas."
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="hero-card box-shadow-outer-6 wow fadeIn animated mb-30 hover-up d-flex">
                  <div className="hero-card-icon icon-left-2 hover-up ">
                    <img
                      className="btn-shadow-brand hover-up border-radius-5 bg-brand-muted"
                      src="assets/imgs/page/avatar-4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="pl-30">
                    <h5 className="mb-5 fw-500">J. Bezos</h5>
                    <p className="font-sm text-grey-5">Adobe Jsc</p>
                    <p className="text-grey-3">
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Debitis nesciunt voluptatum dicta reprehenderit accusamus
                      voluptatibus voluptas."
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="hero-card box-shadow-outer-6 wow fadeIn animated mb-30 hover-up d-flex">
                  <div className="hero-card-icon icon-left-2 hover-up ">
                    <img
                      className="btn-shadow-brand hover-up border-radius-5 bg-brand-muted"
                      src="assets/imgs/page/avatar-5.jpg"
                      alt=""
                    />
                  </div>
                  <div className="pl-30">
                    <h5 className="mb-5 fw-500">B.Gates</h5>
                    <p className="font-sm text-grey-5">Adobe Jsc</p>
                    <p className="text-grey-3">
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Debitis nesciunt voluptatum dicta reprehenderit accusamus
                      voluptatibus voluptas."
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="hero-card box-shadow-outer-6 wow fadeIn animated mb-30 hover-up d-flex">
                  <div className="hero-card-icon icon-left-2 hover-up ">
                    <img
                      className="btn-shadow-brand hover-up border-radius-5 bg-brand-muted"
                      src="assets/imgs/page/avatar-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="pl-30">
                    <h5 className="mb-5 fw-500">B. Meyers</h5>
                    <p className="font-sm text-grey-5">Adobe Jsc</p>
                    <p className="text-grey-3">
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Debitis nesciunt voluptatum dicta reprehenderit accusamus
                      voluptatibus voluptas."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-30">
              <div className="col-12 text-center">
                <p className="wow fadeIn animated">
                  <a className="btn btn-brand text-white btn-shadow-brand hover-up btn-lg">
                    View More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding">
          <div className="container pb-25">
            <h3 className="section-title mb-20 wow fadeIn animated text-center">
              <span>Featured</span> Clients
            </h3>
            <div className="carausel-6-columns-cover position-relative wow fadeIn animated">
              <div
                className="carausel-6-columns text-center"
                id="carausel-6-columns-3"
              >
                <div className="brand-logo">
                  <img
                    className="img-grey-hover"
                    src="assets/imgs/banner/brand-1.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <img
                    className="img-grey-hover"
                    src="assets/imgs/banner/brand-2.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <img
                    className="img-grey-hover"
                    src="assets/imgs/banner/brand-3.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <img
                    className="img-grey-hover"
                    src="assets/imgs/banner/brand-4.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <img
                    className="img-grey-hover"
                    src="assets/imgs/banner/brand-5.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <img
                    className="img-grey-hover"
                    src="assets/imgs/banner/brand-6.png"
                    alt=""
                  />
                </div>
                <div className="brand-logo">
                  <img
                    className="img-grey-hover"
                    src="assets/imgs/banner/brand-3.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default AboutUs;
