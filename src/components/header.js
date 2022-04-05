// import * as React from "react"
import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "../images/logo-designcode.svg"
import "./header.css"
import StripeCheckout from 'react-stripe-checkout'



function Header() {

const [scrolled, setScrolled]= useState(false);
const [amount, setAmount]= useState("");
const [description, setDescription]= useState("");


const handlePurchase = (token) => {
  const amount = 5000
  const description = "My awesome product"

  const bodyObject = {
    tokenId: token.id,
    email: token.email,
    name: token.name,
    description,
    amount
  }

  fetch('http://localhost:9000/stripe-charge', {
    method: 'POST',
    body: JSON.stringify(bodyObject)
  })
}

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


// handlePurchase = (token) =>{

// }

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
        <StripeCheckout
            amount={ 5000 }
            image="https://cl.ly/0K2f1V3K3h0D/download/Logo.jpg"
            token={handlePurchase}
            stripeKey={'pk_test_51KlAbaFxGdSEpmZHoU9tIz812iDtxAYuGOvYaEd3BahrWf8cHvwZiYG5BGzTfkjMY4pcI03UiB86iVEekMdtHmho00A8G99ITn'}
            >
            <button>Buy</button>
          </StripeCheckout>
      </div>
    </div>
  )
}

export default Header
