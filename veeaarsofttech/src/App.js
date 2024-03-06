import React, { useEffect } from "react";
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
import Ourservices from "./Components/Ourservices/Oursevices.js";
import Privacy from "./Components/Privacy/Privacy.js";
import Refund from "./Components/Refund/Refund.js";
import Terms from "./Components/Term&/Terms.js";
import { LoaderProvider, useLoader } from "./Components/Loder/LoderContecxt.js";

function App() {
  const { loading, showLoader, hideLoader } = useLoader();

  useEffect(() => {
    // Simulate loading delay
    showLoader();
    const timer = setTimeout(() => {
      hideLoader();
    }, 1000); // Adjust the timeout based on your actual loading needs

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <>
        {loading ? (
          "Loading..."
        ) : (
          <>
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
                <Route
                  path="/ui-ux-designing-company"
                  element={<Uiux />}
                  exact
                />
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
                <Route path="/privacy-policy" element={<Privacy />} exact />
                <Route path="/refund" element={<Refund />} exact />
                <Route path="/term-conditions" element={<Terms />} exact />
                <Route path="/our-services" element={<Ourservices />} exact />
                <Route path="/technologies" element={<Technology />} exact />
              </Routes>
            </Router>
          </>
        )}
      </>
    </div>
  );
}

export default App;
