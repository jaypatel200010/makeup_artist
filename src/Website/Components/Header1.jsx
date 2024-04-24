import React from "react";
import Navbar from "./Navbar";

function Header1() {
  return (
    <>
      <div>
        <Navbar />
        <section
          className="w3l-main-slider banner-slider position-relative"
          id="home"
        >
          <div className="owl-one owl-carousel owl-theme">
            <div className="item">
              <div className="slider-info banner-view banner-top1">
                <div className="container">
                  <div className="banner-info header-hero-19">
                    <h5>Beauty Care for Everyone</h5>
                    <h3 className="title-hero-19">
                      Experience the Best Beauty Services
                    </h3>
                  </div>
                  <div className="banner-info header-hero-19 banner-info2 header-hero-192">
                    <h5>Spa for your Style Fitness</h5>
                    <h3 className="title-hero-19">
                      Professional Spa &amp; Skin Care
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-button">
            <a href="#about" className="scroll">
              <div className="arrow" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Header1;
