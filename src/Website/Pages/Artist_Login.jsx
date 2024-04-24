import React from "react";
import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Artist_Login() {
  return (
    <>
      <div>
        <Header2 title={"Artist Login"} />
        <div className="container pb-5">
          <div className="contact-grids d-grid mt-5 pt-lg-3">
            <div className="contact-left">
              <div className="cont-details">
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fas fa-map-marker-alt" />
                  </div>
                  <div className="cont-right">
                    <h6>Our Office address:</h6>
                    <p>Lorem ipsum, 343 , #4148 Honey Street, NY - 62617.</p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fas fa-phone-alt" />
                  </div>
                  <div className="cont-right">
                    <h6>Call for help :</h6>
                    <p>
                      <a href="tel:+1(21) 234 4567">+1(21) 234 557 4567</a>
                    </p>
                    <p>
                      <a href="tel:+1(21) 234 4567">+1(21) 234 557 4568</a>
                    </p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="far fa-envelope" />
                  </div>
                  <div className="cont-right">
                    <h6>Mail us:</h6>
                    <p>
                      <a href="mailto:support@mail.com" className="mail">
                        support@mail.com
                      </a>
                    </p>
                    <p>
                      <a href="mailto:contact@mail.com" className="mail">
                        contact@mail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-right">
              <form
                action="https://sendmail.w3layouts.com/submitForm"
                method="post"
                className="signin-form"
              >
                <div className="input-grids">
                  <input
                    type="email"
                    name="w3lSender"
                    id="w3lSender"
                    placeholder="Your Email*"
                    className="contact-input"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    id="Password"
                    placeholder="Enter password*"
                    className="contact-input"
                    required
                  />
                </div>

                <div className="row submit-w3l-button text-lg-right">
                  <div className="col lg-6">
                    <Link to="/sign-up">
                      <button className="btn btn-style btn-primary">
                        Sign-up
                      </button>
                    </Link>
                  </div>
                  <div className="col lg-6">
                    <button className="btn btn-style btn-primary">Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Artist_Login;
