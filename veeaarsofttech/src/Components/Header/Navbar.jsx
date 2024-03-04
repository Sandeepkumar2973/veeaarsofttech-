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
                        <Link to='/'>
                                <img src="https://veeaarsofttech.com/wp-content/uploads/2024/02/logo-png-veeaar-1.png" alt="logo"/>
                            </Link>
                    </div>
                </div>
            </div>
        </div>

        <div class="startp-nav">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <a class="navbar-brand black-logo" Link to='/'>
                    <img src="https://veeaarsofttech.com/wp-content/uploads/2024/02/logo-png-veeaar-1.png" alt="logo"/></a>
                    {/* <a class="navbar-brand white-logo" href="index.html"><img src="assets/img/white-logo.png" alt="logo"/></a> */}

                    <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul class="navbar-nav nav ml-auto">
                            <li class="nav-item">
                            <Link to='/' class="nav-link active">Home <i data-feather="chevron-down"></i></Link>
                            </li>

                            <li class="nav-item">
                            <Link to='/about-us' class="nav-link">About <i data-feather="chevron-down"></i></Link>
                            </li>

                            <li class="nav-item">
                            <Link to='/' class="nav-link">Our Services <i data-feather="chevron-down"></i></Link>
                                <ul class="dropdown_menu">
                                    <li class="nav-item">
                                    <Link to='/website-development-company' class="nav-link">Website Development <i data-feather="chevron-right"></i></Link>
                                    </li>
                                    <li class="nav-item">
                                    <Link to='/application-development-company' class="nav-link">Application Development <i data-feather="chevron-right"></i></Link>
                                    </li>
                                    <li class="nav-item">
                                    <Link to='/digital-marketing-company' class="nav-link">Digital Marketing <i data-feather="chevron-right"></i></Link>
                                    </li>
                                    <li class="nav-item"> 
                                    <Link to='/ui-ux-designing-company' class="nav-link">Ui/UX Designing <i data-feather="chevron-right"></i></Link>
                                    </li>
                                    <li class="nav-item"> 
                                    <Link to='/graphic-designing-company' class="nav-link">Graphic Designing<i data-feather="chevron-right"></i></Link>
                                    </li>
                                    <li class="nav-item">
                                    <Link to='/data-science-consulting' class="nav-link">Data Science Consulting<i data-feather="chevron-right"></i></Link>
                                     </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                            <Link to='/technologies' class="nav-link">Technologies <i data-feather="chevron-down"></i></Link>
                            </li>


                            <li class="nav-item">
                            <Link to='/blog' class="nav-link">Blog <i data-feather="chevron-down"></i></Link>
                            </li>

                            <li class="nav-item"><Link to='/contact-us' class="nav-link">Contact</Link></li>
                        </ul>
                    </div>

                    <div class="others-option">
                        <Link to='/' class="btn btn-primary">OUR PACKAGES</Link>
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
                <div class="startp-nav">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <a class="navbar-brand black-logo" Link to='/'>
                    <img src="https://veeaarsofttech.com/wp-content/uploads/2024/02/logo-png-veeaar-1.png" alt="logo"/></a>

                    <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul class="navbar-nav nav ml-auto">
                            <li class="nav-item">
                            <Link to='/' class="nav-link active">Home <i data-feather="chevron-down"></i></Link>
                            </li>

                            <li class="nav-item">
                            <Link to='/about-us' class="nav-link">About <i data-feather="chevron-down"></i></Link>
                            </li>

                            <li class="nav-item">
                            <Link to='/' class="nav-link">Our Services <i data-feather="chevron-down"></i></Link>
                                <ul class="dropdown_menu">
                                    <li class="nav-item">
                                    <Link to='/website-development-company' class="nav-link">Website Development <i data-feather="chevron-right"></i></Link>
                                    </li>
                                    <li class="nav-item">
                                    <Link to='/application-development-company' class="nav-link">Application Development <i data-feather="chevron-right"></i></Link>
                                    </li>
                                    <li class="nav-item">
                                    <Link to='/digital-marketing-company' class="nav-link">Digital Marketing <i data-feather="chevron-right"></i></Link>
                                    </li>
                                    <li class="nav-item"> 
                                    <Link to='/ui-ux-designing-company' class="nav-link">Ui/UX Designing <i data-feather="chevron-right"></i></Link>
                                    </li>
                                    <li class="nav-item"> 
                                    <Link to='/graphic-designing-company' class="nav-link">Graphic Designing<i data-feather="chevron-right"></i></Link>
                                    </li>
                                    <li class="nav-item">
                                    <Link to='/data-science-consulting' class="nav-link">Data Science Consulting<i data-feather="chevron-right"></i></Link>
                                     </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                            <Link to='/technologies' class="nav-link">Technologies <i data-feather="chevron-down"></i></Link>
                            </li>


                            <li class="nav-item">
                            <Link to='/blog' class="nav-link">Blog <i data-feather="chevron-down"></i></Link>
                            </li>

                            <li class="nav-item"><Link to='/contact-us' class="nav-link">Contact</Link></li>
                        </ul>
                    </div>

                    <div class="others-option">
                        <Link to='/' class="btn btn-primary">OUR PACKAGES</Link>
                    </div>
                </nav>
            </div>
        </div>

                <div class="container">
                    <div class="option-inner">
                        <div class="others-option">
                            <a href="contact.html" class="btn btn-light">Support</a>
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
