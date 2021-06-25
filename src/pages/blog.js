import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Blogs from "../components/blogs"
import Seo from "../components/seo"

const Blog = ({ data: { allStrapiBlogs: { nodes: blogs } } }) => {
 return <Layout>
   <Seo title="Blog" />
  <section className="blog-page">
   <Blogs blogs={blogs} title="blog" />
  </section>
 </Layout>
}

export const query = graphql`
  {
    allStrapiBlogs {
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

export default Blog
