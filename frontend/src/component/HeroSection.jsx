import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="container-fluid bg-dark m-0 p-2 p-md-3">
        <div className="row justify-content-center mx-0">
          
          {/* Main Hero Banner */}
          <div className="col-12 col-lg-8 p-3 p-sm-4 p-md-5 bg-navyblue my-2 rounded-4">
            <div className="row align-items-center">
              <div className="col-12 col-md-8 col-lg-9">
                <small className="text-orange bga-orange py-1 px-3 px-sm-4 text-center rounded-pill d-inline-block mb-2">
                  • Summer Mega Sale 2026
                </small>
                <h1 className="fw-bold mt-2 text-light fs-2 fs-sm-1">
                  Beat The Heat. <br />
                  Shop India's Best
                </h1>
                <h1 className="text-orange fw-bold fs-2 fs-sm-1">
                  <i>AC's & Coolers.</i>
                </h1>
                <p className="text-offwhite small my-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  numquam expedita illum.
                </p>

                {/* Call-to-action buttons */}
                <div className="d-flex flex-wrap gap-2 mt-3">
                  <Link to="#" className="btn btn-sm bg-orange fw-bolder px-3 py-2">
                    🔥 Shop Summer Sale
                  </Link>
                  <Link to="#" className="btn btn-sm btn-outline-warning text-light fw-bolder px-3 py-2">
                    See All Offers
                  </Link>
                </div>

                {/* Statistics Row */}
                <div className="row mt-4 g-2">
                  <div className="col-6 col-sm-3 text-center">
                    <h5 className="text-orange fw-bold m-0 p-0">48%</h5>
                    <small className="text-offwhite" style={{ fontSize: "11px" }}>
                      Max Discount
                    </small>
                  </div>
                  <div className="col-6 col-sm-3 text-center">
                    <h5 className="text-orange fw-bold m-0 p-0">Free</h5>
                    <small className="text-offwhite" style={{ fontSize: "11px" }}>
                      Installation
                    </small>
                  </div>
                  <div className="col-6 col-sm-3 text-center">
                    <h5 className="text-orange fw-bold m-0 p-0">2M+</h5>
                    <small className="text-offwhite" style={{ fontSize: "11px" }}>
                      Happy Buyers
                    </small>
                  </div>
                  <div className="col-6 col-sm-3 text-center">
                    <h5 className="text-orange fw-bold m-0 p-0">500+</h5>
                    <small className="text-offwhite" style={{ fontSize: "11px" }}>
                      Cities
                    </small>
                  </div>
                </div>
              </div>

              {/* Decorative Snowflake Icon (Visible Desktop Only) */}
              <div className="col-md-4 col-lg-3 text-primary d-none d-md-flex justify-content-center align-items-center">
                <span style={{ fontSize: "90px" }}>❄</span>
              </div>
            </div>
          </div>

          {/* Right Side Cards Section */}
          <div className="col-12 col-lg-4 my-2 px-1 px-sm-2">
            
            {/* Card 1 */}
            <div className="card border-0 bg-darkblue mb-3 p-3 rounded-3">
              <div className="row align-items-center g-2">
                <div className="col-8">
                  <small className="text-offwhite d-block">New Launch</small>
                  <h6 className="text-white fw-semibold m-0">
                    4K Smart TV's
                  </h6>
                  <small
                    className="text-nowrap text-offwhite d-block mt-1"
                    style={{ fontSize: "10px" }}
                  >
                    OLED & QLED from ₹18,999
                  </small>
                </div>
                <div className="col-4 text-center">
                  <span style={{ fontSize: "36px" }}>📺</span>
                </div>
                <div className="col-12 mt-2">
                  <Link to="#" className="btn w-100 py-1 bg-orange text-white btn-sm rounded-pill fw-semibold">
                    Up To 38% Off
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card border-0 bg-darkred mb-3 p-3 rounded-3">
              <div className="row align-items-center g-2">
                <div className="col-8">
                  <small className="text-offwhite d-block">Flash Sale</small>
                  <h6 className="text-white fw-semibold m-0">
                    Smartphones
                  </h6>
                  <small
                    className="text-nowrap text-offwhite d-block mt-1"
                    style={{ fontSize: "10px" }}
                  >
                    Realme, Apple, OnePlus
                  </small>
                </div>
                <div className="col-4 text-center">
                  <span style={{ fontSize: "36px" }}>📱</span>
                </div>
                <div className="col-12 mt-2">
                  <Link to="#" className="btn w-100 py-1 btn-success btn-sm rounded-pill fw-semibold">
                    No Cost EMI
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card border-0 bg-darkgreen p-3 rounded-3">
              <div className="row align-items-center g-2">
                <div className="col-8">
                  <small className="text-offwhite d-block">Exchange Offer</small>
                  <h6 className="text-white fw-semibold m-0">
                    Double Door Fridge
                  </h6>
                  <small
                    className="text-nowrap text-offwhite d-block mt-1"
                    style={{ fontSize: "10px" }}
                  >
                    Frost Free from ₹24,999
                  </small>
                </div>
                <div className="col-4 text-center">
                  <span style={{ fontSize: "36px" }}>🧊</span>
                </div>
                <div className="col-12 mt-2">
                  <Link to="#" className="btn w-100 py-1 btn-danger btn-sm rounded-pill fw-semibold">
                    ₹8k off on Exchange
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default HeroSection;