import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import TitleHead from "../components/title"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const About = ({ data: { allStrapiAbout: { nodes }, }, }) => {
 const { title, info, image } = nodes[0];
 return (
 <Layout>
  <Seo title="About Me" />
  <section className="about-page">
   <div className="section-center about-center">
    <GatsbyImage image={image.localFile.childImageSharp.gatsbyImageData} className="about-img" />
    <article className="about-text">
     <TitleHead title={title} />
     <p>{info}</p>
    </article>
   </div>
  </section>
 </Layout>
  )
}

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        id
        title
        info
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: NONE)
            }
          }
        }
      }
    }
  }
`

export default About
