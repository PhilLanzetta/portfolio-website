import React from "react"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare"

const data = [
 {
  id: 1,
  icon: <FaLinkedin className="social-icon"></FaLinkedin>,
  url: "https://twitter.com/phillanzetta",
 },
 {
  id: 2,
  icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
  url: "https://www.linkedin.com/in/phillip-lanzetta",
 },
]

const links = data.map(link => {
 return (
  <li key={link.id}>
   <a href={link.url} className="social-link">
    {link.icon}
   </a>
  </li>
 )
})

export default ({ styleClass }) => {
 return (
  <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
 )
}
