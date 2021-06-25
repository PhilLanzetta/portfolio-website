import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import Fade from "react-reveal/Fade"

const Hero = () => {
 return (
  <header className="hero">
   <div className="section-center hero-center">
    <iframe className="hero-video" src="https://player.vimeo.com/video/567576674" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    <Fade left>
     <article className="hero-info">
      <div>
       <h1>Creative Shopify development, tailored to your needs</h1>
       <p>Whether you're looking for store set-up, migration, customization or implementing the latest cool features, let's talk all things Shopify and achieve your vision together.</p>
       <Link to="/contact" className="btn">let's get started</Link>
       <SocialLinks />
      </div>
     </article>
    </Fade>
   </div>
   
  </header>
 )
}

export default Hero