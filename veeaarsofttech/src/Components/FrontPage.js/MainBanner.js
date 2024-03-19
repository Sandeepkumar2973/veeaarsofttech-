import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MainBanner.css";

const MainBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  //this is for main-banner animation image
  const imageList = [
    "man",
    "code",
    "carpet",
    "bin",
    "book",
    "dekstop",
    "dot",
    "flower-top-big",
    "flower-top",
    "keyboard",
    "pen",
    "table",
    "tea-cup",
    "headphone",
    "main-pic",
  ];

  //this is for main-banner animation image
  const getWowAnimation = (index) => {
    const animations = [
      "fadeInDown",
      "fadeInUp",
      "fadeInLeft",
      "zoomIn",
      "bounceIn",
      "rotateIn",
      "rollIn",
    ];
    return animations[index % animations.length];
  };

  //this is for main-banner animation shapes
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

  useEffect(() => {
    // Function to check if the heading is in the viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const handleScroll = () => {
      const heading = document.querySelector(".hide-text-heading");
      if (isInViewport(heading)) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll); // Remove the event listener once the heading is visible
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up event listener on component unmount
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the user has scrolled
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // You can adjust the value here to control when the button appears
      const triggerHeight = documentHeight - windowHeight * 1.2;

      setIsVisible(scrollY > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is more than 100px from the top
      const scrollY = window.scrollY || window.pageYOffset;
      setIsVisible(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  return (
    <>
      <div className="main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row h-100 justify-content-center align-items-center">
                <div className="col-lg-6 hide-image">
                  <div className="video-container">
                    <video
                      autoPlay
                      loop
                      muted
                      className="video-bg"
                      style={{
                        margin: "0 auto",
                        marginTop: "100px",
                        maxWidth: "100%",
                      }}
                    >
                      <source
                        src="./../../assets/img/1ee73e2f6932bc2a41b42636fbeeaf77.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="hero-content">
                    <h1
                      className={`text-left hide-text-heading ${
                        isHovered ? "glow" : "slide-in-left"
                      }`}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      TRUST OUR BEST IT SOLUTION FOR YOUR BUSINESS
                    </h1>

                    <p
                      className={`text-left ${
                        isVisible ? "" : "slide-in-left"
                      }`}
                      style={{ color: "black" }}
                    >
                      Veeaar Softtech pvt ltd is an IT service provider that
                      holds expertise in website development services, digital
                      marketing services, web designing and application
                      development services along with cloud computing and other
                      IT services and solutions. We work with an unparalleled
                      swiftness to stand up to our client’s requirements and
                      deliver what is expected out of us.
                    </p>
                    <div
                      className={`get-stated-btn ${isVisible ? "" : "show"}`}
                    >
                      <Link to="/about-us" className="btn btn-primary">
                        ABOUT US
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1">
                  <div className={`banner-image ${isVisible ? '' : 'scroll-in-right'}`}>
                    {imageList.map((imageName, index) => (
                      <img
                        key={index}
                        src={`/assets/img/banner-image/${imageName}.png`}
                        className={`wow ${getWowAnimation(index)}`}
                        data-wow-delay="0.6s"
                        alt={imageName}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    </>
  );
};

export default MainBanner;
