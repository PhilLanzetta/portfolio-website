import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Projects from '../components/projects'
import Seo from "../components/seo"

const ProjectsPage = ({ data: { allStrapiProjects: { nodes: projects } } }) => {
  return <Layout>
    <Seo title="Projects" />
    <section className="projects-page">
      <Projects projects={projects} title="all projects" />
    </section>
  </Layout>
}

export const query = graphql`
  {
   allStrapiProjects {
   nodes {
    slug
    title
   description
        feature {
   id
          title
        }
        id
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

export default ProjectsPage