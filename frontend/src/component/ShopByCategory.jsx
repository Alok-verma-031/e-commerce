import React from "react";
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  return (
    <>
      <div className="feature-bar py-2 px-3">
        <div className="container-fluid d-flex justify-content-around flex-wrap gap-3 fs-7">
          <div className="d-flex align-items-center gap-2">
            <span style={{ fontSize: "30px" }}>🚛</span>
            <div>
              <div className="fw-bold small">Free Delivery</div>
              <div className="text-secondary" style={{ fontSize: 11 }}>
                On orders above ₹999
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span style={{ fontSize: "30px" }}>🔄️</span>
            <div>
              <div className="fw-bold small">7-Day Returns</div>
              <div className="text-secondary" style={{ fontSize: 11 }}>
                No-questions-asked
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span style={{ fontSize: "30px" }}>☑️</span>
            <div>
              <div className="fw-bold small">100% Genuine</div>
              <div className="text-secondary" style={{ fontSize: 11 }}>
                8,000+ verified sellers
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span style={{ fontSize: "30px" }}>💳</span>
            <div>
              <div className="fw-bold small">No-Cost EMI</div>
              <div className="text-secondary" style={{ fontSize: 11 }}>
                On major bank cards
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ticker Bar */}
      <div className="ticker-bar py-2 px-3">
        <div className="container-fluid">
          <marquee
            behavior=""
            direction="left"
            onMouseEnter={(e) => e.currentTarget.stop()}
            onMouseLeave={(e) => e.currentTarget.start()}
          >
            <span>
              Samsung 1.5T 5★ Split AC — ₹34,499 (Save ₹28,000)
              &nbsp&nbsp;•&nbsp; LG 43" 4K Smart TV — ₹28,999 (Save ₹18,000)
              &nbsp&nbsp;•&nbsp; Whirlpool 265L Frost-Free Fridge — ₹24,899 (28%
              Off)&nbsp&nbsp;•&nbsp; OnePlus 12 5G 16GB — ₹54,999 No-Cost EMI
            </span>
          </marquee>
        </div>
      </div>
      {/* Main Section */}
      <div className="container my-5">
        {/* Section Header */}
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <span
              className="d-block text-uppercase fw-bold text-orange mb-1"
              style={{ fontSize: 12, letterSpacing: "1.5px" }}
            >
              Browse
            </span>
            <h2 className="fw-bold text-dark m-0">
              Shop by{" "}
              <span className="fst-italic text-orange fw-normal">Category</span>
            </h2>
          </div>
          <button className="btn btn-outline-warning py-2 px-3 rounded-2 fs-6">
            All Categories →
          </button>
        </div>
        {/* Category Grid (Bootstrap Grid System) */}

        <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-3">
          {/* Card 1 */}
          <div className="col">
            <div className="category-card p-3 text-center h-100">
              <div className="category-icon fs-2 text-secondary mb-3">
                <i className="fa-solid fa-snowflake" />
              </div>
              <div className="category-name fw-semibold text-dark mb-1 small">
                Air Conditioners
              </div>
              <div
                className="category-count text-muted"
                style={{ fontSize: 12 }}
              >
                3,200+
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col">
            <div className="category-card p-3 text-center h-100">
              <div className="category-icon fs-2 text-secondary mb-3">
                <i className="fa-solid fa-cube" />
              </div>
              <div className="category-name fw-semibold text-dark mb-1 small">
                Refrigerators
              </div>
              <div
                className="category-count text-muted"
                style={{ fontSize: 12 }}
              >
                2,800+
              </div>
            </div>
          </div>
          {/* Card 3 (Active) */}
          <div className="col">
            <div className="category-card active p-3 text-center h-100">
              <div className="category-icon fs-2 text-secondary mb-3">
                <i className="fa-solid fa-tv" />
              </div>
              <div className="category-name fw-semibold text-dark mb-1 small">
                Televisions
              </div>
              <div
                className="category-count text-muted"
                style={{ fontSize: 12 }}
              >
                4,100+
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="col">
            <div className="category-card p-3 text-center h-100">
              <div className="category-icon fs-2 text-secondary mb-3">
                <i className="fa-solid fa-mobile-screen-button" />
              </div>
              <div className="category-name fw-semibold text-dark mb-1 small">
                Mobile Phones
              </div>
              <div
                className="category-count text-muted"
                style={{ fontSize: 12 }}
              >
                6,500+
              </div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="col">
            <div className="category-card p-3 text-center h-100">
              <div className="category-icon fs-2 text-secondary mb-3">
                <i className="fa-solid fa-wind" />
              </div>
              <div className="category-name fw-semibold text-dark mb-1 small">
                Air Coolers
              </div>
              <div
                className="category-count text-muted"
                style={{ fontSize: 12 }}
              >
                1,400+
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="col">
            <div className="category-card p-3 text-center h-100">
              <div className="category-icon fs-2 text-secondary mb-3">
                <i className="fa-solid fa-fan" />
              </div>
              <div className="category-name fw-semibold text-dark mb-1 small">
                Fans
              </div>
              <div
                className="category-count text-muted"
                style={{ fontSize: 12 }}
              >
                1,900+
              </div>
            </div>
          </div>
          {/* Card 7 */}
          <div className="col">
            <div className="category-card p-3 text-center h-100">
              <div className="category-icon fs-2 text-secondary mb-3">
                <i className="fa-solid fa-shirt" />
              </div>
              <div className="category-name fw-semibold text-dark mb-1 small">
                Washing Machines
              </div>
              <div
                className="category-count text-muted"
                style={{ fontSize: 12 }}
              >
                1,700+
              </div>
            </div>
          </div>
          {/* Card 8 */}
          <div className="col">
            <div className="category-card p-3 text-center h-100">
              <div className="category-icon fs-2 text-secondary mb-3">
                <i className="fa-solid fa-laptop" />
              </div>
              <div className="category-name fw-semibold text-dark mb-1 small">
                Laptops
              </div>
              <div
                className="category-count text-muted"
                style={{ fontSize: 12 }}
              >
                3,800+
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-2 px-md-3">
        <div className="row g-3 my-3 mx-0">
          {/* Card 1 */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="card h-100 border-0 bg-darkblue p-3 rounded-4">
              <div className="row align-items-center h-100">
                <div className="col-8">
                  <small className="text-offwhite d-block">
                    WORK FROM HOME
                  </small>
                  <h6 className="text-white fw-semibold m-0 p-0">
                    Laptops & Monitors
                  </h6>
                  <small
                    className="text-nowrap m-0 p-0 text-offwhite d-block mt-1"
                    style={{ fontSize: "10px" }}
                  >
                    Starting ₹29,999 - Up to 15% off
                  </small>
                  <Link
                    to="#"
                    className="text-decoration-none text-orange fw-semibold d-inline-block mt-2"
                  >
                    Shop Now →
                  </Link>
                </div>
                <div className="col-4 text-center">
                  <span style={{ fontSize: "50px" }}>💻</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="card h-100 border-0 bg-darkred p-3 rounded-4">
              <div className="row align-items-center h-100">
                <div className="col-8">
                  <small className="text-offwhite d-block">INCLUDED FREE</small>
                  <h6 className="text-white fw-semibold m-0 p-0">
                    AC Installation
                  </h6>
                  <small
                    className="text-nowrap m-0 p-0 text-offwhite d-block mt-1"
                    style={{ fontSize: "10px" }}
                  >
                    Free install on orders above ₹25,000
                  </small>
                  <Link
                    to="#"
                    className="text-decoration-none text-orange fw-semibold d-inline-block mt-2"
                  >
                    Book Now →
                  </Link>
                </div>
                <div className="col-4 text-center">
                  <span style={{ fontSize: "50px" }}>🔧</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="card h-100 border-0 bg-darkgreen p-3 rounded-4">
              <div className="row align-items-center h-100">
                <div className="col-8">
                  <small className="text-offwhite d-block">SAVE MORE</small>
                  <h6 className="text-white fw-semibold m-0 p-0">
                    Old for New Exchange
                  </h6>
                  <small
                    className="text-nowrap m-0 p-0 text-offwhite d-block mt-1"
                    style={{ fontSize: "10px" }}
                  >
                    Up to ₹15,000 extra off on exchange
                  </small>
                  <Link
                    to="#"
                    className="text-decoration-none text-orange fw-semibold d-inline-block mt-2"
                  >
                    Check My Value →
                  </Link>
                </div>
                <div className="col-4 text-center">
                  <span style={{ fontSize: "50px" }}>♻️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopByCategory;
