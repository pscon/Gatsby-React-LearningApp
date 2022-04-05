import * as React from "react"
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Card from "../components/Card";
import Section from "../components/Section";
import Wave from "../components/Wave";
import staticdata from "../staticdata.json";
import Cell from "../components/Cell";
import styled from "styled-components";
import Footer from "../components/Footer";


const SectionCaption = styled.p`
font-weight: 600;
font-size: 18px;
text-transform: uppercase;
text-align: center;
color: #94A4BA;
`

const SectionCellGroup = styled.div`
max-width: 800px;
margin: 0 auto 100px;
padding: 0 20px;
display: grid;
grid-template-columns: repeat(2, 1fr);
column-gap: 80px;


@media (max-width: 800px) {
  grid-template-columns: repeat(1, 1fr);

}
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Learn to
          <br />
          design and code React Apps
        </h1>
        <p>
          Complete courses about the best tool and design systems. Prototypes
          and build apps with React{" "}
        </p>
        <p>

          <Link>  <a href="https://www.youtube.com/watch?v=tA4T9cvxY5o" target="_blank">watch video</a> </Link> <br />
          {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
          {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link> */}
        </p>

        <div className="Logos">
          <img
            src={require("../images/logo-sketch.png").default}
            alt="logos"
            width="50"
          />
          <img
            src={require("../images/logo-figma.png").default}
            alt="logos"
            width="50"
          />
          <img
            src={require("../images/logo-xcode.png").default}
            alt="logos"
            width="50"
          />
          <img
            src={require("../images/logo-framer.png").default}
            alt="logos"
            width="50"
          />
          <img
            src={require("../images/logo-react.png").default}
            alt="logos"
            width="50"
          />
          <img
            src={require("../images/logo-swift.png").default}
            alt="logos"
            width="50"
          />
        </div>

        <Wave />
      </div>
    </div>

    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <div className="cardGroup">
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("../images/wallpaper.jpg").default}
        />
        <Card
          title="Design systems"
          text="10 sections"
          image={require("../images/wallpaper2.jpg").default}
        />
        <Card
          title="Sound Design"
          text="7 sections"
          image={require("../images/wallpaper3.jpg").default}
        />
        <Card
          title="Designs for Beginners"
          text="12 sections"
          image={require("../images/wallpaper4.jpg").default}
        />
      </div>
    </div>

    <Section
      image={require("../images/wallpaper2.jpg").default}
      logo={require("../images/logo-react.png").default}
      title="React For Designers"
      text="Learn how to build modern site using React amd the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with contentful and deploying your site online with Netlify"
    />
<SectionCaption> 12 sections - 6 hours</SectionCaption>
<SectionCellGroup>

{staticdata.cells.map(cell => (
        <Cell 
          title={cell.title}
          image={cell.image} />
      ))}

</SectionCellGroup>



  </Layout>
)

export default IndexPage
