import React, { useState } from "react";
import "./aboutus.css";
import Navbar from "../Header/Navbar";
// import OwlCarousel from "react-owl-carousel";
// import { Facebook, Twitter, Linkedin, Gitlab } from "react-feather";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
// import "./TeamCarousel.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import Odometer from "./../FrontPage.js/Odometer";

const About = ({ initialValue }) => {
  const [value, setValue] = useState(0);
  const [selectedReview, setSelectedReview] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

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

 //this is for  section our team
const teamData = [
  {
    name: 'Chandan Singh',
    role: 'CEO & Founder',
    image: 'assets/img/team-image/1.jpg',
    twitter:[<Link to=""><FaXTwitter style={{color:"blue", fontSize:"20px"}}/> </Link>],
    instagrm:[<Link to=""><FaSquareInstagram style={{color:"pink", fontSize:"20px"}}/></Link>],
    Linkdien:[<Link to=""><CiLinkedin  style={{color:"blue", fontSize:"20px"}}/></Link>],
    facebook:[ <Link to="https://www.facebook.com/chandansingh4you"><FaFacebookSquare style={{color:"skyblue", fontSize:"20px"}}/></Link>],
  },
  {
    name: 'Kudan Sign',
    role: ' Manager',
    image: 'assets/img/team-image/2.jpg',
    twitter:[<Link to=""><FaXTwitter style={{color:"blue", fontSize:"20px"}}/></Link> ],
    instagrm:[<Link to=""><FaSquareInstagram style={{color:"pink", fontSize:"20px"}}/></Link>],
    Linkdien:[<Link to=""><CiLinkedin  style={{color:"blue", fontSize:"20px"}}/></Link>],
    facebook:[<Link to=""><FaFacebookSquare style={{color:"skyblue", fontSize:"20px"}}/></Link> ], 
   },
  {
    name: 'Punit',
    role: 'HR',
    image: 'assets/img/team-image/3.jpg',
    twitter:[<Link to=""><FaXTwitter style={{color:"blue", fontSize:"20px"}}/></Link> ],
    instagrm:[<Link to=""><FaSquareInstagram style={{color:"pink", fontSize:"20px"}}/></Link>],
    Linkdien:[<Link to=""><CiLinkedin  style={{color:"blue", fontSize:"20px"}}/></Link>],
    facebook:[ <Link to=""><FaFacebookSquare style={{color:"skyblue", fontSize:"20px"}}/></Link>],
    },
  {
    name: 'Samim',
    role: 'CA',
    image: 'assets/img/team-image/4.jpg',
    twitter:[<Link to=""><FaXTwitter style={{color:"blue", fontSize:"20px"}}/></Link> ],
    instagrm:[<Link to=""><FaSquareInstagram style={{color:"pink", fontSize:"20px"}}/></Link>],
    Linkdien:[<Link to=""><CiLinkedin  style={{color:"blue", fontSize:"20px"}}/></Link>],
    facebook:[<Link to=""> <FaFacebookSquare style={{color:"skyblue", fontSize:"20px"}}/></Link>],  
  },
  {
    name: 'Aarti',
    role: 'IT HEAD',
    image: 'assets/img/team-image/5.jpg',
    twitter:[<Link to=""><FaXTwitter style={{color:"blue", fontSize:"20px"}}/></Link> ],
    instagrm:[<Link to=""><FaSquareInstagram style={{color:"pink", fontSize:"20px"}}/></Link>],
    Linkdien:[<Link to=""><CiLinkedin  style={{color:"blue", fontSize:"20px"}}/></Link>],
    facebook:[ <Link to=""><FaFacebookSquare style={{color:"skyblue", fontSize:"20px"}}/></Link>], 
   },
   {
    name: 'Manish',
    role: 'Angular Developer',
    image: 'assets/img/team-image/5.jpg',
    twitter:[<Link to=""><FaXTwitter style={{color:"blue", fontSize:"20px"}}/></Link> ],
    instagrm:[<Link to=""><FaSquareInstagram style={{color:"pink", fontSize:"20px"}}/></Link>],
    Linkdien:[<Link to=""><CiLinkedin  style={{color:"blue", fontSize:"20px"}}/></Link>],
    facebook:[ <Link to=""><FaFacebookSquare style={{color:"skyblue", fontSize:"20px"}}/></Link>], 
   },
   {
    name: 'Sandeep Kumar',
    role: 'MERN Developer',
    image: 'assets/img/team-image/5.jpg',
    twitter:[<Link to=""><FaXTwitter style={{color:"blue", fontSize:"20px"}}/></Link> ],
    instagrm:[<Link to=""><FaSquareInstagram style={{color:"pink", fontSize:"20px"}}/></Link>],
    Linkdien:[<Link to=""><CiLinkedin  style={{color:"blue", fontSize:"20px"}}/></Link>],
    facebook:[ <Link to=""><FaFacebookSquare style={{color:"skyblue", fontSize:"20px"}}/></Link>], 
   },
   {
    name: 'Lalit Kumar',
    role: 'React Developer',
    image: 'assets/img/team-image/5.jpg',
    twitter:[<Link to=""><FaXTwitter style={{color:"blue", fontSize:"20px"}}/></Link> ],
    instagrm:[<Link to=""><FaSquareInstagram style={{color:"pink", fontSize:"20px"}}/></Link>],
    Linkdien:[<Link to=""><CiLinkedin  style={{color:"blue", fontSize:"20px"}}/></Link>],
    facebook:[ <Link to=""><FaFacebookSquare style={{color:"skyblue", fontSize:"20px"}}/></Link>], 
   },
   {
    name: 'Kavita',
    role: 'UI/UX',
    image: 'assets/img/team-image/5.jpg',
    twitter:[<Link to=""><FaXTwitter style={{color:"blue", fontSize:"20px"}}/></Link> ],
    instagrm:[<Link to=""><FaSquareInstagram style={{color:"pink", fontSize:"20px"}}/></Link>],
    Linkdien:[<Link to=""><CiLinkedin  style={{color:"blue", fontSize:"20px"}}/></Link>],
    facebook:[ <Link to=""><FaFacebookSquare style={{color:"skyblue", fontSize:"20px"}}/></Link>], 
   },
   {
    name: 'Vishal',
    role: 'Graphic/Video Editor',
    image: 'assets/img/team-image/vishal.jpg',
    twitter:[<Link to=""><FaXTwitter style={{color:"blue", fontSize:"20px"}}/></Link> ],
    instagrm:[<Link to=""><FaSquareInstagram style={{color:"pink", fontSize:"20px"}}/></Link>],
    Linkdien:[<Link to=""><CiLinkedin  style={{color:"blue", fontSize:"20px"}}/></Link>],
    facebook:[ <Link to=""><FaFacebookSquare style={{color:"skyblue", fontSize:"20px"}}/></Link>], 
   },
   {
    name: 'Subham',
    role: 'Digital Marketing',
    image: 'assets/img/team-image/subham.jpeg',
    twitter:[<Link to=""><FaXTwitter style={{color:"blue", fontSize:"20px"}}/></Link> ],
    instagrm:[<Link to=""><FaSquareInstagram style={{color:"pink", fontSize:"20px"}}/></Link>],
    Linkdien:[<Link to=""><CiLinkedin  style={{color:"blue", fontSize:"20px"}}/></Link>],
    facebook:[ <Link to=""><FaFacebookSquare style={{color:"skyblue", fontSize:"20px"}}/></Link>], 
   },
   {
    name: 'Megha',
    role: 'Wordpress Developer',
    image: 'assets/img/team-image/5.jpg',
    twitter:[<Link to=""><FaXTwitter style={{color:"blue", fontSize:"20px"}}/></Link> ],
    instagrm:[<Link to=""><FaSquareInstagram style={{color:"pink", fontSize:"20px"}}/></Link>],
    Linkdien:[<Link to=""><CiLinkedin  style={{color:"blue", fontSize:"20px"}}/></Link>],
    facebook:[ <Link to=""><FaFacebookSquare style={{color:"skyblue", fontSize:"20px"}}/></Link>], 
   },
   {
    name: 'Poonam',
    role: 'Accountent',
    image: 'assets/img/team-image/5.jpg',
    twitter:[<Link to=""><FaXTwitter style={{color:"blue", fontSize:"20px"}}/></Link> ],
    instagrm:[<Link to=""><FaSquareInstagram style={{color:"pink", fontSize:"20px"}}/></Link>],
    Linkdien:[<Link to=""><CiLinkedin  style={{color:"blue", fontSize:"20px"}}/></Link>],
    facebook:[ <Link to=""><FaFacebookSquare style={{color:"skyblue", fontSize:"20px"}}/></Link>], 
   },
   {
    name: 'Rakesh',
    role: 'WordPress Developer',
    image: 'assets/img/team-image/5.jpg',
    twitter:[<Link to=""><FaXTwitter style={{color:"blue", fontSize:"20px"}}/></Link> ],
    instagrm:[<Link to=""><FaSquareInstagram style={{color:"pink", fontSize:"20px"}}/></Link>],
    Linkdien:[<Link to=""><CiLinkedin  style={{color:"blue", fontSize:"20px"}}/></Link>],
    facebook:[ <Link to=""><FaFacebookSquare style={{color:"skyblue", fontSize:"20px"}}/></Link>], 
   },

   
];

  //this is for feedback
  const feedbackData = [
    {
      name: "James Anderson",
      role: "Web Developer",
      imgSrc: "assets/img/client-image/1.jpg",
      review:
        "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Steven Smith",
      role: "Web Developer",
      imgSrc: "assets/img/client-image/2.jpg",
      review:
        "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Steven Lucy",
      role: "Web Developer",
      imgSrc: "assets/img/client-image/1.jpg",
      review:
        "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Steven Lucy",
      role: "Web Developer",
      imgSrc: "assets/img/client-image/2.jpg",
      review:
        "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Steven Lucy",
      role: "Web Developer",
      imgSrc: "assets/img/client-image/3.jpg",
      review:
        "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Steven Lucy",
      role: "Web Developer",
      imgSrc: "assets/img/client-image/1.jpg",
      review:
        "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
      name: "Steven Lucy",
      role: "Web Developer",
      imgSrc: "assets/img/client-image/2.jpg",
      review:
        "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more reviews as needed
  ];

  ////////////////

  //this is for feedback open new popup
  const handleImageClick = (index) => {
    setSelectedReview(feedbackData[index]);
  };

  //this is for teams
  const settingsss = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="header-container">
        <p className="text-data">ABOUT US</p>
      </div>
      {/* nextline */}
      <div className="about-area ptb-80">
        <div className="container-fluid">
          <div className="row align-items-center">
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
            <div className="col-lg-6 col-md-12">
              <div className="ml-about-content">
                <span className="sub-title text-center">About Us</span>
                <h1 className="text-center">
                Inspiring Tech Needs For Business
                </h1>
                <div className="bar" />
                <p className="text-left">
                Veeaar Softtech pvt ltd is an IT service provider that holds expertise in website development services, digital marketing services, web designing and application development services along with cloud computing and other IT services and solutions. We work with an unparalleled swiftness to stand up to our client’s requirements and deliver what is expected out of us.
                </p>
                <Link to="/contact-us" className="btn btn-secondary">
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="about-inner-area">
        <div className="rows-top"  style={{padding:"50px"}}>
          <div className="row" style={{marginTop:"30px"}}>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Our History</h3>
                <p>
                Veeaar Softtech, a pioneering IT company, boasts a rich history of innovation, excellence, and client success in software development and technology solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Our Mission</h3>
                <p>
                "Empowering businesses with innovative solutions, Veeaar Softtech is dedicated to delivering cutting-edge IT services for sustained growth and success."
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
              <div className="about-text">
                <h3>Who we are</h3>
                <p>
                Veeaar SoftTech is a dynamic IT company, delivering innovative solutions and cutting-edge technology to empower businesses worldwide.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/*Start Team Area*/}
      <div className="team-area ptb-80 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2 className="text-center">Our Awesome Team</h2>
            <div className="bar"></div>
            <p>
            VeeaarSoftTech, an IT company, boasts an awesome team dedicated to innovation and excellence. Comprising skilled professionals across diverse domains, our collaborative spirit propels us to deliver cutting-edge solutions. With a commitment to client satisfaction, VeeaarSoftTech thrives on teamwork, fostering creativity and adaptability. Our dynamic workforce, fueled by passion and expertise.
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
                    <img src={member.image} alt={member.name} />
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

      {/* Start Feedback Area*/}
      <div className="feedback-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2 className="text-center">What users are Saying</h2>
            <div className="bar" />
            <p className="text-center">
            "Impressed with Veeaar Softtech's innovative solutions! They truly understand client needs and deliver top-notch IT services. Highly recommended!"
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
            }}
          >
            <marquee>
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
                  <h3 >{selectedReview.name}</h3>
                  <span>{selectedReview.role}</span>
                  <p >{selectedReview.review}</p>
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

      {/*Start Fun Facts Area  */}
      <div className="funfacts-area ptb-80">
  <div className="container">
    <div className="section-title">
      <h2>We always try to understand users expectation</h2>
      <div className="bar" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className="row">
      <div className="col-lg-3 col-md-3 col-6 col-sm-3">
        <div className="funfact">
        <h2 className='text-center' style={{color:"#44ce6f", fontSize:"35px", marginBottom: "7px"}}
        ><Odometer initialValue={550}  duration= "4000"  formate="{d}"/></h2>  
          <p className='text-center'>Project</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-6 col-sm-3">
        <div className="funfact">
        <h2 className='text-center' style={{color:"#44ce6f", fontSize:"35px", marginBottom: "7px"}}>
        <Odometer initialValue={20} duration= "4000"  formate="{d}"/>
        </h2>
          <p className='text-center'>Feedback</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-6 col-sm-3">
        <div className="funfact">
        <h2 className='text-center' style={{color:"#44ce6f", fontSize:"35px", marginBottom: "7px"}}>
        <Odometer initialValue={70} duration= "4000"  formate="{d}"/>
        </h2>
          <p className='text-center'>Workers</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-6 col-sm-3">
        <div className="funfact">
        <h2 className='text-center' style={{color:"#44ce6f", fontSize:"35px", marginBottom: "7px"}}>
        <Odometer initialValue={500} duration= "4000"  formate="{d}" />
        </h2>
          <p className='text-center'>Contributors</p>
        </div>
      </div>
    </div>
    <div className="contact-cta-box">
      <h3>Have any question about us?</h3>
      <p>Don't hesitate to contact us</p>
      <Link to="/contact-us" className="btn btn-primary">Contact Us</Link>
    </div>
    <div className="map-bg">
      <img className="map-image" src="../../assets/img/map.png" alt="map" 
        style={{ width: "100%", height: "390px" }}
      />
    </div>
    
  </div>
  <div className="shape8 rotateme">
  <img src="assets/img/shape2.svg" alt="shape" style={{width:"20px", height:"20px"}}/></div>
  <div className="shape2 rotateme">
  <img src="assets/img/shape2.svg" alt="shape"  style={{width:"20px", height:"20px"}}/></div>
  <div classclassName="shape7">
  <img src="assets/img/shape4.svg" alt="shape"  style={{width:"20px", height:"20px"}}/></div>
  <div className="shape4">
  <img src="assets/img/shape4.svg" alt="shape"  style={{width:"20px", height:"20px"}}/></div>
</div>
      {/* End Fun Facts Area*/}

      {/*   Start Partner Area */}
      <div className="partner-area partner-section">
        <div className="container">
          <h5 className="text-center">
            More that 1.5 million businesses and organizations use StartP
          </h5>
          <div className="partner-inner">
            <Slider
              {...settings}
              className="partner-slides owl-carousel owl-theme"
            >
              {partnerLogos.map((partner, index) => (
                <div key={index}>
                  <div
                    className="single-ml-partner"
                    style={{ marginBottom: "20px" }}
                  >
                    <Link to="/">
                      <img
                        src={partner.imgSrc}
                        alt="image"
                        style={{ width: "20px", height: "20px" }}
                      />
                      <img
                        src={partner.hoverImgSrc}
                        alt="image"
                        style={{ width: "20px", height: "20px" }}
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
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
      {/*  End Partner Area */}
      <Footer />
    </>
  );
};

export default About;
