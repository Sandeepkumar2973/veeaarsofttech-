import React from 'react'

const ServicesCompo = () => {

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

    return (
        <>
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
                  Our IT company offers a diverse range of services tailored to
                  meet the ever-evolving needs of businesses in today's digital
                  age. From custom software development to strategic IT
                  consulting, cloud solutions, cybersecurity, managed IT
                  services, digital marketing, data analytics, and
                  infrastructure solutions, we are your comprehensive technology
                  partner. Our team of experts is committed to delivering
                  innovative, scalable, and cost-effective solutions that drive
                  business growth and success. Whether you're a small startup or
                  a large enterprise, we have the expertise and resources to
                  help you harness the power of technology and stay ahead of the
                  competition.{" "}
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
        </>
    )
}

export default ServicesCompo
