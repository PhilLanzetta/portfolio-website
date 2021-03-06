import React from "react"
import SocialLinks from "../constants/socialLinks"

const Footer = () => {
 return <footer className="footer">
  <div>
   <SocialLinks styleClass="footer-links"></SocialLinks>
   <a href="mailto:phil@philliplanzetta.com">Email: phil@philliplanzetta.com</a>
   <h4>&copy;{new Date().getFullYear()} <span>Phillip Lanzetta</span></h4>
  </div>
 </footer>
}

export default Footer
