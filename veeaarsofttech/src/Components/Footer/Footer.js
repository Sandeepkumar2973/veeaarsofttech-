import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";
// import { FaXYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="logo black-logo">
                  <Link to="/">
                    <img
                      src="https://veeaarsofttech.com/wp-content/uploads/2024/02/logo-png-veeaar-1.png"
                      alt="logo"
                      style={{ width: "100px", height: "auto", margin: -50 }}
                    />
                  </Link>
                </div>
                {/* <div className="logo white-logo">
            <Link to="/">
            <img src="https://veeaarsofttech.com/wp-content/uploads/2024/02/logo-png-veeaar-1.png" alt="logo" 
            style={{width:"80px", height:"auto"}}/>
            </Link>
          </div> */}
                <p>
                  Veeaar softtech pvt ltd is a leading IT solutions provider
                  dedicated to delivering cutting-edge technology services and
                  solutions to businesses worldwide. Established in 2021, our
                  company has steadily grown to become a trusted partner for
                  organizations seeking innovative IT solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget pl-5">
                <h3 className="text-center">Company</h3>
                <ul className="list">
                  <li class="nav-item">
                    <Link to="/website-development-company">
                      Website Development <i data-feather="chevron-right"></i>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/application-development-company">
                      Application Development{" "}
                      <i data-feather="chevron-right"></i>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/digital-marketing-company">
                      Digital Marketing <i data-feather="chevron-right"></i>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/ui-ux-designing-company">
                      Ui/UX Designing <i data-feather="chevron-right"></i>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/graphic-designing-company">
                      Graphic Designing<i data-feather="chevron-right"></i>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/data-science-consulting">
                      Data Science Consulting
                      <i data-feather="chevron-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3 className="text-center">Support</h3>
                <ul className="list">
                  <li class="nav-item">
                    <Link to="/about-us">
                      About Us <i data-feather="chevron-down"></i>
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link to="/blog">
                      Blog <i data-feather="chevron-down"></i>
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy &amp; Policy</Link>
                  </li>
                  <li>
                    <Link to="/term-conditions">Terms &amp; Condition</Link>
                  </li>
                  <li>
                    <Link to="/refund">Refund Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3 className="text-center">Address</h3>
                <ul className="footer-contact-info">
                  <li>
                    <i data-feather="map-pin" /> 3rd Floor Plot no 17 pocket 22
                    rohini sector 24 New delhi B-80/2 Singh ENC Prem Nagar-III
                    New delhi 110041
                  </li>
                  <li>
                    <i data-feather="mail" /> Email:
                    <Link to="/">
                      <span
                        className="__cf_email__"
                        data-cfemail="325a575e5e5d724146534046421c515d5f"
                      >
                        info@veeaarsofttech.com
                      </span>
                    </Link>
                  </li>
                  <li>
                    <i data-feather="phone-call" /> Phone:
                    <Link to="tel:+ (91) 84484 41698">+ (91) 84484 41698 </Link>
                  </li>
                  <li>
                    <i data-feather="phone-call" /> Phone:
                    <Link to="tel:+ (91) 95996 61378">+ (91) 95996 61378</Link>
                  </li>
                </ul>
                <ul className="social-links">
                  <li>
                    <Link
                      to="https://www.facebook.com/people/Veeaarsofttech/61551123982496/"
                      className="facebook"
                      target="_blank"
                    >
                      <i data-feather="facebook" />
                      <FaFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/https://www.youtube.com/@veeaarsoftech"
                      className="youtube"
                      target="_blank"
                    >
                      <i data-feather="youtube" />
                      <FaYoutube />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.instagram.com/veeaarsofttechpvtltd/"
                      className="instagram"
                      target="_blank"
                    >
                      <i data-feather="instagram" />
                      <FaInstagramSquare />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.linkedin.com/company/veeaar-softtech-pvt-ltd/"
                      className="linkedin"
                      target="_blank"
                    >
                      <i data-feather="linkedin" />
                      <FaLinkedin />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p className="text-center">
                  <Link to="/" target="_blank">
                    Copyright @ 2022 All Rights Reserved by VeeAarSoftTech
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
