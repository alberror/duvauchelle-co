import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Projets"></SEO>
    {data.cms.projects.map((project, i) => (
      <Link key={i} to={`/projects/${project.id}`}>
        <h2>{project.title}</h2>
        <p>{project.summary}</p>
      </Link>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    cms {
      projects {
        id
        title
        createdAt
        summary
      }
    }
  }
`
