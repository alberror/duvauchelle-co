import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const tags = [
  "front-end",
  "full-stack",
  "responsive",
  "seo",
  "business-driven development",
  "product design",
  "prototypage",
  "stratégie produit",
  "stratégie de lancement",
]

const showCaption = e => {
  if (
    e.currentTarget.classList.value.split(" ").includes("first-project-card")
  ) {
    document.querySelector(".first-project-card p").classList.toggle("hidden")
  } else {
    let cardNumber = e.currentTarget.classList.value.split(" ")
    cardNumber = cardNumber[cardNumber.length - 1]
    document.querySelector(`.${cardNumber} p`).classList.toggle("hidden")
  }
}

const ProjectCard = ({ project, classname }) => (
  <Link
    to={`/projects/${project.id}`}
    className={`home-project-card ${classname}`}
    onMouseOver={showCaption}
    onFocus={showCaption}
    onMouseOut={showCaption}
    onBlur={showCaption}
  >
    <img src={project.thumbnail[0].url} alt={project.title} />
    <p className="hidden">{project.title}</p>
  </Link>
)

const renderFirstProjectCard = project => (
  <ProjectCard project={project} classname="first-project-card" />
)

const renderOtherProjectCards = projects => (
  <div className="small-projects-list">
    {projects.map((project, i) => (
      <ProjectCard
        key={i}
        project={project}
        classname={`home-project-card home-project-card-${i}`}
      />
    ))}
  </div>
)

const IndexPage = ({ data }) => (
  <Layout color="aquamarine">
    <SEO title="Accueil" />
    <div id="header" className="section aquamarine-bg">
      <div className="section-content">
        <img
          src="/icons/avatar-antoine.png"
          className="home-avatar"
          alt="Antoine Duvauchelle"
        />
        <h1>Antoine Duvauchelle</h1>
        <h2>
          Stratégie produit & Développeur Ruby on Rails • React.js Freelance à
          Paris
        </h2>
        <div className="tags-list home-tags-list">
          {tags.map(tag => (
            <div className="tag gray-bg">{tag}</div>
          ))}
        </div>
        <div className="home-profile-content">
          <p>
            Je vous accompagne dans la conception, le prototypage, le product
            management et le développement de leur site web ou application.
          </p>
          <p>
            Je soutiens des entrepreneurs depuis plus de cinq ans, dans leur
            stratégie de lancement comme dans la conception et le développement
            technique de leur projet.
          </p>
          <p>
            Je vous aide aussi à concevoir votre projet web, le prototyper avec
            Figma, Zeplin ou autre, faire les choix technologiques les plus
            pertinents pour votre business et mettre en place votre framework de
            product management.
          </p>
          <p>
            <strong>
              Technologies utilisées : HTML5 / CSS3, Javascript ES6, Ruby on
              Rails, Svelte.js / Sapper.js, React.js / Next.js / Gatsby, Vue.js
              / Nuxt.js, Bootstrap, MaterializeCSS, Sass / SCSS, selon le
              projet.
            </strong>
          </p>

          <p>
            Ce ne sont que des outils au service de votre projet, je suis prêt à
            en utiliser d’autres si cela correspond mieux à votre besoin.
          </p>
        </div>
        <Link to="contact">
          <button className="link-button cta-button">Contactez-moi</button>
        </Link>
        <div className="home-profile-options">
          <div>Développeur freelance</div>
          <div>Paris</div>
          <div>Ouvert aux opportunités</div>
        </div>
      </div>
    </div>
    <div id="projects" className="section tomato-bg">
      <div className="section-content projects-content">
        <h2>Derniers projets</h2>
        {renderFirstProjectCard(
          data.cms.projects.filter(
            project => project.firstProjectCard === true
          )[0]
        )}
        {renderOtherProjectCards(
          data.cms.projects.filter(
            project =>
              project.homePage === true && project.firstProjectCard === false
          )
        )}
        <Link to="/projects">
          <button className="link-button aquamarine-bg">
            Tous les projets
          </button>
        </Link>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    cms {
      projects {
        id
        title
        summary
        firstProjectCard
        thumbnail {
          url
        }
        homePage
      }
    }
  }
`

export default IndexPage
