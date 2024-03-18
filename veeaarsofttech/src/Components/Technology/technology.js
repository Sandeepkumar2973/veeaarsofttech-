import React from "react";
import "./Technology.css";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaAngular } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiFlutter, SiMongodb, SiMysql, SiRedux, SiTypescript } from "react-icons/si";
import { FaJava, FaLaravel, FaNode, FaPhp, FaPython, FaReact, FaVuejs, FaWordpress } from "react-icons/fa6";
import { DiJqueryLogo } from "react-icons/di";
import { BsFiletypeSql } from "react-icons/bs";


function Technology() {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <p className="text-data">WE USE THIS TECHNOLOGIES</p>
      </div>
      <h2 className=" heading text-center">Technologies We Use</h2>
      <div className="container technology ">
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-3">
            <FaHtml5 className="icon-png"/>
          </div>
          <div className="col-3">
          <IoLogoCss3 className="icon-png" />
          </div>
          <div className="col-3">
          <IoLogoJavascript className="icon-png"/>
          </div>
          <div className="col-3">
          <FaAngular className="icon-png"/>

          </div>
        </div>

        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-3">
          <FaFigma className="icon-png"/>
          </div>
          <div className="col-3">
          <SiFlutter className="icon-png"/>
          </div>
          <div className="col-3">
          <FaWordpress className="icon-png"/>
          </div>
          <div className="col-3">
          <FaJava className="icon-png"/>
          </div>
        </div>

        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-3">
          <DiJqueryLogo className="icon-png"/>
          </div>
          <div className="col-3">
          <FaLaravel className="icon-png"/>
          </div>
          <div className="col-3">
          <SiMongodb className="icon-png"/>
          </div>
          <div className="col-3">
          <SiMysql className="icon-png"/>

          </div>
        </div>

        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-3">
          <FaNode className="icon-png"/>
          </div>
          <div className="col-3">
          <FaPhp className="icon-png"/>
          </div>
          <div className="col-3">
          <FaPython className="icon-png"/>
          </div>
          <div className="col-3">
          <FaReact className="icon-png"/>
          </div>
        </div>

        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-3">
          <SiRedux className="icon-png"/>
          </div>
          <div className="col-3">
          <BsFiletypeSql className="icon-png"/>
          </div>
          <div className="col-3">
          <SiTypescript className="icon-png"/>
          </div>
          <div className="col-3">
          <FaVuejs className="icon-png"/>
          </div>
        </div>

        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-3"></div>
          <div className="col-3"></div>
          <div className="col-3"></div>
          <div className="col-3"></div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Technology;
