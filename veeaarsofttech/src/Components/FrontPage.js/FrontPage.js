import React, { useEffect, useState } from "react";
import "./FrontPage.css";
import "../../assets/css/dark-color/dark-style.css";
import "../../assets/css/animate.min.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/boxicons.min.css";
import "../../assets/css/flaticon.css";
import "../../assets/css/magnific-popup.min.css";
import "../../assets/css/meanmenu.css";
import "../../assets/css/odometer.min.css";
import "../../assets/css/owl.carousel.min.css";
import "../../assets/css/responsive.css";
import "../../assets/css/slick.min.css";
import "../../assets/css/style.css";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Odometer from "./Odometer";
import "owl.carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";

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

  ////////////////

  //this is for feedback open new popup
  const handleImageClick = (index) => {
    setSelectedReview(feedbackData[index]);
  };

  ////////////////

  //this is for teams
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Adjust the breakpoint based on your design needs
        settings: {
          slidesToShow: 3, // Show 3 slides on tablets
        },
      },
      {
        breakpoint: 768, // Adjust the breakpoint based on your design needs
        settings: {
          slidesToShow: 3, // Show 1 slide on mobile devices
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
        breakpoint: 1024, // Adjust the breakpoint based on your design needs
        settings: {
          slidesToShow: 3, // Show 3 slides on tablets
        },
      },
      {
        breakpoint: 768, // Adjust the breakpoint based on your design needs
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile devices
        },
      },
    ],
  };

  ////////////////

  //this is for total ptrojects count
  useEffect(() => {
    // Simulate value changes over time
    const intervalId = setInterval(() => {
      setValue((prevValue) => prevValue + 100);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  ////////////////

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

  ////////////////

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

  ////////////////

  //this is for partners
  const logos = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    margin: 30,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    autoplay: true,
  };

  ////////////////

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

  ////////////////

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

  ////////////////

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

  //////////////

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

  //this is for  Hosting Services
  const getAnimationEffect = (index) => {
    const animationEffects = [
      "Down",
      "Up",
      "Left",
      "In",
      "Bounce",
      "Down",
      "In",
      "Up",
      "Rotate",
      "Up",
      "In",
      "In",
      "Left",
      "rotateme",
      "Up",
    ];
    return animationEffects[index] || "Up";
  };
  //this is for  Hosting Services
  const imagesData = [
    "book-self",
    "box",
    "chair",
    "cloud",
    "cup",
    "flower-top",
    "head-phone",
    "monitor",
    "mug",
    "table",
    "tissue",
    "water-bottle",
    "wifi",
    "cercle-shape",
    "main-pic",
  ];

  //////////////
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

  //////////////

  //this is for  section our featurs
  const featuresData = [
    {
      icon: (
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
          className="feather feather-settings"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      title: "Incredible Infrastructure",
      content:
        "Incredible infrastructure defines a leading IT company, intertwining cutting-edge technology with robust systems. State-of-the-art data centers, high-speed networks, and scalable cloud solutions form the backbone, ensuring seamless operations. The company commitment to security fortifies against cyber threats, while innovative hardware and software empower clients globally. With a focus on reliability, adaptability, and efficiency, this IT powerhouse continually evolves its infrastructure, staying ahead in the dynamic tech landscape. It epitomizes a digital ecosystem where excellence meets ingenuity, propelling businesses into a future marked by unparalleled connectivity and technological prowess.",
    },
    {
      icon: (
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
      ),
      title: "Email Notifications",
      content:
        "Email notifications in an IT company serve as crucial communication tools, alerting users about system updates, security patches, and service interruptions. These notifications streamline workflow, keeping employees informed about project milestones, deadlines, and meeting schedules. Additionally, they enhance cybersecurity by promptly addressing potential threats. Through personalized email alerts, IT professionals can stay abreast of software releases, bug fixes, and network maintenance, ensuring seamless operations. Efficient email notification systems foster collaboration, providing real-time information on support tickets, server statuses, and software deployment. Ultimately, they contribute to a well-orchestrated and responsive IT environment.",
    },
    {
      icon: (
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
          className="feather feather-grid"
        >
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      ),
      title: "Simple Dashboard",
      content:
        "A simple dashboard for an IT company serves as a centralized interface, providing real-time insights into key metrics and operations. It streamlines data visualization, displaying project statuses, resource utilization, and financial metrics in an easily understandable format. User-friendly and customizable, the dashboard enhances decision-making by offering a comprehensive overview of IT activities, fostering efficiency and transparency. With features like task tracking, team collaboration tools, and system health monitoring, it empowers management to make informed decisions swiftly. The simplicity of the dashboard ensures accessibility for all stakeholders, promoting seamless communication and alignment within the IT company",
    },
    {
      icon: (
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
          className="feather feather-info"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12" y2="8"></line>
        </svg>
      ),
      title: "Information Retrieval",
      content:
        "Information Retrieval in IT companies involves the systematic process of obtaining relevant data from vast repositories. Utilizing advanced search algorithms and databases, IT professionals extract valuable information to enhance decision-making and optimize business processes. Effective information retrieval ensures quick access to crucial data, promoting efficiency and innovation within the company. Implementing robust retrieval systems is imperative for IT firms to stay competitive in the dynamic technology landscape, fostering a culture of informed decision-making and strategic planning.",
    },
    {
      icon: (
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
          className="feather feather-mouse-pointer"
        >
          <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
          <path d="M13 13l6 6"></path>
        </svg>
      ),
      title: "Drag and Drop Functionality",
      content:
        "In the dynamic landscape of IT companies, drag-and-drop functionality has emerged as a pivotal tool for seamless user interaction. This intuitive method streamlines processes, enhancing efficiency and reducing learning curves. Integrating drag-and-drop features into software interfaces empowers users to effortlessly manipulate data, fostering a more engaging and user-friendly experience. This functionality is particularly beneficial in design applications, project management tools, and collaborative platforms, where simplicity and accessibility are paramount. IT companies continually leverage this innovation to elevate user satisfaction, improve workflow, and stay at the forefront of technological advancements.",
    },
    {
      icon: (
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
          className="feather feather-bell"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      ),
      title: "Deadline Reminders",
      content:
        "Deadline reminders are crucial for IT companies to ensure timely project completion and deliverables. These reminders, often integrated into project management systems, help teams stay organized and focused. Meeting deadlines is paramount in the fast-paced tech industry, fostering client satisfaction and maintaining a competitive edge. Automated alerts, calendars, and collaboration tools play key roles in keeping teams informed and on track. Timely completion not only enhances the company reputation but also promotes efficient workflow, allowing for smoother transitions between projects and fostering a culture of accountability and productivity.",
    },
  ];

  //////////////

  //this is for  section our team
  const teamData = [
    {
      name: "Chandan Singh",
      role: "CEO & Founder",
      image: "assets/img/team-image/1.jpg",
      twitter: [
        <Link to="">
          <FaXTwitter style={{ color: "blue", fontSize: "20px" }} />{" "}
        </Link>,
      ],
      instagrm: [
        <Link to="">
          <FaSquareInstagram style={{ color: "pink", fontSize: "20px" }} />
        </Link>,
      ],
      Linkdien: [
        <Link to="">
          <CiLinkedin style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      facebook: [
        <Link to="https://www.facebook.com/chandansingh4you">
          <FaFacebookSquare style={{ color: "skyblue", fontSize: "20px" }} />
        </Link>,
      ],
    },
    {
      name: "Kudan Sign",
      role: " Manager",
      image: "assets/img/team-image/2.jpg",
      twitter: [
        <Link to="">
          <FaXTwitter style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      instagrm: [
        <Link to="">
          <FaSquareInstagram style={{ color: "pink", fontSize: "20px" }} />
        </Link>,
      ],
      Linkdien: [
        <Link to="">
          <CiLinkedin style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      facebook: [
        <Link to="">
          <FaFacebookSquare style={{ color: "skyblue", fontSize: "20px" }} />
        </Link>,
      ],
    },
    {
      name: "Punit",
      role: "HR",
      image: "assets/img/team-image/3.jpg",
      twitter: [
        <Link to="">
          <FaXTwitter style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      instagrm: [
        <Link to="">
          <FaSquareInstagram style={{ color: "pink", fontSize: "20px" }} />
        </Link>,
      ],
      Linkdien: [
        <Link to="">
          <CiLinkedin style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      facebook: [
        <Link to="">
          <FaFacebookSquare style={{ color: "skyblue", fontSize: "20px" }} />
        </Link>,
      ],
    },
    {
      name: "Samim",
      role: "CA",
      image: "assets/img/team-image/4.jpg",
      twitter: [
        <Link to="">
          <FaXTwitter style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      instagrm: [
        <Link to="">
          <FaSquareInstagram style={{ color: "pink", fontSize: "20px" }} />
        </Link>,
      ],
      Linkdien: [
        <Link to="">
          <CiLinkedin style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      facebook: [
        <Link to="">
          {" "}
          <FaFacebookSquare style={{ color: "skyblue", fontSize: "20px" }} />
        </Link>,
      ],
    },
    {
      name: "Aarti",
      role: "IT HEAD",
      image: "assets/img/team-image/5.jpg",
      twitter: [
        <Link to="">
          <FaXTwitter style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      instagrm: [
        <Link to="">
          <FaSquareInstagram style={{ color: "pink", fontSize: "20px" }} />
        </Link>,
      ],
      Linkdien: [
        <Link to="">
          <CiLinkedin style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      facebook: [
        <Link to="">
          <FaFacebookSquare style={{ color: "skyblue", fontSize: "20px" }} />
        </Link>,
      ],
    },
    {
      name: "Manish",
      role: "Angular Developer",
      image: "assets/img/team-image/5.jpg",
      twitter: [
        <Link to="">
          <FaXTwitter style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      instagrm: [
        <Link to="">
          <FaSquareInstagram style={{ color: "pink", fontSize: "20px" }} />
        </Link>,
      ],
      Linkdien: [
        <Link to="">
          <CiLinkedin style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      facebook: [
        <Link to="">
          <FaFacebookSquare style={{ color: "skyblue", fontSize: "20px" }} />
        </Link>,
      ],
    },
    {
      name: "Sandeep Kumar",
      role: "MERN Developer",
      image: "assets/img/team-image/5.jpg",
      twitter: [
        <Link to="">
          <FaXTwitter style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      instagrm: [
        <Link to="">
          <FaSquareInstagram style={{ color: "pink", fontSize: "20px" }} />
        </Link>,
      ],
      Linkdien: [
        <Link to="">
          <CiLinkedin style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      facebook: [
        <Link to="">
          <FaFacebookSquare style={{ color: "skyblue", fontSize: "20px" }} />
        </Link>,
      ],
    },
    {
      name: "Lalit Kumar",
      role: "React Developer",
      image: "assets/img/team-image/5.jpg",
      twitter: [
        <Link to="">
          <FaXTwitter style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      instagrm: [
        <Link to="">
          <FaSquareInstagram style={{ color: "pink", fontSize: "20px" }} />
        </Link>,
      ],
      Linkdien: [
        <Link to="">
          <CiLinkedin style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      facebook: [
        <Link to="">
          <FaFacebookSquare style={{ color: "skyblue", fontSize: "20px" }} />
        </Link>,
      ],
    },
    {
      name: "Kavita",
      role: "UI/UX",
      image: "assets/img/team-image/5.jpg",
      twitter: [
        <Link to="">
          <FaXTwitter style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      instagrm: [
        <Link to="">
          <FaSquareInstagram style={{ color: "pink", fontSize: "20px" }} />
        </Link>,
      ],
      Linkdien: [
        <Link to="">
          <CiLinkedin style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      facebook: [
        <Link to="">
          <FaFacebookSquare style={{ color: "skyblue", fontSize: "20px" }} />
        </Link>,
      ],
    },
    {
      name: "Vishal",
      role: "Graphic/Video Editor",
      image: "assets/img/team-image/1.jpg",
      twitter: [
        <Link to="">
          <FaXTwitter style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      instagrm: [
        <Link to="">
          <FaSquareInstagram style={{ color: "pink", fontSize: "20px" }} />
        </Link>,
      ],
      Linkdien: [
        <Link to="">
          <CiLinkedin style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      facebook: [
        <Link to="">
          <FaFacebookSquare style={{ color: "skyblue", fontSize: "20px" }} />
        </Link>,
      ],
    },
    {
      name: "Subham",
      role: "Digital Marketing",
      image: "assets/img/team-image/1.jpg",
      twitter: [
        <Link to="">
          <FaXTwitter style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      instagrm: [
        <Link to="">
          <FaSquareInstagram style={{ color: "pink", fontSize: "20px" }} />
        </Link>,
      ],
      Linkdien: [
        <Link to="">
          <CiLinkedin style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      facebook: [
        <Link to="">
          <FaFacebookSquare style={{ color: "skyblue", fontSize: "20px" }} />
        </Link>,
      ],
    },
    {
      name: "Megha",
      role: "Wordpress Developer",
      image: "assets/img/team-image/5.jpg",
      twitter: [
        <Link to="">
          <FaXTwitter style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      instagrm: [
        <Link to="">
          <FaSquareInstagram style={{ color: "pink", fontSize: "20px" }} />
        </Link>,
      ],
      Linkdien: [
        <Link to="">
          <CiLinkedin style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      facebook: [
        <Link to="">
          <FaFacebookSquare style={{ color: "skyblue", fontSize: "20px" }} />
        </Link>,
      ],
    },
    {
      name: "Poonam",
      role: "Accountent",
      image: "assets/img/team-image/5.jpg",
      twitter: [
        <Link to="">
          <FaXTwitter style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      instagrm: [
        <Link to="">
          <FaSquareInstagram style={{ color: "pink", fontSize: "20px" }} />
        </Link>,
      ],
      Linkdien: [
        <Link to="">
          <CiLinkedin style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      facebook: [
        <Link to="">
          <FaFacebookSquare style={{ color: "skyblue", fontSize: "20px" }} />
        </Link>,
      ],
    },
    {
      name: "Rakesh",
      role: "WordPress Developer",
      image: "assets/img/team-image/5.jpg",
      twitter: [
        <Link to="">
          <FaXTwitter style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      instagrm: [
        <Link to="">
          <FaSquareInstagram style={{ color: "pink", fontSize: "20px" }} />
        </Link>,
      ],
      Linkdien: [
        <Link to="">
          <CiLinkedin style={{ color: "blue", fontSize: "20px" }} />
        </Link>,
      ],
      facebook: [
        <Link to="">
          <FaFacebookSquare style={{ color: "skyblue", fontSize: "20px" }} />
        </Link>,
      ],
    },
  ];

  //////////////

  //this is for  section pricing plan
  const pricingPlans = [
    {
      title: "Basic Plan",
      price: 15.0,
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
      price: 35.0,
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
      price: 65.0,
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

  //////////////

  //this is for  section clients
  const partnerLogos = [
    {
      imgSrc: "assets/img/partner-img/partner-1.png",
      hoverImgSrc: "assets/img/partner-img/partner-hover1.png",
    },
    {
      imgSrc: "assets/img/partner-img/partner-2.png",
      hoverImgSrc: "assets/img/partner-img/partner-hover2.png",
    },
    {
      imgSrc: "assets/img/partner-img/partner-3.png",
      hoverImgSrc: "assets/img/partner-img/partner-hover3.png",
    },
    {
      imgSrc: "assets/img/partner-img/partner-10.png",
      hoverImgSrc: "assets/img/partner-img/partner-hover10.png",
    },
    {
      imgSrc: "assets/img/partner-img/partner-5.png",
      hoverImgSrc: "assets/img/partner-img/partner-hover5.png",
    },
    {
      imgSrc: "assets/img/partner-img/partner-6.png",
      hoverImgSrc: "assets/img/partner-img/partner-hover6.png",
    },
    {
      imgSrc: "assets/img/partner-img/partner-7.png",
      hoverImgSrc: "assets/img/partner-img/partner-hover7.png",
    },
  ];

  //////////////

  //this is for blogs
  const blogPosts = [
    {
      id: 1,
      image: "assets/img/blog-image/1.jpg",
      date: "March 15, 2019",
      title: "What to Look for When Hiring a Website Development Company in India ",
      author: "admin",
      des: "In today’s digital age, a professionally designed and functional website is the cornerstone of a successful online presence for businesses of all sizes and industries. As businesses increasingly recognize the importance of having a strong online presence, the demand for website development services has surged, leading to the proliferation of.",
    },
    {
      id: 2,
      image: "assets/img/blog-image/2.jpg",
      date: "March 17, 2019",
      title: " From Delhi To Global: Digital Marketing Strategies For International Reach",
      author: "smith",
      des: "In today’s interconnected world, businesses are no longer confined by geographical boundaries. Whether you’re a startup in Delhi or an established company, expanding your reach globally requires a well-crafted digital marketing strategy. Let’s explore expert tips to take your brand from Delhi to the global stage.",
    },
    {
      id: 3,
      image: "assets/img/blog-image/3.jpg",
      date: "March 19, 2019",
      title: "Expert Tips For PPC Advertising In Delhi",
      author: "john",
      des: "In the competitive landscape of digital marketing, Pay-Per-Click (PPC) advertising has emerged as a powerful tool to drive targeted traffic and generate leads for businesses. In a bustling metropolis like Delhi, where businesses are constantly vying for attention.",
    },
    {
      id: 4,
      image: "assets/img/blog-image/3.jpg",
      date: "March 19, 2019",
      title: "What to Look for When Hiring a Website Development Company in India",
      author: "john",
      des: "In today’s digital age, a professionally designed and functional website is the cornerstone of a successful online presence for businesses of all sizes and industries. As businesses increasingly recognize the importance of having a strong online presence, the demand for website development services has surged, leading to the proliferation .",
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
        breakpoint: 1024, // Adjust the breakpoint based on your design needs
        settings: {
          slidesToShow: 3, // Show 3 slides on tablets
        },
      },
      {
        breakpoint: 768, // Adjust the breakpoint based on your design needs
        settings: {
          slidesToShow: 2, // Show 1 slide on mobile devices
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
                <div className="col-lg-5">
                  <div className="hero-content">
                    <h1 className="text-left">
                      TRUST OUR BEST IT SOLUTION FOR YOUR BUSINESS
                    </h1>
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

      {/*Start Cloud Hosting Services*/}
      <div className="services-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2 style={{ textAlign: "left" }}>Cloud Hosting Services</h2>
                <div className="bar" />
                <p style={{ textAlign: "left" }}>
                  Cloud hosting services revolutionize IT by providing scalable
                  and flexible infrastructure solutions. These services, offered
                  by IT companies, enable users to store, manage, and access
                  data and applications remotely. Utilizing virtualization,
                  cloud hosting optimizes resource utilization, enhancing
                  efficiency and reducing costs.
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
                We provide a diverse range of services tailored to meet your needs, including consulting, software development, digital marketing, content creation, and strategic planning. Explore our comprehensive solutions for success.{" "}
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
              Our IT company boasts a myriad of cutting-edge features, defining
              our prowess in the tech realm. Robust cybersecurity measures
              ensure client data integrity. Agile development methodologies
              expedite project delivery, fostering innovation. Scalable cloud
              solutions optimize resource utilization.
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
              VeeaarSoftTech, an IT company, boasts an awesome team dedicated to
              innovation and excellence. Comprising skilled professionals across
              diverse domains, our collaborative spirit propels us to deliver
              cutting-edge solutions. With a commitment to client satisfaction,
              VeeaarSoftTech thrives on teamwork, fostering creativity and
              adaptability. Our dynamic workforce, fueled by passion and
              expertise.
            </p>
          </div>
          <Slider
            {...settingsss}
            className="team-slides owl-carousel owl-theme"
          >
            {teamData.map((member, index) => (
              <div key={index} className="single-team">
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
            We continually strive to comprehend the expectations of our users, valuing their needs and desires. Through active listening and engagement, we enhance our understanding to deliver optimal experiences.
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
            "Explore our latest achievements in web and digital marketing, showcasing innovative strategies, impactful campaigns, and successful collaborations. Elevate your online presence with our cutting-edge solutions and results-driven approach."
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
                  style={{ width: "100%", height: "270px", padding:"10px" }}
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
                  <h1 style={{color:"white"}}>{work.title}</h1>
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
      {/* <div className="pricing-area ptb-80 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2 className="text-center">Pricing Plans</h2>
            <div className="bar" />
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                      <sup>$</sup>
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
                    <Link to="/" className="btn btn-primary">
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
      </div> */}
      {/* End Pricing Area*/}

      {/* Start Feedback Area*/}
      <div className="feedback-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2 className="text-center">What users are Saying</h2>
            <div className="bar" />
            <p className="text-center">
            Users commend the web and digital marketing expertise, praising its impact on visibility, lead generation, and brand recognition. Positive feedback emphasizes increased online presence, conversion rates, and business growth.
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
              textAlign:"center",
            }}
          >
            <marquee style={{height:"16px"}}>
              <strong>
                <h6 style={{ color: "green" }}>
                  Click on User Image for Read Users Review
                </h6>
              </strong>
            </marquee>
            {selectedReview && (
              <div className="selected-review">
                <div className="container">
                  <img
                    src={selectedReview.imgSrc}
                    style={{
                      borderRadius: "80px",
                      width: "100px",
                      height: "auto",
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
            "Explore the dynamic world of web and digital marketing on our blog. Unlock insights, trends, and strategies that empower your online presence and drive success in the digital landscape."
            </p>
          </div>
          <Slider {...settingdddsess} className="row">
            {blogPosts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <div className="single-blog-post" style={{ padding: "0 5px" }}>
                  <div className="blog-image">
                    <Link to="/blog">
                      <img
                        src={post.image}
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
                      <Link to="/">{post.title.slice(0, 25)}</Link>
                    </h3>
                    <p>{post.des.slice(0, 30)}</p>
                    <Link
                      to="/blog"
                      target="_blank"
                      className="read-more-btn"
                    >
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
