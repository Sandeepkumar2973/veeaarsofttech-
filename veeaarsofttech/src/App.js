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
import Loader from "./Components/Loder/Loder.js";
import Blog1 from "./Components/Blog/blog1.js";
import Blog2 from "./Components/Blog/blog2.js";
import Blog3 from "./Components/Blog/blog3.js";
import Blog4 from "./Components/Blog/blog4.js";
import Blog5 from "./Components/Blog/blog5.js";
import Blog6 from "./Components/Blog/blog6.js";
import Blog7 from "./Components/Blog/blog7.js";
import Blog8 from "./Components/Blog/blog8.js";
import Blog9 from "./Components/Blog/blog9.js";
import Blog10 from "./Components/Blog/blog10.js";
import Blog11 from "./Components/Blog/blog11.js";

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
          <Loader />
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
                <Route path="/privacy-policy" element={<Privacy />} exact />
                <Route path="/refund" element={<Refund />} exact />
                <Route path="/term-conditions" element={<Terms />} exact />
                <Route path="/our-services" element={<Ourservices />} exact />
                <Route path="/technologies" element={<Technology />} exact />
                <Route path="/blog" element={<Blog />} exact />
                <Route
                  path="/what-to-look-for-when-hiring-a-website-development-company-in-india"
                  element={<Blog1 />}
                  exact
                />
                <Route
                  path="/from-delhi-to-global-digital-marketing-strategies-for-international-reach"
                  element={<Blog2 />}
                  exact
                />
                <Route
                  path="/expert-tips-for-ppc-advertising-in-delhi"
                  element={<Blog3 />}
                  exact
                />
                <Route
                  path="/how-to-set-clear-expectations-when-working-with-a-website-development-company"
                  element={<Blog4 />}
                  exact
                />
                <Route
                  path="/top-5-qualities-of-a-successful-mobile-app-development-company"
                  element={<Blog5 />}
                  exact
                />
                <Route
                  path="/the-best-graphic-design-blogs-in-delhi"
                  element={<Blog6 />}
                  exact
                />
                <Route path="/hello-world" element={<Blog8 />} exact />
                <Route
                  path="/digital-marketing-services-in-delhi-ncr"
                  element={<Blog7 />}
                  exact
                />
                <Route
                  path="/best-website-development-company-blog"
                  element={<Blog9 />}
                  exact
                />
                <Route
                  path="/best-digital-marketing-company-in-delhi-blog"
                  element={<Blog10 />}
                  exact
                />
                <Route
                  path="/best-app-development-company-in-delhi-blog"
                  element={<Blog11 />}
                  exact
                />
              </Routes>
            </Router>
          </>
        )}
      </>
    </div>
  );
}

export default App;
