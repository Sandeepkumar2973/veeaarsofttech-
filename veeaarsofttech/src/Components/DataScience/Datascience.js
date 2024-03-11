import React, { useState } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdCollectionsBookmark } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { Link } from "react-router-dom";

function Datascience() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div>
      <Navbar />
      <div className="header-container">
      <p className="text-data">DATA SCIENCE COMPANY</p>
      </div>
      <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 services-details">
        <div className="services-details-desc">
        <h2> <span className="arrow-icon"><CgWebsite /></span>Data Science Consultancy</h2>
          <p>Data science is a multidisciplinary field that combines techniques from mathematics, statistics, computer science, and domain-specific knowledge to extract valuable insights and knowledge from data. It involves the collection, cleaning, analysis, and interpretation of data to solve complex problems and make informed decisions.</p>
        </div>
      </div>
      <div className="col-lg-6 services-details-image animated fadeInUp zoomIn" style={{marginTop:"20px", marginBottom:"20px", padding:"25px"}}>
    <img src="./../../assets/img/datascience.jpg" className="wow fadeInUp zoomOnHover" alt="image" />
</div>
    </div>
    <div className="separate" />
    <div className="row align-items-center">
      <div className="col-lg-6 services-details-image animated fadeInUp zoomIn" style={{marginTop:"10px", borderRadius:"30% 70% 70% 30% / 15% 48% 52% 85%"}}>
        <img src="./../../assets/img/datascience1.png" className="wow fadeInUp zoomOnHover" alt="image" />
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
           <div>
            <ol type="1">
            <h6>Structured Data:</h6>
            <li><strong>Description:</strong>Data that is organized and formatted in a specific way, often in tables with rows and columns.</li>
            <li><strong>Examples:</strong> Relational databases, CSV files, Excel spreadsheets.</li>
            <li><strong>Tools:</strong> SQL, Pandas (Python library).</li>
            </ol>
            <ol type="1">
            <h6>Unstructured Data:</h6>
            <li><strong>Description:</strong>Data that lacks a predefined structure or schema.</li>
            <li><strong>Examples:</strong> Text data, images, audio, video.</li>
            <li><strong>Tools:</strong> Natural Language Processing (NLP) libraries (NLTK, SpaCy), Computer Vision libraries (OpenCV), Audio processing libraries.</li>
            </ol>
            <ol type="1">
            <h6>Semi-Structured Data:</h6>
            <li><strong>Description:</strong>Data that is partially structured but doesn't conform to the strict structure of traditional relational databases.</li>
            <li><strong>Examples:</strong> JSON, XML.</li>
            <li><strong>Tools:</strong> JSON and XML parsers, Pandas for semi-structured formats.</li>
            </ol>
            <ol type="1">
            <h6>Time Series Data:</h6>
            <li><strong>Description:</strong> Data collected over time intervals, where the order and timing of observations are crucial.</li>
            <li><strong>Examples:</strong> Stock prices, temperature readings, sensor data.</li>
            <li><strong>Tools:</strong> Pandas, Time Series analysis libraries (statsmodels, Prophet).</li>
            </ol>
            <ol type="1">
            <h6>Spatial Data:</h6>
            <li><strong>Description:</strong> Data associated with geographic locations.</li>
            <li><strong>Examples:</strong> GPS data, GIS data, maps.</li>
            <li><strong>Tools:</strong> GeoPandas, Folium, Shapely.</li>
            </ol>
            <ol type="1">
            <h6>Text Data:</h6>
            <li><strong>Description:</strong> Data consisting of textual information.</li>
            <li><strong>Examples:</strong> Documents, articles, social media posts.</li>
            <li><strong>Tools:</strong> NLP libraries (NLTK, SpaCy), Text mining tools.</li>
            </ol>
            <ol type="1">
            <h6>Categorical Data:</h6>
            <li><strong>Description:</strong> Data that represents categories or labels.</li>
            <li><strong>Examples:</strong>Colors, genres, product categories.</li>
            <li><strong>Tools:</strong>Encoding techniques, One-Hot Encoding.</li>
            </ol>
           </div>
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
            <p className="text-center">
              If You Have any Question for this information then Fill the Form mention on Contact us page.
              <Link to='/contact-us'><strong>Contact Us</strong></Link>
            </p>
          </div>
        </li>
        {/* Add more accordion items as needed */}
      </ul>
    </div>

        </div>
        
      </div>
      <div className="col-lg-12 services-details">
    <div className="heading">
    <span className="arrow-icon"><MdCollectionsBookmark /></span>We Serve the Best Work
     </div>
     <p style={{textAlign:"center"}}>At our Data Science Company in Delhi, we are dedicated to delivering nothing short of excellence in the world of graphic design. With a team of talented and passionate professionals, we take pride in offering the very best in visual communication. From captivating logos to stunning branding materials, we bring creativity to life with a blend of colors, typography, and imagery that stands out in the digital realm. Explore our portfolio and experience the pinnacle of Data science is a multidisciplinary field that combines techniques from mathematics, statistics, computer science, and domain-specific knowledge to extract valuable insights and knowledge from data. It involves the collection, cleaning, analysis, and interpretation of data to solve complex problems and make informed decisions expertise right here in Delhi.
</p>
    </div>
    </div>
  </div>
      <Footer />
    </div>
  );
}

export default Datascience;
