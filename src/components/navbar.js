import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "@react-icons/all-files/fa/FaAlignRight"
import { Link } from 'gatsby'
import PageLinks from "../constants/links"

const Navbar = ({ toggleSidebar }) => {
 return (
  <nav className="navbar">
   <div className="nav-center">
    <div className="nav-header">
     <Link to="/" className="nav-logo">
      <img src={logo} alt="logo" />
     </Link>
     <button type="button" className="toggle-btn" onClick={toggleSidebar}>
      <FaAlignRight></FaAlignRight>
     </button>
    </div>
    <PageLinks styleClass="nav-links"></PageLinks>
   </div>
  </nav>
 )
}

export default Navbar
