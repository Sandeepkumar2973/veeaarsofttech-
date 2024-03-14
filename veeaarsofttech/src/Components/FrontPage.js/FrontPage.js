import React, { useEffect, useState } from "react";
import "./FrontPage.css";
import "../../assets/css/animate.min.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/responsive.css";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Odometer from "./Odometer";
import "owl.carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import teamData from "./team.js";
import featuresData from "./Featcher.js";
import cardData from "./../Blog/contents.js";
import Ourservispage from "../Ourservices/ourservispage.js";

const FrontPage = () => {
  const [value, setValue] = useState(0);
  const [selectedReview, setSelectedReview] = useState(null);

  //this is for feedback
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

  //this is for feedback open new popup
  const handleImageClick = (index) => {
    setSelectedReview(feedbackData[index]);
  };

  //this is for teams
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3, 
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 3, 
        },
      },
    ],
  };

  //this is for teams
  const settingsss = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3, 
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  //this is for total ptrojects count
  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((prevValue) => prevValue + 100);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  //this is for react Works
  const worksData = [
    {
      id: 1,
      imgSrc: "./../../assets/img/works-image/Ananta.jpeg",
      title: "ANANTA",
      description:
        "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
    },
    {
      id: 2,
      imgSrc: "./../../assets/img/works-image/csf.jpeg",
      title: "CSF",
      description:
        "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
    },
    {
      id: 3,
      imgSrc: "./../../assets/img/works-image/cynrotix.jpeg",
      title: "CYNROTIX",
      description:
        "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
    },
    {
      id: 4,
      imgSrc: "./../../assets/img/works-image/esport.jpeg",
      title: "ESPORT",
      description:
        "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
    },
    {
      id: 5,
      imgSrc: "./../../assets/img/works-image/sanandsons.jpeg",
      title: "SANANDSONS",
      description:
        "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
    },
    {
      id: 6,
      imgSrc: "./../../assets/img/works-image/neeve.png",
      title: "NEEVE",
      description:
        "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
    },
  ];

  //this is for react Works
  const options = {
    items: 1,
    loop: false,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
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

  //this is for  Hosting Services
  const getIcon = (icon) => {
    switch (icon) {
      case "database":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-database"
          >
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          </svg>
        );
      case "globe":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-globe"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        );
      case "file":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-file"
          >
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
            <polyline points="13 2 13 9 20 9"></polyline>
          </svg>
        );
      case "trending-up":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-trending-up"
          >
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
          </svg>
        );
      case "folder":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-folder"
          >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
        );
      case "monitor":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-monitor"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        );
      case "mail":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-mail"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        );
      case "cloud":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-cloud"
          >
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  //this is for  Hosting Services
  const servicesData = [
    {
      icon: "database",
      text: "Cloud databases",
    },
    {
      icon: "globe",
      text: "Website hosting",
    },
    {
      icon: "file",
      text: "File storage",
    },
    {
      icon: "folder",
      text: "File backups",
    },
    {
      icon: "monitor",
      text: "Remote desktop",
    },
    {
      icon: "mail",
      text: "Email servers",
    },
  ];

  //this is for  Design & Development Services
  const servicescollection = [
    {
      title: "Responsive design",
      icon: "layout",
      svgPath: "M3 3h18v18H3V3zm0 9h18M9 21v-6M15 21V3",
    },
    {
      title: "React web development",
      icon: "code",
      svgPath: "M16 18 22 12 16 6M8 6 2 12 8 18",
    },
    {
      title: "Android apps development",
      icon: "smartphone",
      svgPath: "M5 2 19 2 19 22 5 22 5 2zM12 18 12 18",
    },
    {
      title: "Laravel web development",
      icon: "code",
      svgPath: "M16 18 22 12 16 6M8 6 2 12 8 18",
    },
    {
      title: "Data Science",
      icon: "smartphone",
      svgPath: "M5 2 19 2 19 22 5 22 5 2zM12 18 12 18",
    },
    {
      title: "UX/UI design",
      icon: "pen-tool",
      svgPath:
        "M12 19l7-7 3 3-7 7-3-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z M2 2l7.586 7.586 M11 11c0-2.209 1.791-4 4-4",
    },
    {
      title: "Digital Marketing",
      icon: "shopping-cart",
      svgPath:
        "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6",
    },
    {
      title: "Graphic Designing",
      icon: "check-circle",
      svgPath: "M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01 9 11.01",
    },
  ];

  //this is for  section pricing plan
  const pricingPlans = [
    {
      title: "Basic Plan",
      price: 12999,
      features: [
        "5 GB Bandwidth",
        "Highest Speed",
        "1 GB Storage",
        "Unlimited Website",
        "Unlimited Users",
        "24x7 Great Support",
        "Data Security and Backups",
        "Monthly Reports and Analytics",
        "",
      ],
    },
    {
      title: "Advanced Plan",
      price: 19999,
      features: [
        "10 GB Bandwidth",
        "Highest Speed",
        "3 GB Storage",
        "Unlimited Website",
        "Unlimited Users",
        "24x7 Great Support",
        "Data Security and Backups",
        "Monthly Reports and Analytics",
        "",
      ],
    },
    {
      title: "Expert Plan",
      price: 35999,
      features: [
        "15 GB Bandwidth",
        "Highest Speed",
        "5 GB Storage",
        "Unlimited Website",
        "Unlimited Users",
        "24x7 Great Support",
        "Data Security and Backups",
        "Monthly Reports and Analytics",
        "",
      ],
    },
  ];

  const settingdddsess = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3, 
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2, 
        },
      },
    ],
  };

  return (
    <>
      {/*start this is section our main banner*/}
      <div className="main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row h-100 justify-content-center align-items-center">
                <div className="col-lg-6 hide-image">

                    <div className="video-container">
                        <video autoPlay loop muted className="video-bg" style={{ margin: "0 auto", marginTop: "50px", maxWidth: "100%" }}> 
                          <source src="./../../assets/img/1ee73e2f6932bc2a41b42636fbeeaf77.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <div className="content">
                          <h1>TRUST OUR BEST IT SOLUTION FOR YOUR BUSINESS</h1>
                        </div>
                      </div>
                </div>
                <div className="col-lg-5">
                  <div className="hero-content">
                          <h1 className="text-left hide-text-heading">TRUST OUR BEST IT SOLUTION FOR YOUR BUSINESS</h1>
                    <p style={{ color: "black" }}>
                      Veeaar Softtech pvt ltd is an IT service provider that
                      holds expertise in website development services, digital
                      marketing services, web designing and application
                      development services along with cloud computing and other
                      IT services and solutions. We work with an unparalleled
                      swiftness to stand up to our client’s requirements and
                      deliver what is expected out of us.
                    </p>
                    <div className="get-stated-btn">
                      <Link to="/about-us" className="btn btn-primary">
                        ABOUT US
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1">
                  <div className="banner-image">
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
      {/*end this is section our main banner*/}

      {/*start this is section our Boxes Area*/}
      <Ourservispage />
      {/*end this is section our Boxes Area*/}

      {/*Start Cloud Hosting Services*/}
      <div className="services-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2 style={{ textAlign: "left" }}>Cloud Hosting Services</h2>
                <div className="bar" />
                <p style={{ textAlign: "left" }}>
                Our company offers top-tier cloud hosting services tailored to meet the dynamic needs of businesses in today's digital landscape. With our robust infrastructure and cutting-edge technology, we ensure seamless scalability, high performance, and unparalleled reliability for our clients' websites and applications. Our cloud hosting solutions empower businesses to efficiently manage their online presence, whether they're startups looking to establish their digital footprint or enterprises seeking to optimize their operations.
                </p>
              </div>
              <div className="row">
                {servicesData.map((service, index) => (
                  <div key={index} className="col-lg-6 col-md-6 col-sm-6">
                    <div className="box">
                      {getIcon(service.icon)}
                      {service.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6 hide-image">
              <img src="./../../assets/img/cloud-server.png" />
            </div>

            <div className="col-lg-6 col-md-12 services-right-image">
              <img
                src="assets/img/services-right-image/book-self.png"
                className="wow fadeInDown"
                data-wow-delay="0.6s"
                alt="book-self"
              />
              <img
                src="assets/img/services-right-image/box.png"
                className="wow fadeInUp"
                data-wow-delay="0.6s"
                alt="box"
              />
              <img
                src="assets/img/services-right-image/chair.png"
                className="wow fadeInLeft"
                data-wow-delay="0.6s"
                alt="chair"
              />
              <img
                src="assets/img/services-right-image/cloud.png"
                className="wow zoomIn"
                data-wow-delay="0.6s"
                alt="cloud"
              />
              <img
                src="assets/img/services-right-image/cup.png"
                className="wow bounceIn"
                data-wow-delay="0.6s"
                alt="cup"
              />
              <img
                src="assets/img/services-right-image/flower-top.png"
                className="wow fadeInDown"
                data-wow-delay="0.6s"
                alt="flower"
              />
              <img
                src="assets/img/services-right-image/head-phone.png"
                className="wow zoomIn"
                data-wow-delay="0.6s"
                alt="head-phone"
              />
              <img
                src="assets/img/services-right-image/monitor.png"
                className="wow fadeInUp"
                data-wow-delay="0.6s"
                alt="monitor"
              />
              <img
                src="assets/img/services-right-image/mug.png"
                className="wow rotateIn"
                data-wow-delay="0.6s"
                alt="mug"
              />
              <img
                src="assets/img/services-right-image/table.png"
                className="wow fadeInUp"
                data-wow-delay="0.6s"
                alt="table"
              />
              <img
                src="assets/img/services-right-image/tissue.png"
                className="wow zoomIn"
                data-wow-delay="0.6s"
                alt="tissue"
              />
              <img
                src="assets/img/services-right-image/water-bottle.png"
                className="wow zoomIn"
                data-wow-delay="0.6s"
                alt="water-bottle"
              />
              <img
                src="assets/img/services-right-image/wifi.png"
                className="wow fadeInLeft"
                data-wow-delay="0.6s"
                alt="wifi"
              />
              <img
                src="assets/img/services-right-image/cercle-shape.png"
                className="bg-image rotateme"
                alt="shape"
              />
              <img
                src="assets/img/services-right-image/main-pic.png"
                className="wow fadeInUp"
                data-wow-delay="0.6s"
                alt="main-pic"
              />
            </div>
          </div>
        </div>
      </div>
      {/*End Cloud Hosting Services*/}

      {/*Start Design & Development Services */}
      <div className="services-area ptb-80">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 services-left-image">
              <img
                src="assets/img/services-left-image/big-monitor.png"
                className="wow fadeInDown"
                data-wow-delay="0.6s"
                alt="big-monitor"
              />
              <img
                src="assets/img/services-left-image/creative.png"
                className="wow fadeInUp"
                data-wow-delay="0.6s"
                alt="creative"
              />
              <img
                src="assets/img/services-left-image/developer.png"
                className="wow fadeInLeft"
                data-wow-delay="0.6s"
                alt="developer"
              />
              <img
                src="assets/img/services-left-image/flower-top.png"
                className="wow zoomIn"
                data-wow-delay="0.6s"
                alt="flower-top"
              />
              <img
                src="assets/img/services-left-image/small-monitor.png"
                className="wow bounceIn"
                data-wow-delay="0.6s"
                alt="small-monitor"
              />
              <img
                src="assets/img/services-left-image/small-top.png"
                className="wow fadeInDown"
                data-wow-delay="0.6s"
                alt="small-top"
              />
              <img
                src="assets/img/services-left-image/table.png"
                className="wow zoomIn"
                data-wow-delay="0.6s"
                alt="table"
              />
              <img
                src="assets/img/services-left-image/target.png"
                className="wow fadeInUp"
                data-wow-delay="0.6s"
                alt="target"
              />
              <img
                src="assets/img/services-left-image/cercle-shape.png"
                className="bg-image rotateme"
                alt="shape"
              />
              <img
                src="assets/img/services-left-image/main-pic.png"
                className="wow fadeInUp"
                data-wow-delay="0.6s"
                alt="main-pic"
              />
            </div>

            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2>WHAT KIND OF SERVICES WE ARE OFFERING</h2>
                <div className="bar" />
                <p>
                Our IT company offers a diverse range of services tailored to meet the ever-evolving needs of businesses in today's digital age. From custom software development to strategic IT consulting, cloud solutions, cybersecurity, managed IT services, digital marketing, data analytics, and infrastructure solutions, we are your comprehensive technology partner. Our team of experts is committed to delivering innovative, scalable, and cost-effective solutions that drive business growth and success. Whether you're a small startup or a large enterprise, we have the expertise and resources to help you harness the power of technology and stay ahead of the competition. {" "}
                </p>
              </div>
              <div className="row">
                {servicescollection.map((service, index) => (
                  <div key={index} className="col-lg-6 col-md-6 col-sm-6">
                    <div className="box">
                      <i data-feather={service.icon} />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        dangerouslySetInnerHTML={{ __html: service.svgPath }}
                      />
                      {service.title}
                    </div>
                  </div>
                ))}
                <div className="col-lg-6 col-md-12 hide-image">
                  <img src="./../../assets/img/WHAT-KIND-OF-SERVICES-WE-ARE-OFFERING.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Design & Development Services  */}

      {/*start this is section our featurs*/}
      <div className="features-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>Our Features</h2>
            <div className="bar"></div>
            <p className="text-center">
            An IT company offers a myriad of features and services designed to support businesses in their digital endeavors. Here are some key points and a paragraph highlighting these features:
            </p>
          </div>

          <div className="row">
            {featuresData.map((feature, index) => (
              <div key={index} className="col-lg-6 col-md-6 col-sm-6">
                <div className="single-features">
                  <div className="icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.content.slice(0, 140)}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*end this is section our featurs*/}

      {/*Start Team Area*/}
      <div className="team-area ptb-80 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2 className="text-center">Our Awesome Team</h2>
            <div className="bar"></div>
            <p className="text-center">
            Our team at the IT company is a diverse and dynamic group of professionals dedicated to delivering excellence in every aspect of our work. Comprised of talented individuals with expertise ranging from software development and IT consulting to cybersecurity, cloud solutions, digital marketing, data analytics, and infrastructure management, we are united by a shared passion for innovation and customer satisfaction. 
            </p>
          </div>
          <Slider
            {...settingsss}
            className="team-slides owl-carousel owl-theme"
            
          >
            {teamData.map((member, index) => (
              <div key={index} className="single-team" >
                <div
                  className="card"
                  style={{
                    border: "none",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                >
                  <div className="team-image">
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{ width: "30px", height: "auto" }}
                    />
                  </div>
                  <div className="team-content">
                    <div className="team-info">
                      <h3 className="text-center" style={{ fontSize: "12px" }}>
                        {member.name}
                      </h3>
                      <span>{member.role}</span>
                    </div>
                    <span style={{ padding: "5px" }}>{member.twitter}</span>
                    <span style={{ padding: "5px" }}>{member.instagrm}</span>
                    <span style={{ padding: "5px" }}>{member.facebook}</span>
                    <span style={{ padding: "5px" }}>{member.Linkdien}</span>
                    <p>{member.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/*Start Team Area*/}

      {/*Start Fun Facts Area  */}
      <div className="funfacts-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>We always try to understand users expectation</h2>
            <div className="bar" />
            <p className="text-center">
            At Veeaarsofttech, understanding our users' expectations is at the heart of our mission. Here's how we ensure we always meet and exceed their needs:

            Active Listening: We prioritize listening to our users attentively, whether it's through direct communication channels, feedback forms, or user testing sessions. By actively listening to their concerns, suggestions, and requirements, we gain valuable insights into their expectations.

            </p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-6 col-sm-3">
              <div className="funfact">
                <h2
                  className="text-center"
                  style={{
                    color: "#44ce6f",
                    fontSize: "35px",
                    marginBottom: "7px",
                  }}
                >
                  500+
                  {/* <Odometer initialValue={550} duration="4000" formate="{d}" /> */}
                </h2>
                <p className="text-center">Project</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 col-sm-3">
              <div className="funfact">
                <h2
                  className="text-center"
                  style={{
                    color: "#44ce6f",
                    fontSize: "35px",
                    marginBottom: "7px",
                  }}
                >
                  50+
                  {/* <Odometer initialValue={20} duration="4000" formate="{d}" /> */}
                </h2>
                <p className="text-center">Feedback</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 col-sm-3">
              <div className="funfact">
                <h2
                  className="text-center"
                  style={{
                    color: "#44ce6f",
                    fontSize: "35px",
                    marginBottom: "7px",
                  }}
                >
                  50+
                  {/* <Odometer initialValue={70} duration="4000" formate="{d}" /> */}
                </h2>
                <p className="text-center">Workers</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 col-sm-3">
              <div className="funfact">
                <h2
                  className="text-center"
                  style={{
                    color: "#44ce6f",
                    fontSize: "35px",
                    marginBottom: "7px",
                  }}
                >
                  {/* <Odometer initialValue={500} duration="4000" formate="{d}" /> */}
                  200+
                </h2>
                <p className="text-center">Contributors</p>
              </div>
            </div>
          </div>
          <div className="contact-cta-box">
            <h3>Have any question about us?</h3>
            <p>Don't hesitate to contact us</p>
            <Link to="/contact-us" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
          <div className="map-bg">
            <img
              className="map-image"
              src="../../assets/img/map.png"
              alt="map"
              style={{ width: "100%", height: "390px" }}
            />
          </div>
        </div>
        <div className="shape8 rotateme">
          <img
            src="assets/img/shape2.svg"
            alt="shape"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
        <div className="shape2 rotateme">
          <img
            src="assets/img/shape2.svg"
            alt="shape"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
        <div classclassName="shape7">
          <img
            src="assets/img/shape4.svg"
            alt="shape"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
        <div className="shape4">
          <img
            src="assets/img/shape4.svg"
            alt="shape"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
      </div>
      {/* End Fun Facts Area*/}

      {/* Start Works Area*/}
      <div className="works-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>Our Recent Works</h2>
            <div className="bar" />
            <p className="text-center">
              "Explore our latest achievements in web and digital marketing,
              showcasing innovative strategies, impactful campaigns, and
              successful collaborations. Elevate your online presence with our
              cutting-edge solutions and results-driven approach."
            </p>
          </div>
        </div>
        <div className="container-fluid p-0">
          <OwlCarousel
            className="works-slides owl-carousel owl-theme"
            {...options}
          >
            {worksData.map((work) => (
              <div key={work.id} className="single-works">
                <img
                  src={work.imgSrc}
                  alt="image"
                  style={{ width: "100%", height: "270px", padding: "10px" }}
                />
                <Link to="/" className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-settings"
                  >
                    <circle cx={12} cy={12} r={3} />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </Link>
                <div className="works-content">
                  <h1 style={{ color: "white" }}>{work.title}</h1>
                  {/* <p>{work.description}</p> */}
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

      {/* Start Pricing Area */}
      <div className="pricing-area ptb-80 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2 className="text-center">Pricing Plans</h2>
            <div className="bar" />
            <p className="text-center">
              "Explore our pricing plans for flexible options tailored to your
              needs. Affordable, transparent, and feature-rich solutions
              designed to empower your business growth. Choose wisely, thrive
              effortlessly."
            </p>
          </div>
          <div className="row">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3"
              >
                <div className="pricing-table">
                  <div className="pricing-header">
                    <h3 className="text-center">{plan.title}</h3>
                  </div>
                  <div className="price">
                    <span>
                      <sup>₹</sup>
                      {plan.price.toFixed(2)} <span>/Mon</span>
                    </span>
                  </div>
                  <div
                    className="pricing-features"
                    style={{ cursor: "pointer" }}
                  >
                    <div>
                      {plan.features.map((feature, i) => (
                        <p key={i} className={i < 6 ? "active" : ""}>
                          {feature}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="pricing-footer">
                    <Link to="/contact-us" className="btn btn-primary">
                      Select Plan
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
      {/* End Pricing Area*/}

      {/* Start Feedback Area*/}
      <div className="feedback-area ptb-80 bg-f7fafd">
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
                      width: "100px",
                      height: "auto",
                      cursor: "pointer",
                    }}
                  />
                  <h3 className="text-center">{selectedReview.name}</h3>
                  {/* <span>{selectedReview.role}</span> */}
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

        <div className="feedback-slides">
          <Slider {...settings}>
            {feedbackData.map((feedback, index) => (
              <div key={index} className="single-feedback">
                <div
                  className="client-img"
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={feedback.imgSrc}
                    alt={feedback.name}
                    style={{
                      borderRadius: "80px",
                      width: "100px",
                      height: "auto",
                    }}
                  />
                </div>
                {/* Display a preview of the review if needed */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/*  End Feedback Area*/}

      {/*  Start Ready To Talk Area*/}
      <div className="ready-to-talk">
        <div className="container">
          <h3 className="text-center">Ready to talk?</h3>
          <p className="text-center">
            Our team is here to answer your question about Your StartUP
          </p>
          <Link to="/contact-us" className="btn btn-primary">
            Contact Us
          </Link>
          <span>
            <Link to="/contact-us">Or, get started now with a free trial</Link>
          </span>
        </div>
      </div>

      {/*  End Partner Area */}

      {/*  Start Blog Area */}
      <div className="blog-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Our Blog</h2>
            <div className="bar" />
            <p className="text-center">
              "Explore the dynamic world of web and digital marketing on our
              blog. Unlock insights, trends, and strategies that empower your
              online presence and drive success in the digital landscape."
            </p>
          </div>
          <Slider {...settingdddsess} className="row">
            {cardData.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <div className="single-blog-post" style={{ padding: "0 5px" }}>
                  <div className="blog-image">
                    <Link to="/blog">
                      <img
                        src={post.imgSrc}
                        alt="image"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Link>
                    <div className="date">
                      <i data-feather="calendar" /> {post.date}
                    </div>
                  </div>
                  <div className="blog-post-content">
                    <h3>
                      <Link to="/">{post.title.slice(0, 30)}</Link>
                    </h3>
                    <p>{post.text.slice(0, 100)}...</p>
                    <Link to="/blog" target="_blank" className="read-more-btn">
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-arrow-right"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
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
      {/*  End Blog Area */}
    </>
  );
};

export default FrontPage;
