import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ComponentName = ({ data }) => {
  const { title, videoLink, description, feature } = data.project
  return <Layout>
    <Seo title={title} />
    <section className="blog-template">
      <div className="section-center">
        <article className="blog-content">
          <h1>{title}</h1>
          <p className="project-subtitle">{description}</p>
          <iframe className="project-video" src={videoLink} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title={`${title}.mp4`}></iframe>
          <h2><span role="img" aria-label="pointing up">☝️</span> Watch the walkthrough video to learn More</h2>
          <div className="project-stack">
            {feature.map((item) => {
              return <span key={item.id}>{item.title}</span>
            })}
          </div>
        </article>
        <Link to="/projects" className="btn center-btn">back to projects</Link>
      </div>
    </section>
  </Layout>
}

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: strapiProjects(slug: { eq: $slug }) {
      title
      description
      videoLink
      feature {
        title
        id
      }

    }
  }
`

export default ComponentName
