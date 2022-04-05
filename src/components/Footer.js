import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    background: #F1F3F5;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
`
const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
`
const Button = styled.button`
    background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    color: white;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    font-size: 24px;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    a{
        color: white;
    }
    &:hover {
        box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
        transform: translateY(-3px);
    }
`
const LinkGroup = styled.div`
    width: 500px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    a {
        transition: 0.8s;
    }
    a:hover {
        color: black;
    }
`

const Copyright = styled.div`
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
`

function Footer({data, children}) {
  return (
    <FooterGroup>
    <Text>Tweet “Mobile Application process, Introduction to cordova and Ionic. New courses by @pscon”</Text>
  
        
    {/* <Button>  <a href="https://twitter.com/PSCON3">Tweet </a> </Button> */}
    <Button>  <a href="https://www.youtube.com/watch?v=J8beNapZ1co&t=35s" target="_blank">Youtube </a> </Button>
    
    <LinkGroup><a href="https://twitter.com/PSCON3" target="_blank">Twitter</a>
    <a href="https://www.linkedin.com/in/ekunola-paul-42712b1aa/" target="_blank">Linkedin </a>
    <a href="ekunolapaul@gmail.com" target="_blank">Email </a>
    <a href="https://github.com/pscon" target="_blank">Github </a> </LinkGroup>
    <Copyright>{children}</Copyright>
  </FooterGroup>
  )
}

export default Footer