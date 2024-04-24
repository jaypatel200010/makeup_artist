import React from "react";
import Footer from "../Components/Footer";
import Header2 from "../Components/Header2";

function Blog() {
  return (
    <>
      <div>
        <Header2 title={"Blogs"} />
        <div>
          <div className="w3l-services-1 py-5" id="grids-3">
            <div className="container py-md-5 py-2">
              {/*/row-1*/}
              <div className="row mb-5 pb-lg-4">
                <div className="services-1-right col-lg-6 mt-lg-0 mt-md-5 mt-4 pe-lg-5">
                  <div className="title-content-two text-left">
                    <h6 className="title-subw3hny mb-1">Blogs</h6>
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
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Blog;
