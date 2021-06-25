import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

const Project = ({ description, title, feature, image, id, slug }) => {
  return (
    <Link to={`/projects/${slug}`} key={id} className="project-link">
      <article className="project">
        <GatsbyImage image={image.localFile.childImageSharp.gatsbyImageData} alt={`${title} image`} className="project-img" />
        <div className="project-info">
          <h3>{title}</h3>
          <p className="project-desc">{description}</p>
          <div className="project-stack">
            {feature.map((item) => {
              return <span key={item.id}>{item.title}</span>
            })}
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Project
