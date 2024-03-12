import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Navbar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleNavbar = () => {
      setCollapsed(!collapsed); 
    };
    


    return (
        <div>
    <header id="header" Class="headroom">
        <div Class="startp-nav">
            <div Class="container">
                <nav Class="navbar navbar-expand-md navbar-light">
                <button
                Class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={toggleNavbar}
              >
                <span Class="navbar-toggler-icon"></span>
              </button>
                    <Link Class="navbar-brand black-logo" Link to='/'>
                    <img src="https://veeaarsofttech.com/wp-content/uploads/2024/02/logo-png-veeaar-1.png" alt="logo" 
                         style={{width:"100px", height:"auto"}}/></Link>

                    <div Class={`collapse navbar-collapse mean-menu ${collapsed ? 'show' : ''}`}
                     id="navbarSupportedContent">
                        <div Class="navbar-nav nav ml-auto">
                            <span Class="nav-item">
                            <Link to='/' Class="nav-link active">Home</Link>
                            </span>

                            <span Class="nav-item">
                            <Link to='/about-us' Class="nav-link">About <i data-feather="chevron-down"></i></Link>
                            </span>

                            <span Class="nav-item">
                            <Link to='/our-services' Class="nav-link">Our Services <i data-feather="chevron-down"></i></Link>
                                <ul Class="dropdown_menu">
                                    <li Class="nav-item">
                                    <Link to='/website-development-company' Class="nav-link">Website Development <i data-feather="chevron-right"></i></Link>
                                    </li>
                                    <li Class="nav-item">
                                    <Link to='/application-development-company' Class="nav-link">Application Development <i data-feather="chevron-right"></i></Link>
                                    </li>
                                    <li Class="nav-item">
                                    <Link to='/digital-marketing-company' Class="nav-link">Digital Marketing <i data-feather="chevron-right"></i></Link>
                                    </li>
                                    <li Class="nav-item"> 
                                    <Link to='/ui-ux-designing-company' Class="nav-link">Ui/UX Designing <i data-feather="chevron-right"></i></Link>
                                    </li>
                                    <li Class="nav-item"> 
                                    <Link to='/graphic-designing-company' Class="nav-link">Graphic Designing<i data-feather="chevron-right"></i></Link>
                                    </li>
                                    <li Class="nav-item">
                                    <Link to='/data-science-consulting' Class="nav-link">Data Science Consulting<i data-feather="chevron-right"></i></Link>
                                     </li>
                                </ul>
                            </span>

                            <span Class="nav-item">
                            <Link to='/technologies' Class="nav-link">Technologies <i data-feather="chevron-down"></i></Link>
                            </span>


                            <span Class="nav-item">
                            <Link to='/blog' Class="nav-link">Blog <i data-feather="chevron-down"></i></Link>
                            </span>

                            <span Class="nav-item"><Link to='/contact-us' Class="nav-link">Contact</Link></span>
                            <li Class="others-option">
                        <Link to='/' Class="btn btn-primary">OUR PACKAGES</Link>
                    </li>
                        </div>
                    </div>                    
                </nav>
            </div>
        </div>        
    </header>
        </div>
    )
}

export default Navbar
