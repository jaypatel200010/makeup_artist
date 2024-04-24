import React from "react";
import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";

function Makeup_artist() {
  return (
    <>
      <div>
        <Header2 title={"Artist"} />
        <div>
          {/*/w3l-services-1*/}
          <div className="w3l-services-1 py-5" id="grids-3">
            <div className="container py-md-5 py-2">
              {/*/row-1*/}
              <div className="row mb-5 pb-lg-4">
                <div className="services-1-right col-lg-6 mt-lg-0 mt-md-5 mt-4 pe-lg-5">
                  <div className="title-content-two text-left">
                    <h6 className="title-subw3hny mb-1">Services Info</h6>
                    <h3 className="title-w3l mb-3">
                      Explore our spa and body treatment
                    </h3>
                  </div>
                  <p className>
                    Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                    ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor
                    sit amet elit ipsum dolor.Lorem ipsum viverra feugiat.
                    Pellen tesque libero ut justo, ultrices in ligula. Semper at
                    tempufddfel tesque libero ut justo.
                  </p>
                  <a
                    href="#services"
                    className="btn btn-style btn-primary mt-lg-5 mt-4"
                  >
                    Read More{" "}
                  </a>
                </div>
                <div className="col-lg-6 p5-lg-4 services-1-left">
                  <img
                    src="assets/images/banner4.jpg"
                    alt
                    className="img-fluid radius-image"
                  />
                </div>
              </div>
              {/*//row-1*/}
            </div>
          </div>
          {/*//w3l-services-1*/}
          <section className="w3l-services-2" id="services1">
            <div className="midd-w3 py-5">
              <div className="container py-lg-5 py-md-3">
                <div className="serve-title-header text-center mx-auto">
                  <h6 className="title-subw3hny mb-1">What We Do</h6>
                  <h3 className="title-w3l mb-3">
                    Innovative Services &amp; Technology
                  </h3>
                  <p className="abinfo-para">
                    Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                    ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor
                    sit amet elit.
                  </p>
                </div>
                <div className="grids-of-5 row mt-5 text-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="grids5-info">
                      <a href="#service" className="d-block zoom">
                        <img
                          src="assets/images/b6.jpg"
                          alt
                          className="img-fluid radius-image"
                        />
                      </a>
                      <div className="blog-info">
                        <h4>
                          <a href="#service">Gel Overlay</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mt-md-0 mt-sm-5 mt-4">
                    <div className="grids5-info">
                      <a href="#service" className="d-block zoom">
                        <img
                          src="assets/images/b4.jpg"
                          alt
                          className="img-fluid radius-image"
                        />
                      </a>
                      <div className="blog-info">
                        <h4>
                          <a href="#service">Manicure</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mt-lg-0 mt-sm-5 mt-4">
                    <div className="grids5-info">
                      <a href="#service" className="d-block zoom">
                        <img
                          src="assets/images/b3.jpg"
                          alt
                          className="img-fluid radius-image"
                        />
                      </a>
                      <div className="blog-info">
                        <h4>
                          <a href="#service">Pedicure</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /w3l-skills*/}
          {/*/pricing-section*/}
          <section className="pricing-section py-5" id="pricing">
            <div className="container pricing-style-w3ls py-lg-5 py-md-4">
              <div className="title-content text-center">
                <h6 className="title-subw3hny mb-1">Service Plans</h6>
                <h3 className="title-w3l mb-5">Special Pricing</h3>
              </div>
              <div className="row pricing-chart mt-4">
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
                  <div className="plan popular active">
                    <h3 className="pop-plan">Silver Pack</h3>
                    <div className="price mb-4">
                      <span className="dollar">$</span>
                      <span className="amount" data-dollar-amount={49}>
                        49
                      </span>
                      <p className="perm">Per Month</p>
                    </div>
                    <ul className="pricinghny-inf">
                      <ul className="pricinghny-inf">
                        <li>Full Body Massage</li>
                        <li>Hair Styling</li>
                        <li className="disable">Pedicure </li>
                        <li className="disable">Waxing</li>
                        <li className="disable">Facial</li>
                        <li>24/7 Support</li>
                      </ul>
                    </ul>
                    <a
                      className="btn btn-primary btn-style mt-lg-5 mt-4"
                      href="#url"
                    >
                      Choose Plan{" "}
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
                  <div className="plan popular active">
                    <h3 className="pop-plan">Gold Pack</h3>
                    <div className="price mb-4">
                      <span className="dollar">$</span>
                      <span className="amount" data-dollar-amount={69}>
                        69
                      </span>
                      <p className="perm">Per Month</p>
                    </div>
                    <ul className="pricinghny-inf">
                      <li>Full Body Massage</li>
                      <li>Hair Styling</li>
                      <li>Pedicure &amp; Manicure</li>
                      <li className="disable">Waxing</li>
                      <li className="disable">Facial &amp; Makeup</li>
                      <li>24/7 Support</li>
                    </ul>
                    <a
                      className="btn btn-primary btn-style mt-lg-5 mt-4"
                      href="#url"
                    >
                      Choose Plan{" "}
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
                  <div className="plan popular active">
                    <h3 className="pop-plan">Platinum Pack</h3>
                    <div className="price mb-4">
                      <span className="dollar">$</span>
                      <span className="amount" data-dollar-amount={99}>
                        99
                      </span>
                      <p className="perm">Per Month</p>
                    </div>
                    <ul className="pricinghny-inf">
                      <ul className="pricinghny-inf">
                        <li>Full Body Massage</li>
                        <li>Hair Styling</li>
                        <li>Pedicure &amp; Manicure</li>
                        <li>Waxing</li>
                        <li>Facial &amp; Makeup</li>
                        <li>24/7 Support</li>
                      </ul>
                    </ul>
                    <a
                      className="btn btn-primary btn-style mt-lg-5 mt-4"
                      href="#url"
                    >
                      Choose Plan{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*/pricing-section*/}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Makeup_artist;
