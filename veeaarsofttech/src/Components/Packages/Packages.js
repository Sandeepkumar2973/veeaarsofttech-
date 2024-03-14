import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../Header/Navbar";
import Footer from '../Footer/Footer';

const Packages = () => {
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
   //this is for  section pricing plan
   const pricingPlans = [
    {
      title: "Basic Plan",
      price: 12999,
      features: [
        "5 GB Bandwidth",
        "Highest Speed",
        "1 GB Storage",
        "Unlimited Website",
        "Unlimited Users",
        "24x7 Great Support",
        "Data Security and Backups",
        "Monthly Reports and Analytics",
        "",
      ],
    },
    {
      title: "Advanced Plan",
      price: 19999,
      features: [
        "10 GB Bandwidth",
        "Highest Speed",
        "3 GB Storage",
        "Unlimited Website",
        "Unlimited Users",
        "24x7 Great Support",
        "Data Security and Backups",
        "Monthly Reports and Analytics",
        "",
      ],
    },
    {
      title: "Expert Plan",
      price: 35999,
      features: [
        "15 GB Bandwidth",
        "Highest Speed",
        "5 GB Storage",
        "Unlimited Website",
        "Unlimited Users",
        "24x7 Great Support",
        "Data Security and Backups",
        "Monthly Reports and Analytics",
        "",
      ],
    },
  ];
    return (
       <>
       <Navbar />
       <div className="header-container">
        <p className="text-data">Service Price</p>
      </div>
          {/* Start Pricing Area */}
      <div className="pricing-area ptb-80 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2 className="text-center">Pricing Plans</h2>
            <div className="bar" />
            <p className="text-center">
              "Explore our pricing plans for flexible options tailored to your
              needs. Affordable, transparent, and feature-rich solutions
              designed to empower your business growth. Choose wisely, thrive
              effortlessly."
            </p>
          </div>
          <div className="row">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3"
              >
                <div className="pricing-table">
                  <div className="pricing-header">
                    <h3 className="text-center">{plan.title}</h3>
                  </div>
                  <div className="price">
                    <span>
                      <sup>₹</sup>
                      {plan.price.toFixed(2)} <span>/Mon</span>
                    </span>
                  </div>
                  <div
                    className="pricing-features"
                    style={{ cursor: "pointer" }}
                  >
                    <div>
                      {plan.features.map((feature, i) => (
                        <p key={i} className={i < 6 ? "active" : ""}>
                          {feature}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="pricing-footer">
                    <Link to="/" className="btn btn-primary">
                      Select Plan
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
      {/* End Pricing Area*/}
      <Footer />
       </>
    )
}

export default Packages
