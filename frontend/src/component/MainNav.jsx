import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <>
      <div className="container-fluid p-0 g-0">
        <div className="row ">
          <div className="col-sm-12">
            <nav className="navbar navbar-dark bg-dark px-2 px-md-5">
              <div className="container-fluid align-items-center">
                <button
                  className="navbar-toggler p-1 me-1"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasDarkNavbar"
                  aria-controls="offcanvasDarkNavbar"
                  aria-label="Toggle navigation"
                >
                  <span
                    className="navbar-toggler-icon"
                    style={{ width: "1.2rem", height: "1.2rem" }}
                  />
                </button>

                <Link className="navbar-brand mx-1 text-decoration-none" to="/">
                  <h6
                    className="fw-bold mb-0 text-nowrap"
                    style={{ fontSize: "14px" }}
                  >
                    Softpro <span className="text-orange">Innovations</span>
                  </h6>
                </Link>
                {/* 1. Mobile Search Bar (Only < 768px) */}
                <form className="d-flex d-md-none w-50 mt-2" role="search">
                  <input
                    className="form-control mx-2 search rounded-5"
                    type="search"
                    placeholder="Search here.."
                    aria-label="Search"
                  />
                </form>

                {/* 2. Desktop/Tablet Search Bar (Only >= 768px) */}
                <form className="d-none d-md-flex w-50" role="search">
                  <input
                    className="form-control mx-2 search rounded-5"
                    type="search"
                    placeholder="Search here.."
                    aria-label="Search"
                  />
                </form>

                <div className="d-flex align-items-center gap-1 ms-auto mt-sm-2">
                  <Link
                    className="navbar-brand text-decoration-none m-0 px-1"
                    to="/login"
                  >
                    <i className="fas fa-user-circle fs-6"></i>
                    <span
                      className=" d-sm-inline ms-1"
                      style={{ fontSize: "13px" }}
                    >
                      Sign In
                    </span>
                  </Link>

                  <Link
                    className="navbar-brand text-decoration-none m-0 px-1"
                    to="/"
                  >
                    <i className="fa-solid fa-cart-shopping fs-6"></i>
                  </Link>

                  <Link
                    className="btn bg-orange rounded-5 px-2 py-1 text-nowrap ms-1 d-none d-lg-inline-block"
                    to="/"
                  >
                    <span className="fw-bold" style={{ fontSize: "11px" }}>
                      Become a seller
                    </span>
                  </Link>
                </div>

                <div
                  className="offcanvas offcanvas-start text-bg-dark"
                  tabIndex={-1}
                  id="offcanvasDarkNavbar"
                  aria-labelledby="offcanvasDarkNavbarLabel"
                >
                  <div className="offcanvas-header">
                    <h5
                      className="offcanvas-title"
                      id="offcanvasDarkNavbarLabel"
                    >
                      Dark offcanvas
                    </h5>
                    <button
                      type="button"
                      className="btn-close btn-close-white"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                      <li className="nav-item d-lg-none mb-3">
                        <Link
                          className="btn btn-warning rounded-5 w-100 py-2 text-dark fw-bold"
                          to="/"
                        >
                          <h6 className="mb-0">Become a seller</h6>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="#"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Link
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
