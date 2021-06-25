import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"
import Seo from "../components/seo"

const ComponentName = ({ data }) => {
 const { content, title } = data.blog
 return <Layout>
   <Seo title={title} />
  <section className="blog-template">
   <div className="section-center">
    <article className="blog-content">
     <ReactMarkdown>{content}</ReactMarkdown>
    </article>
    <Link to="/blog" className="btn center-btn">back to blog</Link>
   </div>
  </section>
 </Layout>
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title

    }
  }
`

export default ComponentName
