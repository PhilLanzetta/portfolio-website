import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import Seo from "../components/seo"
import Blogs from "../components/blogs"
import Services from "../components/services"
import ContactForm from "../components/contactForm"

const IndexPage = ({ data }) => {
  const { allStrapiProjects: { nodes: projects }, allStrapiBlogs: { nodes: blogs } } = data

  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <div className="divider"></div>
      <Services />
      <div className="divider"></div>
      <Projects projects={projects} title="featured project" showLink />
      <div className="divider"></div>
      <Blogs blogs={blogs} title="Latest Articles" showLink />
      <div className="divider"></div>
      <ContactForm />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        id
        description
        title
        slug
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
              )
            }
          }
        }
        feature {
          id
          title
        }
      }
    }
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        description
        date(formatString: "MMM Do, YYYY")
        title
        id
        category
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default IndexPage
