import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => {
  return (
    <Layout>
      <SEO title="Services" />
      <h1>Our Services</h1>
      <p>
        Magna tempor ipsum commodo amet irure officia irure ipsum magna magna
        cillum minim commodo sit. Pariatur est nostrud ad consectetur
        adipisicing excepteur est occaecat proident id minim reprehenderit
        ullamco. Cillum ex voluptate dolor velit mollit laborum non culpa ad
        laborum. Adipisicing aliquip minim mollit nisi Lorem. Lorem irure in
        nisi ea magna nisi reprehenderit dolor.
      </p>
      <p>
        Amet consectetur id cillum aliquip duis tempor voluptate dolor officia
        nisi laboris commodo. Minim consectetur laborum velit elit labore dolor
        consequat mollit pariatur. Minim labore incididunt eiusmod cillum velit
        eu consectetur labore elit.
      </p>
      {/* <Link to="/">Go back to the homepage</Link> */}
    </Layout>
      
  )
}
export default ServicesPage
