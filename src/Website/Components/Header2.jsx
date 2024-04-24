import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Header2({ title }) {
  return (
    <>
      <div>
        <Navbar />
        <div className="inner-banner py-5">
          <section className="w3l-breadcrumb text-left py-sm-5 ">
            <div className="container">
              <div className="w3breadcrumb-gids">
                <div className="w3breadcrumb-left text-left">
                  <h2 className="inner-w3-title">{title} </h2>
                  <p className="inner-page-para mt-2">
                    Beauty Care for Everyone
                  </p>
                </div>
                <div className="w3breadcrumb-right">
                  <ul className="breadcrumbs-custom-path">
                    <Link to="/">
                      <a href="index.html">Home</a>
                    </Link>
                    <li className="active">
                      <span className="fas fa-angle-double-right mx-2" />
                      <a href="">Pages</a>
                      <span className="fas fa-angle-double-right mx-2" />
                      {title}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Header2;
