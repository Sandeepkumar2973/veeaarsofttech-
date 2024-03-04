import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
         {/* <!-- Start Preloader Area --> */}
    {/* <div class="preloader">
        <div class="spinner"></div>
    </div> */}
    {/* <!-- End Preloader Area --> */}
    
    <header id="header" class="headroom">
        <div class="startp-responsive-nav">
            <div class="container">
                <div class="startp-responsive-menu">
                    <div class="logo black-logo">
                        <a href="index.html">
                                <img src="logo192.png" alt="logo"/>
                            </a>
                    </div>
                    <div class="logo white-logo">
                        <a href="index.html">
                                <img src="logo192.png" alt="logo"/>
                            </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="startp-nav">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <a class="navbar-brand black-logo" href="index.html"><img src="https://veeaarsofttech.com/wp-content/uploads/2024/02/logo-png-veeaar-1.png" alt="logo"/></a>
                    {/* <a class="navbar-brand white-logo" href="index.html"><img src="assets/img/white-logo.png" alt="logo"/></a> */}

                    <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul class="navbar-nav nav ml-auto">
                            <li class="nav-item">
                            <Link to='/' class="nav-link active">Home <i data-feather="chevron-down"></i></Link>
                            </li>

                            <li class="nav-item">
                            <Link to='/about' class="nav-link">About <i data-feather="chevron-down"></i></Link>
                            </li>

                            <li class="nav-item">
                            <Link to='/' class="nav-link">Our Services <i data-feather="chevron-down"></i></Link>
                                <ul class="dropdown_menu">
                                    <li class="nav-item">
                                    <Link to='/' class="nav-link">Features <i data-feather="chevron-right"></i></Link>
                                        <ul class="dropdown_menu">
                                            <li class="nav-item"><a href="features.html" class="nav-link">Features</a></li>

                                            <li class="nav-item"><a href="single-features.html" class="nav-link">Features Details</a></li>
                                        </ul>
                                    </li>

                                    {/* <li class="nav-item"><a href="#" class="nav-link">Services <i data-feather="chevron-right"></i></a>
                                        <ul class="dropdown_menu">
                                            <li class="nav-item"><a href="services-1.html" class="nav-link">Services Style 1</a></li>

                                            <li class="nav-item"><a href="services-2.html" class="nav-link">Services Style 2</a></li>

                                            <li class="nav-item"><a href="services-3.html" class="nav-link">Services Style 3</a></li>

                                            <li class="nav-item"><a href="services-4.html" class="nav-link">Services Style 4</a></li>

                                            <li class="nav-item"><a href="services-5.html" class="nav-link">Services Style 5</a></li>

                                            <li class="nav-item"><a href="single-services.html" class="nav-link">Services Details</a></li>
                                        </ul>
                                    </li> */}

                                    <li class="nav-item"><a href="feedback.html" class="nav-link">Feedback</a></li>

                                    <li class="nav-item"><a href="#" class="nav-link">Project <i data-feather="chevron-right"></i></a>
                                        <ul class="dropdown_menu">
                                            <li class="nav-item"><a href="project-1.html" class="nav-link">Project Style 1</a></li>

                                            <li class="nav-item"><a href="project-2.html" class="nav-link">Project Style 2</a></li>

                                            <li class="nav-item"><a href="single-project.html" class="nav-link">Project Details</a></li>
                                        </ul>
                                    </li>

                                    <li class="nav-item"><a href="team.html" class="nav-link">Team</a></li>

                                    <li class="nav-item"><a href="pricing.html" class="nav-link">Pricing</a></li>

                                    <li class="nav-item"><a href="#" class="nav-link">User <i data-feather="chevron-right"></i></a>
                                        <ul class="dropdown_menu">
                                            <li class="nav-item"><a href="login.html" class="nav-link">Login</a></li>

                                            <li class="nav-item"><a href="register.html" class="nav-link">Register</a></li>

                                            <li class="nav-item"><a href="forgot-password.html" class="nav-link">Forgot Password</a></li>
                                        </ul>
                                    </li>

                                    <li class="nav-item"><a href="privacy-policy.html" class="nav-link">Privacy Policy</a></li>

                                    <li class="nav-item"><a href="terms-conditions.html" class="nav-link">Terms & Conditions</a></li>

                                    <li class="nav-item"><a href="faq.html" class="nav-link">FAQ</a></li>

                                    <li class="nav-item"><a href="coming-soon.html" class="nav-link">Coming Soon</a></li>

                                    <li class="nav-item"><a href="404-error.html" class="nav-link">404 Error Page</a></li>
                                </ul>
                            </li>

                            <li class="nav-item"><a href="#" class="nav-link">Blog <i data-feather="chevron-down"></i></a>
                                <ul class="dropdown_menu">
                                    <li class="nav-item"><a href="blog-1.html" class="nav-link">Blog Grid</a></li>

                                    <li class="nav-item"><a href="blog-2.html" class="nav-link">Blog Right Sidebar</a></li>

                                    <li class="nav-item"><a href="blog-3.html" class="nav-link">Blog Grid 2</a></li>

                                    <li class="nav-item"><a href="blog-4.html" class="nav-link">Blog Right Sidebar 2</a></li>

                                    <li class="nav-item"><a href="blog-5.html" class="nav-link">Blog Grid 3</a></li>

                                    <li class="nav-item"><a href="blog-6.html" class="nav-link">Blog Right Sidebar 3</a></li>

                                    <li class="nav-item"><a href="single-blog.html" class="nav-link">Blog Details</a></li>
                                </ul>
                            </li>

                            <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
                        </ul>
                    </div>

                    <div class="others-option">
                        <a href="cart.html" class="cart-wrapper-btn"><i data-feather="shopping-cart"></i><span>0</span></a>
                        <a href="contact.html" class="btn btn-light">Support</a>
                        <a href="login.html" class="btn btn-primary">Login</a>
                    </div>
                </nav>
            </div>
        </div>

        <div class="others-option-for-responsive">
            <div class="container">
                <div class="dot-menu">
                    <div class="inner">
                        <div class="circle circle-one"></div>
                        <div class="circle circle-two"></div>
                        <div class="circle circle-three"></div>
                    </div>
                </div>

                <div class="container">
                    <div class="option-inner">
                        <div class="others-option">
                            <a href="cart.html" class="cart-wrapper-btn"><i data-feather="shopping-cart"></i><span>0</span></a>
                            <a href="contact.html" class="btn btn-light">Support</a>
                            <a href="login.html" class="btn btn-primary">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
        </div>
    )
}

export default Navbar
