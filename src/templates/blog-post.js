import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({data}) {
  const post = data.markdownRemark

  return(
    <Layout>
      <SEO title="Page two" />
      <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }}/>
      <Link to="/blogs">Go Back</Link>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }){
      html
      frontmatter {
        title
        author
        date
      }
    }
  }
`