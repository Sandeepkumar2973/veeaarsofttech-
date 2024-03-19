import React, { useState, useEffect } from "react";
import "./FrontPage.css";
import "../../assets/css/animate.min.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/responsive.css";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ourservispage from "../Ourservices/ourservispage.js";
import Blogss from "./Blogss.js";
import Ourteam from "./outTeam.js";
import { Ourwork } from "./Ourwork.js";
import Feedback from "./Feedback.js";
import Funfact from "./Funfact.js";
import Features from "./Features.js";
import Pricing from "./Pricing.js";
import ReadyTalk from "./ReadyTalk.js";
import ServicesCompo from "./ServicesCompo.js";
import CloudHosting from "./CloudHosting.js";
import MainBanner from "./MainBanner.js";

const FrontPage = () => {
  const [value, setValue] = useState(0);



  //this is for total ptrojects count
  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((prevValue) => prevValue + 100);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);



  return (
    <>
      {/*start this is section our main banner*/}
      <MainBanner/>
      {/*end this is section our main banner*/}

      {/*start this is section our Boxes Area*/}
      <Ourservispage />
      {/*end this is section our Boxes Area*/}

      {/*Start Cloud Hosting Services*/}
      <CloudHosting/>
      {/*End Cloud Hosting Services*/}

      {/*Start Design & Development Services */}
      <ServicesCompo />
      {/*End Design & Development Services  */}

      {/*start this is section our featurs*/}
      <Features/>
      {/*end this is section our featurs*/}

      {/*Start Team Area*/}
      <Ourteam />
      {/* Start Team Area */}

      {/*Start Fun Facts Area  */}
      <Funfact />
      {/* End Fun Facts Area*/}

      {/* Start Works Area*/}
      <Ourwork />
      {/* End Works Area*/}

      {/* Start Pricing Area */}
      <Pricing />
      {/* End Pricing Area*/}

     <Feedback />

      {/*  Start Ready To Talk Area*/}
      <ReadyTalk />
      {/*  End Partner Area */}

      {/*  Start Blog Area */}
      <Blogss />
      {/*  End Blog Area */}
    </>
  );
};

export default FrontPage;