import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Home/HomePage.js";
import About from "./Components/About/About.js";
import Contact from "./Components/contactus/contactus.js";
import Blog from "./Components/Blog/blog.js";
import Technology from "./Components/Technology/technology.js";
import Website from "./Components/website/Website.js";
import Aplication from "./Components/Aplication/Aplication.js";
import Digital from "./Components/Digital/Digital.js";
import Uiux from "./Components/UiUxDisign/Uiux.js";
import Datascience from "./Components/DataScience/Datascience.js";
import Graphic from "./Components/Graphic/Graphic.js";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/about-us" element={<About />} exact />
            <Route path="/contact-us" element={<Contact />} exact />
            <Route
              path="/website-development-company"
              element={<Website />}
              exact
            />
            <Route
              path="/application-development-company"
              element={<Aplication />}
              exact
            />
            <Route
              path="/digital-marketing-company"
              element={<Digital />}
              exact
            />
            <Route path="/ui-ux-designing-company" element={<Uiux />} exact />
            <Route
              path="/data-science-consulting"
              element={<Datascience />}
              exact
            />
            <Route
              path="/graphic-designing-company"
              element={<Graphic />}
              exact
            />
            <Route path="/blog" element={<Blog />} exact />
            <Route path="/technologies" element={<Technology />} exact />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
