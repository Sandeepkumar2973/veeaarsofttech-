import React from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import OwlCarousel from "react-owl-carousel";
import Ourservispage from "./ourservispage.js";

function Ourservices() {
  //this is for react Works
  const options = {
    items: 1,
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000, // Set the autoplay timeout to 2000 milliseconds (2 seconds)
    autoplayHoverPause: true, // Pause on hover if needed
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  const shapesData = [
    {
      className: "shape1",
      imgSrc: "./../../assets/img/shape1.png",
      alt: "shape",
    },
    {
      className: "shape2 rotateme",
      imgSrc: "./../../assets/img/shape2.svg",
      alt: "shape",
    },
    {
      className: "shape3",
      imgSrc: "./../../assets/img/shape3.svg",
      alt: "shape",
    },
    {
      className: "shape4",
      imgSrc: "./../../assets/img/shape4.svg",
      alt: "shape",
    },
    {
      className: "shape5",
      imgSrc: "./../../assets/img/shape5.png",
      alt: "shape",
    },
    {
      className: "shape6 rotateme",
      imgSrc: "./../../assets/img/shape4.svg",
      alt: "shape",
    },
    {
      className: "shape7",
      imgSrc: "./../../assets/img/shape4.svg",
      alt: "shape",
    },
    {
      className: "shape8 rotateme",
      imgSrc: "./../../assets/img/shape2.svg",
      alt: "shape",
    },
  ];
  //this is for react Works
  const worksData = [
    {
      id: 1,
      imgSrc: "assets/img/works-image/1.jpg",
      title: "Manish Singh",
      description:
        "Vee aar softtech pvt ltd  Software's marketing automation platform has transformed the way we engage with our audience. The level of personalization and the insights it provides have led to a substantial increase in our conversion rates. Their team's responsiveness and expertise have been invaluable.",
    },
    {
      id: 2,
      imgSrc: "assets/img/works-image/2.jpg",
      title: "Jushpreet Singh",
      description:
        "Working with Veeaar softtech pvt ltd has been a game-changer for our company. Their cutting-edge products and exceptional support have streamlined our operations and boosted our productivity. I highly recommend them to any business looking for top-tier software solutions.",
    },
    {
      id: 3,
      imgSrc: "assets/img/works-image/3.jpg",
      title: "Jitendra Kumar",
      description:
        "Vee aar softtech pvt ltd has been our trusted partner for years. Their expertise in customizing solutions to fit our specific needs is unparalleled. Their software has significantly improved our efficiency and allowed us to stay ahead in a competitive market",
    },
    {
      id: 4,
      imgSrc: "assets/img/works-image/4.jpg",
      title: "Ravi Singh",
      description:
        "Choosing Vee aar softtech pvt ltd was one of the best decisions we made. Their financial management software has not only saved us time but also optimized our financial processes. The return on investment has been exceptional, and we continue to be impressed with their constant innovation.",
    },
  ];
  //this is for boxes-area

  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <p className="text-data">OUR SERVICES</p>
      </div>
      <Ourservispage />
      {/* Start Works Area*/}
      <div className="works-area ptb-80 bg-f7fafd m-4">
        <div className="container">
          <div className="section-title">
            <h2>CUSTOMER’S FEEDBACK</h2>
            <div className="bar" />
          </div>
        </div>
        <div className="container-fluid p-0">
          <OwlCarousel
            className="works-slides owl-carousel owl-theme"
            {...options}
          >
            {worksData.map((work) => (
              <div key={work.id} className="row p-3">
                <div
                  className="col-lg-3 col-sm-6 m-3"
                  style={{
                    width: 350,
                    height: 350,
                    background: "white",
                  }}
                >
                  <h3 className="text-center">{work.title}</h3>

                  <p>{work.description}</p>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
        <div>
          {shapesData.map((shape, index) => (
            <div key={index} className={shape.className}>
              <img
                className="shape_img"
                src={shape.imgSrc}
                alt={shape.alt}
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          ))}
        </div>
      </div>
      {/* End Works Area*/}
      <Footer />
    </div>
  );
}

export default Ourservices;
