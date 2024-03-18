import React from 'react'
import Navbar from '../Header/Navbar'
import FrontPage from '../FrontPage.js/FrontPage'
import Footer from '../Footer/Footer'
import "./HomePage.css"
import { motion , useSpring } from "framer-motion";
import { useScroll } from "framer-motion"


const HomePage = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)

  return (
    <>
    <motion.div style={{ scaleX }} />
      <Navbar/>
      <FrontPage />
      <Footer />
          
      </>
  );
}

export default HomePage;


