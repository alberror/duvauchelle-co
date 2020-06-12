/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
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
  `)

  data.cms.projects.forEach(({ id }) => {
    actions.createPage({
      path: `/projects/${id}`,
      component: path.resolve(`./src/components/project.js`),
      context: {
        projectId: id,
      },
    })
  })
}
