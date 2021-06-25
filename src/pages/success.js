import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from 'gatsby'

const SuccessPage = () => (
 <Layout>
  <Seo title="Successful form submission" />
  <main className="error-page">
   <div className="error-container section-center">
    <h1>Success!</h1>
    <p>Thank you for your message. I will be in contact shortly.</p>
    <Link to="/" className="btn">back home</Link>
   </div>
  </main>
 </Layout>
)

export default SuccessPage
