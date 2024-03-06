import React from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { FaReact } from "react-icons/fa";

function Ourservices() {

   //this is for  Design & Development Services
   const servicescollection = [
    {
      title: 'Responsive design',
      icon: 'layout',
      svgPath: [<FaReact />],
    },
    {
      title: 'React web development',
      icon: 'code',
      svgPath: 'M16 18 22 12 16 6M8 6 2 12 8 18',
    },
    {
      title: 'Android apps development',
      icon: 'smartphone',
      svgPath: 'M5 2 19 2 19 22 5 22 5 2zM12 18 12 18',
    },
    {
      title: 'Laravel web development',
      icon: 'code',
      svgPath: 'M16 18 22 12 16 6M8 6 2 12 8 18',
    },
    {
      title: 'iOS apps development',
      icon: 'smartphone',
      svgPath: 'M5 2 19 2 19 22 5 22 5 2zM12 18 12 18',
    },
    {
      title: 'UX/UI design',
      icon: 'pen-tool',
      svgPath: 'M12 19l7-7 3 3-7 7-3-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z M2 2l7.586 7.586 M11 11c0-2.209 1.791-4 4-4',
    },
    {
      title: 'E-commerce development',
      icon: 'shopping-cart',
      svgPath: 'M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6',
    },
    {
      title: 'Print ready design',
      icon: 'check-circle',
      svgPath: 'M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01 9 11.01',
    },
    {
      title: 'React Native Development',
      icon: 'check-circle',
      svgPath: 'M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01 9 11.01',
    },
    {
      title: 'Flutter App Development',
      icon: 'check-circle',
      svgPath: 'M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01 9 11.01',
    },
    {
      title: 'Angular Web Development',
      icon: 'check-circle',
      svgPath: 'M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01 9 11.01',
    },
    {
      title: 'Graphics Designing',
      icon: 'check-circle',
      svgPath: 'M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01 9 11.01',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="header-container">
      <p className="text-data">OUR SERVICES / VEEAARSOFTTECH</p>
      </div>
      {/*Start Design & Development Services */}
<div className="services-area ptb-80">
  <div className="container">
    <div className="row h-100 justify-content-center align-items-center">
      <div className="col-lg-6 col-md-12 services-left-image">
        <img src="assets/img/services-left-image/big-monitor.png" className="wow fadeInDown" data-wow-delay="0.6s" alt="big-monitor" />
        <img src="assets/img/services-left-image/creative.png" className="wow fadeInUp" data-wow-delay="0.6s" alt="creative" />
        <img src="assets/img/services-left-image/developer.png" className="wow fadeInLeft" data-wow-delay="0.6s" alt="developer" />
        <img src="assets/img/services-left-image/flower-top.png" className="wow zoomIn" data-wow-delay="0.6s" alt="flower-top" />
        <img src="assets/img/services-left-image/small-monitor.png" className="wow bounceIn" data-wow-delay="0.6s" alt="small-monitor" />
        <img src="assets/img/services-left-image/small-top.png" className="wow fadeInDown" data-wow-delay="0.6s" alt="small-top" />
        <img src="assets/img/services-left-image/table.png" className="wow zoomIn" data-wow-delay="0.6s" alt="table" />
        <img src="assets/img/services-left-image/target.png" className="wow fadeInUp" data-wow-delay="0.6s" alt="target" />
        <img src="assets/img/services-left-image/cercle-shape.png" className="bg-image rotateme" alt="shape" />
        <img src="assets/img/services-left-image/main-pic.png" className="wow fadeInUp" data-wow-delay="0.6s" alt="main-pic" />
      </div>
      
      <div className="col-lg-6 col-md-12 services-content">
      <div className="section-title">
        <h2>Design & Development</h2>
        <div className="bar" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="row">
        {servicescollection.map((service, index) => (
          <div key={index} className="col-lg-6 col-md-6 col-sm-6">
            <div className="box">
              <i data-feather={service.icon} />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: service.svgPath }} />
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
      <Footer />
    </div>
  );
}

export default Ourservices;
