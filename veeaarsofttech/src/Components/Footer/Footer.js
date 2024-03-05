import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
    return (
       <>
       <footer className="footer-area bg-f7fafd">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-footer-widget">
          <div className="logo black-logo">
            <Link to="/">
            <img src="https://veeaarsofttech.com/wp-content/uploads/2024/02/logo-png-veeaar-1.png" alt="logo" 
            style={{width:"80px", height:"auto"}}/>
            </Link>
          </div>
          {/* <div className="logo white-logo">
            <Link to="/">
            <img src="https://veeaarsofttech.com/wp-content/uploads/2024/02/logo-png-veeaar-1.png" alt="logo" 
            style={{width:"80px", height:"auto"}}/>
            </Link>
          </div> */}
          <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-footer-widget pl-5">
          <h3 className='text-center'>Company</h3>
          <ul className="list">
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">Features</Link></li>
            <li><Link to="/">Our Pricing</Link></li>
            <li><Link to="/">Latest News</Link></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-footer-widget">
          <h3 className='text-center'>Support</h3>
          <ul className="list">
            <li><Link to="/">FAQ's</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">Terms &amp; Condition</Link></li>
            <li><Link to="/">Support Us</Link></li>
            <li><Link to="/">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-footer-widget">
          <h3 className='text-center'>Address</h3>
          <ul className="footer-contact-info">
            <li><i data-feather="map-pin" /> 27 Division St, New York, NY 10002, USA</li>
            <li><i data-feather="mail" /> Email: <Link to="/"><span className="__cf_email__" data-cfemail="325a575e5e5d724146534046421c515d5f">[email&nbsp;protected]</span></Link></li>
            <li><i data-feather="phone-call" /> Phone: <Link to="tel:+ (321) 984 754">+ (91) 100000000 </Link></li>
          </ul>
          <ul className="social-links">
            <li><Link to="/" className="facebook" target="_blank"><i data-feather="facebook" /><FaFacebook /></Link></li>
            <li><Link to="/" className="twitter" target="_blank"><i data-feather="twitter" /><FaXTwitter /></Link></li>
            <li><Link to="/" className="instagram" target="_blank"><i data-feather="instagram" /><FaInstagramSquare /></Link></li>
            <li><Link to="/" className="linkedin" target="_blank"><i data-feather="linkedin" /><FaLinkedin /></Link></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-12 col-md-12">
        <div className="copyright-area">
          <p className='text-center'><Link to="/" target="_blank"> Copyright @ 2022 All Rights Reserved by VeeAarSoftTech</Link></p>
        </div>
      </div>
    </div>
  </div>
  <img src="assets/img/map.png" className="map" alt="map"  style={{width:"20px", height:"20px"}}/>
  <div className="shape1"><img src="assets/img/shape1.png" alt="shape" style={{width:"20px", height:"20px"}}/></div>
  <div className="shape8 rotateme"><img src="assets/img/shape2.svg" alt="shape" style={{width:"20px", height:"20px"}}/></div>
</footer>
       </>
    )
}

export default Footer
