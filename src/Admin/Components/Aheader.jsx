import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Aheader({ title }) {
  return (
    <>
      <div>
        <header id="site-header" className="fixed-top">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
              <h1>
                <Link className="navbar-brand pe-xl-5 pe-lg-4" to="/dashboard">
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
                      to="/dashboard"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/artists">
                      Artists
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/manage_contact">
                      Contacts
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <div className="nav-item dropdown">
                      <NavLink
                        to="#"
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        Blogs
                      </NavLink>
                      <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                        <NavLink to="/add-blog" className="dropdown-item">
                          Add
                        </NavLink>
                        <NavLink to="/manage_blog" className="dropdown-item">
                          Manage
                        </NavLink>
                      </div>
                    </div>
                  </li>
                </ul>
                {/*/search-right*/}
                <ul className="header-search me-lg-4">
                  <li className="nav-item search-right">
                    <a
                      href="#search"
                      className="btn search-btn btn-primary"
                      title="search"
                    >
                      Search{" "}
                      <span className="fas fa-search ms-3" aria-hidden="true" />
                    </a>
                    {/* search popup */}
                    <div id="search" className="pop-overlay">
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
                            <span
                              className="fas fa-search"
                              aria-hidden="true"
                            />
                          </button>
                        </form>
                      </div>
                      <a className="close" href="#close">
                        ×
                      </a>
                    </div>
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
                    <li>
                      <a href="index.html">Dashboard</a>
                    </li>
                    <li className="active">
                      <span className="fas fa-angle-double-right mx-2" />
                      <a href="index.html">Pages</a>
                    </li>
                    <li className="active">
                      <span className="fas fa-angle-double-right mx-2" />
                      <a href="index.html">{title}</a>
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

export default Aheader;
