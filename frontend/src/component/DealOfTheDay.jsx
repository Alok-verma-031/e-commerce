import React from "react";

const DealOfTheDay = () => {
  return (
    <>
      <div className="container-fluid bg-black p-3 p-md-5">
        <div className="row px-1 px-md-5">
          {/* Header Banner */}
          <div className="col-12 bg-darkred d-flex flex-column flex-sm-row rounded-4 p-3 align-items-center justify-content-between gap-3">
            <div className="d-flex align-items-center gap-3 text-center text-sm-start">
              <div className="fs-2">🔥</div>
              <div>
                <h5 className="fw-bold mb-0 text-white">
                  Deals of the <span className="text-danger">Day</span>
                </h5>
                <small
                  className="text-secondary"
                  style={{ fontSize: "0.8rem" }}
                >
                  Lightning deals refreshed every 24 hours
                </small>
              </div>
            </div>

            {/* Right Section: Countdown Timer */}
            <div className="d-flex align-items-center gap-2">
              {/* Hours */}
              <div className="text-center">
                <div className="bg-black text-danger fw-bold border border-danger border-opacity-25 px-2 px-sm-3 py-1 py-sm-2 rounded-2 fs-5">
                  09
                </div>
                <div
                  className="text-secondary mt-1"
                  style={{ fontSize: "0.65rem", letterSpacing: "1px" }}
                >
                  HOURS
                </div>
              </div>

              <span className="text-danger fw-bold fs-5 align-self-start mt-1 mt-sm-2">
                :
              </span>

              {/* Minutes */}
              <div className="text-center">
                <div className="bg-black text-danger fw-bold border border-danger border-opacity-25 px-2 px-sm-3 py-1 py-sm-2 rounded-2 fs-5">
                  27
                </div>
                <div
                  className="text-secondary mt-1"
                  style={{ fontSize: "0.65rem", letterSpacing: "1px" }}
                >
                  MINS
                </div>
              </div>

              <span className="text-danger fw-bold fs-5 align-self-start mt-1 mt-sm-2">
                :
              </span>

              {/* Seconds */}
              <div className="text-center">
                <div className="bg-black text-danger fw-bold border border-danger border-opacity-25 px-2 px-sm-3 py-1 py-sm-2 rounded-2 fs-5">
                  57
                </div>
                <div
                  className="text-secondary mt-1"
                  style={{ fontSize: "0.65rem", letterSpacing: "1px" }}
                >
                  SECS
                </div>
              </div>
            </div>
          </div>

          {/* Cards Grid Section */}
          <div className="row g-3 my-3 px-0">
            {/* Card 1 */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 border-0 rounded-4 bg-secondary">
                <div className="p-2 d-flex gap-2">
                  <small className="bg-danger px-2 py-1 rounded-pill text-center text-white fw-semibold">
                    45% OFF
                  </small>
                  <small className="bg-primary px-2 py-1 rounded-pill text-center text-white fw-semibold">
                    EMI
                  </small>
                </div>
                <div className="text-center py-2">
                  <span style={{ fontSize: "70px" }}>❄</span>
                </div>
                <div className="bg-dark p-3 m-0 rounded-bottom-4 flex-grow-1 d-flex flex-column justify-content-between">
                  <div>
                    <h6 className="text-orange mb-1">SAMSUNG</h6>
                    <small>
                      <strong className="text-white p-0 m-0">
                        Samsung 1.5 Ton 5★ Inverter Split AC 2024 Wi-Fi
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
                  <div className="mt-3 d-flex gap-2">
                    <button className="btn btn-sm btn-outline-warning border-1 w-50">
                      + Card
                    </button>
                    <button className="btn btn-sm btn-warning border-1 w-50 fw-semibold">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 border-0 rounded-4 bg-navyblue">
                <div className="p-2 d-flex gap-2">
                  <small className="bg-orange px-2 py-1 rounded-pill text-center text-white fw-semibold">
                    HOT DEAL
                  </small>
                </div>
                <div className="text-center py-2">
                  <span style={{ fontSize: "70px" }}>📺</span>
                </div>
                <div className="bg-dark p-3 m-0 rounded-bottom-4 flex-grow-1 d-flex flex-column justify-content-between">
                  <div>
                    <h6 className="text-orange mb-1">LG</h6>
                    <small>
                      <strong className="text-white p-0 m-0">
                        LG 43" 4K UHD Smart TV with ThinQ AI & WebOS
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
                  <div className="mt-3 d-flex gap-2">
                    <button className="btn btn-sm btn-outline-warning border-1 w-50">
                      + Card
                    </button>
                    <button className="btn btn-sm btn-warning border-1 w-50 fw-semibold">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 border-0 rounded-4 bg-darkgreen">
                <div className="p-2 d-flex gap-2">
                  <small className="bg-danger px-2 py-1 rounded-pill text-center text-white fw-semibold">
                    31% OFF
                  </small>
                </div>
                <div className="text-center py-2">
                  <span style={{ fontSize: "70px" }}>📱</span>
                </div>
                <div className="bg-dark p-3 m-0 rounded-bottom-4 flex-grow-1 d-flex flex-column justify-content-between">
                  <div>
                    <h6 className="text-orange mb-1">ONEPLUS</h6>
                    <small>
                      <strong className="text-white p-0 m-0">
                        OnePlus 12 5G 16GB+512GB Silky Black
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
                  <div className="mt-3 d-flex gap-2">
                    <button className="btn btn-sm btn-outline-warning border-1 w-50">
                      + Card
                    </button>
                    <button className="btn btn-sm btn-warning border-1 w-50 fw-semibold">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 border-0 rounded-4 bg-darkblue">
                <div className="p-2 d-flex gap-2">
                  <small className="bg-danger px-2 py-1 rounded-pill text-center text-white fw-semibold">
                    28% OFF
                  </small>
                  <small className="bg-primary px-2 py-1 rounded-pill text-center text-white fw-semibold">
                    EMI
                  </small>
                </div>
                <div className="text-center py-2">
                  <span style={{ fontSize: "70px" }}>🧊</span>
                </div>
                <div className="bg-dark p-3 m-0 rounded-bottom-4 flex-grow-1 d-flex flex-column justify-content-between">
                  <div>
                    <h6 className="text-orange mb-1">WHIRLPOOL</h6>
                    <small>
                      <strong className="text-white p-0 m-0">
                        Whirlpool 265L Double Door Frost-Free Refrigerator
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
                  <div className="mt-3 d-flex gap-2">
                    <button className="btn btn-sm btn-outline-warning border-1 w-50">
                      + Card
                    </button>
                    <button className="btn btn-sm btn-warning border-1 w-50 fw-semibold">
                      Buy Now
                    </button>
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

export default DealOfTheDay;