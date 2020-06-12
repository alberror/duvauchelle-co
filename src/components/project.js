import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "./layout"

import { generateButtonContent } from "../tools"
import { tagConverter } from "../constants"

export default ({ data }) => {
  const { project } = data.cms

  return (
    <Layout color="khaki">
      <div className="single-project-page-container khaki-bg">
        <div className="single-project-page-content">
          <h1>{project.title}</h1>
          <div className="single-project-title-block">
            <img src={project.logo.url} alt={project.title} />
            <h2>{project.summary}</h2>
          </div>
          <div className="tags-list single-project-tags-list">
            {project.tagsList.length > 0 &&
              project.tagsList.map((tag, i) => (
                <div key={i} className="tag gray-bg">
                  {tagConverter[tag]}
                </div>
              ))}
          </div>
          <div className="single-project-content-block">
            {project.thumbnail.length > 0 && (
              <img src={project.thumbnail[0].url} alt={project.title} />
            )}
            <div dangerouslySetInnerHTML={{ __html: project.content.html }} />
          </div>
          <Link to="/contact">
            <button className="link-button cta-button">
              {generateButtonContent(project.projectType)}
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($projectId: ID!) {
    cms {
      project(where: { id: $projectId }) {
        title
        summary
        projectType
        tagsList
        logo {
          url
        }
        thumbnail {
          url
        }
        content {
          html
        }
      }
    }
  }
`
