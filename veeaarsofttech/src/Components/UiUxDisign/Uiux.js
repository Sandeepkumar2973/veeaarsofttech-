import React, { useState } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import "./Uiux.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdCollectionsBookmark } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

function Uiux() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div>
      <Navbar />
      <div className="header-container">
        <p className="text-data">UI/UX DESIGNING COMPANY</p>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 services-details-image animated fadeInUp zoomIn"></div>
        </div>

        <div className="services-details-area ptb-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 services-details">
                <div className="services-details-desc">
                  <h2>
                    {" "}
                    <span className="arrow-icon">
                      <CgWebsite />
                    </span>
                    UI/UX Designing
                  </h2>
                  <p style={{ textAlign: "center" }}>
                    UI/UX design is a multidisciplinary approach to creating
                    digital products and applications that prioritize both the
                    User Interface (UI) and User Experience (UX) aspects of
                    design. It involves crafting a seamless and enjoyable
                    interaction between users and digital interfaces while
                    considering the overall user journey and satisfaction.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 services-details-image animated fadeInUp zoomIn">
                <img
                  src="./../../assets/img/uiux.gif"
                  className="wow fadeInUp zoomOnHover"
                  alt="image"
                  style={{ padding: "15px" }}
                />
              </div>
            </div>
            <div className="col-lg-12 services-details">
              <div className="heading">
                <div className="arrow-icon text-center">
                  <MdCollectionsBookmark />
                  We Serve the Best Work
                </div>
              </div>
              <p style={{ textAlign: "left" }}>
                At our <strong>UI/UX Design Company in Delhi</strong>, we take
                pride in serving excellence in every aspect of user interface
                and user experience design. With a dedicated team of skilled
                professionals, we are committed to delivering the very best in
                UI/UX design. From intuitive interfaces to seamless user
                journeys, our experts craft digital experiences that stand out
                in the modern digital landscape. Explore our portfolio and
                experience the pinnacle of UI/UX design expertise right here in
                Delhi
              </p>
            </div>
            <div
              className="col-lg-12 services-details"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img src="./../../assets/img/web-development1.png" className="" />
            </div>
          </div>
        </div>
        <div className="separate" />
      </div>

      <Footer />
    </div>
  );
}

export default Uiux;
