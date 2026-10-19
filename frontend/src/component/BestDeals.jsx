import React from "react";

const BestDeals = () => {
  return (
    <div className="container-fluid px-4 bg-dark text-light">
      <div className="row d-flex justify-content-around align-items-center p-4">
        <div className="col-md-6 d-flex align-items-center text-nowrap mb-3 mb-md-0">
          <span className="fs-3 me-2">✨</span>
          <div>
            <h6 className="mb-0">Get The Best Deal First</h6>
            <small className="">subscribe for best deal</small>
          </div>
        </div>

        <div className="col-md-6">
          <div className="input-group">
            <input
              type="email"
              className="form-control rounded-start-pill px-4 py-2 border-1"
              placeholder="Enter your email address..."
            />
            <button className="btn btn-warning rounded-end-pill px-4 fw-bold text-dark">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeals;