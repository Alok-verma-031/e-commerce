import React from "react";

const BottomNav = () => {
  return (
    <>
      <div className="container-fluid p-0 g-0">
        <div className="category-navbar">
          <div className="category-item active">
            <i className="fas fa-snowflake"></i> Air Conditioners
          </div>

          <div className="category-item active">
            <i className="fas fa-cube"></i> Refrigerators
          </div>

          <div className="category-item">
            <i className="fas fa-tv"></i> Televisions
          </div>

          <div className="category-item">
            <i className="fas fa-mobile-alt"></i> Mobiles
          </div>

          <div className="category-item">
            <i className="fas fa-fan"></i> Air Coolers
          </div>

          <div className="category-item">
            <i className="fas fa-fan"></i> Fans
          </div>

          <div className="category-item">
            <i className="fas fa-soap"></i> Washing Machines
          </div>

          <div className="category-item">
            <i className="fas fa-laptop"></i> Laptops
          </div>

          <div className="category-item">
            <i className="fas fa-headphones"></i> Audio
          </div>

          <div className="category-item">
            <i className="fas fa-camera"></i> Cameras
          </div>

          <div className="category-item">
            <i className="fas fa-clock"></i> Smartwatches
          </div>

          <div className="category-item">
            <i className="fas fa-tools"></i> Accessories
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNav;
