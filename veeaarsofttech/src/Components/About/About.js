import React from "react";
import "./aboutus.css";
import Navbar from "../Header/Navbar";
// import OwlCarousel from "react-owl-carousel";
// import { Facebook, Twitter, Linkedin, Gitlab } from "react-feather";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import "./TeamCarousel.css";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const logos = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const testomonial = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <Header />
      {/* nextline */}
      <div className="about-area ptb-80">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ml-about-img">
                <img src="assets/img/about4.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="ml-about-content">
                <span className="sub-title">About Us</span>
                <h2>Engaging New Audiences Through Smart Approach</h2>
                <div className="bar" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Nullam quis ante. Etiam sit amet orci eget eros faucibus
                  tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
                  sodales sagittis magna. Sed consequat, leo eget bibendum
                  sodales, augue velit cursus nunc.Donec vitae sapien ut libero
                  venenatis faucibus tempus.
                </p>
                <a href="contact.html" className="btn btn-secondary">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="about-inner-area">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our History</h3>
                  <p>
                    Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                    In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                    elei fend et tiram.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our Mission</h3>
                  <p>
                    Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                    In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                    elei fend et tiram.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                <div className="about-text">
                  <h3>Who we are</h3>
                  <p>
                    Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                    In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                    elei fend et tiram.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* nextline */}
      {/* nextline */}
      <div className="team-area ptb-80 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Our Awesome Team</h2>
            <div className="bar" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <Slider {...settings} className="team-slides owl-carousel owl-theme">
          {/* <div className="team-slides owl-carousel owl-theme"> */}
          <div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/1.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Josh Buttler</h3>
                <span>CEO &amp; Founder</span>
              </div>
              <ul>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="gitlab" />
                  </a>
                </li>
              </ul>
              <p>
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </div>
          <div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/2.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Alex Maxwel</h3>
                <span>Marketing Manager</span>
              </div>
              <ul>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="gitlab" />
                  </a>
                </li>
              </ul>
              <p>
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </div>
          <div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/3.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Janny Cotller</h3>
                <span>Web Developer</span>
              </div>
              <ul>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="gitlab" />
                  </a>
                </li>
              </ul>
              <p>
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </div>
          <div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/4.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Jason Statham</h3>
                <span>UX/UI Designer</span>
              </div>
              <ul>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="gitlab" />
                  </a>
                </li>
              </ul>
              <p>
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </div>
          <div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/5.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Corey Anderson</h3>
                <span>Project Manager</span>
              </div>
              <ul>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="gitlab" />
                  </a>
                </li>
              </ul>
              <p>
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </div>
          <div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/1.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Josh Buttler</h3>
                <span>CEO &amp; Founder</span>
              </div>
              <ul>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i data-feather="gitlab" />
                  </a>
                </li>
              </ul>
              <p>
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </div>

          {/* </div> */}
        </Slider>
      </div>

      {/* nextline */}
      {/* nextline */}
      <div className="ml-feedback-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Our Clients Feedback</h2>
            <div className="bar" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <Slider
            {...testomonial}
            className="ml-feedback-slides owl-carousel owl-theme"
          >
            <div>
              <div className="single-ml-feedback-item">
                <div className="client-info">
                  <img src="assets/img/client-image/1.jpg" alt="image" />
                  <h3>Sarah Taylor</h3>
                  <span>CEO at Envato</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid ullam harum sit. Accusantium veritatis dolore ducimus
                  illum, cumque excepturi, autem rerum illo amet placeat odit
                  corporis!
                </p>
                <div className="rating">
                  <i data-feather="star" />
                  <i data-feather="star" />
                  <i data-feather="star" />
                  <i data-feather="star" />
                  <i data-feather="star" />
                </div>
              </div>
            </div>
            <div>
              <div className="single-ml-feedback-item">
                <div className="client-info">
                  <img src="assets/img/client-image/3.jpg" alt="image" />
                  <h3>Steven Smith</h3>
                  <span>CEO at Envato</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid ullam harum sit. Accusantium veritatis dolore ducimus
                  illum, cumque excepturi, autem rerum illo amet placeat odit
                  corporis!
                </p>
                <div className="rating">
                  <i data-feather="star" />
                  <i data-feather="star" />
                  <i data-feather="star" />
                  <i data-feather="star" />
                  <i data-feather="star" />
                </div>
              </div>
            </div>
            <div>
              <div className="single-ml-feedback-item">
                <div className="client-info">
                  <img src="assets/img/client-image/2.jpg" alt="image" />
                  <h3>James Eva</h3>
                  <span>CEO at Envato</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid ullam harum sit. Accusantium veritatis dolore ducimus
                  illum, cumque excepturi, autem rerum illo amet placeat odit
                  corporis!
                </p>
                <div className="rating">
                  <i data-feather="star" />
                  <i data-feather="star" />
                  <i data-feather="star" />
                  <i data-feather="star" />
                  <i data-feather="star" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="shape1">
          <img src="assets/img/shape1.png" alt="shape" />
        </div>
        <div className="shape2 rotateme">
          <img src="assets/img/shape2.svg" alt="shape" />
        </div>
        <div className="shape3">
          <img src="assets/img/shape3.svg" alt="shape" />
        </div>
        <div className="shape4">
          <img src="assets/img/shape4.svg" alt="shape" />
        </div>
        <div className="shape6 rotateme">
          <img src="assets/img/shape4.svg" alt="shape" />
        </div>
        <div className="shape7">
          <img src="assets/img/shape4.svg" alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src="assets/img/shape2.svg" alt="shape" />
        </div>
      </div>
      {/* nextline */}
      {/* nextline */}
      <div className="funfacts-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>We always try to understand users expectation</h2>
            <div className="bar" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-6 col-sm-3">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count={180}>
                    00
                  </span>
                  K
                </h3>
                <p>Downloaded</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 col-sm-3">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count={20}>
                    00
                  </span>
                  K
                </h3>
                <p>Feedback</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 col-sm-3">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count={500}>
                    00
                  </span>
                  +
                </h3>
                <p>Workers</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 col-sm-3">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count={70}>
                    00
                  </span>
                  +
                </h3>
                <p>Contributors</p>
              </div>
            </div>
          </div>
          <div className="contact-cta-box">
            <h3>Have any question about us?</h3>
            <p>Don't hesitate to contact us</p>
            <a href="contact.html" className="btn btn-primary">
              Contact Us
            </a>
          </div>
          <div className="map-bg">
            <img src="assets/img/map.png" alt="map" />
          </div>
        </div>
      </div>
      {/* nextline */}
      {/* nextline */}
      <Slider {...logos} className="partner-slides owl-carousel owl-theme">
        <div>
          <div className="single-ml-partner">
            <a href="#">
              <img src="assets/img/partner-img/partner-1.png" alt="image" />
              <img
                src="assets/img/partner-img/partner-hover1.png"
                alt="image"
              />
            </a>
          </div>
        </div>
        <div className="single-ml-partner">
          <a href="#">
            <img src="assets/img/partner-img/partner-2.png" alt="image" />
            <img src="assets/img/partner-img/partner-hover2.png" alt="image" />
          </a>
        </div>
        <div className="single-ml-partner">
          <a href="#">
            <img src="assets/img/partner-img/partner-3.png" alt="image" />
            <img src="assets/img/partner-img/partner-hover3.png" alt="image" />
          </a>
        </div>
        <div className="single-ml-partner">
          <a href="#">
            <img src="assets/img/partner-img/partner-10.png" alt="image" />
            <img src="assets/img/partner-img/partner-hover10.png" alt="image" />
          </a>
        </div>
        <div className="single-ml-partner">
          <a href="#">
            <img src="assets/img/partner-img/partner-5.png" alt="image" />
            <img src="assets/img/partner-img/partner-hover5.png" alt="image" />
          </a>
        </div>
        <div className="single-ml-partner">
          <a href="#">
            <img src="assets/img/partner-img/partner-6.png" alt="image" />
            <img src="assets/img/partner-img/partner-hover6.png" alt="image" />
          </a>
        </div>
        <div className="single-ml-partner">
          <a href="#">
            <img src="assets/img/partner-img/partner-7.png" alt="image" />
            <img src="assets/img/partner-img/partner-hover7.png" alt="image" />
          </a>
        </div>
      </Slider>

      {/* nextline */}
      <Footer />
    </>
  );
};

export default About;
