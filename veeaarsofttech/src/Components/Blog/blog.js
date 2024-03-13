import React, { useEffect, useState } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import cardData from "./contents";
import { Link } from "react-router-dom";
import "./blog.css";
const Blog = () => {
  const pageSize = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const currentCardData = cardData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(cardData.length / pageSize);

  const handlePageChange = (page) => {
    // showLoader(); // Show loader when changing the page
    setCurrentPage(page);
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="header-container">
          <p className="text-data">Blogs</p>
        </div>

        {/* Start Blog Area */}
        <div className="blog-area ptb-80">
          <div className="container">
            <div className="row">
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {currentCardData.map((card, index) => (
                  <div key={index} className="col-lg-4 col-md-4 ">
                    <Link to={card.urlto}>
                      <div className="single-blog-post m-3">
                        <div className="blog-image">
                          <img src={card.imgSrc} alt="Card Image" />
                          <div class="date">
                            <i data-feather="calendar"></i> {card.date}
                          </div>
                        </div>
                        <div className="blog-post-content">
                          <h3 className="read-more-btn">{card.title}</h3>

                          <p>{card.text}</p>

                          <p className="read-more-btn">
                            Read More <i data-feather="arrow-right" />
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="pagination justify-content-center">
                <button
                  className=" button-8"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      className={`pagination-btn ${
                        page === currentPage ? "active" : ""
                      }`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  )
                )}
                <button
                  className="button-8"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        {/* End Blog Area */}
      </div>
      <Footer />
    </>
  );
};

export default Blog;
