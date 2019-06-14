import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className="header">
    <div className="header--link">
      <h1>
        <Link to="/">Sweetest Southern Creations</Link>
      </h1>
    </div>
    <nav className="header--nav">
      <div className="header--nav__home">
        <Link to="/">Home</Link>
      </div>
      <div className="header--nav__creations">
        <Link to="/creations/">Creations</Link>
      </div>
      <div className="header--nav__contact">
        <Link to="/contact/">Contact</Link>
      </div>
    </nav>
  </header>
)

export default Header
