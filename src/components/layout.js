/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }

    }
  `)

  return (
    <>
      <Header  />
      
        <main>{children}</main>
        <Footer data={data}>
      Backgrounds made in Cinema 4D, iOS app in Swift, site in React. <a href="mailto:ekunolapaul@gmail.com" target="_blank">Email us</a> to ask anything. 
      <br/>
   Designed By: Pscon   ©2022
    </Footer>
     
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
