import React from "react"
import Fade from 'react-reveal/Fade'

const TitleHead = ({title}) => {
 return (
   <Fade>
  <div className="section-title">
   <h2>{title || "default title"}</h2>
   <div className="underline"></div>
  </div>
   </Fade>
  )
}

export default TitleHead