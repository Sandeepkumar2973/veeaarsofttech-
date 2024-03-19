import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Feedback = () => {
  const [selectedReview, setSelectedReview] = useState(null);

  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1424,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ];

  const feedbackData = [
    {
      name: "Manish Singh",
      role: "Web Developer",
      imgSrc: "assets/img/client-image/1.jpg",
      review:
        "Vee aar softtech pvt ltd  Software's marketing automation platform has transformed the way we engage with our audience. The level of personalization and the insights it provides have led to a substantial increase in our conversion rates. Their team's responsiveness and expertise have been invaluable.",
    },
    {
      name: "Jushpreet Singh",
      role: "Web Developer",
      imgSrc: "assets/img/client-image/2.jpg",
      review:
        "Working with Veeaar softtech pvt ltd has been a game-changer for our company. Their cutting-edge products and exceptional support have streamlined our operations and boosted our productivity. I highly recommend them to any business looking for top-tier software solutions.",
    },
    {
      name: "Jitendra Kumar",
      role: "Web Developer",
      imgSrc: "assets/img/client-image/1.jpg",
      review:
        "Vee aar softtech pvt ltd has been our trusted partner for years. Their expertise in customizing solutions to fit our specific needs is unparalleled. Their software has significantly improved our efficiency and allowed us to stay ahead in a competitive market",
    },
    {
      name: "Ravi Singh",
      role: "Web Developer",
      imgSrc: "assets/img/client-image/2.jpg",
      review:
        "Choosing Vee aar softtech pvt ltd was one of the best decisions we made. Their financial management software has not only saved us time but also optimized our financial processes. The return on investment has been exceptional, and we continue to be impressed with their constant innovation.",
    },
  ];

  const handleImageClick = (index) => {
    setSelectedReview(feedbackData[index]);
  };

  return (
    <>
      <div className="col-10" style={{ margin: "0 auto" }}>
        <div className="container">
          <div className="section-title">
            <h2 className="text-center">What users are Saying</h2>
            <div className="bar" />
            <p className="text-center">
              Users commend the web and digital marketing expertise, praising
              its impact on visibility, lead generation, and brand recognition.
              Positive feedback emphasizes increased online presence, conversion
              rates, and business growth.
            </p>
          </div>

          <div
            className="card"
            style={{
              width: "90%",
              margin: "0 auto",
              padding: "20px",
              marginBottom: "10px",
              background: "aliceblue",
              textAlign: "center",
            }}
          >
            <marquee style={{ height: "16px" }}>
              <strong>
                <h6 style={{ color: "green" }}>
                  Click on User Image for Read Users Review
                </h6>
              </strong>
            </marquee>
            {selectedReview && (
              <div className="selected-review" style={{ cursor: "pointer" }}>
                <div className="container">
                  <img
                    src={selectedReview.imgSrc}
                    style={{
                      borderRadius: "80px",
                      width: "80px",
                      height: "auto",
                      cursor: "pointer",
                      margin: "0 auto",
                    }}
                  />
                  <h3 className="text-center">{selectedReview.name}</h3>
                  <p>{selectedReview.review}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => setSelectedReview(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <Slider
            responsive={responsiveSettings}
            autoplay={true}
  autoplaySpeed={2000}
  dots={true} 
  infinite={true}
  style={{ width: "100%" }}
          >
            {feedbackData.map((feedback, index) => (
              <div
                key={index}
                className="single-feedback"
                style={{ display: "inline-flex", width: "10  0%" }}
              >
                <div
                  className="client-img"
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={feedback.imgSrc}
                    alt={feedback.name}
                    style={{
                      borderRadius: "80px",
                      width: "70px",
                      height: "auto",
                      margin: "0 auto",
                    }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Feedback;
