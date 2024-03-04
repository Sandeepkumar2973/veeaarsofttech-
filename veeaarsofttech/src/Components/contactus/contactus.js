import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Header/Navbar";

import React from "react";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div>
        <Header />
        {/* Start Contact Info Area */}
        <div className="contact-info-area ptb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="contact-info-box">
                  <div className="icon">
                    <i data-feather="mail" />
                  </div>
                  <h3>Mail Here</h3>
                  <p>
                    <a href="#">
                      <span
                        className="__cf_email__"
                        data-cfemail="ec8d88818582ac9f988d9e989cc28f8381"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      <span
                        className="__cf_email__"
                        data-cfemail="4b22252d240b383f2a393f3b65282426"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="contact-info-box">
                  <div className="icon">
                    <i data-feather="map-pin" />
                  </div>
                  <h3>Visit Here</h3>
                  <p>
                    27 Division St, New York, NY 10002, United States of America
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                <div className="contact-info-box">
                  <div className="icon">
                    <i data-feather="phone" />
                  </div>
                  <h3>Call Here</h3>
                  <p>
                    <a href="#">+123 456 7890</a>
                  </p>
                  <p>
                    <a href="#">+241 452 4526</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Contact Info Area */}

        {/* <!-- Map --> */}
        <div id="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45326.805635336634!2d-74.2196370186449!3d41.213491375130594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2dfa9c79e079f%3A0xfb7cbf231a6fe59e!2sDater%20Mountain%20Nature%20Park!5e0!3m2!1sen!2sbd!4v1615638499527!5m2!1sen!2sbd" />
        </div>

        {/* Start Contact Area */}
        <div className="contact-area ptb-80">
          <div className="container">
            <div className="section-title">
              <h2>Get In Touch With Us</h2>
              <div className="bar" />
              <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
            </div>
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <img src="assets/img/1.png" alt="image" />
              </div>
              <div className="col-lg-6 col-md-12">
                <form id="contactForm">
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
                      <button type="submit" className="btn btn-primary">
                        Send Message
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
