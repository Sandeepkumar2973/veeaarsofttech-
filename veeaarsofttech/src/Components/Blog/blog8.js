import React, { useState } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { MdCollectionsBookmark } from "react-icons/md";

function Blog8() {


  return (
    <div>
      <Navbar />
      <div className="header-container">
        <p className="text-data">Hello World!</p>
      </div>
      <div className="services-details-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 services-details">
              <div className="services-details-desc">
                <div className="heading">
                  <span className="arrow-icon">
                    <MdCollectionsBookmark />
                  </span>
                  What to Look for When Hiring a Website Development Company in
                  India
                </div>
                <p style={{ textAlign: "left" }}>
                  Welcome to WordPress. This is your first post. Edit or delete
                  it, then start writing!
                </p>
              </div>
            </div>
            <div className="col-lg-6 services-details-image animated fadeInUp zoomIn">
              <img
                src="./../../assets/img/deigitalmarketing.png"
                className="wow fadeInUp zoomOnHover"
                alt="image"
                style={{ padding: "15px" }}
              />
            </div>
          </div>

          <div className="col-lg-12 services-details">
            <div className="heading">
              <span className="arrow-icon">
                <MdCollectionsBookmark />
              </span>
              We Serve the Best Work
            </div>
            <p style={{ textAlign: "center" }}>
              At our <strong>Blog8 Marketing Company in Delhi</strong>, we are
              committed to serving you the best in web development. Our team of
              skilled professionals brings your Blog8 vision to life, crafting
              websites that stand out in design, functionality, and user
              experience. Explore our portfolio and experience the pinnacle of
              web development excellence in the heart of Delhi.
            </p>
          </div>

          <div className="separate" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog8;
