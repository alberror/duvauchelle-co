import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { generateButtonContent } from "../tools"
import { tagConverter } from "../constants"

const generateStatus = status => {
  if (status === "in_progress") {
    return "en cours"
  } else if (status === "online") {
    return "en ligne"
  } else if (status === "offline") {
    return "hors ligne"
  }
}

const ProjectCard = ({ project }) => (
  <Link to={`/projects/${project.id}`} className="projects-project-card">
    <div className="project-image">
      {project.thumbnail && project.thumbnail.length > 0 ? (
        <img src={project.thumbnail[0].url} alt={project.title} />
      ) : (
        <img src={project.logo.url} alt={project.title} />
      )}
    </div>
    <div className="project-card-right">
      <div className="project-card-right-top">
        <div className="project-content">
          <h2>{project.title}</h2>
          <p>{project.summary}</p>
        </div>
        <div className="project-status">
          <p className={`project-${project.projectStatus}`}>
            {generateStatus(project.projectStatus)}
          </p>
        </div>
      </div>
      <div className="tags-list">
        {project.tagsList.length > 0 &&
          project.tagsList.map((tag, i) => (
            <div key={i} className="tag gray-bg">
              {tagConverter[tag]}
            </div>
          ))}
      </div>
    </div>
  </Link>
)

export default ({ data }) => (
  <Layout color="tomato">
    <div className="projects-page-container tomato-bg">
      <SEO title="Projets"></SEO>
      <h1>Tous les projets</h1>
      <div className="projects-list">
        {data.cms.projects &&
          data.cms.projects.map((project, i) => (
            <div className="center-me">
              <ProjectCard key={i} project={project} />
              <Link to="/contact">
                <button className="link-button cta-button projects-page-button">
                  {generateButtonContent(project.projectType)}
                </button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    cms {
      projects(orderBy: yearMonth_DESC) {
        id
        title
        summary
        projectType
        tagsList
        thumbnail {
          url
        }
        logo {
          url
        }
        projectStatus
      }
    }
  }
`
