import React from "react";
import { Link } from "react-router-dom";

const Bestseller = () => {
  return (
    <>
      <div className="container-fluid bg-dark py-4">
        <div className="container">
          {/* Section Heading */}
          <div className="row px-sm-2 pt-4">
            <small className="text-orange fst-italic">🔥 TRENDING</small>
          </div>
          
          <div className="row px-sm-2 mt-1 align-items-center">
            <div className="col-12 col-sm-8 mb-2 mb-sm-0">
              <h4 className="text-white fw-bold m-0">
                Bestsellers{" "}
                <span className="text-orange fst-italic">Right Now</span>
              </h4>
            </div>
            <div className="col-12 col-sm-4 text-sm-end">
              <Link className="btn btn-outline-warning d-none d-sm-inline-block px-4">
                View All →
              </Link>
              <Link className="btn btn-outline-warning d-block d-sm-none w-100">
                More
              </Link>
            </div>
          </div>

          {/* Cards Row with Bootstrap Row-Cols Grid (No gap class) */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 my-3">
            
            {/* Card 1 */}
            <div className="col">
              <div className="card h-100 border-1 rounded-4 bg-secondary">
                <div className="p-2">
                  <span className="badge bg-orange rounded-pill px-2 py-1 text-white fw-normal">
                    BESTSELLER
                  </span>
                </div>
                <div className="text-center py-4">
                  <span style={{ fontSize: "80px" }}>♻️</span>
                </div>
                <div className="bg-dark p-3 m-0 rounded-bottom-4 flex-grow-1 d-flex flex-column justify-content-between">
                  <div>
                    <h6 className="text-orange mb-1">CROMPTON</h6>
                    <small>
                      <strong className="text-white p-0 m-0">
                        Crompton Aura Prime 1200mm BLDC Ceiling Fan + Remote
                      </strong>
                    </small>
                    <br />
                    <small className="text-offwhite mt-2 d-inline-block">
                      <span className="text-orange">★★★★</span>★ 4.6 (4,210)
                    </small>
                    <br />
                    <h6 className="text-white my-2">
                      ₹4,299{" "}
                      <small>
                        <strike className="text-offwhite">₹5,990</strike>
                      </small>
                    </h6>
                    <strong className="text-success">28% off</strong>
                    <br />
                    <small
                      className="text-nowrap m-0 p-0 text-offwhite"
                      style={{ fontSize: "10px" }}
                    >
                      COD Available · 1yr Warranty
                    </small>
                  </div>
                  
                  {/* Button row using standard percentages instead of gap */}
                  <div className="mt-3 row mx-0">
                    <div className="col-6 pe-1 ps-0">
                      <button className="btn btn-sm btn-outline-warning w-100">
                        + Card
                      </button>
                    </div>
                    <div className="col-6 ps-1 pe-0">
                      <button className="btn btn-sm btn-warning w-100 fw-semibold">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col">
              <div className="card h-100 border-1 rounded-4 bg-secondary">
                <div className="p-2">
                  <span className="badge bg-danger rounded-pill px-2 py-1 text-white fw-normal">
                    36% OFF
                  </span>
                </div>
                <div className="text-center py-4">
                  <span style={{ fontSize: "80px" }}>🎧</span>
                </div>
                <div className="bg-dark p-3 m-0 rounded-bottom-4 flex-grow-1 d-flex flex-column justify-content-between">
                  <div>
                    <h6 className="text-orange mb-1">SONY</h6>
                    <small>
                      <strong className="text-white p-0 m-0">
                        Sony WH-1000XM5 Wireless Noise Cancelling Headphones
                      </strong>
                    </small>
                    <br />
                    <small className="text-offwhite mt-2 d-inline-block">
                      <span className="text-orange">★★★★★</span> 4.9 (7,840)
                    </small>
                    <br />
                    <h6 className="text-white my-2">
                      ₹24,990{" "}
                      <small>
                        <strike className="text-offwhite">₹38,990</strike>
                      </small>
                    </h6>
                    <strong className="text-success">Save ₹14,000</strong>
                    <br />
                    <small
                      className="text-nowrap m-0 p-0 text-offwhite"
                      style={{ fontSize: "10px" }}
                    >
                      EMI from <span className="text-white">₹2,082/mo</span>
                    </small>
                  </div>
                  
                  <div className="mt-3 row mx-0">
                    <div className="col-6 pe-1 ps-0">
                      <button className="btn btn-sm btn-outline-warning w-100">
                        + Card
                      </button>
                    </div>
                    <div className="col-6 ps-1 pe-0">
                      <button className="btn btn-sm btn-warning w-100 fw-semibold">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col">
              <div className="card h-100 border-1 rounded-4 bg-secondary">
                <div className="p-2">
                  <span className="badge bg-success rounded-pill px-2 py-1 text-white fw-normal">
                    NEW LAUNCH
                  </span>
                </div>
                <div className="text-center py-4">
                  <span style={{ fontSize: "80px" }}>⌚</span>
                </div>
                <div className="bg-dark p-3 m-0 rounded-bottom-4 flex-grow-1 d-flex flex-column justify-content-between">
                  <div>
                    <h6 className="text-orange mb-1">APPLE</h6>
                    <small>
                      <strong className="text-white p-0 m-0">
                        Apple Watch Series 9 GPS 45mm Midnight Aluminium
                      </strong>
                    </small>
                    <br />
                    <small className="text-offwhite mt-2 d-inline-block">
                      <span className="text-orange">★★★★★</span> 4.8 (3,120)
                    </small>
                    <br />
                    <h6 className="text-white my-2">
                      ₹41,900{" "}
                      <small>
                        <strike className="text-offwhite">₹44,990</strike>
                      </small>
                    </h6>
                    <strong className="text-success">₹3000 off</strong>
                    <br />
                    <small
                      className="text-nowrap m-0 p-0 text-offwhite"
                      style={{ fontSize: "10px" }}
                    >
                      EMI from <span className="text-white">₹3,491/mo</span>
                    </small>
                  </div>
                  
                  <div className="mt-3 row mx-0">
                    <div className="col-6 pe-1 ps-0">
                      <button className="btn btn-sm btn-outline-warning w-100">
                        + Card
                      </button>
                    </div>
                    <div className="col-6 ps-1 pe-0">
                      <button className="btn btn-sm btn-warning w-100 fw-semibold">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col">
              <div className="card h-100 border-1 rounded-4 bg-secondary">
                <div className="p-2">
                  <span className="badge bg-orange rounded-pill px-2 py-1 text-white fw-normal">
                    NO-COST EMI
                  </span>
                </div>
                <div className="text-center py-4">
                  <span style={{ fontSize: "80px" }}>📺</span>
                </div>
                <div className="bg-dark p-3 m-0 rounded-bottom-4 flex-grow-1 d-flex flex-column justify-content-between">
                  <div>
                    <h6 className="text-orange mb-1">CANON</h6>
                    <small>
                      <strong className="text-white p-0 m-0">
                        Canon EOS R50 Mirrorless Camera with 18-45mm Lens Kit
                      </strong>
                    </small>
                    <br />
                    <small className="text-offwhite mt-2 d-inline-block">
                      <span className="text-orange">★★★★½</span> 4.6 (980)
                    </small>
                    <br />
                    <h6 className="text-white my-2">
                      ₹62,495{" "}
                      <small>
                        <strike className="text-offwhite">₹74,995</strike>
                      </small>
                    </h6>
                    <strong className="text-success">17% off</strong>
                    <br />
                    <small
                      className="text-nowrap m-0 p-0 text-offwhite"
                      style={{ fontSize: "10px" }}
                    >
                      EMI from <span className="text-white">₹5,207/mo</span>
                    </small>
                  </div>
                  
                  <div className="mt-3 row mx-0">
                    <div className="col-6 pe-1 ps-0">
                      <button className="btn btn-sm btn-outline-warning w-100">
                        + Card
                      </button>
                    </div>
                    <div className="col-6 ps-1 pe-0">
                      <button className="btn btn-sm btn-warning w-100 fw-semibold">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Bestseller;