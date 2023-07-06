import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Service from './Components/Service/Service'
import Solution from './Components/Solution/Solution'
import Team from './Components/Team/Team'
import Resources from './Components/Resources/Resources'
import Contact from './Components/Contact/Contact'
//import Footer from './Components/Footer/Footer'
import NavbarMobileView from './Components/Navbar/NavbarMobileView'
import ScrollToTop from "react-scroll-to-top";
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <>
      <Navbar/>
      <NavbarMobileView/> 
      <Home/>
      <About/>
      <Service/>
      <Solution/>
      <Team/>
      <Resources/>
      <Contact/>
      <Footer/>
      <ScrollToTop
      smooth
      color="white"
      height="20"
      width="20"
      style={{ borderRadius: "90px", backgroundColor: "#38004c" }}
    />
    </>
  )
}

export default App