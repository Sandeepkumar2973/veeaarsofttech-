import React, { useEffect, useState } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import cardData from "./../Blog/contents";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Blogss = () => {
    const pageSize = 9;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize;
    const currentCardData = cardData.slice(startIndex, endIndex);
    const totalPages = Math.ceil(cardData.length / pageSize);
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    return (
        <>
        <div>
      <div className="header-container">
        <p className="text-data">Blogs</p>
      </div>

      {/* Start Blog Area */}
      <div className="blog-area ptb-80">
        <div className="container">
          <div className="row">
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {currentCardData.slice(0, 3).map((card, index) => (
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
                        <h3 className="read-more-btn text-left">{card.title.slice(0, 50)}</h3>
                        <p>{card.text.slice(0, 300)}</p>

                        <p className="read-more-btn text-left">
                          Read More <FaLongArrowAltRight />
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div></div>
      {/* End Blog Area */}
    </div>
    </>
    )
}

export default Blogss
