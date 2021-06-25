import React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"

const Blog = ({ id, title, image, date, category, slug, description }) => {
 return <Link to={`/blogs/${slug}`} key={id} className="blog">
  <article>
   <GatsbyImage image={image.localFile.childImageSharp.gatsbyImageData} className="blog-img" />
   <div className="blog-card">
    <h4>{title}</h4>
    <p>{description}</p>
    <div className="blog-footer">
     <p>{category}</p>
     <p>{date}</p>
    </div>
   </div>
  </article>
 </Link>
}

export default Blog