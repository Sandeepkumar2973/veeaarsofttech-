import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="logo black-logo">
                  <a href="index.html">
                    <img src="assets/img/logo.png" alt="logo" />
                  </a>
                </div>
                <div className="logo white-logo">
                  <a href="index.html">
                    <img src="assets/img/white-logo.png" alt="logo" />
                  </a>
                </div>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget pl-5">
                <h3>Company</h3>
                <ul className="list">
                  <li>
                    <a href="about-1.html">About Us</a>
                  </li>
                  <li>
                    <a href="services-1.html">Services</a>
                  </li>
                  <li>
                    <a href="features.html">Features</a>
                  </li>
                  <li>
                    <a href="pricing.html">Our Pricing</a>
                  </li>
                  <li>
                    <a href="blog-1.html">Latest News</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Support</h3>
                <ul className="list">
                  <li>
                    <a href="faq.html">FAQ's</a>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="terms-conditions.html">Terms &amp; Condition</a>
                  </li>
                  <li>
                    <a href="contact.html">Support Us</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Address</h3>
                <ul className="footer-contact-info">
                  <li>
                    <i data-feather="map-pin" /> 27 Division St, New York, NY
                    10002, USA
                  </li>
                  <li>
                    <i data-feather="mail" /> Email:{" "}
                    <a href="/cdn-cgi/l/email-protection#4c24292020230c3f382d3e383c622f2321">
                      <span
                        className="__cf_email__"
                        data-cfemail="325a575e5e5d724146534046421c515d5f"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                  </li>
                  <li>
                    <i data-feather="phone-call" /> Phone:{" "}
                    <a href="tel:+ (321) 984 754">+ (321) 984 754</a>
                  </li>
                </ul>
                <ul className="social-links">
                  <li>
                    <a href="#" className="facebook" target="_blank">
                      <i data-feather="facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter" target="_blank">
                      <i data-feather="twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="instagram" target="_blank">
                      <i data-feather="instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="linkedin" target="_blank">
                      <i data-feather="linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>
                  Copyright @ StartP. All Rights Reserved by{" "}
                  <a href="https://envytheme.com/" target="_blank">
                    EnvyTheme
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src="assets/img/map.png" className="map" alt="map" />
        <div className="shape1">
          <img src="assets/img/shape1.png" alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src="assets/img/shape2.svg" alt="shape" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
