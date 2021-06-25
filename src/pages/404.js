import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <main className="error-page">
      <div className="error-container">
        <h1>oops, this page doesn't exist</h1>
        <Link to="/" className="btn">back home</Link>
      </div>
    </main>
  </Layout>
)

export default NotFoundPage
