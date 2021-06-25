import React from "react"
import TitleHead from "./title"
import Project from "./Project"
import { Link } from "gatsby"

const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section">
        <TitleHead title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">more projects</Link>
      )}
    </section>
  )
}

export default Projects
