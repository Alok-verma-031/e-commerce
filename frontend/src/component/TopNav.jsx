import React from "react";

const TopNav = () => {
  return (
    <div className="container-fluid bg-body-tertiary border-bottom">
      <div className="container px-2 px-md-4 py-2">
        <div className="row align-items-center text-center text-md-start gy-1">
          <div className="col-12 col-md-6">
            <h6
              className="mb-0 fw-semibold text-truncate"
              style={{ fontSize: "13px" }}
            >
              Welcome to Softpro Innovations
            </h6>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex align-items-center justify-content-center justify-content-md-end flex-wrap gap-2 gap-md-3">
              <small
                className="d-flex align-items-center gap-1"
                style={{ fontSize: "12px" }}
              >
                <i
                  className="fas fa-map-marker-alt"
                  style={{ color: "rgb(15, 145, 172)" }}
                />
                Deliver to 226021
              </small>
              <span className="text-muted opacity-50">|</span>
              <small
                className="d-flex align-items-center gap-1"
                style={{ fontSize: "12px" }}
              >
                <i
                  className="fa-solid fa-truck"
                  style={{ color: "rgb(15, 145, 172)" }}
                />
                Track Your Order
              </small>
              <span className="text-muted opacity-50">|</span>
              <small
                className="d-flex align-items-center gap-1"
                style={{ fontSize: "12px" }}
              >
                <i
                  className="fas fa-tags"
                  style={{ color: "rgb(15, 145, 172)" }}
                />
                All Offers
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
