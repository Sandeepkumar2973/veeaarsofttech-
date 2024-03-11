import React, { useState } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import "./Website.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdCollectionsBookmark } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

function Website() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <Navbar />
      <div className="header-container">
        <p className="text-data">WEBSITE DEVELOPMENT COMPANY</p>
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
                  Website Development Company in Delhi
                </h2>
                <p style={{ color: "black" }}>
                  Welcome to our{" "}
                  <strong>Website Development Company in Delhi</strong>, where
                  innovation meets excellence. As industry leaders, we
                  specialize in crafting cutting-edge websites that not only
                  look stunning but also deliver exceptional user experiences.
                  Our dedicated team of experts thrives on turning your digital
                  vision into reality. With a customer-centric approach, we take
                  pride in exceeding your expectations and helping your business
                  thrive in the online world. Explore our services and let us be
                  your trusted partner in building a strong online presence.
                </p>
              </div>
            </div>
            <div className="col-lg-6 services-details-image animated fadeInUp zoomIn">
              <img
                src="./../../assets/img/web-development.jpg"
                className="wow fadeInUp zoomOnHover"
                alt="image"
                style={{ padding: "15px" }}
              />
            </div>
            <div className="col-lg-12 services-details">
              <div className="heading">
                <span className="arrow-icon">
                  <MdCollectionsBookmark />
                </span>
                Benefits of developing a good website?
              </div>
              <ul typeof="">
                <li>
                  <strong>
                    <span className="arrow-icon">
                      <FaArrowAltCircleRight />
                    </span>
                    Global Reach:
                  </strong>
                  Extend your reach to a worldwide audience, transcending
                  geographical boundaries.
                </li>
                <li>
                  <strong>
                    <span className="arrow-icon">
                      <FaArrowAltCircleRight />
                    </span>
                    Enhanced Credibility:
                  </strong>
                  Establish trust and credibility with a professionally designed
                  website.
                </li>
                <li>
                  <strong>
                    <span className="arrow-icon">
                      <FaArrowAltCircleRight />
                    </span>
                    Improved Visibility:
                  </strong>
                  Optimize for search engines to boost your online
                  discoverability. Engaging User
                </li>
                <li>
                  <strong>
                    <span className="arrow-icon">
                      <FaArrowAltCircleRight />
                    </span>
                    Experience:{" "}
                  </strong>
                  Captivate visitors with compelling content and user-friendly
                  design.
                </li>
                <li>
                  <strong>
                    <span className="arrow-icon">
                      <FaArrowAltCircleRight />
                    </span>
                    Lead Generation:
                  </strong>
                  Capture valuable leads through strategic forms and
                  calls-to-action.
                </li>
                <li>
                  <strong>
                    <span className="arrow-icon">
                      <FaArrowAltCircleRight />
                    </span>
                    Effective Brand Promotion:
                  </strong>
                  Consistent design and messaging reinforce your brand identity.
                </li>
                <li>
                  <strong>
                    <span className="arrow-icon">
                      <FaArrowAltCircleRight />
                    </span>
                    Informed Decision-Making:
                  </strong>
                  Analyze user behavior data to drive continuous improvements.
                </li>
                <li>
                  <strong>
                    <span className="arrow-icon">
                      <FaArrowAltCircleRight />
                    </span>
                    Mobile Compatibility:
                  </strong>
                  Ensure your site functions seamlessly on all devices, catering
                  to mobile users.
                </li>
                <li>
                  <strong>
                    <span className="arrow-icon">
                      <FaArrowAltCircleRight />
                    </span>
                    Cost-Effective Marketing:
                  </strong>
                  Reduce marketing costs compared to traditional methods with an
                  online presence.
                </li>
                <li>
                  <strong>
                    <span className="arrow-icon">
                      <FaArrowAltCircleRight />
                    </span>
                    Competitive Advantage:
                  </strong>
                  Stay ahead in the digital landscape and outshine competitors.
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-12 services-details"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src="./../../assets/img/web-development1.png"
              className="wow fadeInUp zoomOnHover"
              style={{ justifyContent: "center" }}
            />
          </div>
          <div className="col-lg-12 services-details">
            <div className="heading">
              <span className="arrow-icon" style={{ textAlign: "left" }}>
                <MdCollectionsBookmark />
              </span>
              The Evolution of Website Development in Delhi
            </div>
            <p style={{ textAlign: "left", color: "black" }}>
              As technology continues to advance at a rapid pace, the role of
              websites has evolved from mere online brochures to powerful
              marketing tools and digital storefronts. In Delhi, where
              businesses operate in a competitive and dynamic environment,
              having a professional and user-friendly website is essential for
              attracting customers, driving conversions, and staying ahead of
              the competition.
            </p>
            <p style={{ textAlign: "left", color: "black" }}>
              Website development companies in Delhi are at the forefront of
              this digital revolution, helping businesses design, develop, and
              maintain websites that are not only visually appealing but also
              functional, responsive, and optimized for performance. These
              companies leverage the latest technologies, design trends, and
              best practices to create websites that meet the unique needs and
              objectives of their clients, setting them apart in the crowded
              digital landscape.
            </p>
          </div>
          <div className="col-lg-12 services-details">
            <div className="heading">
              <span className="arrow-icon">
                <MdCollectionsBookmark />
              </span>
              The Role of Website Development Companies
            </div>
            <p className="" style={{ textAlign: "left", color: "black" }}>
              <strong>Website development companies in Delhi</strong> play a
              multifaceted role in helping businesses establish a strong online
              presence and achieve their digital goals. From initial
              consultation to final launch and beyond, these companies guide
              their clients through every step of the website development
              process, ensuring a seamless and successful outcome.
            </p>
            <ul typeof="">
              <li>
                <strong>
                  <span className="arrow-icon">
                    <FaArrowAltCircleRight />
                  </span>
                  Design and Development:{" "}
                </strong>
                Armed with a solid plan, website development companies in Delhi
                set to work designing and developing the website. They create
                wireframes, mockups, and prototypes to visualize the layout and
                functionality of the site, ensuring a user-friendly experience
                across devices and screen sizes. Using cutting-edge technologies
                such as HTML, CSS, JavaScript, and CMS platforms like WordPress
                and Drupal, they bring the design to life, incorporating
                interactive elements, multimedia content, and e-commerce
                functionality as needed.
              </li>
              <li>
                <strong>
                  <span className="arrow-icon">
                    <FaArrowAltCircleRight />
                  </span>
                  Optimization and Testing:
                </strong>
                Once the website is built, website development companies in
                Delhi conduct rigorous testing to ensure that it functions
                smoothly and performs optimally. They check for compatibility
                across browsers and devices, optimize loading times and page
                speed, and test forms, links, and other interactive elements to
                ensure a seamless user experience. They also implement SEO best
                practices to improve the website’s visibility and ranking on
                search engine results pages (SERPs).
              </li>
              <li>
                <strong>
                  <span className="arrow-icon">
                    <FaArrowAltCircleRight />
                  </span>
                  Launch and Maintenance:
                </strong>
                With testing complete and client approval obtained, website
                development companies in Delhi launch the website, making it
                live for the world to see. But their work doesn’t stop there –
                they continue to provide ongoing maintenance and support to
                ensure that the website remains secure, up-to-date, and
                performing at its best. They monitor site performance, apply
                software updates, and make necessary adjustments to address any
                issues or changes in the digital landscape.
              </li>
            </ul>
          </div>
          <div className="col-lg-12 services-details">
            <div className="heading">
              <span className="arrow-icon">
                <MdCollectionsBookmark />
              </span>
              Choosing the Right Website Development Company
            </div>
            <p style={{ color: "black" }}>
              With so many website development companies in Delhi to choose
              from, finding the right partner for your business can seem like a
              daunting task. However, by considering factors such as experience,
              expertise, portfolio, pricing, and client testimonials, you can
              narrow down your options and find a website development company
              that aligns with your goals and values.
            </p>
          </div>
          <img
            src="./../../assets/img/web-development1.png"
            className=""
            style={{ justifyContent: "center" }}
          />

          <div className="col-lg-12 services-details">
            <div className="heading">
              <div className="arrow-icon text-center">
                <MdCollectionsBookmark />
                We Serve the Best Work
              </div>
            </div>
            <p style={{ textAlign: "left", color: "black" }}>
              As a leading <strong>website development company in Delhi</strong>
              , we are committed to serving you the best in web development. Our
              team of skilled professionals brings your digital vision to life,
              crafting websites that stand out in design, functionality, and
              user experience. Explore our portfolio and experience the pinnacle
              of web development excellence in the heart of Delhi.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Website;
