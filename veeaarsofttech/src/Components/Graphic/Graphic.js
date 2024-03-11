import React, { useState } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdCollectionsBookmark } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

function Graphic() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <Navbar />
      
      <div className="header-container">
      <p className="text-data">GRAPHICS DESIGNING COMPANY</p>
      </div>

      <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 services-details">
        <div className="services-details-desc">
        <h2> <span className="arrow-icon"><CgWebsite /></span>Graphic Designing</h2>
          <p>
          Graphic design is the skill and science of visual communication. It involves the creative process of planning, designing, and organizing visual elements such as images, typography, colors, and shapes to convey a message, idea, or concept. Graphic designers use their skills to create visually appealing and impactful materials across various mediums, including print, digital, and multimedia. join hands with us to shape your brand’s identity and make a bold statement in the digital world. Explore the power of design with a trusted <strong>Graphic Designing Company in Delhi</strong>.
          </p>
        </div>
      </div>
      <div className="col-lg-6 services-details-image animated fadeInUp zoomIn" style={{marginTop:"20px", marginBottom:"20px", padding:"15px"}}>
    <img src="./../../assets/img/graphic1.jpg" className="wow fadeInUp zoomOnHover" alt="image" style={{padding:"15px"}}/>
</div>
    </div>
    <div className="separate" />
    <div className="row align-items-center" style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="col-lg-12 services-details-image animated fadeInUp zoomIn" style={{marginTop:"20px", padding:"15px"}}>
        <img src="./../../assets/img/graphic-design-post.png" className="" alt="image" />
      </div>
      <div className="col-lg-12 services-details">
      <div className="heading"><span className="arrow-icon"><MdCollectionsBookmark /></span>Key Aspects of graphic design include:</div>
          <ul typeof="">
            <li><strong><span className="arrow-icon"><FaArrowAltCircleRight /></span>Visual Communication: </strong>Graphic designers use visual elements to communicate information, evoke emotions, and convey a specific message effectively.</li>

            <li><strong><span className="arrow-icon"><FaArrowAltCircleRight /></span>Typography:</strong>The choice of fonts and text layout is crucial in graphic design to enhance readability and convey the intended tone.</li>

            <li><strong><span className="arrow-icon"><FaArrowAltCircleRight /></span>Color Theory:</strong>Understanding color psychology and harmonious color combinations plays a significant role in creating eye-catching designs.</li>

            <li><strong><span className="arrow-icon"><FaArrowAltCircleRight /></span>Layout and Composition: </strong>Designers arrange visual elements on a page or screen to create a balanced and aesthetically pleasing composition.</li>

            <li><strong><span className="arrow-icon"><FaArrowAltCircleRight /></span>Imagery:</strong>Incorporating images, illustrations, and graphics into designs to enhance the message or story.</li>

            <li><strong><span className="arrow-icon"><FaArrowAltCircleRight /></span>Branding:</strong>Developing and maintaining a consistent visual identity for businesses or organizations, including logos, marketing materials, and packaging.</li>

            <li><strong><span className="arrow-icon"><FaArrowAltCircleRight /></span>Print and Digital Design</strong>Graphic designers work on a wide range of projects, from posters, brochures, and business cards to websites, social media graphics, and mobile apps.</li>

            <li><strong><span className="arrow-icon"><FaArrowAltCircleRight /></span>User Experience (UX) Design:</strong>EEnsuring that digital designs are user-friendly and intuitive for a positive user experience.</li>
          </ul>
      </div>
    </div>
    <div className="col-lg-12 services-details">
    <div className="heading">
    <div className="arrow-icon text-center"><MdCollectionsBookmark />We Serve the Best Work</div>
     </div>
     <p style={{textAlign:"left"}}>At our Graphic Designing Company in Delhi, we are dedicated to delivering nothing short of excellence in the world of graphic design. With a team of talented and passionate professionals, we take pride in offering the very best in visual communication. From captivating logos to stunning branding materials, we bring creativity to life with a blend of colors, typography, and imagery that stands out in the digital realm. Explore our portfolio and experience the pinnacle of graphic design expertise right here in Delhi.
</p>
    </div>
  </div>
  
  
 

      <Footer />
    </div>
  );
}

export default Graphic;
