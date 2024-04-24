import React from "react";
import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <>
      <div>
        <Header2 title={"Contact us"} />
        {/* /contacts */}
        {/* contact-form 2 */}
        <section className="w3l-contact-2 py-5" id="contact">
          <div className="container py-lg-4 py-md-3 py-2">
            <div className="title-content text-center">
              <h6 className="title-subw3hny mb-1">Get in touch</h6>
              <h3 className="title-w3l mb-5">
                Contact with our support <br />
                during emergency!
              </h3>
            </div>
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
                      type="text"
                      name="w3lName"
                      id="w3lName"
                      placeholder="Your Name*"
                      className="contact-input"
                      required
                    />
                    <input
                      type="email"
                      name="w3lSender"
                      id="w3lSender"
                      placeholder="Your Email*"
                      className="contact-input"
                      required
                    />
                    <input
                      type="text"
                      name="w3lPhone"
                      id="w3lPhone"
                      placeholder="Enter your Phone Number *"
                      required
                    />
                    <input
                      type="text"
                      name="w3lSubect"
                      id="w3lSubect"
                      placeholder="Subject*"
                      className="contact-input"
                      required
                    />
                  </div>
                  <div className="form-input">
                    <textarea
                      name="w3lMessage"
                      id="w3lMessage"
                      placeholder="Type your message here*"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="submit-w3l-button text-lg-right">
                    <button className="btn btn-style btn-primary">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="map-iframe mt-5 pt-lg-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
                width="100%"
                height={400}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </section>
        {/* /contact-form-2 */}
        <Footer />
      </div>
    </>
  );
}

export default Contact;
