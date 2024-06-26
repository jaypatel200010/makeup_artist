import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
            <h1>
              <Link className="navbar-brand pe-xl-5 pe-lg-4" to="/">
                <i className="fas fa-spa" />
                Spaw
              </Link>
            </h1>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa icon-expand fa-bars" />
              <span className="navbar-toggler-icon fa icon-close fa-times" />
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-lg-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/makup_artist">
                    Makeup Artist
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/blog">
                    Blog
                  </NavLink>
                </li>
              </ul>
              {/*/search-right*/}
              <ul className="header-search me-lg-4">
                <li className="nav-item search-right">
                  <Link
                    to="/artist-login"
                    className="btn btn-primary"
                    title="Login"
                  >
                    Login{" "}
                  </Link>
                  {/* search popup */}
                  {/* <div id="search" className="pop-overlay">
                    <div className="popup">
                      <h3 className="title-w3l two mb-4 text-left">
                        Search Here
                      </h3>
                      <form
                        action="#"
                        method="GET"
                        className="search-box d-flex position-relative"
                      >
                        <input
                          type="search"
                          placeholder="Enter Keyword here"
                          name="search"
                          required="required"
                          autofocus
                        />
                        <button type="submit" className="btn">
                          <span className="fas fa-search" aria-hidden="true" />
                        </button>
                      </form>
                    </div>
                    <a className="close" href="#close">
                      ×
                    </a>
                  </div> */}
                  {/* /search popup */}
                </li>
              </ul>
              {/*//search-right*/}
            </div>
            {/* toggle switch for light and dark theme */}
            <div className="mobile-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="mode-container">
                      <i className="gg-sun" />
                      <i className="gg-moon" />
                    </div>
                  </label>
                </div>
              </nav>
            </div>
            {/* //toggle switch for light and dark theme */}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
