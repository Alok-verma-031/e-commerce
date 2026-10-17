import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="contaner-fluid bg-dark m-0 p-2">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className=" col-12 col-md-7 p-4 bg-navyblue my-2 rounded-4">
            <div className="row">
              <div className=" col-12 col-md-8">
                <small className="text-orange bga-orange py-1 px-4 text-center rounded-pill">
                  • Summer Mega Sale 2026
                </small>
                <h1 className="fw-bold mt-3 text-light">
                  Beat The Heat. <br />
                  Shop India's Best
                </h1>
                <h1 className="text-orange fw-bold">
                  <i>AC's & Coolers.</i>
                </h1>
                <small className="text-offwhite">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  numquam expedita illum.
                </small>
                <br />
                <Link className="btn btn-sm bg-orange mt-2 fw-bolder">
                  🔥Shop Summer Sale
                </Link>
                <Link className="btn btn-sm btn-outline-warning text-light mt-2 ms-3 fw-bolder">
                  See All Offer{" "}
                </Link>
                <div className="row">
                  <div className="col-3 text-center mt-3">
                    <h5 className="text-orange fw-bold m-0 p-0">48%</h5>
                    <small className="text-offwhite">Max Discount</small>
                  </div>
                  <div className="col-3 text-center mt-3">
                    <h5 className="text-orange fw-bold m-0 p-0">Free</h5>
                    <small className="text-offwhite">Installation</small>
                  </div>
                  <div className="col-3 text-center mt-3">
                    <h5 className="text-orange fw-bold m-0 p-0">2M+</h5>
                    <small className="text-offwhite"> Happy Buyers</small>
                  </div>
                  <div className="col-3 text-center mt-3">
                    <h5 className="text-orange fw-bold m-0 p-0">500+</h5>
                    <small className="text-offwhite">Cities</small>
                  </div>
                </div>
              </div>
              <div className="col-md-1 "></div>
              <div className="col-sm-3 text-primary align-content-center ">
                {/* <i class="fa-solid fa-6x fa-snowflake"></i> */}
                <span style={{ fontSize: "90px" }}>❄</span>
              </div>
            </div>
          </div>
          <div className=" col-12 col-md-3  my-2 ">
            <div className="card border-0 bg-darkblue m-2 px-3 pt-2 rounded-3">
              <div className="row my-2">
                <div className="col-8">
                  <small className="text-offwhite">New Launch</small>
                  <h6 className="text-white fw-semibold m-0 p-0">
                    4K Smart TV's
                  </h6>
                  <small
                    className="text-nowrap m-0 p-0 text-offwhite"
                    style={{ fontSize: "10px" }}
                  >
                    OLED & QLED from ₹18,999
                  </small>
                </div>
                <div className="col-2">
                  <span style={{ fontSize: "40px" }}>📺</span>
                </div>
                <Link className="btn my-2 w-100 p-0 bg-orange text-white btn-sm rounded-pill">
                  Up To 38% Off
                </Link>
              </div>
            </div>
            <div className="card border-0 bg-darkred m-2 px-3 pt-2 rounded-3">
              <div className="row my-2">
                <div className="col-8">
                  <small className="text-offwhite">Flash Sale</small>
                  <h6 className="text-white fw-semibold m-0 p-0">
                    Smartphones
                  </h6>
                  <small
                    className="text-nowrap m-0 p-0 text-offwhite"
                    style={{ fontSize: "10px" }}
                  >
                    Realme,Apple,Oneplus
                  </small>
                </div>
                <div className="col-2">
                  <span style={{ fontSize: "40px" }}>📱</span>
                </div>
                <Link className="btn my-2 w-100 btn-success btn-sm p-0 rounded-pill">
                  No Cost EMI
                </Link>
              </div>
            </div>
            <div className="card border-0 bg-darkgreen m-2 px-3 pt-2 rounded-3">
              <div className="row my-2">
                <div className="col-8">
                  <small className="text-offwhite">Exchange Offer</small>
                  <h6 className="text-white fw-semibold m-0 p-0">
                    Double Door Fridge
                  </h6>
                  <small
                    className="text-nowrap m-0 p-0 text-offwhite"
                    style={{ fontSize: "10px" }}
                  >
                    Frost Free from ₹24,999
                  </small>
                </div>
                <div className="col-2">
                  <span style={{ fontSize: "40px" }}>🧊</span>
                </div>
                <Link className="btn my-2 w-100 btn-danger p-0 btn-sm rounded-pill">
                  ₹8k off on Exchange
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
