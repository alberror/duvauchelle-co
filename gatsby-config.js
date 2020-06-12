module.exports = {
  siteMetadata: {
    title: ` Antoine Duvauchelle • Développeur Freelance Ruby on Rails | React`,
    description: `Réalisez vos projets web front-end ou full-stack en Ruby on Rails et React avec un freelance à Paris.`,
    author: `@alberror`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GraphCMS",
        fieldName: "cms",
        url:
          "https://api-eu-central-1.graphcms.com/v2/ckb9rcmre0b3i01xn2la92dkx/master",
        refetchInterval: 60,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat`, `source sans pro\:100,400,700`],
        display: "swap",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `antoine duvauchelle`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
  ],
}
