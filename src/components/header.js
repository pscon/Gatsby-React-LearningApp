// import * as React from "react"
import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "../images/logo-designcode.svg"
import "./header.css"

function Header() {

const [scrolled, setScrolled]= useState(false);

//change state on scroll
useEffect(()=>{
  const handleScroll = () =>{
    const isScrollrd = window.scrollY 
if (isScrollrd > 50){
setScrolled(true);
}else{
  setScrolled(false);
}
  };
  window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
}, []);




  return (

    // if it scroll i.e (true) give it classname of headerscrolled of not header 
    <div className={scrolled ? "Header HeaderScrolled" : "Header"}>
      <div className="HeaderGroup">
        <Link to="/">
          <img src={Logo} alt="" width30></img>
        </Link>
        <Link to="/#">Courses</Link>
        <Link to="/#">Downloads</Link>
        <Link to="/#">Workshop</Link>
        <Link to="/#">
          {" "}
          <button>Buy</button>
        </Link>
      </div>
    </div>
  )
}

export default Header
