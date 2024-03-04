import React from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div>
        <Header />

        {/* Start Blog Area */}
        <div className="blog-area ptb-80">
          <div className="container">
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
                    <h3>
                      <a href="single-blog.html">
                        The security risks of changing package owners
                      </a>
                    </h3>
                    <span>
                      by <a href="blog-1.html">admin</a>
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>
                    <a href="single-blog.html" className="read-more-btn">
                      Read More <i data-feather="arrow-right" />{" "}
                    </a>
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
                    <h3>
                      <a href="single-blog.html">
                        Tips to Protecting Your Business and Family
                      </a>
                    </h3>
                    <span>
                      by <a href="blog-1.html">smith</a>
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>
                    <a href="single-blog.html" className="read-more-btn">
                      Read More <i data-feather="arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
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
                    <h3>
                      <a href="single-blog.html">
                        Protect Your Workplace from Cyber Attacks
                      </a>
                    </h3>
                    <span>
                      by <a href="blog-1.html">john</a>
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>
                    <a href="single-blog.html" className="read-more-btn">
                      Read More <i data-feather="arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <a href="single-blog.html">
                      <img src="assets/img/blog-image/4.jpg" alt="image" />
                    </a>
                    <div className="date">
                      <i data-feather="calendar" /> March 15, 2019
                    </div>
                  </div>
                  <div className="blog-post-content">
                    <h3>
                      <a href="single-blog.html">
                        The security risks of changing package owners
                      </a>
                    </h3>
                    <span>
                      by <a href="blog-1.html">admin</a>
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>
                    <a href="single-blog.html" className="read-more-btn">
                      Read More <i data-feather="arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <a href="single-blog.html">
                      <img src="assets/img/blog-image/5.jpg" alt="image" />
                    </a>
                    <div className="date">
                      <i data-feather="calendar" /> March 17, 2019
                    </div>
                  </div>
                  <div className="blog-post-content">
                    <h3>
                      <a href="single-blog.html">
                        Tips to Protecting Your Business and Family
                      </a>
                    </h3>
                    <span>
                      by <a href="blog-1.html">smith</a>
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>
                    <a href="single-blog.html" className="read-more-btn">
                      Read More <i data-feather="arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <a href="single-blog.html">
                      <img src="assets/img/blog-image/6.jpg" alt="image" />
                    </a>
                    <div className="date">
                      <i data-feather="calendar" /> March 19, 2019
                    </div>
                  </div>
                  <div className="blog-post-content">
                    <h3>
                      <a href="single-blog.html">
                        Protect Your Workplace from Cyber Attacks
                      </a>
                    </h3>
                    <span>
                      by <a href="blog-1.html">john</a>
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>
                    <a href="single-blog.html" className="read-more-btn">
                      Read More <i data-feather="arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="pagination-area">
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <a className="page-link" href="blog-1.html">
                          Prev
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="blog-1.html">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="blog-1.html">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="blog-1.html">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="blog-1.html">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Area */}
      </div>
      <Footer />
    </>
  );
};

export default Blog;
