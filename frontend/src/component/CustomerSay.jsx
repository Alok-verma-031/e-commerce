import React from "react";

const CustomerSay = () => {
  return (
    <>
      <div className="container-fluid">
        <section className="p-5">
          <div className="container">
            {/* Section Header */}
            <div className="mb-4">
              <span className="subtitle text-uppercase">
                Real People, Real Reviews
              </span>
              <h2 className="section-title mb-0">
                What Our <span>Customers</span> Say
              </h2>
            </div>

            {/* Cards Grid */}
            <div className="row g-3">
              {/* Card 1 */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100 p-4 border-0 bg-white review-card shadow-sm">
                  <div className="stars mb-1">★★★★★</div>
                  <span className="badge-label mb-3">VERIFIED BUYER</span>
                  <p className="review-text flex-grow-1">
                    {
                      '"Ordered a Samsung AC at midnight and it was delivered and fully installed by 5 PM the next day. ₹4,000 cheaper than the local market!"'
                    }
                  </p>
                  <div className="d-flex align-items-center mt-3">
                    <div className="avatar me-3">👨</div>
                    <div>
                      <div className="user-name">Rahul Sharma</div>
                      <div className="user-location">📍 Delhi NCR</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 (Active/Highlighted) */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100 p-4 border-0 bg-white review-card active shadow-sm">
                  <div className="stars mb-1">★★★★★</div>
                  <span className="badge-label mb-3">VERIFIED BUYER</span>
                  <p className="review-text flex-grow-1">
                    {
                      '"My LG TV arrived with a scratch. Raised a return from the app. Got a callback in 20 mins and replacement was at my door in 2 days. 10/10!"'
                    }
                  </p>
                  <div className="d-flex align-items-center mt-3">
                    <div className="avatar me-3">👩</div>
                    <div>
                      <div className="user-name">Priya Mehta</div>
                      <div className="user-location">📍 Mumbai</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100 p-4 border-0 bg-white review-card shadow-sm">
                  <div className="stars mb-1">★★★★★</div>
                  <span className="badge-label mb-3">VERIFIED SELLER</span>
                  <p className="review-text flex-grow-1">
                    {
                      '"I have a shop in Lajpat Rai Market. Since joining TechBazaar, my online orders are bigger than my physical shop sales every month!"'
                    }
                  </p>
                  <div className="d-flex align-items-center mt-3">
                    <div className="avatar me-3">🧔</div>
                    <div>
                      <div className="user-name">Rajesh Gupta</div>
                      <div className="user-location">📍 Lajpat Rai, Delhi</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100 p-4 border-0 bg-white review-card shadow-sm">
                  <div className="stars mb-1">★★★★★</div>
                  <span className="badge-label mb-3">VERIFIED BUYER</span>
                  <p className="review-text flex-grow-1">
                    {
                      '"No-cost EMI on OnePlus 12 made it easy. Product was 100% genuine with all original accessories. Will always choose TechBazaar first!"'
                    }
                  </p>
                  <div className="d-flex align-items-center mt-3">
                    <div className="avatar me-3">👩‍💻</div>
                    <div>
                      <div className="user-name">Ananya Iyer</div>
                      <div className="user-location">📍 Bangalore</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CustomerSay;
