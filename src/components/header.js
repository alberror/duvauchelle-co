import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo-small.png"

const Header = ({ color, siteTitle }) => (
  <header className={`${color}-bg`}>
    <Link to="/">
      <img src={logo} alt={siteTitle} />
    </Link>
    <ul className="nav">
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/projects">Portfolio</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      {/*<li>
        <Link to="/blog">Blog</Link>
      </li>*/}
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
