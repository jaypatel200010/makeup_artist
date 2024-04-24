import React from "react";
import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";

function Aboutus() {
  return (
    <>
      <div>
        <Header2 title={"About us"} />
        <div>
          {/*/bottom-3-grids*/}
          <div className="w3l-3-grids py-5" id="grids-3">
            <div className="container py-md-5 py-2">
              <div className="abin-top-content text-center mb-md-5 mb-4">
                <h6 className="title-subw3hny">About Us</h6>
                <h3 className="title-w3l mb-3">Our Story</h3>
                <p className="abinfo-para">
                  Lorem ipsum dolor sit, amet consectetur elit. Earum mollitia
                  cum ex ipsam autem!earum sequi amet.Earum mollitia cum ex
                  ipsam autem!earum sequi amet.
                </p>
              </div>
              <div className="aboyt-ininf">
                <div className="about-img">
                  <img
                    src="assets/images/banner3.jpg"
                    alt
                    className="img-fluid radius-image"
                  />
                </div>
                <div className="three-grids-hmew3">
                  <div className="three-grid-1 text-left mt-5">
                    <h4>Who We Are ?</h4>
                    <p className="mt-2 pr-lg-4">
                      Lorem ipsum dolor sit, amet consectetur elit. Earum
                      mollitia cum ex ipsam autem!earum sequi amet psam autem.
                    </p>
                  </div>
                  <div className="three-grid-1 text-left mt-5">
                    <h4>What We Do ?</h4>
                    <p className="mt-2 pr-lg-4">
                      Lorem ipsum dolor sit, amet consectetur elit. Earum
                      mollitia cum ex ipsam autem!earum sequi amet psam autem.
                    </p>
                  </div>
                  <div className="three-grid-1 text-left mt-5">
                    <h4>Why Choose Us</h4>
                    <p className="mt-2 pr-lg-4">
                      Lorem ipsum dolor sit, amet consectetur elit. Earum
                      mollitia cum ex ipsam autem!earum sequi amet psam autem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*//bottom-3-grids*/}
          {/*/features-section */}
          <section className="w3l-features py-5" id="work">
            <div className="container py-lg-5 py-md-4 py-2">
              <div className="title-content text-center mb-md-5 mb-4">
                <h6 className="title-subw3hny mb-1">Why Us</h6>
                <h3 className="title-w3l mb-5">What We Offer</h3>
              </div>
              <div className="main-cont-wthree-2 align-items-center text-center pt-lg-4">
                <div className="row align-items-center">
                  <div className="col-lg-3 col-md-6 mt-lg-0 mt-5">
                    <div className="grids-1 box-wrap">
                      <div className="icon">
                        <i className="fas fa-biking" />
                      </div>
                      <h4>
                        <a href="#service" className="title-head mb-3">
                          Body Treatments
                        </a>
                      </h4>
                      <p className="text-para mb-3">
                        Lorem ipsum dolor sit. Id ab commodi magnam.{" "}
                      </p>
                      <a className="w3item-link" href="services.html">
                        <i className="fas fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-lg-0 mt-5">
                    <div className="grids-1 box-wrap">
                      <div className="icon">
                        <i className="far fa-gem" />
                      </div>
                      <h4>
                        <a href="#service" className="title-head mb-3">
                          Stone Therapy
                        </a>
                      </h4>
                      <p className="text-para mb-3">
                        Lorem ipsum dolor sit. Id ab commodi magnam.{" "}
                      </p>
                      <a className="w3item-link" href="services.html">
                        <i className="fas fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-lg-0 mt-5">
                    <div className="grids-1 box-wrap">
                      <div className="icon">
                        <i className="fas fa-theater-masks" />
                      </div>
                      <h4>
                        <a href="#service" className="title-head mb-3">
                          Facial Treatments
                        </a>
                      </h4>
                      <p className="text-para mb-3">
                        Lorem ipsum dolor sit. Id ab commodi magnam.{" "}
                      </p>
                      <a className="w3item-link" href="services.html">
                        <i className="fas fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-lg-0 mt-5">
                    <div className="grids-1 box-wrap">
                      <div className="icon">
                        <i className="fas fa-bath" />
                      </div>
                      <h4>
                        <a href="#service" className="title-head mb-3">
                          Spa Programs
                        </a>
                      </h4>
                      <p className="text-para mb-3">
                        Lorem ipsum dolor sit. Id ab commodi magnam.{" "}
                      </p>
                      <a className="w3item-link" href="services.html">
                        <i className="fas fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*//features section */}
          {/*/team*/}
          <section id="team" className="w3lteam py-5">
            <div className="container py-md-5">
              <div className="title-content text-center">
                <h6 className="title-subw3hny mb-1">Our Team</h6>
                <h3 className="title-w3l mb-5">Our Creative Team.</h3>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="member">
                    <div className="pic">
                      <img
                        src="assets/images/team1.jpg"
                        className="img-fluid radius-image"
                        alt
                      />
                    </div>
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>Walter White</h4>
                        <span>Esthetician</span>
                      </div>
                      <div className="social">
                        <a href="#facebook" className="facebook">
                          <span className="fab fa-facebook-f" />
                        </a>
                        <a href="#twitter" className="twitter">
                          <span className="fab fa-twitter" />
                        </a>
                        <a href="#linkd" className="linkd">
                          <span className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="member">
                    <div className="pic">
                      <img
                        src="assets/images/team2.jpg"
                        className="img-fluid radius-image"
                        alt
                      />
                    </div>
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>Sarah Jhonson</h4>
                        <span>Hair Dresser</span>
                      </div>
                      <div className="social">
                        <a href="#facebook" className="facebook">
                          <span className="fab fa-facebook-f" />
                        </a>
                        <a href="#twitter" className="twitter">
                          <span className="fab fa-twitter" />
                        </a>
                        <a href="#linkd" className="linkd">
                          <span className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="member">
                    <div className="pic">
                      <img
                        src="assets/images/team3.jpg"
                        className="img-fluid radius-image"
                        alt
                      />
                    </div>
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>William Anderson</h4>
                        <span>Pedicurist</span>
                      </div>
                      <div className="social">
                        <a href="#facebook" className="facebook">
                          <span className="fab fa-facebook-f" />
                        </a>
                        <a href="#twitter" className="twitter">
                          <span className="fab fa-twitter" />
                        </a>
                        <a href="#linkd" className="linkd">
                          <span className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="member">
                    <div className="pic">
                      <img
                        src="assets/images/team4.jpg"
                        className="img-fluid radius-image"
                        alt
                      />
                    </div>
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>Linda James</h4>
                        <span>Cosmetologist</span>
                      </div>
                      <div className="social">
                        <a href="#facebook" className="facebook">
                          <span className="fab fa-facebook-f" />
                        </a>
                        <a href="#twitter" className="twitter">
                          <span className="fab fa-twitter" />
                        </a>
                        <a href="#linkd" className="linkd">
                          <span className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Team Section */}
          {/*/w3l-project*/}
          <section id="counts" className="w3lcounts">
            <div className="container py-md-3">
              <div className="w3l-project-in">
                <div className="row">
                  <div className="col-lg-3 col-md-6 w3stats_info counter_grid">
                    <div className="count-box">
                      <i className="fas fa-users" />
                      <div className="count-box-right">
                        <p className="counter">960</p>
                        <p>Happy Clients</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-5 mt-md-0 w3stats_info counter_grid">
                    <div className="count-box">
                      <i className="fas fa-user-shield" />
                      <div className="count-box-right">
                        <p className="counter">1560</p>
                        <p>Our Staff</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 w3stats_info counter_grid">
                    <div className="count-box">
                      <i className="fas fa-headset" />
                      <div className="count-box-right">
                        <p className="counter">1660</p>
                        <p>Hours Of Support</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 w3stats_info counter_grid">
                    <div className="count-box">
                      <i className="fas fa-trophy" />
                      <div className="count-box-right">
                        <p className="counter">2860</p>
                        <p>Awards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*//w3l-project*/}
          {/*/w3l-midslider*/}
          <section className="w3l-midslider py-5" id="midslider">
            {/* /grids */}
            <div className="container py-md-5">
              <div className="row">
                <div className="col-lg-5 title-content-two text-left pe-lg-5 mb-lg-0 mb-5">
                  <h6 className="title-subw3hny mb-1">What We Offer</h6>
                  <h3 className="title-w3l mb-3">
                    Modern Approach to Every New Project
                  </h3>
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla non ipsum soluta perferendis veniam qui esse magnam
                    commodi quisquam.
                  </p>
                  <ul className="icon-list-items mt-3">
                    <li className="icon-list-item">
                      <i aria-hidden="true" className="fas fa-circle" />
                      Body Treatments
                    </li>
                    <li className="icon-list-item mt-2">
                      <i aria-hidden="true" className="fas fa-circle" />
                      Face Treatments
                    </li>
                    <li className="icon-list-item mt-2">
                      <i aria-hidden="true" className="fas fa-circle" />
                      Hair Treatments
                    </li>
                  </ul>
                </div>
                {/* /grids */}
                <div className="col-lg-7 stats_info-images ps-lg-5">
                  <div className="stats_info-images-right row">
                    <div className="col-6 mid-slider-content">
                      <img
                        src="assets/images/ab1.jpg"
                        className="img-fluid radius-image"
                        alt
                      />
                    </div>
                    <div className="col-6 mid-slider-content">
                      <img
                        src="assets/images/ab2.jpg"
                        className="img-fluid radius-image"
                        alt
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* /grids */}
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Aboutus;
