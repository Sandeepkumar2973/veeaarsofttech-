import React from "react";
import "./Technology.css";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";

function Technology() {
  return (
    <>
      <Navbar />
      <div className="header-container">
        <p className="text-data">WE USE THIS TECHNOLOGIES / VEEAARSOFTTECH</p>
      </div>
      <h2 className=" heading text-center">Technologies We Use</h2>
      <div className="container technology ">
        <div className="row">
          <div className="col-3">
            <img src="/Icons/html.png" className="icon-png" />
          </div>
          <div className="col-3">
            <img src="/Icons/css.png" className="icon-png" />
          </div>
          <div className="col-3">
            <img src="/Icons/js.png" className="icon-png" />
          </div>
          <div className="col-3">
            <img src="/Icons/angular.png" className="icon-png" />
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <img src="/Icons/figma.png" className="icon-png" />
          </div>
          <div className="col-3">
            <img src="/Icons/flutter.png" className="icon-png" />
          </div>
          <div className="col-3">
            <img src="/Icons/ios.png" className="icon-png" />
          </div>
          <div className="col-3">
            <img src="/Icons/java.png" className="icon-png" />
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <img src="/Icons/jquery.png" className="icon-png" />
          </div>
          <div className="col-3">
            <img src="/Icons/larvel.png" className="icon-png" />
          </div>
          <div className="col-3">
            <img src="/Icons/mongodb.png" className="icon-png" />
          </div>
          <div className="col-3">
            <img src="/Icons/mysql.png" className="icon-png" />
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <img src="/Icons/nodejs.png" className="icon-png" />
          </div>
          <div className="col-3">
            <img src="/Icons/php.png" className="icon-png" />
          </div>
          <div className="col-3">
            <img src="/Icons/python.png" className="icon-png" />
          </div>
          <div className="col-3">
            <img src="/Icons/reactnative.png" className="icon-png" />
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <img src="/Icons/redux.png" className="icon-png" />
          </div>
          <div className="col-3">
            <img src="/Icons/sql.png" className="icon-png" />
          </div>
          <div className="col-3">
            <img src="/Icons/typescript.png" className="icon-png" />
          </div>
          <div className="col-3">
            <img src="/Icons/vue.png" className="icon-png" />
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <img src="/Icons/wordpress.png" className="icon-png" />
          </div>
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
