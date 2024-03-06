import React from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";

function Ourservices() {
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
  const getSvgPath = (icon) => {
    switch (icon) {
      case "server":
        return (
          <>
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
            <line x1="6" y1="6" x2="6" y2="6"></line>
            <line x1="6" y1="18" x2="6" y2="18"></line>
          </>
        );
      case "code":
        return (
          <>
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </>
        );
      case "users":
        return (
          <>
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </>
        );
      case "git-branch":
        return (
          <>
            <line x1="6" y1="3" x2="6" y2="15"></line>
            <circle cx="18" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M18 9a9 9 0 0 1-9 9"></path>
          </>
        );
      default:
        return null;
    }
  };
  //this is for boxes-area
  const featureData = [
    {
      icon: "server",
      bgColor: "",
      navi: "/website-development-company",
      title: "Website Development",
      description:
        "Website development is the process of creating and designing a website, encompassing tasks like coding, layout design, content creation, and functionality implementation.",
    },
    {
      icon: "code",
      navi: "/application-development-company",
      bgColor: "bg-f78acb",
      title: "Aplication Development",
      description:
        "App development involves the creation of software applications for mobile devices like smartphones and tablets. This process includes coding, design, and implementation of features",
    },
    {
      navi: "/digital-marketing-company",
      icon: "users",
      bgColor: "bg-c679e3",
      title: "Digital Marketing",
      description:
        "Digital marketing is a broad term that encompasses all marketing efforts that use electronic devices or the internet. Businesses leverage digital channels such as search engines, social media,",
    },
    {
      navi: "/ui-ux-designing-company",
      icon: "git-branch",
      bgColor: "bg-eb6b3d",
      title: "UI/UX Designing",
      description:
        "UI/UX design focuses on creating user interfaces and experiences that are intuitive, engaging, and visually appealing for digital products like websites, mobile apps, and software applications.",
    },
    {
      navi: "/graphic-designing-company",
      icon: "git-branch",
      bgColor: "bg-eb6b3d",
      title: "Graphic Designing",
      description:
        "UI/UX design focuses on creating user interfaces and experiences that are intuitive, engaging, and visually appealing for digital products like websites, mobile apps, and software applications.",
    },
    {
      navi: "/data-science-consulting",
      icon: "git-branch",
      bgColor: "bg-eb6b3d",
      title: "Data Science Consulting",
      description:
        "Data science consulting involves providing expert advice, guidance, and solutions related to data science and analytics to help businesses and organizations make informed decisions and extract value from their data.",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="header-container">
        <p className="text-data">OUR SERVICES / VEEAARSOFTTECH</p>
      </div>
      <div className="works-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>OUR LATEST SERVICES</h2>
            <div className="bar" />
            <h3 className="text-center">
              WHAT KIND OF SERVICES WE ARE OFFERING
            </h3>
          </div>
        </div>
        <div>
          {shapesData.map((shape, index) => (
            <div key={index} className={shape.className}>
              <img
                className="shape_img"
                src={shape.imgSrc}
                alt={shape.alt}
                style={{ width: "20px", height: "15px" }}
              />
            </div>
          ))}
        </div>
      </div>
      {/*start this is section our Boxes Area*/}
      <div className="boxes-area mt-5">
        <div className="container">
          <div className="row m-4">
            {featureData.map((feature, index) => (
              <div
                key={index}
                className="col-lg-3 col-sm-6"
                style={{ width: 350, height: 350 }}
              >
                <Link to={feature.navi}>
                  <div className={`single-box ${feature.bgColor}`}>
                    <div className="icon">
                      <i data-feather={feature.icon} />
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
                        className={`feather feather-${feature.icon}`}
                      >
                        {getSvgPath(feature.icon)}
                      </svg>
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description.slice(0, 100)}</p>
                    <h5>Read More......</h5>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/*this is animation shaps*/}
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
      {/*end this is section our Boxes Area*/}
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
