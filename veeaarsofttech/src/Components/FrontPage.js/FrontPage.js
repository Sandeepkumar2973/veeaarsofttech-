import React, { useEffect, useState } from 'react'
import "./FrontPage.css"
import "../../assets/css/dark-color/dark-style.css"
import "../../assets/css/animate.min.css"
import "../../assets/css/bootstrap.min.css"
import "../../assets/css/boxicons.min.css"
import "../../assets/css/flaticon.css"
import "../../assets/css/magnific-popup.min.css"
import "../../assets/css/meanmenu.css"
import "../../assets/css/odometer.min.css"
import "../../assets/css/owl.carousel.min.css"
import "../../assets/css/responsive.css"
import "../../assets/css/slick.min.css"
import "../../assets/css/style.css"
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Odometer from './Odometer'
import "owl.carousel";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const FrontPage = () => {
  const [value, setValue] = useState(0);
  const [selectedReview, setSelectedReview] = useState(null);


  const feedbackData = [
    {
      name: 'James Anderson',
      role: 'Web Developer',
      imgSrc: 'assets/img/client-image/1.jpg',
      review:
        'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Steven Smith',
      role: 'Web Developer',
      imgSrc: 'assets/img/client-image/2.jpg',
      review:
        'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Steven Lucy',
      role: 'Web Developer',
      imgSrc: 'assets/img/client-image/1.jpg',
      review:
        'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Steven Lucy',
      role: 'Web Developer',
      imgSrc: 'assets/img/client-image/2.jpg',
      review:
        'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Steven Lucy',
      role: 'Web Developer',
      imgSrc: 'assets/img/client-image/3.jpg',
      review:
        'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Steven Lucy',
      role: 'Web Developer',
      imgSrc: 'assets/img/client-image/1.jpg',
      review:
        'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },

    {
      name: 'Steven Lucy',
      role: 'Web Developer',
      imgSrc: 'assets/img/client-image/2.jpg',
      review:
        'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more reviews as needed
  ];
  

  const handleImageClick = (index) => {
    setSelectedReview(feedbackData[index]);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
  };




  useEffect(() => {
    // Simulate value changes over time
    const intervalId = setInterval(() => {
      setValue((prevValue) => prevValue + 100);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);


  const teamData = [
    { id: 1, name: 'John Doe', position: 'Developer', image: '../../assets/img/team-image/1.jpg' },
    { id: 2, name: 'Jane Smith', position: 'Designer', image: '../../assets/img/team-image/2.jpg' },
    { id: 3, name: 'Jane Smith', position: 'Designer', image: '../../assets/img/team-image/3.jpg' },
    { id: 4, name: 'geeoj sanithal', position: 'Designer', image: '../../assets/img/team-image/4.jpg' },
    { id: 5, name: 'Jane Smith', position: 'Designer', image: '../../assets/img/team-image/5.jpg' },
    { id: 1, name: 'Jane Smith', position: 'Designer', image: '../../assets/img/team-image/1.jpg' },
    { id: 2, name: 'Jane Smith', position: 'Designer', image: '../../assets/img/team-image/2.jpg' },
    // Add more team members as needed
  ];

  // Owl Carousel options
  const owlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };


  const worksData = [
    { id: 1, imgSrc: 'assets/img/works-image/1.jpg', 
    title: 'Incredible infrastructure', 
    description: 'Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.' 
  },
    { id: 2, imgSrc: 'assets/img/works-image/2.jpg', 
    title: 'Incredible infrastructure', 
    description: 'Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.' 
  },
    { id: 3, imgSrc: 'assets/img/works-image/3.jpg', 
    title: 'Incredible infrastructure', 
    description: 'Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.' 
  },
    { id: 3, imgSrc: 'assets/img/works-image/4.jpg', 
    title: 'Incredible infrastructure', 
    description: 'Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.' 
  },
    { id: 3, imgSrc: 'assets/img/works-image/5.jpg', 
    title: 'Incredible infrastructure', 
    description: 'Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.' 
  },
  ];

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
  



    return (
       <>
       {/*start this is section our main banner*/}
<div class="main-banner">
  <div class="d-table">
    <div class="d-table-cell">
      <div class="container">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-lg-5">
            <div class="hero-content">
              <h1 class='text-center'>Secure IT Solutions for a more secure environment</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
              <div class="get-stated-btn"><Link to='/' class="btn btn-primary">Get Started</Link></div>
            </div>
          </div>
          <div class="col-lg-6 offset-lg-1">
            <div class="banner-image">
              <img src="/assets/img/banner-image/man.png" class="wow fadeInDown" data-wow-delay="0.6s" alt="man" />
              <img src="/assets/img/banner-image/code.png" class="wow fadeInUp" data-wow-delay="0.6s" alt="code" />
              <img src="/assets/img/banner-image/carpet.png" class="wow fadeInLeft" data-wow-delay="0.6s" alt="carpet" />
              <img src="/assets/img/banner-image/bin.png" class="wow zoomIn" data-wow-delay="0.6s" alt="bin" />
              <img src="/assets/img/banner-image/book.png" class="wow bounceIn" data-wow-delay="0.6s" alt="book" />
              <img src="/assets/img/banner-image/dekstop.png" class="wow fadeInDown" data-wow-delay="0.6s" alt="dekstop" />
              <img src="/assets/img/banner-image/dot.png" class="wow zoomIn" data-wow-delay="0.6s" alt="dot" />
              <img src="/assets/img/banner-image/flower-top-big.png" class="wow fadeInUp" data-wow-delay="0.6s" alt="flower-top-big"/>
              <img src="/assets/img/banner-image/flower-top.png" class="wow rotateIn" data-wow-delay="0.6s" alt="flower-top" />
              <img src="/assets/img/banner-image/keyboard.png" class="wow fadeInUp" data-wow-delay="0.6s" alt="keyboard" />
              <img src="/assets/img/banner-image/pen.png" class="wow zoomIn" data-wow-delay="0.6s" alt="pen" />
              <img src="/assets/img/banner-image/table.png" class="wow zoomIn" data-wow-delay="0.6s" alt="table" />
              <img src="/assets/img/banner-image/tea-cup.png" class="wow fadeInLeft" data-wow-delay="0.6s" alt="tea-cup" />
              <img src="/assets/img/banner-image/headphone.png" class="wow rollIn" data-wow-delay="0.6s" alt="headphone" />
              <img src="/assets/img/banner-image/main-pic.png" class="wow fadeInUp" data-wow-delay="0.6s" alt="main-pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="shape1">
    <img class="shape_img" src="./../../assets/img/shape1.png" alt="shape" />
    </div>
    <div class="shape2 rotateme">
    <img class="shape1_img" src="./../../assets/img/shape2.svg" alt="shape" />
    </div>
    <div class="shape3">
    <img class="shape1_img" src="./../../assets/img/shape3.svg" alt="shape" />
    </div>
    <div class="shape4">
    <img class="shape1_img" src="./../../assets/img/shape4.svg" alt="shape" />
    </div>
    <div class="shape5">
    <img class="shape1_img" src="./../../assets/img/shape5.png" alt="shape" />
    </div>
    <div class="shape6 rotateme">
    <img class="shape1_img" src="./../../assets/img/shape4.svg" alt="shape" />
    </div>
    <div class="shape7">
    <img class="shape1_img" src="./../../assets/img/shape4.svg" alt="shape" />
    </div>
    <div class="shape8 rotateme">
    <img class="shape1_img" src="./../../assets/img/shape2.svg" alt="shape" />
    </div>
  </div>
</div>
{/*end this is section our main banner*/}




{/*start this is section our Boxes Area*/}
<div class="boxes-area">
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="single-box">
          <div class="icon">
            <i data-feather="server" />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line></svg>
          </div>
          <h3>Zero Configuration</h3>
          <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="single-box bg-f78acb">
          <div class="icon">
            <i data-feather="code" />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          </div>
          <h3>Code Security</h3>
          <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="single-box bg-c679e3">
          <div class="icon">
            <i data-feather="users" />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <h3>Team Management</h3>
          <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="single-box bg-eb6b3d">
          <div class="icon">
            <i data-feather="git-branch" />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-branch"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
          </div>
          <h3>Access Controlled</h3>
          <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
        </div>
      </div>
    </div>
  </div>
</div>
{/*end this is section our Boxes Area*/}


{/*Start Cloud Hosting Services*/}
<div class="services-area ptb-80 bg-f7fafd">
  <div class="container">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-lg-6 col-md-12 services-content">
        <div class="section-title">
          <h2 style={{textAlign:"left"}}>Cloud Hosting Services</h2>
          <div class="bar" />
          <p style={{textAlign:"left"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-database"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg> Cloud databases
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Website hosting
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg> File storage
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg> Forex trading
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> File backups
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg> Remote desktop
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Email servers
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg> Hybrid cloud
                            </div>
                        </div>
                    </div>
      </div>
      <div class="col-lg-6 col-md-12 services-right-image">
        <img src="assets/img/services-right-image/book-self.png" class="wow fadeInDown" data-wow-delay="0.6s" alt="book-self" />
        <img src="assets/img/services-right-image/box.png" class="wow fadeInUp" data-wow-delay="0.6s" alt="box" />
        <img src="assets/img/services-right-image/chair.png" class="wow fadeInLeft" data-wow-delay="0.6s" alt="chair" />
        <img src="assets/img/services-right-image/cloud.png" class="wow zoomIn" data-wow-delay="0.6s" alt="cloud" />
        <img src="assets/img/services-right-image/cup.png" class="wow bounceIn" data-wow-delay="0.6s" alt="cup" />
        <img src="assets/img/services-right-image/flower-top.png" class="wow fadeInDown" data-wow-delay="0.6s" alt="flower" />
        <img src="assets/img/services-right-image/head-phone.png" class="wow zoomIn" data-wow-delay="0.6s" alt="head-phone" />
        <img src="assets/img/services-right-image/monitor.png" class="wow fadeInUp" data-wow-delay="0.6s" alt="monitor" />
        <img src="assets/img/services-right-image/mug.png" class="wow rotateIn" data-wow-delay="0.6s" alt="mug" />
        <img src="assets/img/services-right-image/table.png" class="wow fadeInUp" data-wow-delay="0.6s" alt="table" />
        <img src="assets/img/services-right-image/tissue.png" class="wow zoomIn" data-wow-delay="0.6s" alt="tissue" />
        <img src="assets/img/services-right-image/water-bottle.png" class="wow zoomIn" data-wow-delay="0.6s" alt="water-bottle" />
        <img src="assets/img/services-right-image/wifi.png" class="wow fadeInLeft" data-wow-delay="0.6s" alt="wifi" />
        <img src="assets/img/services-right-image/cercle-shape.png" class="bg-image rotateme" alt="shape" />
        <img src="assets/img/services-right-image/main-pic.png" class="wow fadeInUp" data-wow-delay="0.6s" alt="main-pic" />
      </div>
    </div>
  </div>
</div>
{/*End Cloud Hosting Services*/}




{/*Start Design & Development Services */}
<div class="services-area ptb-80">
  <div class="container">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-lg-6 col-md-12 services-left-image">
        <img src="assets/img/services-left-image/big-monitor.png" class="wow fadeInDown" data-wow-delay="0.6s" alt="big-monitor" />
        <img src="assets/img/services-left-image/creative.png" class="wow fadeInUp" data-wow-delay="0.6s" alt="creative" />
        <img src="assets/img/services-left-image/developer.png" class="wow fadeInLeft" data-wow-delay="0.6s" alt="developer" />
        <img src="assets/img/services-left-image/flower-top.png" class="wow zoomIn" data-wow-delay="0.6s" alt="flower-top" />
        <img src="assets/img/services-left-image/small-monitor.png" class="wow bounceIn" data-wow-delay="0.6s" alt="small-monitor" />
        <img src="assets/img/services-left-image/small-top.png" class="wow fadeInDown" data-wow-delay="0.6s" alt="small-top" />
        <img src="assets/img/services-left-image/table.png" class="wow zoomIn" data-wow-delay="0.6s" alt="table" />
        <img src="assets/img/services-left-image/target.png" class="wow fadeInUp" data-wow-delay="0.6s" alt="target" />
        <img src="assets/img/services-left-image/cercle-shape.png" class="bg-image rotateme" alt="shape" />
        <img src="assets/img/services-left-image/main-pic.png" class="wow fadeInUp" data-wow-delay="0.6s" alt="main-pic" />
      </div>
      <div class="col-lg-6 col-md-12 services-content">
        <div class="section-title">
          <h2>Design &amp; Development</h2>
          <div class="bar" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="box">
              <i data-feather="layout" /> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              Responsive design
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="box">
              <i data-feather="code" />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
               React web development
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="box">
              <i data-feather="smartphone" />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smartphone"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>
               Android apps development
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="box">
              <i data-feather="code" /> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              Laravel web development
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="box">
              <i data-feather="smartphone" />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smartphone"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>
               iOS apps development
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="box">
              <i data-feather="pen-tool" /> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pen-tool"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
              UX/UI design
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="box">
              <i data-feather="shopping-cart" /> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              E-commerce development
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="box">
              <i data-feather="check-circle" />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
               Print ready design
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/*End Design & Development Services  */}



{/*start this is section our featurs*/}
<div class="features-area ptb-80 bg-f7fafd">
        <div class="container">
            <div class="section-title">
                <h2>Our Features</h2>
                <div class="bar"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="single-features">
                    <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                        </div>

                        <h3>Incredible Infrastructure</h3>
                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="single-features">
                    <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </div>

                        <h3>Email Notifications</h3>
                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="single-features">
                    <div class="icon bg-c679e3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                        </div>

                        <h3>Simple Dashboard</h3>
                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="single-features">
                    <div class="icon bg-c679e3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line></svg>
                        </div>

                        <h3>Information Retrieval</h3>
                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="single-features">
                    <div class="icon bg-eb6b3d">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mouse-pointer"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path></svg>
                        </div>

                        <h3>Drag and Drop Functionality</h3>
                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="single-features">
                    <div class="icon bg-eb6b3d">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        </div>

                        <h3>Deadline Reminders</h3>
                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/*end this is section our featurs*/}


{/*Start Team Area*/}
    <div class="team-area ptb-80 bg-f9f6f6">
        <div class="container">
            <div class="section-title">
                <h2>Our Awesome Team</h2>
                <div class="bar"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
      {/* <div className="container-fluid p-0">
  <div className="team-slides owl-carousel owl-theme owl-loaded owl-drag">
    <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(-5173px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: 8623}}><div className="owl-item cloned" style={{width: '401.11px', marginRight: 30}}><div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/1.jpg" alt="image" />
              <img src="assets/img/team-image/1.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Josh Buttler</h3>
                <span>CEO &amp; Founder</span>
              </div>
              <ul>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" /></svg></a></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div></div><div className="owl-item cloned" style={{width: '401.11px', marginRight: 30}}><div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/2.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Alex Maxwel</h3>
                <span>Marketing Manager</span>
              </div>
              <ul>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" /></svg></a></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div></div><div className="owl-item cloned" style={{width: '401.11px', marginRight: 30}}><div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/3.jpg" alt="image" />
            </div>


            <div className="team-content">
              <div className="team-info">
                <h3>Janny Cotller</h3>
                <span>Web Developer</span>
              </div>
              <ul>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" /></svg></a></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div></div><div className="owl-item cloned" style={{width: '401.11px', marginRight: 30}}><div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/4.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Jason Statham</h3>
                <span>UX/UI Designer</span>
              </div>
              <ul>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" /></svg></a></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div></div><div className="owl-item cloned" style={{width: '401.11px', marginRight: 30}}><div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/5.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Corey Anderson</h3>
                <span>Project Manager</span>
              </div>
              <ul>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" /></svg></a></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div></div><div className="owl-item" style={{width: '401.11px', marginRight: 30}}><div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/1.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Josh Buttler</h3>
                <span>CEO &amp; Founder</span>
              </div>
              <ul>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" /></svg></a></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div></div><div className="owl-item" style={{width: '401.11px', marginRight: 30}}><div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/2.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Alex Maxwel</h3>
                <span>Marketing Manager</span>
              </div>
              <ul>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" /></svg></a></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div></div><div className="owl-item" style={{width: '401.11px', marginRight: 30}}><div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/3.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Janny Cotller</h3>
                <span>Web Developer</span>
              </div>
              <ul>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" /></svg></a></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div></div><div className="owl-item" style={{width: '401.11px', marginRight: 30}}><div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/4.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Jason Statham</h3>
                <span>UX/UI Designer</span>
              </div>
              <ul>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" /></svg></a></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div></div><div className="owl-item" style={{width: '401.11px', marginRight: 30}}><div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/5.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Corey Anderson</h3>
                <span>Project Manager</span>
              </div>
              <ul>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" /></svg></a></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div></div><div className="owl-item" style={{width: '401.11px', marginRight: 30}}><div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/1.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Josh Buttler</h3>
                <span>CEO &amp; Founder</span>
              </div>
              <ul>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" /></svg></a></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div></div><div className="owl-item" style={{width: '401.11px', marginRight: 30}}><div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/2.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Alex Maxwel</h3>
                <span>Marketing Manager</span>
              </div>
              <ul>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" /></svg></a></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div></div><div className="owl-item active" style={{width: '401.11px', marginRight: 30}}><div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/3.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Janny Cotller</h3>
                <span>Web Developer</span>
              </div>
              <ul>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" /></svg></a></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div></div><div className="owl-item active" style={{width: '401.11px', marginRight: 30}}><div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/4.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Jason Statham</h3>
                <span>UX/UI Designer</span>
              </div>
              <ul>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" /></svg></a></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div></div><div className="owl-item active" style={{width: '401.11px', marginRight: 30}}><div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/5.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Corey Anderson</h3>
                <span>Project Manager</span>
              </div>
              <ul>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" /></svg></a></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div></div><div className="owl-item cloned" style={{width: '401.11px', marginRight: 30}}><div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/1.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Josh Buttler</h3>
                <span>CEO &amp; Founder</span>
              </div>
              <ul>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" /></svg></a></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div></div><div className="owl-item cloned" style={{width: '401.11px', marginRight: 30}}><div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/2.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Alex Maxwel</h3>
                <span>Marketing Manager</span>
              </div>
              <ul>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" /></svg></a></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div></div><div className="owl-item cloned" style={{width: '401.11px', marginRight: 30}}><div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/3.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Janny Cotller</h3>
                <span>Web Developer</span>
              </div>
              <ul>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" /></svg></a></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div></div><div className="owl-item cloned" style={{width: '401.11px', marginRight: 30}}><div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/4.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Jason Statham</h3>
                <span>UX/UI Designer</span>
              </div>
              <ul>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" /></svg></a></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div></div><div className="owl-item cloned" style={{width: '401.11px', marginRight: 30}}><div className="single-team">
            <div className="team-image">
              <img src="assets/img/team-image/5.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Corey Anderson</h3>
                <span>Project Manager</span>
              </div>
              <ul>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" /></svg></a></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots"><button role="button" className="owl-dot"><span /></button><button role="button" className="owl-dot"><span /></button><button role="button" className="owl-dot active"><span /></button><button role="button" className="owl-dot"><span /></button></div></div>
</div> */}

<OwlCarousel className="owl-theme" {...owlOptions}>
      {teamData.map((member) => (
        <div key={member.id} className="team-member" style={{background:"#f2f2f2", padding:"30px"}}>
          {/* <img src={require(`./../../assets/img/team-image/${member.image}`).default} alt={member.name} /> */}
          <img className='carsole-image' src={member.image}/>
           <div class="team-content">
              <div class="team-info">
              <h6 className='text-center'>{member.name}</h6>
           <span><p>{member.position}</p></span>
                        </div>
                        <ul>
                            <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a></li>
                            <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a></li>
                            <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></li>
                            <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-gitlab"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path></svg></a></li>
                        </ul>
                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                    </div>
          {/* <h3 className='text-center'>{member.name}</h3> */}
          {/* <p>{member.position}</p> */}
        </div>
      ))}
    </OwlCarousel>
    </div>
    {/*Start Team Area*/}


{/*Start Fun Facts Area  */}
<div class="funfacts-area ptb-80">
  <div class="container">
    <div class="section-title">
      <h2>We always try to understand users expectation</h2>
      <div class="bar" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className="row">
      <div className="col-lg-3 col-md-3 col-6 col-sm-3">
        <div className="funfact">
        <h2 style={{color:"#44ce6f", fontSize:"35px", marginBottom: "7px"}}
        ><Odometer initialValue={150}  duration= "4000"  formate="{d}"/></h2>  
          <p>Downloaded</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-6 col-sm-3">
        <div className="funfact">
        <h2 style={{color:"#44ce6f", fontSize:"35px", marginBottom: "7px"}}>
        <Odometer initialValue={20} duration= "4000"  formate="{d}"/>
        </h2>
          <p>Feedback</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-6 col-sm-3">
        <div className="funfact">
        <h2 style={{color:"#44ce6f", fontSize:"35px", marginBottom: "7px"}}>
        <Odometer initialValue={70} duration= "4000"  formate="{d}"/>
        </h2>
          <p>Workers</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-6 col-sm-3">
        <div className="funfact">
        <h2 style={{color:"#44ce6f", fontSize:"35px", marginBottom: "7px"}}>
        <Odometer initialValue={500} duration= "4000"  formate="{d}" />
        </h2>
          <p>Contributors</p>
        </div>
      </div>
    </div>
    <div class="contact-cta-box">
      <h3>Have any question about us?</h3>
      <p>Don't hesitate to contact us</p>
      <a href="contact.html" class="btn btn-primary">Contact Us</a>
    </div>
    <div class="map-bg">
      {/* <img src="assets/img/map.png" alt="map" /> */}
      <img className="map-image" src="../../assets/img/map.png" alt="map" 
        style={{ width: "100%", height: "390px" }}
      />
    </div>
    
  </div>
  <div class="shape8 rotateme">
  <img src="assets/img/shape2.svg" alt="shape" style={{width:"20px", height:"20px"}}/></div>
  <div class="shape2 rotateme">
  <img src="assets/img/shape2.svg" alt="shape"  style={{width:"20px", height:"20px"}}/></div>
  <div classclassName="shape7">
  <img src="assets/img/shape4.svg" alt="shape"  style={{width:"20px", height:"20px"}}/></div>
  <div class="shape4">
  <img src="assets/img/shape4.svg" alt="shape"  style={{width:"20px", height:"20px"}}/></div>
</div>
{/* End Fun Facts Area*/}





{/* Start Works Area*/}
<div className="works-area ptb-80 bg-f7fafd">
  <div className="container">
    <div className="section-title">
      <h2>Our Recent Works</h2>
      <div className="bar" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  <div className="container-fluid p-0">
      <OwlCarousel className="works-slides owl-carousel owl-theme" {...options}>
        {worksData.map(work => (
          <div key={work.id} className="single-works">
            <img src={work.imgSrc} alt="image" />
            <Link to="/" className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings">
                <circle cx={12} cy={12} r={3} />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </Link>
            <div className="works-content">
              <h3>{work.title}</h3>
              <p>{work.description}</p>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  <div class="shape8 rotateme"><img src="assets/img/shape2.svg" alt="shape"  style={{width:"20px", height:"20px"}}/></div>
  <div class="shape2 rotateme"><img src="assets/img/shape2.svg" alt="shape" style={{width:"20px", height:"20px"}}/></div>
  <div class="shape7"><img src="assets/img/shape4.svg" alt="shape" style={{width:"20px", height:"20px"}}/></div>
  <div class="shape4"><img src="assets/img/shape4.svg" alt="shape" style={{width:"20px", height:"20px"}}/></div>
</div>
{/* End Works Area*/}




{/* Start Pricing Area */}
<div className="pricing-area ptb-80 bg-f9f6f6">
  <div className="container">
    <div className="section-title">
      <h2>Pricing Plans</h2>
      <div className="bar" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="pricing-table">
          <div className="pricing-header">
            <h3>Basic Plan</h3>
          </div>
          <div className="price">
            <span><sup>$</sup>15.00 <span>/Mon</span></span>
          </div>
          <div className="pricing-features">
            <ul>
              <li className="active">5 GB Bandwidth</li>
              <li className="active">Highest Speed</li>
              <li className="active">1 GB Storage</li>
              <li className="active">Unlimited Website</li>
              <li className="active">Unlimited Users</li>
              <li className="active">24x7 Great Support</li>
              <li>Data Security and Backups</li>
              <li>Monthly Reports and Analytics</li>
            </ul>
          </div>
          <div className="pricing-footer">
            <a href="#" className="btn btn-primary">Select Plan</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="pricing-table active-plan">
          <div className="pricing-header">
            <h3>Advanced Plan</h3>
          </div>
          <div className="price">
            <span><sup>$</sup>35.00 <span>/Mon</span></span>
          </div>
          <div className="pricing-features">
            <ul>
              <li className="active">10 GB Bandwidth</li>
              <li className="active">Highest Speed</li>
              <li className="active">3 GB Storage</li>
              <li className="active">Unlimited Website</li>
              <li className="active">Unlimited Users</li>
              <li className="active">24x7 Great Support</li>
              <li className="active">Data Security and Backups</li>
              <li>Monthly Reports and Analytics</li>
            </ul>
          </div>
          <div className="pricing-footer">
            <a href="#" className="btn btn-primary">Select Plan</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
        <div className="pricing-table">
          <div className="pricing-header">
            <h3>Expert Plan</h3>
          </div>
          <div className="price">
            <span><sup>$</sup>65.00 <span>/Mon</span></span>
          </div>
          <div className="pricing-features">
            <ul>
              <li className="active">15 GB Bandwidth</li>
              <li className="active">Highest Speed</li>
              <li className="active">5 GB Storage</li>
              <li className="active">Unlimited Website</li>
              <li className="active">Unlimited Users</li>
              <li className="active">24x7 Great Support</li>
              <li className="active">Data Security and Backups</li>
              <li className="active">Monthly Reports and Analytics</li>
            </ul>
          </div>
          <div className="pricing-footer">
            <a href="#" className="btn btn-primary">Select Plan</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="shape8 rotateme">
  <img src="assets/img/shape2.svg" alt="shape" style={{width:"20px", height:"20px"}}/></div>
  <div class="shape2 rotateme">
  <img src="assets/img/shape2.svg" alt="shape"  style={{width:"20px", height:"20px"}}/></div>
  <div classclassName="shape7">
  <img src="assets/img/shape4.svg" alt="shape"  style={{width:"20px", height:"20px"}}/></div>
  <div class="shape4">
  <img src="assets/img/shape4.svg" alt="shape"  style={{width:"20px", height:"20px"}}/></div>
</div>
{/* End Pricing Area*/}



{/* Start Feedback Area*/}
<div className="feedback-area ptb-80 bg-f7fafd">
      <div className="container">
        <div className="section-title">
          <h2>What users are Saying</h2>
          <div className="bar" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>


<div className='card' style={{width:"70%", margin:"0 auto", padding:"20px", marginBottom:"10px" }}>
      {selectedReview && (
        <div className="selected-review">
          <div className="container">
          <image src={selectedReview.imgSrc} />
            <h3>{selectedReview.name}</h3>
            <span>{selectedReview.role}</span>
            <p>{selectedReview.review}</p>
            <button className="btn btn-primary" onClick={() => setSelectedReview(null)}>Close</button>
          </div>
        </div>
      )}
      </div>
    </div>


    <div className="feedback-slides">
          <Slider {...settings}>
            {feedbackData.map((feedback, index) => (
              <div key={index} className="single-feedback">
                <div className="client-img" onClick={() => handleImageClick(index)}>
                  <img src={feedback.imgSrc} alt={feedback.name} style={{borderRadius:"50px"}}/>
                </div>
                {/* Display a preview of the review if needed */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
{/*  End Feedback Area*/}



{/*  Start Ready To Talk Area*/}
<div class="ready-to-talk">
        <div class="container">
            <h3>Ready to talk?</h3>
            <p>Our team is here to answer your question about StartP</p>
            <a href="contact.html" class="btn btn-primary">Contact Us</a>
            <span><a href="contact.html">Or, get started now with a free trial</a></span>
        </div>
        <div class="shape8 rotateme">
  <img src="assets/img/shape2.svg" alt="shape" style={{width:"20px", height:"20px"}}/></div>
  <div class="shape2 rotateme">
  <img src="assets/img/shape2.svg" alt="shape"  style={{width:"20px", height:"20px"}}/></div>
  <div classclassName="shape7">
  <img src="assets/img/shape4.svg" alt="shape"  style={{width:"20px", height:"20px"}}/></div>
  <div class="shape4">
  <img src="assets/img/shape4.svg" alt="shape"  style={{width:"20px", height:"20px"}}/></div>
    </div>
{/*  End Ready To Talk Area */}



{/*   Start Partner Area */}
<div className="partner-area partner-section">
  <div className="container">
    <h5>More that 1.5 million businesses and organizations use StartP</h5>
    <div className="partner-inner">
      <div className="row">
        <div className="col-lg-2 col-md-3 col-6 col-sm-4">
          <a href="#">
            <img src="assets/img/partner-img/partner-1.png" alt="partner" />
            <img src="assets/img/partner-img/partner-hover1.png" alt="partner" />
          </a>
        </div>
        <div className="col-lg-2 col-md-3 col-6 col-sm-4">
          <a href="#">
            <img src="assets/img/partner-img/partner-2.png" alt="partner" />
            <img src="assets/img/partner-img/partner-hover2.png" alt="partner" />
          </a>
        </div>
        <div className="col-lg-2 col-md-3 col-6 col-sm-4">
          <a href="#">
            <img src="assets/img/partner-img/partner-3.png" alt="partner" />
            <img src="assets/img/partner-img/partner-hover3.png" alt="partner" />
          </a>
        </div>
        <div className="col-lg-2 col-md-3 col-6 col-sm-4">
          <a href="#">
            <img src="assets/img/partner-img/partner-4.png" alt="partner" />
            <img src="assets/img/partner-img/partner-hover4.png" alt="partner" />
          </a>
        </div>
        <div className="col-lg-2 col-md-3 col-6 col-sm-4">
          <a href="#">
            <img src="assets/img/partner-img/partner-5.png" alt="partner" />
            <img src="assets/img/partner-img/partner-hover5.png" alt="partner" />
          </a>
        </div>
        <div className="col-lg-2 col-md-3 col-6 col-sm-4">
          <a href="#">
            <img src="assets/img/partner-img/partner-6.png" alt="partner" />
            <img src="assets/img/partner-img/partner-hover6.png" alt="partner" />
          </a>
        </div>
        <div className="col-lg-2 col-md-3 col-6 col-sm-4">
          <a href="#">
            <img src="assets/img/partner-img/partner-7.png" alt="partner" />
            <img src="assets/img/partner-img/partner-hover7.png" alt="partner" />
          </a>
        </div>
        <div className="col-lg-2 col-md-3 col-6 col-sm-4">
          <a href="#">
            <img src="assets/img/partner-img/partner-8.png" alt="partner" />
            <img src="assets/img/partner-img/partner-hover8.png" alt="partner" />
          </a>
        </div>
        <div className="col-lg-2 col-md-3 col-6 col-sm-4">
          <a href="#">
            <img src="assets/img/partner-img/partner-9.png" alt="partner" />
            <img src="assets/img/partner-img/partner-hover9.png" alt="partner" />
          </a>
        </div>
        <div className="col-lg-2 col-md-3 col-6 col-sm-4">
          <a href="#">
            <img src="assets/img/partner-img/partner-10.png" alt="partner" />
            <img src="assets/img/partner-img/partner-hover10.png" alt="partner" />
          </a>
        </div>
        <div className="col-lg-2 col-md-3 col-6 col-sm-4">
          <a href="#">
            <img src="assets/img/partner-img/partner-11.png" alt="partner" />
            <img src="assets/img/partner-img/partner-hover11.png" alt="partner" />
          </a>
        </div>
        <div className="col-lg-2 col-md-3 col-6 col-sm-4">
          <a href="#">
            <img src="assets/img/partner-img/partner-12.png" alt="partner" />
            <img src="assets/img/partner-img/partner-hover12.png" alt="partner" />
          </a>
        </div>
        <div className="col-lg-2 col-md-3 col-6 col-sm-4">
          <a href="#">
            <img src="assets/img/partner-img/partner-13.png" alt="partner" />
            <img src="assets/img/partner-img/partner-hover13.png" alt="partner" />
          </a>
        </div>
        <div className="col-lg-2 col-md-3 col-6 col-sm-4">
          <a href="#">
            <img src="assets/img/partner-img/partner-14.png" alt="partner" />
            <img src="assets/img/partner-img/partner-hover14.png" alt="partner" />
          </a>
        </div>
        <div className="col-lg-2 col-md-3 col-6 col-sm-4">
          <a href="#">
            <img src="assets/img/partner-img/partner-15.png" alt="partner" />
            <img src="assets/img/partner-img/partner-hover15.png" alt="partner" />
          </a>
        </div>
        <div className="col-lg-2 col-md-3 col-6 col-sm-4">
          <a href="#">
            <img src="assets/img/partner-img/partner-16.png" alt="partner" />
            <img src="assets/img/partner-img/partner-hover16.png" alt="partner" />
          </a>
        </div>
        <div className="col-lg-2 col-md-3 col-6 col-sm-4">
          <a href="#">
            <img src="assets/img/partner-img/partner-17.png" alt="partner" />
            <img src="assets/img/partner-img/partner-hover17.png" alt="partner" />
          </a>
        </div>
        <div className="col-lg-2 col-md-3 col-6 col-sm-4">
          <a href="#">
            <img src="assets/img/partner-img/partner-18.png" alt="partner" />
            <img src="assets/img/partner-img/partner-hover18.png" alt="partner" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="shape8 rotateme">
  <img src="assets/img/shape2.svg" alt="shape" style={{width:"20px", height:"20px"}}/></div>
  <div class="shape2 rotateme">
  <img src="assets/img/shape2.svg" alt="shape"  style={{width:"20px", height:"20px"}}/></div>
  <div classclassName="shape7">
  <img src="assets/img/shape4.svg" alt="shape"  style={{width:"20px", height:"20px"}}/></div>
  <div class="shape4">
  <img src="assets/img/shape4.svg" alt="shape"  style={{width:"20px", height:"20px"}}/></div>
</div>
{/*  End Partner Area */}




{/*  Start Blog Area */}
<div className="blog-area ptb-80">
  <div className="container">
    <div className="section-title">
      <h2>The News from Our Blog</h2>
      <div className="bar" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="single-blog-post">
          <div className="blog-image">
            <a href="single-blog.html">
              <img src="assets/img/blog-image/1.jpg" alt="image" />
            </a>
            <div className="date">
              <i data-feather="calendar" /> March 15, 2019
            </div>
          </div>
          <div className="blog-post-content">
            <h3><a href="single-blog.html">The security risks of changing package owners</a></h3>
            <span>by <a href="#">admin</a></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            <a href="#" className="read-more-btn">Read More <i data-feather="arrow-right" /> </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single-blog-post">
          <div className="blog-image">
            <a href="single-blog.html">
              <img src="assets/img/blog-image/2.jpg" alt="image" />
            </a>
            <div className="date">
              <i data-feather="calendar" /> March 17, 2019
            </div>
          </div>
          <div className="blog-post-content">
            <h3><a href="single-blog.html">Tips to Protecting Your Business and Family</a></h3>
            <span>by <a href="#">smith</a></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            <a href="#" className="read-more-btn">Read More <i data-feather="arrow-right" /> </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
        <div className="single-blog-post">
          <div className="blog-image">
            <a href="single-blog.html">
              <img src="assets/img/blog-image/3.jpg" alt="image" />
            </a>
            <div className="date">
              <i data-feather="calendar" /> March 19, 2019
            </div>
          </div>
          <div className="blog-post-content">
            <h3><a href="single-blog.html">Protect Your Workplace from Cyber Attacks</a></h3>
            <span>by <a href="#">john</a></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            <a href="#" className="read-more-btn">Read More <i data-feather="arrow-right" /> </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="shape8 rotateme">
  <img src="assets/img/shape2.svg" alt="shape" style={{width:"20px", height:"20px"}}/></div>
  <div class="shape2 rotateme">
  <img src="assets/img/shape2.svg" alt="shape"  style={{width:"20px", height:"20px"}}/></div>
  <div classclassName="shape7">
  <img src="assets/img/shape4.svg" alt="shape"  style={{width:"20px", height:"20px"}}/></div>
  <div class="shape4">
  <img src="assets/img/shape4.svg" alt="shape"  style={{width:"20px", height:"20px"}}/></div>
</div>
{/*  End Blog Area */}






       </>
    )
}

export default FrontPage
