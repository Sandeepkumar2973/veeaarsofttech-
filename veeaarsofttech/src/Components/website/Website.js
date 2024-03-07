import React, { useState } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Website.css"

function Website() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <Navbar />
      <div className="header-container">
      <p className="text-data">WEBSITE DEVELOPMENT / VEEAARSOFTTECH</p>
      </div>
<div className="services-details-area ptb-80">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 services-details">
        <div className="services-details-desc">
          <h3>Website Development Company in Delhi</h3>
          <p>Welcome to our <strong>Website Development Company in Delhi</strong>, where innovation meets excellence. As industry leaders, we specialize in crafting cutting-edge websites that not only look stunning but also deliver exceptional user experiences. Our dedicated team of experts thrives on turning your digital vision into reality. With a customer-centric approach, we take pride in exceeding your expectations and helping your business thrive in the online world. Explore our services and let us be your trusted partner in building a strong online presence.</p>
        </div>
      </div>
      <div className="col-lg-6 services-details-image animated fadeInUp zoomIn">
    <img src="./../../assets/img/web-development.jpg" className="wow fadeInUp zoomOnHover" alt="image" />
    </div>

    <div className="col-lg-12 services-details">
      <h3>Benefits of developing a good website?</h3>
          <ul>
            <li><strong>Global Reach:</strong>Extend your reach to a worldwide audience, transcending geographical boundaries.</li>
            <li><strong>Enhanced Credibility:</strong>Establish trust and credibility with a professionally designed website.</li>
            <li><strong>Improved Visibility:</strong>Optimize for search engines to boost your online discoverability.
Engaging User</li>
            <li><strong>Experience: </strong>Captivate visitors with compelling content and user-friendly design.</li>
            <li><strong>Lead Generation:</strong>Capture valuable leads through strategic forms and calls-to-action.</li>
            <li><strong>Effective Brand Promotion:</strong>Consistent design and messaging reinforce your brand identity.</li>
            <li><strong>Informed Decision-Making:</strong>Analyze user behavior data to drive continuous improvements.</li>
            <li><strong>Mobile Compatibility:</strong>Ensure your site functions seamlessly on all devices, catering to mobile users.</li>
            <li><strong>Cost-Effective Marketing:</strong>Reduce marketing costs compared to traditional methods with an online presence.</li>
            <li><strong>Competitive Advantage:</strong>Stay ahead in the digital landscape and outshine competitors.</li>
          </ul>
      </div>

    </div>
    <div className="separate" />
    <div className="row align-items-center">
      <div className="col-lg-6 services-details-image animated fadeInUp zoomIn">
        <img src="./../../assets/img/web-development1.png" className="wow fadeInUp zoomOnHover" alt="image" style={{width:"100%", height:"auto"}}/>
      </div>

      <div className="col-lg-6 services-details">
        <div className="services-details-desc">
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
    <img src="./../../assets/img/web-development.jpg" className="wow fadeInUp zoomOnHover" alt="image" />
    
</div>

    </div>
    <div className="separate" />
    <div className="row align-items-center">
      <div className="col-lg-6 services-details-image animated fadeInUp zoomIn">
        <img src="./../../assets/img/web-development1.png" className="wow fadeInUp zoomOnHover" alt="image" />
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

export default Website;
