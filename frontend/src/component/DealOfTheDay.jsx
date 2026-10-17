import React from "react";

const DealOfTheDay = () => {
  return (
    <>
      <div className="container-fluid bg-black p-5">
        <div className="row px-5">
          <div className="col-sm-12 bg-darkred d-flex rounded-4 p-3 align-items-center justify-content-between ">
            <div className="d-flex align-items-center gap-3 ">
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

            {/* Right Section: Timer */}

            
            <div className="d-flex align-items-center gap-2">
              {/* Hours */}
              <div className="text-center">
                <div className="bg-black text-danger fw-bold border border-danger border-opacity-25 px-3 py-2 rounded-2 fs-5">
                  09
                </div>
                <div
                  className="text-secondary mt-1"
                  style={{ fontSize: "0.65rem", letterSpacing: "1px" }}
                >
                  HOURS
                </div>
              </div>

              <span className="text-danger fw-bold fs-5 align-self-start mt-2">
                :
              </span>

              {/* Minutes */}
              <div className="text-center">
                <div className="bg-black text-danger fw-bold border border-danger border-opacity-25 px-3 py-2 rounded-2 fs-5">
                  27
                </div>
                <div
                  className="text-secondary mt-1"
                  style={{ fontSize: "0.65rem", letterSpacing: "1px" }}
                >
                  MINS
                </div>
              </div>

              <span className="text-danger fw-bold fs-5 align-self-start mt-2">
                :
              </span>

              {/* Seconds */}
              <div className="text-center">
                <div className="bg-black text-danger fw-bold border border-danger border-opacity-25 px-3 py-2 rounded-2 fs-5">
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

          {/* cards */}
          <div className="row my-3">
            <div className="col">
              <div className="card border-0 rounded-4 bg-secondary ">
                <div className="p-2">
                  <small className="bg-danger w-50 rounded-pill px-2 text-center text-white">
                    45% OFF
                  </small>
                  <small className="bg-primary w-25 px-2 ms-2 rounded-pill text-center text-white">
                    Emi
                  </small>
                </div>
                <div className="text-center py-2">
                    <span style={{ fontSize: "70px" }}>❄</span>
                </div>
                <div className="bg-dark p-2 m-0 rounded-bottom-4">
                  <h6 className="text-orange">SAMSUNG</h6> 
                  <small><strong className="text-white p-0 m-0">Samsung 1.5 Ton 5★ Inverter Split AC 2024 Wi-Fi</strong> </small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 rounded-4 bg-navyblue ">
                <div className="p-2">
                  <small className="bg-orange w-50 rounded-pill px-2 text-center text-white">
                    HOT DEAL
                  </small>
                  
                </div>
                <div className="text-center py-2">
                    <span style={{ fontSize: "70px" }}>📺</span>
                </div>
                <div className="bg-dark p-2 m-0 rounded-bottom-4">
                  <h6 className="text-orange">LG</h6> 
                  <small><strong className="text-white p-0 m-0">LG 43" 4K UHD Smart TV with ThinQ AI & WebOS</strong> </small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 rounded-4 bg-darkgreen ">
                <div className="p-2">
                  <small className="bg-danger w-50 rounded-pill px-2 text-center text-white">
                    31% OFF
                  </small>
                  
                </div>
                <div className="text-center py-2">
                    <span style={{ fontSize: "70px" }}>📱</span>
                </div>
                <div className="bg-dark p-2 m-0 rounded-bottom-4">
                  <h6 className="text-orange">ONEPLUS</h6> 
                  <small><strong className="text-white p-0 m-0">OnePlus 12 5G 16GB+512GB Silky Black</strong> </small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 rounded-4 bg-darkblue ">
                <div className="p-2">
                  <small className="bg-danger w-50 rounded-pill px-2 text-center text-white">
                    28% OFF
                  </small>
                  <small className="bg-primary w-25 px-2 ms-2 rounded-pill text-center text-white">
                    Emi
                  </small>
                </div>
                <div className="text-center py-2">
                    <span style={{ fontSize: "70px" }}>🧊</span>
                </div>
                <div className="bg-dark p-2 m-0 rounded-bottom-4">
                  <h6 className="text-orange">WHIRLPOOL</h6> 
                  <small><strong className="text-white p-0 m-0">Whirlpool 265L Double Door Frost-Free Refrigerator</strong> </small>
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
