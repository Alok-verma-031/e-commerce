import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid text-light bg-navyblue py-5">
        <div className="row px-3 px-md-5 py-3 g-4">
          
          {/* Company Info & Social Links */}
          <div className="col-12 col-lg-3 text-light">
            <h5 className="fw-bold mb-2">Softpro Innovations</h5>
            <small className="text-secondary d-block" style={{ lineHeight: "1.6" }}>
              Softpro Innovations is a modern multi-vendor ecommerce marketplace
              providing secure shopping, trusted sellers and fast delivery
              experience.
            </small>
            <div className="py-3">
              <div className="d-flex justify-content-start gap-3">
                <a href="#" className="px-2 py-1 rounded-circle bg-body-secondary text-primary d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px" }}>
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="px-2 py-1 rounded-circle bg-body-secondary text-danger d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px" }}>
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="px-2 py-1 rounded-circle bg-body-secondary text-dark d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px" }}>
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="#" className="px-2 py-1 rounded-circle bg-body-secondary text-primary d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px" }}>
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-sm-4 col-lg-2">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled text-secondary m-0" style={{ lineHeight: "2" }}>
              <li><a href="#" className="text-decoration-none text-secondary">Home</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Products</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Services</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">About Us</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-6 col-sm-4 col-lg-2">
            <h6 className="fw-bold mb-3 text-nowrap">Customer Service</h6>
            <ul className="list-unstyled text-secondary m-0" style={{ lineHeight: "2" }}>
              <li><a href="#" className="text-decoration-none text-secondary">Careers</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Terms & Conditions</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Privacy Policy</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Returns</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Help Center</a></li>
            </ul>
          </div>

          {/* For Seller */}
          <div className="col-6 col-sm-4 col-lg-2">
            <h6 className="fw-bold mb-3">For Seller</h6>
            <ul className="list-unstyled text-secondary m-0" style={{ lineHeight: "2" }}>
              <li><a href="#" className="text-decoration-none text-secondary">Become Seller</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Seller Dashboard</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Seller Policy</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Payments</a></li>
              <li><a href="#" className="text-decoration-none text-secondary">Seller Support</a></li>
            </ul>
          </div>

          {/* Contact / Newsletter Info */}
          <div className="col-12 col-sm-12 col-lg-3">
            <h6 className="fw-bold mb-3">Contact Us</h6>
            <ul className="list-unstyled text-secondary m-0" style={{ lineHeight: "2" }}>
              <li>📍 Lucknow, Uttar Pradesh, India</li>
              <li>✉️ <small>support@softproinnovations.com</small></li>
              <li>📞 +91 98765 43210</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="row px-3 px-md-5 mt-3">
          <div className="col-12">
            <hr className="border-secondary" />
            <div className="text-center">
              <p className="text-secondary mb-0" style={{ fontSize: "0.85rem" }}>
                &copy; 2026 Softpro Innovations. All Rights Reserved | Designed by{" "}
                <span className="text-orange fw-semibold">Alok Kumar Verma</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;