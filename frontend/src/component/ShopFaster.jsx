import React from "react";

const ShopFaster = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <section className="app-section m-0">
          <div className="container">
            <div className="row align-items-center gy-3">
              {/* Left Text Content */}
              <div className="col-lg-7">
                <span className="subtitle text-uppercase d-block mb-2">
                  TECHBAZAAR APP
                </span>
                <h1 className="main-heading mb-3">
                  Shop <span>Faster & Smarter</span> on the App
                </h1>
                <p className="description mb-4">
                  Over 1 million Indians use the TechBazaar app to discover
                  deals, track deliveries, and shop electronics in seconds.
                </p>

                {/* Feature List (2 Columns) */}
                <div className="row feature-list gy-2 mb-4">
                  <div className="col-sm-6">
                    <span className="check-icon">✓</span> Exclusive flash deals
                  </div>
                  <div className="col-sm-6">
                    <span className="check-icon">✓</span> Live delivery tracking
                  </div>
                  <div className="col-sm-6">
                    <span className="check-icon">✓</span> One-tap return
                    requests
                  </div>
                  <div className="col-sm-6">
                    <span className="check-icon">✓</span> Price drop alerts
                  </div>
                  <div className="col-sm-6">
                    <span className="check-icon">✓</span> Side-by-side
                    comparisons
                  </div>
                  <div className="col-sm-6">
                    <span className="check-icon">✓</span> Chat with sellers
                  </div>
                </div>

                {/* Store Buttons */}
                <div className="d-flex flex-wrap gap-3 pt-2">
                  {/* App Store */}
                  <a href="#" className="btn-store">
                    <span className="store-icon">🍎</span>
                    <div>
                      <span className="sub-text">Download on the</span>
                      <span className="store-name">App Store</span>
                    </div>
                  </a>

                  {/* Google Play */}
                  <a href="#" className="btn-store">
                    <span className="store-icon">🤖</span>
                    <div>
                      <span className="sub-text">Get it on</span>
                      <span className="store-name">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Phone Mockup */}
              <div className="col-lg-5 phone-container">
                <div className="phone-frame">
                  <div className="phone-speaker"></div>
                  <div className="app-icon-preview">📱</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ShopFaster;
