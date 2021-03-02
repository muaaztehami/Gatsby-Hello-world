import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About Us</h1>
      <p>
        Magna tempor ipsum commodo amet irure officia irure ipsum magna magna
        cillum minim commodo sit. Pariatur est nostrud ad consectetur
        adipisicing excepteur est occaecat proident id minim reprehenderit
        ullamco. Cillum ex voluptate dolor velit mollit laborum non culpa ad
        laborum. Adipisicing aliquip minim mollit nisi Lorem. Lorem irure in
        nisi ea magna nisi reprehenderit dolor.
      </p>
      {/* <Link to="/">Go back to the homepage</Link> */}
    </Layout>
  )
}
export default AboutPage
