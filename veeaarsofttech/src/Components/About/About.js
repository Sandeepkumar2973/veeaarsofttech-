import React, { useState } from "react";
import "./aboutus.css";
import Navbar from "../Header/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Odometer from "./../FrontPage.js/Odometer";

const About = ({ initialValue }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  //this is for  section clients
  const partnerLogos = [
    {
      imgSrc: "assets/img/partner-img/partner-1.png",
      hoverImgSrc: "assets/img/partner-img/partner-hover1.png",
    },
    {
      imgSrc: "assets/img/partner-img/partner-2.png",
      hoverImgSrc: "assets/img/partner-img/partner-hover2.png",
    },
    {
      imgSrc: "assets/img/partner-img/partner-3.png",
      hoverImgSrc: "assets/img/partner-img/partner-hover3.png",
    },
    {
      imgSrc: "assets/img/partner-img/partner-10.png",
      hoverImgSrc: "assets/img/partner-img/partner-hover10.png",
    },
    {
      imgSrc: "assets/img/partner-img/partner-5.png",
      hoverImgSrc: "assets/img/partner-img/partner-hover5.png",
    },
    {
      imgSrc: "assets/img/partner-img/partner-6.png",
      hoverImgSrc: "assets/img/partner-img/partner-hover6.png",
    },
    {
      imgSrc: "assets/img/partner-img/partner-7.png",
      hoverImgSrc: "assets/img/partner-img/partner-hover7.png",
    },
  ];

  //this is for main-banner animation shapes
  const shapesData = [
    {
      className: "shape1",
      imgSrc: "./../../assets/img/shape1.png",
      alt: "shape",
    },
    {
      className: "shape2 rotateme",
      imgSrc: "./../../assets/img/shape2.svg",
      alt: "shape",
    },
    {
      className: "shape3",
      imgSrc: "./../../assets/img/shape3.svg",
      alt: "shape",
    },
    {
      className: "shape4",
      imgSrc: "./../../assets/img/shape4.svg",
      alt: "shape",
    },
    {
      className: "shape5",
      imgSrc: "./../../assets/img/shape5.png",
      alt: "shape",
    },
    {
      className: "shape6 rotateme",
      imgSrc: "./../../assets/img/shape4.svg",
      alt: "shape",
    },
    {
      className: "shape7",
      imgSrc: "./../../assets/img/shape4.svg",
      alt: "shape",
    },
    {
      className: "shape8 rotateme",
      imgSrc: "./../../assets/img/shape2.svg",
      alt: "shape",
    },
  ];

  ////////////////

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="about-container">
        <p className="text-data">ABOUT US</p>
      </div>
      {/* nextline */}
      <div className="about-area ptb-80">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 services-right-image">
              <img
                src="assets/img/services-right-image/book-self.png"
                className="wow fadeInDown"
                data-wow-delay="0.6s"
                alt="book-self"
              />
              <img
                src="assets/img/services-right-image/box.png"
                className="wow fadeInUp"
                data-wow-delay="0.6s"
                alt="box"
              />
              <img
                src="assets/img/services-right-image/chair.png"
                className="wow fadeInLeft"
                data-wow-delay="0.6s"
                alt="chair"
              />
              <img
                src="assets/img/services-right-image/cloud.png"
                className="wow zoomIn"
                data-wow-delay="0.6s"
                alt="cloud"
              />
              <img
                src="assets/img/services-right-image/cup.png"
                className="wow bounceIn"
                data-wow-delay="0.6s"
                alt="cup"
              />
              <img
                src="assets/img/services-right-image/flower-top.png"
                className="wow fadeInDown"
                data-wow-delay="0.6s"
                alt="flower"
              />
              <img
                src="assets/img/services-right-image/head-phone.png"
                className="wow zoomIn"
                data-wow-delay="0.6s"
                alt="head-phone"
              />
              <img
                src="assets/img/services-right-image/monitor.png"
                className="wow fadeInUp"
                data-wow-delay="0.6s"
                alt="monitor"
              />
              <img
                src="assets/img/services-right-image/mug.png"
                className="wow rotateIn"
                data-wow-delay="0.6s"
                alt="mug"
              />
              <img
                src="assets/img/services-right-image/table.png"
                className="wow fadeInUp"
                data-wow-delay="0.6s"
                alt="table"
              />
              <img
                src="assets/img/services-right-image/tissue.png"
                className="wow zoomIn"
                data-wow-delay="0.6s"
                alt="tissue"
              />
              <img
                src="assets/img/services-right-image/water-bottle.png"
                className="wow zoomIn"
                data-wow-delay="0.6s"
                alt="water-bottle"
              />
              <img
                src="assets/img/services-right-image/wifi.png"
                className="wow fadeInLeft"
                data-wow-delay="0.6s"
                alt="wifi"
              />
              <img
                src="assets/img/services-right-image/cercle-shape.png"
                className="bg-image rotateme"
                alt="shape"
              />
              <img
                src="assets/img/services-right-image/main-pic.png"
                className="wow fadeInUp"
                data-wow-delay="0.6s"
                alt="main-pic"
              />
            </div>
            <div className="col-lg-6 col-md-12 hide-image">
              <img  src="./../../assets/img/01-UIUX.png"/>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="ml-about-content">
                <span className="sub-title text-left">About Us</span>
                <h1 className="text-left">Inspiring Tech Needs For Business</h1>
                <div className="bar" />
                <p className="text-left">
                  Veeaar Softtech pvt ltd is an IT service provider that holds
                  expertise in website development services, digital marketing
                  services, web designing and application development services
                  along with cloud computing and other IT services and
                  solutions. We work with an unparalleled swiftness to stand up
                  to our client’s requirements and deliver what is expected out
                  of us.
                </p>
                <Link to="/contact-us" className="btn btn-secondary">
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="about-inner-area">
          <div className="rows-top" style={{ paddingTop: "40px" }}>
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3 style={{ textAlign: "left" }}>Our History</h3>
                  <p style={{ textAlign: "left" }}>
                    Veeaar Softtech, a pioneering IT company, boasts a rich
                    history of innovation, excellence, and client success in
                    software development and technology solutions.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3 style={{ textAlign: "left" }}>Our Mission</h3>
                  <p style={{ textAlign: "left" }}>
                    "Empowering businesses with innovative solutions, Veeaar
                    Softtech is dedicated to delivering cutting-edge IT services
                    for sustained growth and success."
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                <div className="about-text">
                  <h3 style={{ textAlign: "left" }}>Who we are</h3>
                  <p style={{ textAlign: "left" }}>
                    Veeaar SoftTech is a dynamic IT company, delivering
                    innovative solutions and cutting-edge technology to empower
                    businesses worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Start Fun Facts Area  */}
      <div className="funfacts-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>We always try to understand users expectation</h2>
            <div className="bar" />
          </div>
          <div className="contact-cta-box">
            <h3>Have any question about us?</h3>
            <p>Don't hesitate to contact us</p>
            <Link to="/contact-us" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
          <div className="map-bg">
            <img
              className="map-image"
              src="../../assets/img/map.png"
              alt="map"
              style={{ width: "100%", height: "390px" }}
            />
          </div>
        </div>
        <div className="shape8 rotateme">
          <img
            src="assets/img/shape2.svg"
            alt="shape"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
        <div className="shape2 rotateme">
          <img
            src="assets/img/shape2.svg"
            alt="shape"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
        <div classclassName="shape7">
          <img
            src="assets/img/shape4.svg"
            alt="shape"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
        <div className="shape4">
          <img
            src="assets/img/shape4.svg"
            alt="shape"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
      </div>

      <div className="partner-area partner-section">
        <div className="container">
          <h5 className="text-center">
            More that 1.5 million businesses and organizations use StartP
          </h5>
          <div className="partner-inner">
            <Slider
              {...settings}
              className="partner-slides owl-carousel owl-theme"
            >
              {partnerLogos.map((partner, index) => (
                <div key={index}>
                  <div
                    className="single-ml-partner"
                    style={{ marginBottom: "20px", padding: "10px" }}
                  >
                    <Link to="/">
                      <img
                        src={partner.imgSrc}
                        alt="image"
                        style={{ width: "20px", height: "20px" }}
                      />
                      <img
                        src={partner.hoverImgSrc}
                        alt="image"
                        style={{ width: "20px", height: "20px" }}
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div>
          {shapesData.map((shape, index) => (
            <div key={index} className={shape.className}>
              <img
                className="shape_img"
                src={shape.imgSrc}
                alt={shape.alt}
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          ))}
        </div>
      </div>
    <Footer />
    </>
  );
};

export default About;
