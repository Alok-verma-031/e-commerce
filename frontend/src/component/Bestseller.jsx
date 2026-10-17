import React from "react";
import { Link } from "react-router-dom";

const Bestseller = () => {
  return (
    <>
      <div className="container-fluid bg-dark py-4">
        <div className="container">
          <div className="row px-4 pt-4">
            <small className="text-orange fst-italic">🔥 TRENDING</small>
          </div>
          <div className="row px-4 mt-1 ">
            <div className="d-flex justify-content-between">
              <h4 className="text-white fw-bold">
                Bestsellers{" "}
                <span className="text-orange fst-italic">Right Now</span>
              </h4>
              <Link className="btn btn-outline-warning">View All → </Link>
            </div>
          </div>
          {/* cards */}
          <div className="row my-3">
            <div className="col">
              <div className="card border-1 rounded-4 bg-secondary ">
                <div className="p-2">
                  <small className="bg-orange w-50 rounded-pill px-2 text-center text-white">
                    BESTSELLER
                  </small>
                </div>
                <div className="text-center py-4">
                  <span style={{ fontSize: "80px" }}>♻️</span>
                </div>
                <div className="bg-dark p-2 m-0 rounded-bottom-4">
                  <h6 className="text-orange">CROMPTON</h6>
                  <small>
                    <strong className="text-white p-0 m-0">
                      Crompton Aura Prime 1200mm BLDC Ceiling Fan + Remote
                    </strong>{" "}
                  </small>
                  <br />
                  <small className="text-offwhite mt-2">
                    {" "}
                    <span className="text-orange">★★★★</span>★ 4.6 (4,210)
                  </small>
                  <br />
                  <h6 className="text-white my-2">
                    ₹4,299{" "}
                    <small>
                      <strike className=" text-offwhite">₹5,990</strike>
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
                  <br />
                  <button className="btn btn-sm btn-outline-warning border-1 m-2 px-4">
                    {" "}
                    + Card
                  </button>
                  <button className="btn btn-sm btn-warning border-1 m-2 px-3">
                    {" "}
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-1 rounded-4 bg-secondary ">
                <div className="p-2">
                  <small className="bg-danger w-50 rounded-pill px-2 text-center text-white">
                    36% OFF
                  </small>
                </div>
                <div className="text-center py-4">
                  <span style={{ fontSize: "80px" }}>🎧</span>
                </div>
                <div className="bg-dark p-2 m-0 rounded-bottom-4">
                  <h6 className="text-orange">SONY</h6>
                  <small>
                    <strong className="text-white p-0 m-0">
                      Sony WH-1000XM5 Wireless Noise Cancelling Headphones
                    </strong>{" "}
                  </small>
                  <br />
                  <small className="text-offwhite mt-2">
                    {" "}
                    <span className="text-orange">★★★★★</span> 4.9 (7,840)
                  </small>
                  <br />
                  <h6 className="text-white my-2">
                    ₹24,990 
                    <small>
                      <strike className=" text-offwhite">₹38,990</strike>
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
                  <br />
                  <button className="btn btn-sm btn-outline-warning border-1 m-2 px-4">
                    {" "}
                    + Card
                  </button>
                  <button className="btn btn-sm btn-warning border-1 m-2 px-3">
                    {" "}
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-1 rounded-4 bg-secondary ">
                <div className="p-2">
                  <small className="bg-success w-50 rounded-pill px-2 text-center text-white">
                    NEW LAUNCH
                  </small>
                </div>
                <div className="text-center py-4">
                  <span style={{ fontSize: "80px" }}>⌚</span>
                </div>
                <div className="bg-dark p-2 m-0 rounded-bottom-4">
                  <h6 className="text-orange">APPLE</h6>
                  <small>
                    <strong className="text-white p-0 m-0">
                      Apple Watch Series 9 GPS 45mm Midnight Aluminium
                    </strong>{" "}
                  </small>
                  <br />
                  <small className="text-offwhite mt-2">
                    {" "}
                    <span className="text-orange">★★★★★</span>4.8 (3,120)
                  </small>
                  <br />
                  <h6 className="text-white my-2">
                    ₹41,900 
                    <small>
                      <strike className=" text-offwhite">₹44,990</strike>
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
                  <br />
                  <button className="btn btn-sm btn-outline-warning border-1 m-2 px-4">
                    {" "}
                    + Card
                  </button>
                  <button className="btn btn-sm btn-warning border-1 m-2 px-3">
                    {" "}
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-1 rounded-4 bg-secondary ">
                <div className="p-2">
                  <small className="bg-orange w-50 rounded-pill px-2 text-center text-white">
                    NO-COST EMI
                  </small>
                </div>
                <div className="text-center py-4">
                  <span style={{ fontSize: "80px" }}>📺</span>
                </div>
                <div className="bg-dark p-2 m-0 rounded-bottom-4">
                  <h6 className="text-orange">CANON</h6>
                  <small>
                    <strong className="text-white p-0 m-0">
                      Canon EOS R50 Mirrorless Camera with 18-45mm Lens Kit
                    </strong>{" "}
                  </small>
                  <br />
                  <small className="text-offwhite mt-2">
                    {" "}
                    <span className="text-orange">★★★★½</span>4.6 (980)
                  </small>
                  <br />
                  <h6 className="text-white my-2">
                    ₹62,495 
                    <small>
                      <strike className=" text-offwhite">₹74,995</strike>
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
                  <br />
                  <button className="btn btn-sm btn-outline-warning border-1 m-2 px-4">
                    {" "}
                    + Card
                  </button>
                  <button className="btn btn-sm btn-warning border-1 m-2 px-3">
                    {" "}
                    Buy Now
                  </button>
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
