import React, { useRef, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineMailLock } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";

const Contact = () => {
  const form = useRef();
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [countdown, setCountdown] = useState(10);

  const sendEmail = (e) => {
    e.preventDefault();

    if (isButtonDisabled) {
      return;
    }

    emailjs
      .sendForm(
        "service_wy3cq7z",
        "template_kb58mna",
        form.current,
        "-4c7osibfsv1-3mdc"
      )
      .then(
        (result) => {
          form.current.reset();
          setButtonDisabled(true);
          startCountdown();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const startCountdown = () => {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(intervalId);
          setTimeout(() => {
            setButtonDisabled(false);
            setCountdown(10);
          }, 10000);
        }
        return prevCountdown - 1;
      });
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="header-container">
          <p className="text-data">CONTACT US</p>
        </div>
        {/* Start Contact Info Area */}
        <div className="contact-info-area ptb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="contact-info-box">
                  <div className="icon">
                    <i data-feather="mail">
                      <MdOutlineMailLock />
                    </i>
                  </div>
                  <h3>Mail Here</h3>
                  <p>
                    <Link to="">
                      <span
                        className="__cf_email__"
                        data-cfemail="4b22252d240b383f2a393f3b65282426"
                      >
                        Email:&nbsp;&nbsp;&nbsp;info@veeaarsofttech.com
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="contact-info-box">
                  <div className="icon">
                    <i data-feather="map-pin">
                      <FaMapLocationDot />
                    </i>
                  </div>
                  <h3>Visit Here</h3>
                  <p>
                    3rd Floor Plot no 17 pocket 22 near mega mall rohini sector
                    24 110085
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                <div className="contact-info-box">
                  <div className="icon">
                    <i data-feather="phone">
                      <MdAddIcCall />
                    </i>
                  </div>
                  <h3>Call Here</h3>
                  {/* <p>
                    <a href="#">+91 84484 41698</a>
                  </p> */}
                  <p>
                    <Link t="/">+91 95996 61378​</Link>,&nbsp;&nbsp;
                    <Link to="/">+91 84484 41698</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Contact Info Area */}

        {/* <!-- Map --> */}
        <div id="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13994.39627372625!2d77.08165424156012!3d28.73152562574949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d06b62e642587%3A0x55c0d57bfc11ad38!2sPocket%2017%2C%20Sector-24%2C%20Rohini%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1710160572288!5m2!1sen!2sin" />
        </div>

        {/* Start Contact Area */}
        <div className="contact-area ptb-80">
          <div className="container">
            <div className="section-title">
              <h2>Get In Touch With Us</h2>
              <div className="bar" />
              <p>
                Do not hesitate to reach out. Just fill in the contact form here
                and we’ll be sure to reply as fast as possible.
              </p>
            </div>
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <img
                  src="./../../assets/img/contact.png"
                  alt="image"
                  className="wow fadeInUp zoomOnHover"
                  style={{ padding: "10px" }}
                />
              </div>
              <div className="col-lg-6 col-md-12">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          required
                          data-error="Please enter your name"
                          placeholder="Name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          required
                          data-error="Please enter your email"
                          placeholder="Email"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="phone_number"
                          id="phone_number"
                          required
                          data-error="Please enter your number"
                          className="form-control"
                          placeholder="Phone"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="msg_subject"
                          id="msg_subject"
                          className="form-control"
                          required
                          data-error="Please enter your subject"
                          placeholder="Subject"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          cols={30}
                          rows={5}
                          required
                          data-error="Write your message"
                          placeholder="Your Message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <button
                        type="submit"
                        disabled={isButtonDisabled}
                        className="btn btn-primary"
                      >
                        {isButtonDisabled
                          ? `Sending... (${countdown})`
                          : "Send Email"}
                      </button>
                      <div id="msgSubmit" className="h3 text-center hidden" />
                      <div className="clearfix" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* End Contact Area */}
        <Footer />
      </div>
    </>
  );
};

export default Contact;
