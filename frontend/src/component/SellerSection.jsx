import React from "react";

const SellerSection = () => {
  return (
    <>
        <section className="container-fluid p-5 bg-dark">
          <div className="container text-white">
            <div className="row g-4 align-items-center">
              {/* Left Section */}
              <div className="col-lg-7">
                <p
                  className="text-warning fw-bold small"
                  style={{ letterSpacing: 3 }}
                >
                  FOR ELECTRONICS SELLERS
                </p>
                <h2 className="fw-bold text-white">
                  Grow Your Business with
                  <span className="text-warning fst-italic"> Millions </span>
                  of Buyers
                </h2>
                <p className="text-secondary mt-3">
                  Whether you run a shop in Lajpat Rai Market, a warehouse in
                  Surat, or represent a brand — TechBazaar gives your products
                  national reach.
                </p>
                <div className="d-flex flex-wrap gap-2 my-4">
                  <a href="#" className="btn btn-warning fw-bold">
                    🏬 Register as Seller — Free
                  </a>
                  <a href="#" className="btn btn-outline-light">
                    Learn More →
                  </a>
                </div>
                {/* Steps */}
                <div className="row g-2">
                  <div className="col-6">
                    <div className="bg-secondary bg-opacity-25 rounded-3 p-3 h-100">
                      <h4 className="text-warning fw-bold">01</h4>
                      <h6 className="fw-bold">Register Free</h6>
                      <p className="text-secondary small mb-0">
                        Submit GSTIN &amp; docs. Verified in 24hrs.
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-secondary bg-opacity-25 rounded-3 p-3 h-100">
                      <h4 className="text-warning fw-bold">02</h4>
                      <h6 className="fw-bold">List Products</h6>
                      <p className="text-secondary small mb-0">
                        Upload inventory with photos &amp; specs.
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-secondary bg-opacity-25 rounded-3 p-3 h-100">
                      <h4 className="text-warning fw-bold">03</h4>
                      <h6 className="fw-bold">Receive Orders</h6>
                      <p className="text-secondary small mb-0">
                        Instant alerts. Ship via 20+ partners.
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-secondary bg-opacity-25 rounded-3 p-3 h-100">
                      <h4 className="text-warning fw-bold">04</h4>
                      <h6 className="fw-bold">Get Paid in 7 Days</h6>
                      <p className="text-secondary small mb-0">
                        Direct bank transfer. Zero surprises.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Section */}
              <div className="col-lg-5">
                <div className="d-flex flex-column gap-3">
                  <div className="bg-secondary bg-opacity-25 rounded-4 p-4 d-flex align-items-center gap-3">
                    <span className="fs-3">🛒</span>
                    <div>
                      <h3 className="text-warning fw-bold mb-1">2M+</h3>
                      <p className="text-secondary small mb-0">
                        Active buyers on TechBazaar
                      </p>
                    </div>
                  </div>
                  <div className="bg-secondary bg-opacity-25 rounded-4 p-4 d-flex align-items-center gap-3">
                    <span className="fs-3">🏬</span>
                    <div>
                      <h3 className="text-warning fw-bold mb-1">8,000+</h3>
                      <p className="text-secondary small mb-0">
                        Verified sellers already growing
                      </p>
                    </div>
                  </div>
                  <div className="bg-secondary bg-opacity-25 rounded-4 p-4 d-flex align-items-center gap-3">
                    <span className="fs-3">📦</span>
                    <div>
                      <h3 className="text-warning fw-bold mb-1">50K+</h3>
                      <p className="text-secondary small mb-0">
                        Products live and selling daily
                      </p>
                    </div>
                  </div>
                  <div className="bg-secondary bg-opacity-25 rounded-4 p-4 d-flex align-items-center gap-3">
                    <span className="fs-3">💰</span>
                    <div>
                      <h3 className="text-warning fw-bold mb-1">₹500Cr+</h3>
                      <p className="text-secondary small mb-0">
                        Total GMV processed for sellers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default SellerSection;
