import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import teamData from "./team";
import "./Ourteam.css"

const Ourteam = () => {
  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1424,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ];

  return (
    <>
      <div className="col-10" style={{margin:"0 auto"}}>
      <div className="team-area ptb-80 bg-f9f6f6">
        <div className="section-title">
          <h2 className="text-center">Our Awesome Team</h2>
          <div className="bar"></div>
          <p className="text-center">
            Our team at the IT company is a diverse and dynamic group of
            professionals dedicated to delivering excellence in every aspect of
            our work. Comprised of talented individuals with expertise ranging
            from software development and IT consulting to cybersecurity, cloud
            solutions, digital marketing, data analytics, and infrastructure
            management, we are united by a shared passion for innovation and
            customer satisfaction.
          </p>
        </div>
        <Slider responsive={responsiveSettings} 
           autoplay={true}
  autoplaySpeed={2000}
  dots={true} 
  infinite={true}
  style={{ width: "100%" }}>

          {teamData.map((member, index) => (
            <div key={index} className="single-team">
              <div
                className="card"
                style={{
                  border: "none",
                  marginRight: "10px",
                  marginLeft: "10px",
                  alignItems: "center",
                }}
              >
                <div className="team-image" style={{ width: "200px" }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-photo"
                    style={{ width: "30px", height: "auto" }}
                  />
                </div>
                <div className="team-content">
                  <div className="team-info" style={{ width: "150px" }}>
                    <h3 className="text-center" style={{ fontSize: "12px" }}>
                      {member.name}
                    </h3>
                    <span>{member.role}</span>
                  </div>
                  <span style={{ padding: "5px" }}>{member.twitter}</span>
                  <span style={{ padding: "5px" }}>{member.instagram}</span>
                  <span style={{ padding: "5px" }}>{member.facebook}</span>
                  <span style={{ padding: "5px" }}>{member.linkedin}</span>
                  <p>{member.des}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
    </div>
      </div>
    </>
   
  );
};

export default Ourteam;
