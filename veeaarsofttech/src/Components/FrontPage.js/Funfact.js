import React from 'react'
import { Link } from 'react-router-dom'

const Funfact = () => {
    return (
        <>
              <div className="funfacts-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>We always try to understand users expectation</h2>
            <div className="bar" />
            <p className="text-center">
              At Veeaarsofttech, understanding our users' expectations is at the
              heart of our mission. Here's how we ensure we always meet and
              exceed their needs: Active Listening: We prioritize listening to
              our users attentively, whether it's through direct communication
              channels, feedback forms, or user testing sessions. By actively
              listening to their concerns, suggestions, and requirements, we
              gain valuable insights into their expectations.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-6 col-sm-3">
              <div className="funfact">
                <h2
                  className="text-center"
                  style={{
                    color: "#44ce6f",
                    fontSize: "35px",
                    marginBottom: "7px",
                  }}
                >
                  500+
                  {/* <Odometer initialValue={550} duration="4000" formate="{d}" /> */}
                </h2>
                <p className="text-center">Project</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 col-sm-3">
              <div className="funfact">
                <h2
                  className="text-center"
                  style={{
                    color: "#44ce6f",
                    fontSize: "35px",
                    marginBottom: "7px",
                  }}
                >
                  50+
                  {/* <Odometer initialValue={20} duration="4000" formate="{d}" /> */}
                </h2>
                <p className="text-center">Feedback</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 col-sm-3">
              <div className="funfact">
                <h2
                  className="text-center"
                  style={{
                    color: "#44ce6f",
                    fontSize: "35px",
                    marginBottom: "7px",
                  }}
                >
                  50+
                  {/* <Odometer initialValue={70} duration="4000" formate="{d}" /> */}
                </h2>
                <p className="text-center">Workers</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 col-sm-3">
              <div className="funfact">
                <h2
                  className="text-center"
                  style={{
                    color: "#44ce6f",
                    fontSize: "35px",
                    marginBottom: "7px",
                  }}
                >
                  {/* <Odometer initialValue={500} duration="4000" formate="{d}" /> */}
                  200+
                </h2>
                <p className="text-center">Contributors</p>
              </div>
            </div>
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
        </>
    )
}

export default Funfact
