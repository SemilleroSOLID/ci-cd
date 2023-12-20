import * as React from "react"
import { Link } from "gatsby"
import logo from "../.././assets/img/Logo_de_la_Universidad_de_Caldas.svg.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      volver al menú
    </Link>
    <img
      src={logo}
      alt="Gatsby logo"
      height={80}
      style={{ margin: 0 }}
    />
  </header>
)

export default Header
