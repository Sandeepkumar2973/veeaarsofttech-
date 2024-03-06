import React, { useState } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Digital.css"

function Digital() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <Navbar />
      <div className="header-container">
      <p className="text-data">DIGITAL MARKETING/ VEEAARSOFTTECH</p>
      </div>
      <div className="services-details-area ptb-80">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 services-details">
        <div className="services-details-desc">
          <h3>Incredible Infrastructure</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer.</p>
          <p>Took a galley of type and scrambled it to make a type specimen book. survived not only five centuries, but also the leap into electronic remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer when an unknown.</p>
        </div>
      </div>
      <div className="col-lg-6 services-details-image animated fadeInUp zoomIn">
    <img src="./../../assets/img/deigitalmarketing.png" className="wow fadeInUp zoomOnHover" alt="image" />
</div>
    </div>
    <div className="separate" />
    <div className="row align-items-center">
      <div className="col-lg-6 services-details-image animated fadeInUp zoomIn">
        <img src="./../../assets/img/digitalmarketing2.jpg" className="wow fadeInUp zoomOnHover" alt="image" />
      </div>
      <div className="col-lg-6 services-details">
        <div className="services-details-desc">
          <p>Took a galley of type and scrambled it to make a type specimen book. survived not only five centuries, but also the leap into electronic remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer when an unknown.</p>
      

          <div className="services-details-accordion">
      <ul className="accordion">
        <li className="accordion-item">
          <a
            className={`accordion-title ${activeIndex === 0 ? 'active' : ''}`}
            onClick={() => handleAccordionToggle(0)}
          >
            <i className="flaticon-plus" />
            Which material types can you work with?
          </a>
          <div className={`accordion-content ${activeIndex === 0 ? 'show' : 'collapse'}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida.
            </p>
          </div>
        </li>
        <li className="accordion-item">
          <a
            className={`accordion-title ${activeIndex === 1 ? 'active' : ''}`}
            onClick={() => handleAccordionToggle(1)}
          >
            <i className="flaticon-plus" />
            Another question?
          </a>
          <div className={`accordion-content ${activeIndex === 1 ? 'show' : 'collapse'}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            </p>
          </div>
        </li>
        {/* Add more accordion items as needed */}
      </ul>
    </div>

        </div>
      </div>
    </div>
  </div>
</div>
      <Footer />
    </div>
  );
}

export default Digital;
